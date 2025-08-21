import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import { viteMockServe } from 'vite-plugin-mock';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    viteMockServe({
      mockPath: 'mock'
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      mock: path.resolve(__dirname, './mock')
    }
  },
  server: {
    port: 3000,
    host: true
  }
});
