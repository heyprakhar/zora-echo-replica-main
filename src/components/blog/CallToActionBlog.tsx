import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Phone, MapPin, Calendar, Star } from 'lucide-react';

interface CallToActionBlogProps {
  title?: string;
  description?: string;
  phone?: string;
  address?: string;
  className?: string;
}

const CallToActionBlog: React.FC<CallToActionBlogProps> = ({
  title = "Ready to Plan Your Luxury Event?",
  description = "Experience the difference that true luxury makes at The Opera House. Our dedicated team is ready to create your perfect celebration.",
  phone = "+91 9911620620",
  address = "The Opera House Banquet, Near Prateek Laurel, Sector-73, Noida-201307",
  className = ''
}) => {
  return (
    <Card className={`bg-gradient-to-br from-luxury-gold/10 to-luxury-gold/20 border-luxury-gold/30 mt-12 ${className}`}>
      <CardContent className="p-8">
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <Star className="text-luxury-gold w-8 h-8" />
          </div>

          <h3 className="text-2xl font-playfair font-bold text-luxury-text mb-4">
            {title}
          </h3>

          <p className="text-luxury-text-muted mb-8 max-w-2xl mx-auto">
            {description}
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-8">
            <div className="flex items-center gap-2 text-luxury-text">
              <Phone className="w-5 h-5 text-luxury-gold" />
              <span className="font-semibold">{phone}</span>
            </div>
            <div className="flex items-center gap-2 text-luxury-text">
              <MapPin className="w-5 h-5 text-luxury-gold" />
              <span className="font-semibold">{address}</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              size="lg"
              className="bg-luxury-gold hover:bg-luxury-gold/90 text-white font-semibold px-8"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Schedule Venue Tour
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-white font-semibold px-8"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CallToActionBlog;