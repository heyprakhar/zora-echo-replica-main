// API configuration utility for development and production

const getAPIBaseURL = (): string => {
  // If VITE_API_URL is set (production), use it
  if (import.meta.env.VITE_API_URL) {
    return import.meta.env.VITE_API_URL;
  }
  
  // Development fallback
  if (typeof window !== 'undefined') {
    const { protocol, hostname } = window.location;
    
    // If running on localhost, use port 3001
    if (hostname === 'localhost' || hostname === '127.0.0.1') {
      return `${protocol}//${hostname}:3001`;
    }
    
    // For production deployment, assume API is on same domain with /api prefix
    return `${protocol}//${hostname}/api`;
  }
  
  // Server-side fallback
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