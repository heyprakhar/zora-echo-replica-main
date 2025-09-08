import { MapPin, Phone, Mail } from "lucide-react";
// import operaLogo from "/lovable-uploads/5d969e45-9297-4f91-9ab3-eea2f6654535.png";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-luxury-ivory to-luxury-white border-t-2 border-luxury-gold/30 relative">
      {/* Decorative top accent */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-luxury-gold to-transparent"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="text-3xl font-serif bg-gradient-to-r from-luxury-gold to-luxury-gold-dark bg-clip-text text-transparent">
                  THE OPERA
                </div>
                <div className="text-sm tracking-[0.4em] text-luxury-gold-dark font-light uppercase">House</div>
                <div className="absolute -bottom-2 left-0 w-20 h-[1px] bg-gradient-to-r from-luxury-gold to-transparent"></div>
              </div>
            </div>
            <p className="text-luxury-text font-light leading-relaxed max-w-sm tracking-wide">
              A masterpiece reserved for the distinguished. Experience luxury
              events at Noida's premier convention center.
            </p>
            <div className="text-luxury-text-muted text-xs">
              <div></div>
              <div className="text-luxury-gold-dark font-light tracking-[0.3em]">
                LUXURY • ELEGANCE • EXCLUSIVITY
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-2xl font-serif bg-gradient-to-r from-luxury-gold to-luxury-gold-dark bg-clip-text text-transparent mb-2">
              Quick Links
            </h3>
            <div className="space-y-3">
              <a
                href="#overview"
                className="block text-luxury-text hover:text-luxury-gold transition-all duration-300 font-light hover:pl-2 tracking-wide"
              >
                Overview
              </a>
              <a
                href="#features"
                className="block text-luxury-text hover:text-luxury-gold transition-all duration-300 font-light hover:pl-2 tracking-wide"
              >
                Our Spaces
              </a>
              <a
                href="#gallery"
                className="block text-luxury-text hover:text-luxury-gold transition-all duration-300 font-light hover:pl-2 tracking-wide"
              >
                Gallery
              </a>
              <a
                href="#contact"
                className="block text-luxury-text hover:text-luxury-gold transition-all duration-300 font-light hover:pl-2 tracking-wide"
              >
                Contact Us
              </a>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-2xl font-serif bg-gradient-to-r from-luxury-gold to-luxury-gold-dark bg-clip-text text-transparent mb-2">
              Get in Touch
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-luxury-gold-dark flex-shrink-0 mt-0.5" />
                <div className="text-luxury-text font-light text-sm">
                  Bhule ram Palace, near Prateek Laurel, Sarfabad Village,
                  Sarfabad, Sector 73, Noida, Uttar Pradesh 201301 Noida, India
                </div>
              </div>
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
        </div>

        {/* Map Section */}
        <div className="mt-12 border-t border-luxury-gold/30 pt-12">
          <h3 className="text-2xl font-serif bg-gradient-to-r from-luxury-gold to-luxury-gold-dark bg-clip-text text-transparent mb-6 text-center">
            Find Us
          </h3>
          <div className="w-full overflow-hidden rounded-lg shadow-lg border border-luxury-gold/20">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7481390.63416101!2d70.6541092015946!3d23.710880873380276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cef1a069c7d21%3A0x2d8f8acad99fb1d!2sTHE%20OPERA%20HOUSE!5e0!3m2!1sen!2sin!4v1757320677370!5m2!1sen!2sin" 
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
              className="text-luxury-text hover:text-luxury-gold transition-all duration-300 text-sm font-light tracking-wide hover:scale-105"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-luxury-text hover:text-luxury-gold transition-all duration-300 text-sm font-light tracking-wide hover:scale-105"
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