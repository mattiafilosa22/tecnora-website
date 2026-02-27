import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './src'),
    },
  },
  // WordPress theme build configuration
  base: './',
  build: {
    // Output directly into the WordPress theme folder
    outDir: 'wp-theme/dist',
    emptyOutDir: true,
    // Generate manifest.json for PHP asset loading via functions.php
    manifest: true,
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
      },
    },
    // Sourcemaps only in development
    sourcemap: false,
  },
})
