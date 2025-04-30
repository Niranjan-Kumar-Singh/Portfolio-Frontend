import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    open: true, // opens browser on server start
  },
  build: {
    target: 'es2020', // or 'es2019' / 'esnext'
    minify: 'esbuild', // this is default and efficient
  },
});
