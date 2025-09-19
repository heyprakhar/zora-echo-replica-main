# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is **The Opera House** - a luxury wedding and event venue website built as a high-performance React application with SEO optimization for the wedding industry in Noida. The project focuses on local SEO with multiple location-based landing pages and comprehensive accessibility features.

## Development Commands

### Essential Commands
```bash
# Start development server (runs on port 8080)
npm run dev

# Build production version
npm run build

# Run linting
npm run lint

# Start only the Express server
npm run server

# Run both frontend and server concurrently
npm run dev-all

# Deploy (build and start server)
npm run deploy
```

### Quality Assurance Commands
```bash
# Validate HTML and build
npm run validate

# Run accessibility tests on localhost:8080
npm run accessibility

# Run dev server and accessibility tests together
npm run a11y-test

# Analyze bundle size
npm run analyze
npm run size-check

# Generate critical CSS
npm run critical-css
```

## Architecture Overview

### Tech Stack
- **Frontend**: Vite + React 18 + TypeScript + Tailwind CSS
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Backend**: Express.js with email functionality (Nodemailer)
- **Routing**: React Router with lazy-loaded pages
- **State Management**: TanStack Query for server state
- **Styling**: Tailwind CSS with custom luxury theme
- **Error Tracking**: Sentry integration
- **Accessibility**: WCAG 2.1 AA compliance

### Project Structure

```
src/
├── components/           # Reusable components
│   ├── ui/              # shadcn/ui components (52 components)
│   ├── common/          # Shared business components
│   ├── blog/            # Blog-related components
│   ├── LuxuryGuide/     # Luxury event guide components
│   ├── Navigation.tsx   # Main navigation
│   ├── Footer.tsx       # Site footer
│   └── [Section].tsx    # Landing page sections
├── pages/               # Route components (SEO-optimized)
│   ├── Index.tsx        # Main landing page
│   ├── NotFound.tsx     # 404 page
│   ├── ServerError.tsx  # 500 page
│   └── [Venue]Noida.tsx # Location-based venue pages
├── hooks/               # Custom React hooks
├── lib/                 # Utility libraries
├── utils/               # Helper functions
└── assets/              # Static assets

server/
├── server.js            # Express server with email endpoints
└── config/              # Server configuration
```

### SEO-Focused Page Architecture

The site uses a strategic SEO approach with 9 specialized landing pages targeting wedding venue searches in Noida:

1. **Index.tsx** - Main homepage
2. **WeddingVenueNoida.tsx** - Primary wedding venue page
3. **LuxuryBanquetHallNoida.tsx** - Luxury banquet focus
4. **BanquetHallNearMe.tsx** - Local search optimization
5. **MarriageHallNoida.tsx** - Marriage ceremony focus
6. **ReceptionHallNoida.tsx** - Reception venue focus
7. **PartyHallNoida.tsx** - Party and celebration focus
8. **FunctionHallNoida.tsx** - Corporate and function focus
9. **LuxuryEventGuideWorking.tsx** - Educational content page

Each page is lazy-loaded for performance and contains structured data for SEO.

## Component System

### UI Components (shadcn/ui)
Complete shadcn/ui implementation with 52+ components in `src/components/ui/`. All components follow Radix UI patterns with custom luxury theming.

### Section Components
Modular landing page sections:
- **HeroSection** - Main hero with CTA
- **AboutSection** - Venue description
- **SpacesSection** - Available spaces showcase
- **GallerySection** - Image gallery
- **FeaturesSection** - Venue features
- **ContactSection** - Contact form and details

### Navigation Architecture
- Semantic HTML with proper ARIA labels
- Skip navigation links for accessibility
- Responsive mobile-first design
- SEO-optimized internal linking

## Performance Optimization

### Build Configuration (vite.config.ts)
Optimized chunking strategy with manual chunk splitting:

- **vendor-react** - React ecosystem
- **vendor-radix** - Radix UI components
- **vendor-icons** - Lucide React icons
- **vendor-motion** - Framer Motion
- **vendor-query** - TanStack Query
- **vendor-router** - React Router
- **vendor-sentry** - Sentry tracking
- **vendor-utils** - Utility libraries
- **vendor-ui-components** - Custom UI components
- **pages** - All page components

### Performance Features
- Lazy loading for all route components
- Code splitting with manual chunk optimization
- Image optimization and lazy loading
- Critical CSS extraction
- Bundle size monitoring (1000kb warning limit)

## Accessibility Implementation

### WCAG 2.1 AA Compliance
- Skip navigation links on all pages
- Semantic HTML with proper heading hierarchy
- ARIA labels and roles throughout
- Keyboard navigation support
- Screen reader optimization
- Color contrast compliance

### Testing Tools
- Built-in accessibility testing with @axe-core/cli
- HTML validation with html-validate
- Automated a11y testing in development workflow

## Server Architecture

### Express.js Backend (server/server.js)
- Email functionality with Nodemailer
- CORS configuration for frontend integration
- Helmet for security headers
- Environment-based configuration
- Static file serving for production builds

### Development Workflow
- Concurrent development server and API server
- Hot reload for frontend changes
- Environment variable management with .env

## Code Quality

### ESLint Configuration
- TypeScript-aware ESLint rules
- React hooks enforcement
- React refresh integration
- Unused variable checking disabled for development
- Modern ES2020+ syntax support

### Development Standards
- TypeScript strict mode
- Component-based architecture
- Custom hooks for reusable logic
- Utility-first CSS with Tailwind
- Performance-first build strategy

## Environment Setup

### Required Environment Variables
Create `.env` file based on `.env.example`:
```
# Email configuration for contact forms
# Server configuration
# API endpoints
```

### Development Prerequisites
- Node.js (use nvm for version management)
- npm or bun for package management
- Modern browser for testing

## Key Business Context

This is a **luxury wedding venue website** targeting the Noida market. When working on this project:

- **Target Audience**: Couples planning luxury weddings in Noida/Delhi NCR
- **Business Goal**: Generate leads for venue bookings
- **SEO Strategy**: Local search optimization for wedding-related keywords
- **Brand Positioning**: Premium luxury venue with comprehensive event services
- **Conversion Focus**: Contact form submissions and phone inquiries

## Working with This Codebase

### Adding New Pages
1. Create new page component in `src/pages/`
2. Add lazy import in `App.tsx`
3. Add route configuration
4. Ensure SEO optimization with proper meta tags
5. Implement accessibility features

### Modifying Components
- UI components use shadcn/ui patterns - follow existing conventions
- Section components are self-contained - minimal props, maximum reusability
- Maintain responsive design patterns
- Test accessibility after modifications

### Performance Considerations
- All route components must be lazy-loaded
- Images should use proper loading strategies
- New dependencies require chunk optimization review
- Monitor bundle size with `npm run analyze`

### SEO Maintenance
- Each page targets specific wedding venue keywords
- Meta descriptions should be compelling and location-specific
- Structured data should be maintained for local SEO
- Internal linking should strengthen venue-related content clusters