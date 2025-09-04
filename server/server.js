import express from 'express';
import cors from 'cors';
import { sendContactEmail } from './config/emailConfig.js';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;
const isProduction = process.env.NODE_ENV === 'production';

// Middleware
if (isProduction) {
  // In production, serve the built React app
  app.use(express.static(path.join(__dirname, '../dist')));
  
  // More permissive CORS for production
  app.use(cors({
    origin: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
  }));
} else {
  // Development CORS
  app.use(cors({
    origin: ['http://localhost:5173', 'http://localhost:3000', 'http://localhost:8080', 'http://127.0.0.1:5173', 'http://127.0.0.1:8080'],
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
  }));
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'Opera House Email Server is running',
    timestamp: new Date().toISOString()
  });
});

// Contact form submission endpoint
app.post('/api/contact', async (req, res) => {
  try {
    console.log('📧 Received contact form submission:', req.body);
    
    const { fullName, phone, eventType, eventDate, guestCount, additionalDetails } = req.body;
    
    // Basic validation
    if (!fullName || !phone || !eventType || !eventDate || !guestCount) {
      return res.status(400).json({
        success: false,
        message: 'Missing required fields: fullName, phone, eventType, eventDate, guestCount'
      });
    }

    // Validate phone number format (basic)
    const phoneRegex = /^[\+]?[\d\s\-\(\)]{10,}$/;
    if (!phoneRegex.test(phone)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid phone number format'
      });
    }

    // Validate guest count
    const guests = parseInt(guestCount);
    if (isNaN(guests) || guests <= 0) {
      return res.status(400).json({
        success: false,
        message: 'Guest count must be a positive number'
      });
    }

    // Send email
    const emailResult = await sendContactEmail({
      fullName: fullName.trim(),
      phone: phone.trim(),
      eventType: eventType.trim(),
      eventDate: eventDate.trim(),
      guestCount: guests,
      additionalDetails: additionalDetails ? additionalDetails.trim() : ''
    });

    if (emailResult.success) {
      res.status(200).json({
        success: true,
        message: 'Your inquiry has been sent successfully! We will contact you soon.',
        messageId: emailResult.messageId
      });
    } else {
      console.error('❌ Email sending failed:', emailResult.error);
      res.status(500).json({
        success: false,
        message: 'Failed to send email. Please try again or contact us directly.',
        error: emailResult.error
      });
    }
  } catch (error) {
    console.error('❌ Server error:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error. Please try again later.',
      error: error.message
    });
  }
});

// Serve React app for all non-API routes in production
if (isProduction) {
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
  });
} else {
  // 404 handler for development
  app.use((req, res) => {
    res.status(404).json({
      success: false,
      message: 'Endpoint not found'
    });
  });
}

// Error handling middleware
app.use((error, req, res, next) => {
  console.error('❌ Global error handler:', error);
  res.status(500).json({
    success: false,
    message: 'Something went wrong!',
    error: error.message
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Opera House Email Server running on port ${PORT}`);
  console.log(`📧 Email configured for: ${process.env.EMAIL_USER}`);
  console.log(`🌐 CORS enabled for frontend development servers`);
});

export default app;