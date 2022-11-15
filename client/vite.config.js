const path = require('path')
// // import { defineConfig } from 'vite';
// // import mix from 'vite-plugin-mix';

export default {
  root: path.resolve(__dirname, 'public'),
  resolve: {
    alias: {
      '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
    }
  },
  server: {
    port: 8080,
    hot: true,
  }
};

// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
// export default defineConfig({
//   plugins: [react()],
//   build: {
//     root: path.resolve(__dirname, 'client'),
//     manifest: true,
//     rollupOptions: {
//       input: "./public/js/main.jsx",
//     },
//   },
// });
