import { defineConfig } from 'astro/config';

export default defineConfig({
  // Output static site
  output: 'static',
  
  // Base URL for GitHub Pages or similar
  // base: '/ark-design-system-2026/',
  
  // Server config for development
  server: {
    port: 3000,
    host: true
  },
  
  // Vite config for loading data files
  vite: {
    resolve: {
      alias: {
        '@data': '../data',
        '@tokens': '../tokens/build'
      }
    }
  }
});
