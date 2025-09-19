// Vercel serverless function for health check
export default function handler(req, res) {
  try {
    // Enable CORS for all origins
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    // Handle preflight request
    if (req.method === 'OPTIONS') {
      return res.status(200).end();
    }

    // Health check response for any method (more permissive for testing)
    return res.status(200).json({
      status: 'OK',
      message: 'Opera House Email Server is running on Vercel',
      timestamp: new Date().toISOString(),
      environment: process.env.NODE_ENV || 'production',
      method: req.method,
      url: req.url
    });
  } catch (error) {
    console.error('Health check error:', error);
    return res.status(500).json({
      status: 'ERROR',
      message: 'Health check failed',
      error: error.message
    });
  }
}