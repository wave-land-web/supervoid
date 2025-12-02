import { defineCollection, z } from 'astro:content'

const workCollection = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      id: z.number(),
      title: z.string(),
      year: z.string().optional(),
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
      year: z.string().optional(),
      youtubeId: z.string(),
      poster: image(),
    }),
})

export const collections = {
  work: workCollection,
  press: pressCollection,
  lighting: lightingCollection,
}
