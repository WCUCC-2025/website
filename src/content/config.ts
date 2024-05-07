import { z, defineCollection } from 'astro:content';

const biosCollection = defineCollection({
    type: 'content',
    schema: z.object({
        firstName: z.string(),
        lastName: z.string(),
        role: z.string(),
        headshotUrl: z.string(),
        major: z.string(),
    }),
});

export const collections = {
    bios: biosCollection,
};
