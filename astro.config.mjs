// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // 部署到 Vercel 时替换为你的正式域名，sitemap 与规范链接依赖该值
  site: 'https://blog.feiyan.fun',
  integrations: [mdx(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
  image: {
    // 启用响应式图片样式，配合 <Image /> 自动生成 AVIF/WebP
    responsiveStyles: true,
  },
});
