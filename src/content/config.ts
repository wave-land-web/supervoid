import { defineCollection, z } from 'astro:content'

const workCollection = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      id: z.number(),
      title: z.string(),
      info: z.array(z.string()),
      credits: z.array(z.string()).optional(),
      gifs: z.object({
        hero: z.string(),
        gallery: z.array(z.string()),
      }),
      images: z.array(image()).optional(),
    }),
})

const pressCollection = defineCollection({
  type: 'content',
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
  type: 'content',
  schema: ({ image }) =>
    z.object({
      id: z.number(),
      title: z.string(),
      youtubeId: z.string(),
      poster: image(),
    }),
})

export const collections = {
  work: workCollection,
  press: pressCollection,
  lighting: lightingCollection,
}
