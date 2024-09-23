import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
// import { USER_API_END_POINT } from '@/utils/constant'

export default defineConfig({
  
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
     plugins: [react()],
})
