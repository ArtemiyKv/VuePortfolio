import { defineContentConfig, defineCollection, z } from "@nuxt/content";

export default defineContentConfig({
  collections: {
    experience: defineCollection({
      type: 'data',
      schema: z.object({
        body: z.array(
          z.object({
            name: z.string(),
            date: z.string(),
            text: z.string(),
          })
        )
      }),
      source: 'experience/**.yaml'
    })
  }
})