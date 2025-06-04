import mdx from '@astrojs/mdx'
import netlify from '@astrojs/netlify'
import partytown from '@astrojs/partytown'
import sitemap from '@astrojs/sitemap'
import tailwindcss from '@tailwindcss/vite'
import icon from 'astro-icon'
import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  site: 'https://www.supervoid.tv',
  prefetch: {
    prefetchAll: true,
  },
  integrations: [
    icon(),
    sitemap({
      lastmod: new Date(),
    }),
    mdx(),
    partytown(),
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
  },
  experimental: {
    // SEE: https://docs.astro.build/en/reference/experimental-flags/fonts/#local-font-variants
    fonts: [
      {
        provider: 'local',
        name: 'Rotonto Regular',
        cssVariable: '--font-header',
        variants: [
          {
            src: [
              './src/assets/fonts/rotonto-regular.woff2',
              './src/assets/fonts/rotonto-regular.woff',
            ],
            weight: '400',
            style: 'normal',
            display: 'block',
          },
        ],
      },
      {
        provider: 'local',
        name: 'SF Mono Regular',
        cssVariable: '--font-body',
        variants: [
          {
            src: [
              './src/assets/fonts/sf-mono-regular.woff2',
              './src/assets/fonts/sf-mono-regular.woff',
            ],
            weight: '400',
            style: 'normal',
            display: 'block',
          },
        ],
      },
    ],
  },
})
