import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Все запросы, начинающиеся с /api, будут перенаправлены
      '/api': {
        target: 'https://api.yeatwork.ru', // Ваш целевой API
        changeOrigin: true,
        // Эта функция убирает префикс /api из пути
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});
