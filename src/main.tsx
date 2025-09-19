import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Initialize monitoring after app is mounted
const initializeMonitoring = async () => {
  try {
    // Initialize Sentry error monitoring
    const { initSentry } = await import('./lib/sentry');
    initSentry();

    // Initialize performance monitoring
    const { initPerformanceMonitoring, monitorNetworkConditions, monitorResourceTiming } = await import('./lib/performance');

    if (typeof window !== 'undefined') {
      initPerformanceMonitoring();
      monitorNetworkConditions();
      monitorResourceTiming();
    }

    // Register service worker for offline functionality
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
          .then((registration) => {
            console.log('SW registered: ', registration);
          })
          .catch((registrationError) => {
            console.log('SW registration failed: ', registrationError);
          });
      });
    }
  } catch (error) {
    console.error('Error initializing monitoring:', error);
  }
};

// Mount React app first, then initialize monitoring
const rootElement = document.getElementById("root");
if (rootElement) {
  createRoot(rootElement).render(<App />);

  // Initialize monitoring after a brief delay to ensure app is mounted
  setTimeout(initializeMonitoring, 100);
} else {
  console.error('Root element not found');
}
