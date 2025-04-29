import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: '/vite-causaviva/', // Asegúrate de poner el nombre de tu repositorio
})
