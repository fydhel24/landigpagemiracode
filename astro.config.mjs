import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import vercel from '@astrojs/vercel';

export default defineConfig({
  site: "https://positivustheme.vercel.app",
  integrations: [tailwind()],
  output: 'static', // 👈 Genera archivos HTML estáticos
  adapter: vercel({}), // El adapter de Vercel también soporta modo estático
});
