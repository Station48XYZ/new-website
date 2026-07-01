import { defineCollection } from "astro:content";
import { file } from "astro/loaders";
import { z } from "astro/zod";

const homeFeatures = defineCollection({
    loader: file("src/content/home/features.json"),
    schema: z.object({
        id: z.string(),
        order: z.number().int(),
        title: z.string(),
        description: z.string(),
    }),
});

const homeSteps = defineCollection({
    loader: file("src/content/home/steps.json"),
    schema: z.object({
        id: z.string(),
        order: z.number().int(),
        strongText: z.string(),
        text: z.string(),
    }),
});

const homeRules = defineCollection({
    loader: file("src/content/home/rules.json"),
    schema: z.object({
        id: z.string(),
        order: z.number().int(),
        strongText: z.string(),
        detail: z.string().optional(),
    }),
});

const homeFaq = defineCollection({
    loader: file("src/content/home/faq.json"),
    schema: z.object({
        id: z.string(),
        order: z.number().int(),
        question: z.string(),
        answer: z.string(),
    }),
});

export const collections = {
    homeFeatures,
    homeSteps,
    homeRules,
    homeFaq,
};
