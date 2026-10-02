import { getImage } from 'astro:assets'
import type { ImageMetadata } from 'astro'

export interface SocialImage {
  src: string
  width: number
  height: number
}

/**
 * A 1200×630 JPG cropped from `src`: the size link previews expect. `layout: 'none'` makes just
 * that one file, not a responsive set no page would use.
 */
export async function socialImageFrom(src: ImageMetadata): Promise<SocialImage> {
  const image = await getImage({
    src,
    width: 1200,
    height: 630,
    fit: 'cover',
    format: 'jpg',
    layout: 'none',
  })
  return { src: image.src, width: 1200, height: 630 }
}
