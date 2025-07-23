import {defineContentConfig, defineCollection, z} from "@nuxt/content";

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
        }),
        projects: defineCollection({
            type: 'data',
            schema: z.object({
                body: z.array(
                    z.object({
                        title: z.string(),
                        img: z.string(),
                        link: z.string(),
                        text: z.string(),
                        index: z.string(),
                    })
                )
            }),
            source: 'projects/projects.yml',
        })
    }
})