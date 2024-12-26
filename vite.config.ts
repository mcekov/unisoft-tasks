import { fileURLToPath, URL } from 'node:url';
import vueRouter from 'unplugin-vue-router/vite';
import svgLoader from 'vite-svg-loader';
import AutoImport from 'unplugin-auto-import/vite';
import { VueRouterAutoImports } from 'unplugin-vue-router';
import Components from 'unplugin-vue-components/vite';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueDevTools from 'vite-plugin-vue-devtools';

const autoImportConfig = {
  include: [/\.[tj]sx?$/, /\.vue$/, /\.vue\?vue/, /\.md$/],
  imports: [
    'vue',
    VueRouterAutoImports,
    { pinia: ['defineStore', 'storeToRefs', 'acceptHMRUpdate'] },
  ],
  dts: true,
  viteOptimizeDeps: true,
  dirs: ['src/stores'],
};

const componentsConfig = {
  dts: true,
};

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vueRouter(),
    vue(),
    AutoImport(autoImportConfig),
    Components(componentsConfig),
    vueDevTools(),
    svgLoader(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
