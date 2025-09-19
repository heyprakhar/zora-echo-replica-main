import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="overview" className="py-24 bg-gradient-to-b from-luxury-white to-luxury-ivory relative overflow-hidden">
      {/* Decorative golden accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-luxury-gold to-transparent"></div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <div className="mb-12">
            <div className="flex items-center justify-center mb-8">
              <div className="w-20 h-[1px] bg-gradient-to-r from-transparent to-luxury-gold"></div>
              <div className="mx-4 w-2 h-2 rotate-45 bg-luxury-gold"></div>
              <div className="w-20 h-[1px] bg-gradient-to-l from-transparent to-luxury-gold"></div>
            </div>
            <h2 className="heading-luxury mb-4">
              A New Era
            </h2>
            <p className="text-2xl md:text-3xl font-serif font-light text-luxury-gold-dark tracking-[0.2em] uppercase">
              of Celebrations
            </p>
          </div>
          
          <p className="text-luxury-text text-base md:text-lg max-w-4xl mx-auto leading-loose font-light mb-12 tracking-wide">
            Experience a setting crafted for timeless and luxurious celebrations. The Opera House is an icon of luxury,
            sophistication, elegance, and exclusivity. Spanning over 25000 sq.ft., The Opera House sets a new
            benchmark for bespoke events, intimate celebrations, and gatherings, offering an unparalleled fusion
            of grandeur, elegance, and opulence.
          </p>

          <Button 
            variant="outline" 
            size="lg"
            className="border-2 border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-white font-light px-10 py-5 text-base tracking-[0.2em] uppercase rounded-full transition-all duration-300 hover:scale-105 hover:shadow-luxury"
          >
            Schedule Your Visit
          </Button>
        </motion.div>

        {/* Stats Section with elegant cards */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">
          <div className="text-center group hover:scale-105 transition-all duration-300">
            <div className="bg-white rounded-xl p-4 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300">
              <div className="text-2xl md:text-3xl font-serif font-semibold text-gray-900 mb-2">25,000</div>
              <p className="text-gray-700 font-medium tracking-[0.1em] uppercase text-xs">Square Feet</p>
            </div>
          </div>
          <div className="text-center group hover:scale-105 transition-all duration-300">
            <div className="bg-white rounded-xl p-4 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300">
              <div className="text-2xl md:text-3xl font-serif font-semibold text-gray-900 mb-2">700+</div>
              <p className="text-gray-700 font-medium tracking-[0.1em] uppercase text-xs">Guest Capacity</p>
            </div>
          </div>
          <div className="text-center group hover:scale-105 transition-all duration-300">
            <div className="bg-white rounded-xl p-4 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300">
              <div className="text-2xl md:text-3xl font-serif font-semibold text-gray-900 mb-2">5★</div>
              <p className="text-gray-700 font-medium tracking-[0.1em] uppercase text-xs">Premium Service</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;