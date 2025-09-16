# Vercel Deployment Guide

## Environment Variables Setup

### Required Variables (Contact Form)
Add these environment variables in your Vercel dashboard under Settings > Environment Variables:

```env
EMAIL_USER=your_gmail_account@gmail.com
EMAIL_PASS=your_app_password_here
EMAIL_FROM=noreply@theoperahouse.com
EMAIL_TO=inquiries@theoperahouse.com
```

### Optional Variables (Monitoring)
```env
VITE_SENTRY_DSN=your_sentry_dsn_here
```

## Gmail Setup for Contact Form

1. **Enable 2-Factor Authentication** on your Gmail account
2. **Generate App Password**:
   - Go to Google Account settings
   - Security > 2-Step Verification > App passwords
   - Generate password for "Mail"
   - Use this password for `EMAIL_PASS`

## Deployment Steps

1. **Connect Repository** to Vercel
2. **Configure Environment Variables** in Vercel dashboard
3. **Deploy** - Vercel will automatically:
   - Run `npm run build`
   - Deploy static files to CDN
   - Set up serverless functions for `/api/*` routes

## Vercel Configuration

The project includes `vercel.json` with:
- API function configurations
- CORS headers for API routes
- Build environment settings

## Features Included

✅ **Frontend (Static)**:
- React 18 + TypeScript + Vite
- PWA with service worker and manifest
- SEO optimization with structured data
- Performance monitoring with Core Web Vitals
- Google Analytics integration
- Accessibility compliance (WCAG 2.1 AA)

✅ **Backend (Serverless)**:
- Contact form API (`/api/contact.js`)
- Health check API (`/api/health.js`)
- Email notifications with nodemailer
- CORS configuration for frontend integration

✅ **Performance Optimizations**:
- Bundle splitting and code optimization
- Service worker for offline functionality
- Critical CSS inlining support
- Image lazy loading and resource preloading

## Domain Configuration

If using a custom domain:
1. Add domain in Vercel dashboard
2. Update `VITE_SITE_URL` environment variable
3. Update canonical URLs in `index.html`

## Monitoring & Analytics

- **Google Analytics**: Configured with ID `G-6Y4PYDN3KK`
- **Core Web Vitals**: Automatic monitoring enabled
- **Sentry**: Optional error monitoring (requires `VITE_SENTRY_DSN`)

## Troubleshooting

### Contact Form Issues
- Verify Gmail app password is correct
- Check all email environment variables are set
- Test with `/api/health` endpoint first

### Service Worker Issues
- Clear browser cache after deployment
- Check console for service worker registration errors
- Verify `sw.js` is accessible at domain root

### Build Issues
- Ensure all dependencies are in `package.json`
- Check build logs in Vercel dashboard
- Verify TypeScript compilation succeeds