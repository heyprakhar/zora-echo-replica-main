// Simple test endpoint for debugging
export default function handler(req, res) {
  try {
    // Enable CORS
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    // Handle preflight request
    if (req.method === 'OPTIONS') {
      return res.status(200).end();
    }

    return res.status(200).json({
      success: true,
      message: 'API is working!',
      method: req.method,
      url: req.url,
      headers: req.headers,
      body: req.body,
      env: {
        NODE_ENV: process.env.NODE_ENV,
        EMAIL_USER: process.env.EMAIL_USER ? 'Set (hidden)' : 'Not set',
        EMAIL_PASS: process.env.EMAIL_PASS ? 'Set (hidden)' : 'Not set',
        EMAIL_FROM: process.env.EMAIL_FROM ? 'Set (hidden)' : 'Not set',
        EMAIL_TO: process.env.EMAIL_TO ? 'Set (hidden)' : 'Not set'
      },
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('Test endpoint error:', error);
    return res.status(500).json({
      success: false,
      error: error.message,
      stack: error.stack
    });
  }
}