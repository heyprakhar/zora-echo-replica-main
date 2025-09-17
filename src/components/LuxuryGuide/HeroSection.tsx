import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Crown, TrendingUp, Heart, Calendar, CheckCircle, Star } from "lucide-react";

interface HeroSectionProps {
  scrollToSection: (id: string) => void;
}

const HeroSection = ({ scrollToSection }: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-luxury-white via-luxury-white-soft to-luxury-ivory overflow-hidden">
      <div className="absolute inset-0 bg-luxury-pattern opacity-5"></div>
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <Badge variant="outline" className="mb-4 text-luxury-gold border-luxury-gold">
            <Crown className="w-4 h-4 mr-2" />
            Comprehensive Guide
          </Badge>
          <h1 className="text-4xl md:text-6xl font-playfair font-bold text-luxury-text mb-6">
            The Definitive Guide to
            <span className="block text-luxury-gold">Luxury Event Venues</span>
            <span className="block text-2xl md:text-3xl font-light">in Noida</span>
          </h1>
          <p className="text-xl text-luxury-text-muted max-w-2xl mx-auto mb-8">
            A comprehensive guide to selecting the perfect luxury venue for your most important celebrations
          </p>
        </div>

        {/* Table of Contents Navigation */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          <Button
            variant="outline"
            onClick={() => scrollToSection('introduction')}
            className="h-auto py-4 px-4 flex flex-col items-center space-y-2 border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-white"
          >
            <TrendingUp className="w-6 h-6" />
            <span className="text-sm">Evolution</span>
          </Button>
          <Button
            variant="outline"
            onClick={() => scrollToSection('luxury-standards')}
            className="h-auto py-4 px-4 flex flex-col items-center space-y-2 border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-white"
          >
            <Crown className="w-6 h-6" />
            <span className="text-sm">Standards</span>
          </Button>
          <Button
            variant="outline"
            onClick={() => scrollToSection('event-types')}
            className="h-auto py-4 px-4 flex flex-col items-center space-y-2 border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-white"
          >
            <Heart className="w-6 h-6" />
            <span className="text-sm">Event Types</span>
          </Button>
          <Button
            variant="outline"
            onClick={() => scrollToSection('planning-guide')}
            className="h-auto py-4 px-4 flex flex-col items-center space-y-2 border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-white"
          >
            <Calendar className="w-6 h-6" />
            <span className="text-sm">Planning</span>
          </Button>
          <Button
            variant="outline"
            onClick={() => scrollToSection('faq')}
            className="h-auto py-4 px-4 flex flex-col items-center space-y-2 border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-white"
          >
            <CheckCircle className="w-6 h-6" />
            <span className="text-sm">FAQ</span>
          </Button>
          <Button
            variant="outline"
            onClick={() => scrollToSection('opera-house')}
            className="h-auto py-4 px-4 flex flex-col items-center space-y-2 border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-white"
          >
            <Star className="w-6 h-6" />
            <span className="text-sm">Opera House</span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;