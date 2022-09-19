import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  lintOnSave: false,
  plugins: [vue()],
  server: {	
    host: '0.0.0.0'	
  }
})