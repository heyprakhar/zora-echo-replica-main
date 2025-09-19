/**
 * Master Theme Configuration - The Opera House
 * Primary Color: #112180 (Royal Blue)
 * Luxury design system with elegant blue and gold accents
 */

// Convert hex color to HSL values
function hexToHsl(hex: string): string {
  // Remove the hash if present
  hex = hex.replace('#', '');

  // Parse r, g, b values
  const r = parseInt(hex.substr(0, 2), 16) / 255;
  const g = parseInt(hex.substr(2, 2), 16) / 255;
  const b = parseInt(hex.substr(4, 2), 16) / 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0;
  let s = 0;
  const l = (max + min) / 2;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
    }
    h /= 6;
  }

  return `${Math.round(h * 360)} ${Math.round(s * 100)}% ${Math.round(l * 100)}%`;
}

// Primary brand color
export const PRIMARY_BLUE = '#112180';

// Generated color palette based on #112180
export const themeColors = {
  // Primary blue variations (#112180 as base)
  primary: {
    DEFAULT: hexToHsl(PRIMARY_BLUE), // 231 76% 28%
    light: '231 76% 48%',    // Lighter version
    dark: '231 76% 18%',     // Darker version
    pale: '231 30% 85%',     // Very light for backgrounds
    accent: '231 65% 60%',   // Accent blue
  },

  // Luxury gold accents (keeping existing gold for luxury feel)
  gold: {
    DEFAULT: '43 100% 52%',  // Primary gold
    light: '43 85% 65%',     // Light gold
    dark: '43 100% 40%',     // Dark gold
  },

  // Neutral colors
  neutral: {
    white: '0 0% 100%',
    cream: '60 77% 94%',
    ivory: '60 23% 96%',
    pearl: '60 8% 95%',
    text: '231 25% 15%',     // Very dark blue for text
    textMuted: '231 15% 45%', // Muted blue for secondary text
  },

  // Background variations
  background: {
    primary: '60 77% 94%',   // Cream background
    secondary: '0 0% 100%',  // Pure white
    accent: '231 10% 97%',   // Very light blue tint
  }
};

// CSS custom properties for the new theme
export const cssVariables = {
  // Update luxury blue colors to use #112180
  '--luxury-blue': themeColors.primary.DEFAULT,
  '--luxury-blue-light': themeColors.primary.light,
  '--luxury-blue-dark': themeColors.primary.dark,
  '--luxury-blue-pale': themeColors.primary.pale,
  '--luxury-blue-accent': themeColors.primary.accent,

  // Keep existing gold for luxury accents
  '--luxury-gold': themeColors.gold.DEFAULT,
  '--luxury-gold-light': themeColors.gold.light,
  '--luxury-gold-dark': themeColors.gold.dark,

  // Update primary to use blue
  '--primary': themeColors.primary.DEFAULT,
  '--primary-foreground': themeColors.neutral.white,

  // Update text colors to blue-based
  '--luxury-text': themeColors.neutral.text,
  '--luxury-text-muted': themeColors.neutral.textMuted,

  // Gradients
  '--gradient-luxury-blue': `linear-gradient(135deg, hsl(${themeColors.primary.DEFAULT}), hsl(${themeColors.primary.light}))`,
  '--gradient-blue-gold': `linear-gradient(135deg, hsl(${themeColors.primary.DEFAULT}), hsl(${themeColors.gold.DEFAULT}))`,
  '--gradient-radial-blue': `radial-gradient(circle at center, hsl(${themeColors.primary.light}), hsl(${themeColors.primary.DEFAULT}))`,
};

// Theme utility classes
export const themeClasses = {
  // Button styles
  btnPrimary: 'bg-luxury-blue hover:bg-luxury-blue-dark text-white font-medium px-6 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1',
  btnSecondary: 'bg-luxury-gold hover:bg-luxury-gold-dark text-white font-medium px-6 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1',
  btnOutline: 'border-2 border-luxury-blue text-luxury-blue hover:bg-luxury-blue hover:text-white font-medium px-6 py-3 rounded-lg transition-all duration-300',

  // Text styles
  headingPrimary: 'text-4xl md:text-6xl font-bold text-luxury-blue mb-6',
  headingSecondary: 'text-3xl md:text-4xl font-bold text-luxury-text mb-4',
  textBody: 'text-lg text-luxury-text-muted leading-relaxed',
  textAccent: 'text-luxury-blue font-medium',

  // Background styles
  bgPrimary: 'bg-gradient-to-r from-luxury-blue/10 to-luxury-blue-pale/20',
  bgSecondary: 'bg-white',
  bgAccent: 'bg-luxury-blue-pale/10',

  // Card styles
  cardPrimary: 'bg-white border border-luxury-blue/20 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300',
  cardAccent: 'bg-luxury-blue-pale/5 border border-luxury-blue/10 rounded-lg',

  // Glass effect
  glass: 'bg-white/95 backdrop-blur-md border border-luxury-blue/20',
};

// Export theme configuration for Tailwind
export const tailwindTheme = {
  colors: {
    'luxury-blue': {
      DEFAULT: `hsl(${themeColors.primary.DEFAULT})`,
      light: `hsl(${themeColors.primary.light})`,
      dark: `hsl(${themeColors.primary.dark})`,
      pale: `hsl(${themeColors.primary.pale})`,
      accent: `hsl(${themeColors.primary.accent})`,
    },
    'luxury-gold': {
      DEFAULT: `hsl(${themeColors.gold.DEFAULT})`,
      light: `hsl(${themeColors.gold.light})`,
      dark: `hsl(${themeColors.gold.dark})`,
    },
    'luxury-text': `hsl(${themeColors.neutral.text})`,
    'luxury-text-muted': `hsl(${themeColors.neutral.textMuted})`,
    'luxury-cream': `hsl(${themeColors.neutral.cream})`,
  }
};

// Helper function to apply theme
export const applyTheme = () => {
  if (typeof document !== 'undefined') {
    const root = document.documentElement;
    Object.entries(cssVariables).forEach(([property, value]) => {
      root.style.setProperty(property, value);
    });
  }
};

export default {
  PRIMARY_BLUE,
  themeColors,
  cssVariables,
  themeClasses,
  tailwindTheme,
  applyTheme,
};