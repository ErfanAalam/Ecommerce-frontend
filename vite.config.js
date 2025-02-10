import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // optimizeDeps: {
  //   include: ["@mui/material"],
  // },
  resolve: {
    alias: {
      // 'react-router': 'react-router-dom', // Force correct package usage
      // "@mui/material": "@mui/material/esm",
    },
  },
})
