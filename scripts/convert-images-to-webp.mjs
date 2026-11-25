#!/usr/bin/env node
// Converts every JPEG/PNG/AVIF in public/ to WebP, deletes the originals, and
// rewrites references to them in src/ and index.html.
//
//   npm run images:webp
//
// Dimensions are kept; only the encoding changes. Safe to re-run: files that are
// already WebP are left alone.

import { readdir, readFile, stat, unlink, writeFile } from 'node:fs/promises'
import { extname, join, relative, sep } from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const root = fileURLToPath(new URL('..', import.meta.url))
const publicDir = join(root, 'public')
const SOURCE_EXT = new Set(['.jpg', '.jpeg', '.png', '.avif'])
const QUALITY = 85

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name)
    if (entry.isDirectory()) yield* walk(full)
    else yield full
  }
}

const toUrl = (file) => '/' + relative(publicDir, file).split(sep).join('/')

let before = 0
let after = 0
let converted = 0
const failed = []

for await (const file of walk(publicDir)) {
  const ext = extname(file).toLowerCase()
  if (!SOURCE_EXT.has(ext)) continue
  const target = file.slice(0, -ext.length) + '.webp'
  try {
    await sharp(file).webp({ quality: QUALITY, alphaQuality: 100, effort: 5 }).toFile(target)
  } catch (error) {
    failed.push(`${toUrl(file)}: ${error.message.split('\n')[0]}`)
    continue
  }
  before += (await stat(file)).size
  after += (await stat(target)).size
  await unlink(file)
  converted += 1
}

// Every WebP whose JPEG/PNG/AVIF original no longer exists is a rename to apply.
// Worked out from disk, so an interrupted run can simply be re-run.
const renames = new Map() // "/assets/a.jpg" -> "/assets/a.webp"
const exists = (path) => stat(path).then(() => true, () => false)
for await (const file of walk(publicDir)) {
  if (extname(file).toLowerCase() !== '.webp') continue
  const base = file.slice(0, -'.webp'.length)
  for (const ext of [...SOURCE_EXT, '.JPG', '.JPEG', '.PNG']) {
    if (!(await exists(base + ext))) renames.set(toUrl(base + ext), toUrl(file))
  }
}

// Rewrite references (plain and URL-encoded forms).
const textFiles = [join(root, 'index.html')]
for await (const file of walk(join(root, 'src'))) {
  if (/\.(jsx?|css|json|html)$/.test(file)) textFiles.push(file)
}

let updated = 0
for (const file of textFiles) {
  const original = await readFile(file, 'utf8')
  let text = original
  for (const [from, to] of renames) {
    text = text.split(from).join(to).split(encodeURI(from)).join(encodeURI(to))
  }
  if (text !== original) {
    await writeFile(file, text)
    updated += 1
  }
}

const mb = (n) => (n / 1024 / 1024).toFixed(1)
console.log(`Converted ${converted} images: ${mb(before)} MB -> ${mb(after)} MB. Updated ${updated} source files.`)
if (failed.length) {
  console.warn(`Could not convert ${failed.length} file(s); originals kept:`)
  for (const line of failed) console.warn(`  ${line}`)
  process.exitCode = 1
}
