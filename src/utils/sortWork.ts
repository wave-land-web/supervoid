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

/**
 * Collect every year present in the content, newest first.
 *
 * Derived from the collection rather than hardcoded so that adding a new year
 * needs no code change, and an entry can never silently drop off the site.
 */
export function getWorkYearsDescending(
  allWork: (CollectionEntry<'work'> | CollectionEntry<'lighting'>)[],
): string[] {
  return [...new Set(allWork.map((work) => work.data.year))].sort((a, b) => b.localeCompare(a))
}
