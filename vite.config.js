import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/vite';
import { HeadlessUiResolver } from 'unplugin-vue-components/resolvers';
import eslintPlugin from 'vite-plugin-eslint';
const path = require('path');

// https://vitejs.dev/config/
export default defineConfig({
  base: './rick-and-morty/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@assets': path.resolve(__dirname, './src/assets'),
    },
  },
  plugins: [
    vue(),
    eslintPlugin({ cache: false }),
    Components({
      resolvers: [new HeadlessUiResolver()],
    }),
  ],
});
