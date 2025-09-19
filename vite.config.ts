import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'move-script-to-body',
      transformIndexHtml: {
        enforce: 'post',
        transform(html) {
          // Move all module script tags from head to body
          const scriptRegex = /<script[^>]*type="module"[^>]*>[\s\S]*?<\/script>|<script[^>]*type="module"[^>]*\/>/g;
          const headScripts: string[] = [];

          // Extract script tags from head
          html = html.replace(scriptRegex, (match) => {
            headScripts.push(match);
            return '';
          });

          // Add scripts to body before closing tag
          if (headScripts.length > 0) {
            html = html.replace('</body>', `  ${headScripts.join('\n  ')}\n</body>`);
          }

          return html;
        }
      }
    }
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Each page gets its own chunk for proper lazy loading
          if (id.includes('src/pages/')) {
            const pageName = id.split('/').pop()?.replace('.tsx', '');
            return `page-${pageName}`;
          }

          // Vendor chunks
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom')) {
              return 'vendor-react';
            }
            if (id.includes('framer-motion')) {
              return 'vendor-motion';
            }
            if (id.includes('@sentry')) {
              return 'vendor-sentry';
            }
            if (id.includes('@radix-ui') || id.includes('lucide-react')) {
              return 'vendor-ui';
            }
            return 'vendor-libs';
          }
        }
      }
    },
    chunkSizeWarningLimit: 1000,
  },
  server: {
    port: 5173,
    host: true,
  }
});
