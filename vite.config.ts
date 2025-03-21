
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Get the repository name from environment variables or fallback to a default value
  const repoName = process.env.REPOSITORY_NAME 
    ? process.env.REPOSITORY_NAME.split('/')[1] 
    : '';
  
  // For GitHub Pages with HashRouter, we need the correct base path
  const basePath = mode === 'production' && repoName ? `/${repoName}/` : '/';

  console.log(`Building with base path: ${basePath}`);

  return {
    base: basePath,
    server: {
      host: "::",
      port: 8080,
    },
    plugins: [
      react(),
      mode === 'development' &&
      componentTagger(),
    ].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    build: {
      outDir: 'dist',
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['react', 'react-dom', 'react-router-dom'],
            ui: ['@radix-ui/react-alert-dialog', '@radix-ui/react-dialog']
          }
        }
      }
    }
  };
});
