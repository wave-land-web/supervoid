/**
 * Turn content-authored HTML into a plain-text meta description.
 *
 * `info` and `credits` entries are rendered with `set:html`, so authors write
 * markup in them. Piping that straight into <meta name="description"> emits raw
 * tags into search results and social previews, so strip the tags and truncate
 * to a length search engines will actually display.
 */
export function toMetaDescription(html: string | undefined, maxLength = 155): string {
  if (!html) return ''

  const text = html
    .replace(/<[^>]*>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, ' ')
    // Stripping an inline tag before punctuation leaves "Tour ." — close it up
    .replace(/\s+([,.;:!?])/g, '$1')
    .trim()

  if (text.length <= maxLength) return text

  // Truncate on a word boundary so the description doesn't end mid-word
  const truncated = text.slice(0, maxLength)
  const lastSpace = truncated.lastIndexOf(' ')

  return `${(lastSpace > 0 ? truncated.slice(0, lastSpace) : truncated).replace(/[,;:.\s]+$/, '')}…`
}
