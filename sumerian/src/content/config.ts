import { defineCollection, z } from 'astro:content';

const common = {
  title: z.string(),
  summary: z.string(),
  category: z.string(),
  date: z.string(),
  readingTime: z.string(),
  tags: z.array(z.string()).default([]),
  image: z.string().optional(),
};

const articles = defineCollection({ type: 'content', schema: z.object(common) });
const research = defineCollection({ type: 'content', schema: z.object({ ...common, abstract: z.string().optional() }) });
const courses = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(), description: z.string(), category: z.string(), difficulty: z.string(), duration: z.string(), url: z.string().url(), thumbnail: z.string().optional(), featured: z.boolean().default(false), beginner: z.boolean().default(false)
  })
});
const cves = defineCollection({
  type: 'content',
  schema: z.object({
    cve: z.string(), title: z.string(), severity: z.enum(['Critical','High','Medium','Low']), cvss: z.number(), vendor: z.string(), product: z.string(), published: z.string(), summary: z.string(), knownExploited: z.boolean().default(false), source: z.string().url(), tags: z.array(z.string()).default([])
  })
});

export const collections = { articles, research, courses, cves };
