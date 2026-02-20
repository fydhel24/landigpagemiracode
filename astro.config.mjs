import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import vercel from '@astrojs/vercel';

export default defineConfig({
  site: "https://positivustheme.vercel.app",
  integrations: [tailwind()],
  output: 'static',
  image: {
    remotePatterns: [{ protocol: 'https', hostname: 'images.unsplash.com' }],
  },
  adapter: vercel({}),
});
