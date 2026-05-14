import mdx from '@astrojs/mdx'
import netlify from '@astrojs/netlify'
import partytown from '@astrojs/partytown'
import sitemap from '@astrojs/sitemap'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig, fontProviders } from 'astro/config'
import icon from 'astro-icon'

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
      filter: (page) =>
        page !== 'https://www.supervoid.tv/404' && page !== 'https://www.supervoid.tv/success',
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
  fonts: [
    {
      provider: fontProviders.local(),
      name: 'Rotonto Regular',
      cssVariable: '--font-header',
      options: {
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
    },
    {
      provider: fontProviders.local(),
      name: 'SF Mono Regular',
      cssVariable: '--font-body',
      options: {
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
    },
  ],
})
