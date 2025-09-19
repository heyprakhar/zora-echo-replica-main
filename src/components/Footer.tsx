import { MapPin, Phone, Mail } from "lucide-react";
// import operaLogo from "/lovable-uploads/5d969e45-9297-4f91-9ab3-eea2f6654535.png";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-luxury-ivory to-luxury-white border-t-2 border-luxury-gold/30 relative">
      {/* Decorative top accent */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-luxury-gold to-transparent"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo and Description */}
          <div className="space-y-6 lg:col-span-1">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="text-2xl lg:text-3xl font-serif font-bold text-luxury-gold-dark drop-shadow-sm">
                  THE OPERA HOUSE
                </div>
                <div className="absolute -bottom-2 left-0 w-32 h-[1px] bg-gradient-to-r from-luxury-gold to-transparent"></div>
              </div>
            </div>
            <p className="text-luxury-text font-light leading-relaxed max-w-sm tracking-wide">
              A masterpiece reserved for the distinguished. Experience luxury
              events at Noida's premier convention center.
            </p>
            <div className="text-luxury-text-muted text-xs">
              <div className="text-luxury-gold-dark font-light tracking-[0.3em]">
                LUXURY • ELEGANCE • EXCLUSIVITY
              </div>
            </div>
          </div>

          {/* Venues */}
          <div className="space-y-6">
            <h3 className="text-xl font-serif bg-gradient-to-r from-luxury-gold to-luxury-gold-dark bg-clip-text text-transparent mb-2">
              Our Venues
            </h3>
            <div className="space-y-3">
              <a
                href="/grand-ballroom-excellence"
                className="block text-luxury-text hover:text-luxury-blue transition-all duration-300 font-light hover:pl-2 tracking-wide"
              >
                Grand Ballroom
              </a>
              <a
                href="/outdoor-garden-celebrations"
                className="block text-luxury-text hover:text-luxury-blue transition-all duration-300 font-light hover:pl-2 tracking-wide"
              >
                Outdoor Gardens
              </a>
              <a
                href="/glass-house-elegance"
                className="block text-luxury-text hover:text-luxury-blue transition-all duration-300 font-light hover:pl-2 tracking-wide"
              >
                Glass House
              </a>
              <a
                href="/event-excellence-showcase"
                className="block text-luxury-text hover:text-luxury-blue transition-all duration-300 font-light hover:pl-2 tracking-wide"
              >
                Complete Venue Tour
              </a>
            </div>
          </div>

          {/* Experience */}
          <div className="space-y-6">
            <h3 className="text-xl font-serif bg-gradient-to-r from-luxury-gold to-luxury-gold-dark bg-clip-text text-transparent mb-2">
              Experience
            </h3>
            <div className="space-y-3">
              <a
                href="/service-excellence-standards"
                className="block text-luxury-text hover:text-luxury-blue transition-all duration-300 font-light hover:pl-2 tracking-wide"
              >
                Service Excellence
              </a>
              <a
                href="/culinary-excellence-program"
                className="block text-luxury-text hover:text-luxury-blue transition-all duration-300 font-light hover:pl-2 tracking-wide"
              >
                Culinary Journey
              </a>
              <a
                href="/technology-innovation-features"
                className="block text-luxury-text hover:text-luxury-blue transition-all duration-300 font-light hover:pl-2 tracking-wide"
              >
                Technology Features
              </a>
              <a
                href="/virtual-tour"
                className="block text-luxury-text hover:text-luxury-blue transition-all duration-300 font-light hover:pl-2 tracking-wide"
              >
                Virtual Tour
              </a>
            </div>
          </div>

          {/* Event Types */}
          <div className="space-y-6">
            <h3 className="text-xl font-serif bg-gradient-to-r from-luxury-gold to-luxury-gold-dark bg-clip-text text-transparent mb-2">
              Event Types
            </h3>
            <div className="space-y-3">
              <a
                href="/wedding-venue-noida"
                className="block text-luxury-text hover:text-luxury-blue transition-all duration-300 font-light hover:pl-2 tracking-wide"
              >
                Luxury Weddings
              </a>
              <a
                href="/corporate-events"
                className="block text-luxury-text hover:text-luxury-blue transition-all duration-300 font-light hover:pl-2 tracking-wide"
              >
                Corporate Events
              </a>
              <a
                href="/social-functions"
                className="block text-luxury-text hover:text-luxury-blue transition-all duration-300 font-light hover:pl-2 tracking-wide"
              >
                Social Functions
              </a>
              <a
                href="/luxury-banquet-hall-noida"
                className="block text-luxury-text hover:text-luxury-blue transition-all duration-300 font-light hover:pl-2 tracking-wide"
              >
                Luxury Banquet Events
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-xl font-serif bg-gradient-to-r from-luxury-gold to-luxury-gold-dark bg-clip-text text-transparent mb-2">
              Services
            </h3>
            <div className="space-y-3">
              <a
                href="/event-planning"
                className="block text-luxury-text hover:text-luxury-blue transition-all duration-300 font-light hover:pl-2 tracking-wide"
              >
                Event Planning
              </a>
              <a
                href="/decor-design"
                className="block text-luxury-text hover:text-luxury-blue transition-all duration-300 font-light hover:pl-2 tracking-wide"
              >
                Décor & Design
              </a>
              <a
                href="/entertainment"
                className="block text-luxury-text hover:text-luxury-blue transition-all duration-300 font-light hover:pl-2 tracking-wide"
              >
                Entertainment
              </a>
              <a
                href="/luxury-event-guide-noida"
                className="block text-luxury-text hover:text-luxury-blue transition-all duration-300 font-light hover:pl-2 tracking-wide"
              >
                Event Guide
              </a>
            </div>
          </div>
        </div>

        {/* Contact Information - Full Width Below */}
        <div className="mt-12 border-t border-luxury-gold/30 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-serif bg-gradient-to-r from-luxury-gold to-luxury-gold-dark bg-clip-text text-transparent">
                Get in Touch
              </h3>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-luxury-gold-dark flex-shrink-0 mt-0.5" />
                <div className="text-luxury-text font-light text-sm">
                  The Opera House Banquet<br />
                  Near Prateek Laurel<br />
                  Sector-73<br />
                  Noida-201307
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-serif bg-gradient-to-r from-luxury-gold to-luxury-gold-dark bg-clip-text text-transparent">
                Contact Details
              </h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-luxury-gold-dark flex-shrink-0" />
                  <div className="text-luxury-text font-light">
                    +91 9911620620
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-luxury-gold-dark flex-shrink-0" />
                  <div className="text-luxury-text font-light">
                    theoperahousenoida@gmail.com
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-serif bg-gradient-to-r from-luxury-gold to-luxury-gold-dark bg-clip-text text-transparent">
                Quick Actions
              </h3>
              <div className="space-y-3">
                <a
                  href="#overview"
                  className="block text-luxury-text hover:text-luxury-blue transition-all duration-300 font-light hover:pl-2 tracking-wide"
                >
                  Virtual Tour
                </a>
                <a
                  href="#features"
                  className="block text-luxury-text hover:text-luxury-blue transition-all duration-300 font-light hover:pl-2 tracking-wide"
                >
                  Our Spaces
                </a>
                <a
                  href="#contact"
                  className="block text-luxury-text hover:text-luxury-blue transition-all duration-300 font-light hover:pl-2 tracking-wide"
                >
                  Book Consultation
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-12 border-t border-luxury-gold/30 pt-12">
          <h3 className="text-2xl font-serif bg-gradient-to-r from-luxury-gold to-luxury-gold-dark bg-clip-text text-transparent mb-6 text-center">
            Find Us
          </h3>
          <div className="w-full overflow-hidden rounded-lg shadow-lg border border-luxury-gold/20">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d912.6555445065326!2d77.39245768529053!3d28.558851382434865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cef1a069c7d21%3A0x2d8f8acad99fb1d!2sTHE%20OPERA%20HOUSE%2C%20Bhule%20ram%20Palace%2C%20near%20Prateek%20Laurel%2C%20Sarfabad%20Village%2C%20Sarfabad%2C%20Sector%2073%2C%20Noida%2C%20Uttar%20Pradesh%20201301!5e0!3m2!1sen!2sin!4v1736973161370!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            />
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-luxury-gold/30 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-luxury-text text-sm font-light tracking-wide">
            © {new Date(Date.now()).getFullYear()} The Opera House. All rights reserved.
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="#"
              className="text-luxury-text hover:text-luxury-blue transition-all duration-300 text-sm font-light tracking-wide hover:scale-105"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-luxury-text hover:text-luxury-blue transition-all duration-300 text-sm font-light tracking-wide hover:scale-105"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;