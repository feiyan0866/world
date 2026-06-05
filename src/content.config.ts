import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * 作品集 Schema：侧重视觉和媒体资产
 */
const projects = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      cover: image(),
      tags: z.array(z.string()),
      heroVideo: z.string().optional(), // 首页动态视频预览路径
      featured: z.boolean().default(false),
      order: z.number().default(0), // 首页排序优先级
    }),
});

/**
 * 博客 Schema：侧重文字阅读
 */
const posts = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    pubDate: z.coerce.date(),
    description: z.string(),
    category: z.string(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { projects, posts };
