// API configuration utility for development and production

const getAPIBaseURL = (): string => {
  // If VITE_API_URL is set (for custom deployments), use it
  if (import.meta.env.VITE_API_URL) {
    return import.meta.env.VITE_API_URL;
  }
  
  // Runtime environment detection
  if (typeof window !== 'undefined') {
    const { protocol, hostname, port } = window.location;
    
    // Development environment detection
    if (hostname === 'localhost' || hostname === '127.0.0.1') {
      // Check if we're running on Vite dev server (port 8080 or 5173)
      if (port === '8080' || port === '5173' || port === '3000') {
        return 'http://localhost:3001'; // Express server
      }
    }
    
    // Production/Vercel deployment - API routes are serverless functions
    // No need for port, Vercel handles routing
    return `${protocol}//${hostname}`;
  }
  
  // Server-side fallback (shouldn't be used in browser)
  return 'http://localhost:3001';
};

export const API_BASE_URL = getAPIBaseURL();

export const API_ENDPOINTS = {
  contact: `${API_BASE_URL}/api/contact`,
  health: `${API_BASE_URL}/api/health`
} as const;

// Utility function for making API calls
export const apiRequest = async (endpoint: string, options: RequestInit = {}) => {
  const defaultHeaders = {
    'Content-Type': 'application/json',
    ...options.headers,
  };

  const response = await fetch(endpoint, {
    ...options,
    headers: defaultHeaders,
  });

  if (!response.ok) {
    throw new Error(`API request failed: ${response.status} ${response.statusText}`);
  }

  return response.json();
};