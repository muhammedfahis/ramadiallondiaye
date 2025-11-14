#!/usr/bin/env node
// Utility script to produce optimized AVIF, WebP, and JPEG variants.
// Example:
//   node scripts/generate-images.js --src src/assets/hero/hero-main.jpg --out public/images --widths 480,960,1440

import { mkdir, stat } from 'fs/promises'
import path from 'path'
import process from 'process'
import sharp from 'sharp'

const parseArgs = () => {
  const args = process.argv.slice(2)
  const options = { src: '', out: '', widths: [640, 960, 1440] }

  for (let i = 0; i < args.length; i += 1) {
    const arg = args[i]
    if (arg === '--src') {
      options.src = args[i + 1]
      i += 1
    } else if (arg === '--out') {
      options.out = args[i + 1]
      i += 1
    } else if (arg === '--widths') {
      options.widths = args[i + 1]
        .split(',')
        .map((value) => parseInt(value.trim(), 10))
        .filter((value) => !Number.isNaN(value))
      i += 1
    }
  }

  if (!options.src || !options.out) {
    console.error('Usage: node scripts/generate-images.js --src <sourceFile> --out <outputDir> [--widths 480,960,1200]')
    process.exit(1)
  }

  return options
}

const ensureDirectory = async (directory) => {
  try {
    const stats = await stat(directory)
    if (!stats.isDirectory()) {
      throw new Error(`${directory} exists but is not a directory`)
    }
  } catch (error) {
    if (error.code === 'ENOENT') {
      await mkdir(directory, { recursive: true })
    } else {
      throw error
    }
  }
}

const main = async () => {
  const { src, out, widths } = parseArgs()
  await ensureDirectory(out)

  const basename = path.basename(src, path.extname(src))

  await Promise.all(
    widths.map(async (width) => {
      const pipeline = sharp(src).resize({ width, withoutEnlargement: true })

      await Promise.all([
        pipeline.clone().avif({ quality: 60 }).toFile(path.join(out, `${basename}-${width}.avif`)),
        pipeline.clone().webp({ quality: 70 }).toFile(path.join(out, `${basename}-${width}.webp`)),
        pipeline.clone().jpeg({ quality: 82, progressive: true }).toFile(path.join(out, `${basename}-${width}.jpg`)),
      ])
    }),
  )

  console.log(`Generated variants for ${src} at widths: ${widths.join(', ')}`)
}

main().catch((error) => {
  console.error('Failed to generate images:', error)
  process.exit(1)
})
