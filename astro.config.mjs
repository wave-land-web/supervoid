import netlify from '@astrojs/netlify'
import sitemap from '@astrojs/sitemap'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig, fontProviders } from 'astro/config'
import icon from 'astro-icon'

// https://astro.build/config
export default defineConfig({
  // The bare domain is what Netlify serves; www 301s to it
  site: 'https://supervoid.tv',
  image: {
    layout: 'constrained',
  },
  prefetch: {
    prefetchAll: true,
  },
  integrations: [
    icon({
      // Keep each icon's own ids. SVGO's default renames them to "a", "b"… so two
      // icons on one page can end up sharing an id and clipping each other.
      svgoOptions: {
        plugins: [{ name: 'preset-default', params: { overrides: { cleanupIds: false } } }],
      },
    }),
    sitemap({
      // Utility pages carry noindex, so leave them out. Compare pathnames: Astro's
      // canonical URLs end in a slash. (No `lastmod`: stamping every URL with the
      // build time tells crawlers nothing, so they learn to ignore it.)
      filter: (page) => !['/404/', '/success/', '/reel/'].includes(new URL(page).pathname),
    }),
  ],
  adapter: netlify({
    imageCDN: false,
    cacheOnDemandPages: true,
  }),
  devToolbar: {
    enabled: true,
  },
  vite: {
    plugins: [tailwindcss()],
    // Pre-bundle the Mux player when the dev server starts. Found later, Vite re-bundles it
    // mid-session and answers the open page with "504 Outdated Optimize Dep", so work-page
    // videos never load in dev.
    optimizeDeps: {
      include: ['@mux/mux-video'],
    },
  },
  fonts: [
    {
      provider: fontProviders.local(),
      name: 'Rotonto Regular',
      cssVariable: '--font-rotonto',
      options: {
        variants: [
          {
            src: [
              './src/assets/fonts/rotonto-regular.woff2',
              './src/assets/fonts/rotonto-regular.woff',
            ],
            weight: '400',
            style: 'normal',
            display: 'swap',
          },
        ],
      },
    },
    {
      provider: fontProviders.local(),
      name: 'SF Mono Regular',
      cssVariable: '--font-sf-mono',
      // A monospace fallback, metric-matched by Astro, so text that renders
      // before the font arrives already has the right widths
      fallbacks: ['monospace'],
      options: {
        variants: [
          {
            src: [
              './src/assets/fonts/sf-mono-regular.woff2',
              './src/assets/fonts/sf-mono-regular.woff',
            ],
            weight: '400',
            style: 'normal',
            display: 'swap',
          },
        ],
      },
    },
  ],
})
