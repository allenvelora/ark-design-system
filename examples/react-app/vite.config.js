import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Link to local tokens package during development
      '@ark/tokens': path.resolve(__dirname, '../../tokens/build'),
    },
  },
});
