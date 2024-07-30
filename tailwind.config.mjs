import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        header: ['SF Mono Regular', ...defaultTheme.fontFamily.serif],
        body: ['Rotonto Regular', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}
