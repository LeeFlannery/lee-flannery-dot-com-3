// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // 1. Site configuration (URL, title, etc.)
  site: 'https://leeflannery.com',
  // 2. Output mode
  output: 'static',
  // 3. Base path (if using subdirectory)
  base: '/',
  // 4. Integrations
  integrations: [react(), sitemap()],
  // 5. Build configuration 
  build: {
    inlineStylesheets: 'auto'
  },
  // 6. Vite configuration
  vite: {
    plugins: [tailwindcss()]
  },
});


