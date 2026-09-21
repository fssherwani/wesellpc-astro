import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
// IMPORTING THE MISSING REACT COMPILER HOOKS
import react from '@astrojs/react';

export default defineConfig({
  // Preserves your proper GitHub sub-folder link structure
  base: '/',
  
  build: {
    assets: '_astro'
  },
  
  // 1. INJECTS THE REACT RENDERER SO THE NAVBAR LOADS SMOOTHLY
  integrations: [react()],
  
  // 2. KEEPS TAILWIND V4 COMPILING LIGHTNING-FAST
  vite: {
    plugins: [tailwindcss()]
  }
});
