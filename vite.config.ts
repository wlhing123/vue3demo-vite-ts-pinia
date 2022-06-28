import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  server: {
    port: 8080,
    proxy: {
      '/search': {
        target: 'http://192.168.113.15:5000',
        changeOrigin: true,
        rewrite: (path: string) => path.replace('/^/api/', ''),
      },
    },
  },
});
