import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// Configured specifically for your GitHub Pages sub-folder path layout
export default defineConfig({
  // Tells Astro to look inside your specific folder repository link
  base: '/wesellpc-astro/',
  
  // Directs compilation assets to relative paths so they never break in the cloud
  build: {
    assets: '_astro'
  },
  
  // Keeps the built-in design library running smoothly
  integrations: [tailwind()]
});
