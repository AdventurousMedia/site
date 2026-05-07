import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const notes = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/notes' }),
  schema: z.object({
    title: z.string(),
    dated: z.coerce.date(),
    summary: z.string().max(200),
    source: z.enum(['linkedin', 'essay', 'podcast-derived']).default('essay'),
    linkedin_url: z.string().url().optional(),
    draft: z.boolean().default(false),
  }),
});

const work = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/work' }),
  schema: z.object({
    client: z.string(),
    sector: z.string(),
    engagement: z.string(),
    dates: z.string(),
    outcome_metric: z.string().optional(),
    status: z.enum(['public', 'discreet', 'redacted']),
    summary: z.string().max(200),
    draft: z.boolean().default(false),
  }),
});

export const collections = { notes, work };
