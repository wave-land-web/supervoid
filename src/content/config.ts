import { defineCollection, z } from 'astro:content'

const workCollection = defineCollection({
  type: 'content',
  schema: {
    id: z.string(),
    title: z.string(),
    slug: z.string(),
    info: z.array(z.string()),
    credits: z.array(z.string()),
    gifs: z.object({
      hero: z.string(),
      gallery: z.array(z.string()),
    }),
  },
})

export const collections = { workCollection }
