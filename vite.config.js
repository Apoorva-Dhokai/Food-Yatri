import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    loader: 'css-loader',
  },
  build: {
    rollupOptions: {
      external: ['swiper'],
    },
  },
});