import { defineCollection } from 'astro:content'
import { glob } from 'astro/loaders'
import { z } from 'astro/zod'

const workCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/work' }),
  schema: ({ image }) =>
    z.object({
      id: z.number(),
      title: z.string(),
      year: z.string(),
      info: z.array(z.string()),
      // Who did what on the show, in display order. `role` takes no trailing colon.
      credits: z.array(z.object({ role: z.string(), names: z.string() })).optional(),
      thumbnail: image().optional(),
      gifs: z.object({
        videoHero: z.string().optional(),
        imageHero: image().optional(),
        gallery: z.array(z.string()).optional(),
      }),
      images: z.array(image()).optional(),
    }),
})

const pressCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/press' }),
  schema: ({ image }) =>
    z.object({
      id: z.string(),
      title: z.string(),
      description: z.string(),
      published: z.coerce.date(),
      image: image(),
      imageAlt: z.string(),
    }),
})

const lightingCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/lighting' }),
  schema: ({ image }) =>
    z.object({
      id: z.number(),
      title: z.string(),
      year: z.string(),
      youtubeId: z.string(),
      poster: image(),
    }),
})

export const collections = {
  work: workCollection,
  press: pressCollection,
  lighting: lightingCollection,
}
