import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:8080", // 后端服务器的地址
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""), // 将请求路径中的 '/api' 前缀移除
      },
    },
  },
});
