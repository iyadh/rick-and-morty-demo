import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/vite';
import { HeadlessUiResolver } from 'unplugin-vue-components/resolvers';
import eslintPlugin from 'vite-plugin-eslint';
const path = require('path');

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  plugins: [
    vue(),
    eslintPlugin(),
    Components({
      resolvers: [HeadlessUiResolver()],
    }),
  ],
});
