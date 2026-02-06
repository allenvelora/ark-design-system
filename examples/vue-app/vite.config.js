import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      // Link to local tokens package during development
      '@ark/tokens': path.resolve(__dirname, '../../tokens/build'),
    },
  },
});
