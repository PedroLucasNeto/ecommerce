import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from 'tailwindcss';
// import ViteSassPlugin from 'vite-plugin-sass';

// https://vitejs.dev/config/
export default defineConfig({
  
  plugins: [react()],
  css: {
    postcss: {
      plugins: [
        tailwindcss
      ],
    },
  },
})
