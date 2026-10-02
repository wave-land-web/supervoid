// Contact details and profiles used across the site. Change them here, not in components.
export const EMAIL = 'info@supervoid.tv'
export const INSTAGRAM_URL = 'https://www.instagram.com/supervoidtv/'

/** The site's default meta description, also used for the Organization structured data. */
export const SITE_DESCRIPTION =
  'SUPERVOID is a creative and technical design studio specializing in screen visuals, lighting, lasers, scenic design and custom control setups for touring artists.'

/** A mailto: link to EMAIL, with the subject encoded for the URL. */
export function mailto(subject?: string): string {
  return subject ? `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}` : `mailto:${EMAIL}`
}
