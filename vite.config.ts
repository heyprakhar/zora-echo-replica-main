import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Separate UI components into their own chunk
          if (id.includes('components/ui/')) {
            return 'vendor-ui-components';
          }
          // Separate pages into their own chunk
          if (id.includes('src/pages/')) {
            return 'pages';
          }
          // Handle node_modules manually
          if (id.includes('node_modules')) {
            // Large UI libraries in separate chunks
            if (id.includes('@radix-ui')) {
              return 'vendor-radix';
            }
            if (id.includes('lucide-react')) {
              return 'vendor-icons';
            }
            if (id.includes('framer-motion')) {
              return 'vendor-motion';
            }
            if (id.includes('@tanstack')) {
              return 'vendor-query';
            }
            if (id.includes('react-router')) {
              return 'vendor-router';
            }
            if (id.includes('@sentry')) {
              return 'vendor-sentry';
            }
            // Group smaller libraries together
            if (id.includes('clsx') || id.includes('tailwind') || id.includes('date-fns')) {
              return 'vendor-utils';
            }
            // React ecosystem
            if (id.includes('react') || id.includes('scheduler')) {
              return 'vendor-react';
            }
          }
        },
        // Optimize chunk naming
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]'
      }
    },
    chunkSizeWarningLimit: 1000,
    // Enable source maps for debugging
    sourcemap: false,
  },
  // Configure server to avoid CORS issues
  server: {
    port: 8080, // Changed from default 5173 to 8080 as user requested
    strictPort: false,
    host: true,
  }
});
