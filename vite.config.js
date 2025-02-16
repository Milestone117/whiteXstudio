import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 5173,
  },
  base: '/whiteXStudio/', // Make sure this matches your repo name EXACTLY
  build: {
    outDir: 'dist'
  }
});