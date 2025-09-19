import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SpacesSection from "@/components/SpacesSection";
import GallerySection from "@/components/GallerySection";
import FeaturesSection from "@/components/FeaturesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Skip Navigation Links for Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 bg-luxury-gold text-white px-4 py-2 rounded-md font-medium"
      >
        Skip to main content
      </a>
      <a
        href="#navigation"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-40 z-50 bg-luxury-gold text-white px-4 py-2 rounded-md font-medium"
      >
        Skip to navigation
      </a>

      <header role="banner">
        <Navigation />
      </header>

      <main id="main-content" role="main">
        <HeroSection />
        <AboutSection />
        <SpacesSection />
        <GallerySection />
        <FeaturesSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
