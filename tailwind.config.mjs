import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        header: ['Rotonto Regular', ...defaultTheme.fontFamily.serif],
        body: ['SF Mono Regular', ...defaultTheme.fontFamily.sans],
      },
    },
    fontSize: {
      xs: ['var(--fs-xs)', { lineHeight: 'var(--line-height)' }],
      base: ['var(--fs-base)', { lineHeight: 'var(--line-height)' }],
      sm: ['var(--fs-s)', { lineHeight: 'var(--line-height)' }],
      m: ['var(--fs-m)', { lineHeight: 'var(--line-height)' }],
      l: ['var(--fs-l)', { lineHeight: 'var(--line-height)' }],
      xl: ['var(--fs-xl)', { lineHeight: 'var(--line-height)' }],
      '2xl': ['var(--fs-xxl)', { lineHeight: 'var(--line-height)' }],
      '3xl': ['var(--fs-xxxl)', { lineHeight: 'var(--line-height)' }],
      '4xl': ['var(--fs-xxxxl)', { lineHeight: 'var(--line-height)' }],
      '5xl': ['var(--fs-xxxxxl)', { lineHeight: 'var(--line-height)' }],
      '6xl': ['var(--fs-xxxxxxl)', { lineHeight: 'var(--line-height)' }],
      '7xl': ['var(--fs-xxxxxxxl)', { lineHeight: 'var(--line-height)' }],
      '8xl': ['var(--fs-xxxxxxxxl)', { lineHeight: 'var(--line-height)' }],
      '9xl': ['var(--fs-xxxxxxxxxl)', { lineHeight: 'var(--line-height)' }],
    },
    colors: {
      white: 'var(--color-white)',
      black: 'var(--color-black)',
      magenta: {
        900: 'var(--color-magenta-900)',
        500: 'var(--color-magenta-500)',
        100: 'var(--color-magenta-100)',
      },
    },
  },
}
