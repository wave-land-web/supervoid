// Contact details and profiles used across the site. Change them here, not in components.
export const EMAIL = 'info@supervoid.tv'
export const INSTAGRAM_URL = 'https://www.instagram.com/supervoidtv/'

/** A mailto: link to EMAIL, with the subject encoded for the URL. */
export function mailto(subject?: string): string {
  return subject ? `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}` : `mailto:${EMAIL}`
}
