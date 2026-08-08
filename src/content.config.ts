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
      credits: z.array(z.string()).optional(),
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
  loader: glob({ pattern: '**/*.mdx', base: './src/content/press' }),
  schema: ({ image }) =>
    z.object({
      id: z.string(),
      title: z.string(),
      description: z.string(),
      published: z.string(),
      image: image(),
      imageAlt: z.string(),
      socialImage: z.string(),
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
