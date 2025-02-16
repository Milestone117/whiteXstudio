import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Listen on all IP addresses
    port: 5173, // Optional: specify a custom port
  },
  base: '/whiteXstudio/'
});
