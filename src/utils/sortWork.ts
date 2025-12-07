import type { CollectionEntry } from 'astro:content'

export interface SortedWork {
  allWork: (CollectionEntry<'work'> | CollectionEntry<'lighting'>)[]
  year: string
}

/**
 * Helper function to filter and sort work by year and alphabetically
 */
export function getAlphabetizedWorkByYear({
  allWork,
  year,
}: SortedWork): (CollectionEntry<'work'> | CollectionEntry<'lighting'>)[] {
  return allWork
    .filter((work) => work.data.year === year)
    .sort((a, b) => a.data.title.localeCompare(b.data.title))
}
