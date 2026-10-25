import type { CollectionEntry } from 'astro:content'

/**
 * Press posts newest first by publish date (the higher id wins a tie): the
 * order of the press index and of each post's Previous/Next links.
 */
export function sortPressNewestFirst(
  posts: CollectionEntry<'press'>[],
): CollectionEntry<'press'>[] {
  return [...posts].sort(
    (a, b) => b.data.published.valueOf() - a.data.published.valueOf() || +b.data.id - +a.data.id,
  )
}
