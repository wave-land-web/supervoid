import { getCollection } from 'astro:content'
import type { APIRoute } from 'astro'
import { EMAIL, SITE_DESCRIPTION } from '../lib/site'
import { sortPressNewestFirst } from '../lib/sortPress'
import { getAlphabetizedWorkByYear, getWorkYearsDescending } from '../lib/sortWork'
import { toMetaDescription } from '../lib/text'

/**
 * /llms.txt: a plain-text map of the site for AI answer engines (llmstxt.org),
 * built from the content collections so it never drifts from the pages.
 */
export const GET: APIRoute = async ({ site }) => {
  const url = (path: string) => new URL(path, site).href

  const work = await getCollection('work')
  const caseStudies = getWorkYearsDescending(work).flatMap((year) =>
    getAlphabetizedWorkByYear({ allWork: work, year }),
  )
  const press = sortPressNewestFirst(await getCollection('press'))

  const lines = [
    '# SUPERVOID',
    '',
    `> ${SITE_DESCRIPTION}`,
    '',
    'Based in Philadelphia, PA.',
    '',
    `Contact: ${EMAIL}`,
    '',
    '## Pages',
    '',
    `- [Work](${url('/')}): every case study, newest first`,
    `- [About](${url('/about/')}): the studio, its services and its team`,
    `- [Rentals](${url('/rentals/')}): SVX series media servers and grandMA3 consoles for tours`,
    `- [Press](${url('/press/')}): press coverage of SUPERVOID's shows`,
    `- [Jobs](${url('/jobs/')}): open roles`,
    `- [Contact](${url('/contact/')}): project inquiries`,
    '',
    '## Case studies',
    '',
    ...caseStudies.map((entry) => {
      const summary = toMetaDescription(entry.data.info.join(' '), 400)
      const credits = entry.data.credits?.map(({ role, names }) => `${role}: ${names}`).join('; ')
      return `- [${entry.data.title} (${entry.data.year})](${url(`/work/${entry.id}/`)}): ${summary}${credits ? ` Credits: ${credits}.` : ''}`
    }),
    '',
    '## Press',
    '',
    ...press.map(
      (post) => `- [${post.data.title}](${url(`/press/${post.id}/`)}): ${post.data.description}`,
    ),
    '',
  ]

  return new Response(lines.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  })
}
