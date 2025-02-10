import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import commonjs from '@rollup/plugin-commonjs'
import nodeResolve from '@rollup/plugin-node-resolve'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), nodeResolve(),commonjs()],
  optimizeDeps: {
    include: ["react-router-dom"], // Force Vite to pre-bundle
  },
  build: {
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
})
