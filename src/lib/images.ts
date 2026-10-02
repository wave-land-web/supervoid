/**
 * `sizes` for media in the two-column grids (homepage work, press, work
 * galleries): half of the padded container from `md` up, full width below.
 * Keeps the browser from fetching full-viewport images for half-width cards.
 */
export const TWO_COLUMN_SIZES =
  '(min-width: 768px) calc((min(100vw, 1536px) - 104px) / 2), calc(100vw - 32px)'
