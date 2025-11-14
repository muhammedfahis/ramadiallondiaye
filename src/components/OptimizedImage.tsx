import { memo } from 'react'

type OptimizedImageProps = {
  srcBase: string
  alt: string
  sizes: string
  className?: string
  priority?: boolean
  width?: number
  height?: number
  /** Array of numeric widths corresponding to generated assets */
  widths?: number[]
  /** Fallback image extension for the base asset */
  fallbackExtension?: 'jpg' | 'jpeg' | 'png'
}

const buildSrcSet = (base: string, extension: string, widths: number[]) =>
  widths.map((size) => `${base}-${size}.${extension} ${size}w`).join(', ')

const OptimizedImage = memo<OptimizedImageProps>(
  ({
    srcBase,
    alt,
    sizes,
    className,
    priority = false,
    width,
    height,
    widths = [480, 720, 960],
    fallbackExtension = 'jpg',
  }) => {
    const largestWidth = Math.max(...widths)
    const avifSrcSet = buildSrcSet(srcBase, 'avif', widths)
    const webpSrcSet = buildSrcSet(srcBase, 'webp', widths)
    const fallbackSrcSet = buildSrcSet(srcBase, fallbackExtension, widths)

    return (
      <picture>
        <source srcSet={avifSrcSet} type="image/avif" sizes={sizes} />
        <source srcSet={webpSrcSet} type="image/webp" sizes={sizes} />
        <img
          className={className}
          src={`${srcBase}-${largestWidth}.${fallbackExtension}`}
          srcSet={fallbackSrcSet}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          decoding={priority ? 'sync' : 'async'}
          sizes={sizes}
          width={width}
          height={height}
        />
      </picture>
    )
  },
)

OptimizedImage.displayName = 'OptimizedImage'

export default OptimizedImage
