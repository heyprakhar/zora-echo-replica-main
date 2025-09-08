import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* YouTube Background Video - Cropped to hide bottom controls */}
      <div className="absolute inset-0" style={{ overflow: 'hidden' }}>
        <div 
          className="absolute inset-0"
          style={{
            bottom: '-2in', // Crop 2 inches from bottom
            height: 'calc(100% + 2in)' // Extend height to compensate
          }}
        >
          <iframe
            src="https://www.youtube.com/embed/Jw2yJ_EaqPI?autoplay=1&loop=1&mute=1&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&cc_load_policy=0&playsinline=1&disablekb=1&fs=0&playlist=Jw2yJ_EaqPI&vq=hd1080"
            title="Hero Video"
            className="absolute inset-0 w-full h-full"
            style={{
              minWidth: '100vw',
              minHeight: 'calc(100vh + 2in)',
              transform: 'scale(1.1)', // Slightly scale up to ensure full coverage
              transformOrigin: 'center center',
              objectFit: 'cover',
              pointerEvents: 'none'
            }}
            allow="autoplay; encrypted-media"
            allowFullScreen={false}
          />
        </div>
      </div>

      {/* Subtle vignette overlay for video clarity with focus */}
      <div className="absolute inset-0" style={{
        background: `radial-gradient(ellipse at center, transparent 0%, transparent 40%, rgba(0,0,0,0.4) 100%)`
      }}></div>
      
      {/* Very subtle top and bottom gradient for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40"></div>

      {/* Content with fade-in animation */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="mb-8"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-light mb-4 text-white drop-shadow-2xl" style={{
            textShadow: '0 0 40px rgba(212, 175, 55, 0.8), 0 0 80px rgba(212, 175, 55, 0.4), 2px 2px 4px rgba(0,0,0,0.8)'
          }}>
            An Exclusive Masterpiece
          </h1>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-light tracking-[0.3em] uppercase text-luxury-gold" style={{
            textShadow: '0 0 30px rgba(212, 175, 55, 0.6), 2px 2px 4px rgba(0,0,0,0.8)'
          }}>
            For the Refined Few
          </h2>
        </motion.div>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-white text-lg md:text-xl max-w-3xl mx-auto mb-12 leading-relaxed font-light tracking-wide"
          style={{
            textShadow: '2px 2px 8px rgba(0,0,0,0.8), 0 0 20px rgba(0,0,0,0.5)'
          }}
        >
          Experience the pinnacle of sophistication at The Opera House,
          <br className="hidden md:block" />
          where timeless elegance meets contemporary luxury.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a href="#contact">
            <Button 
              size="lg" 
              className="btn-luxury text-white font-light px-10 py-6 text-lg tracking-widest uppercase rounded-full min-w-[200px] shadow-2xl hover:shadow-luxury"
            >
              Reserve Your Date
            </Button>
          </a>
          <a href="#gallery">
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-white bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-luxury-gold-dark font-light px-10 py-6 text-lg tracking-widest uppercase rounded-full transition-all duration-300 min-w-[200px] shadow-2xl"
            >
              View Gallery
            </Button>
          </a>
        </motion.div>
      </motion.div>

      {/* Removed scroll indicator with animate-pulse */}
    </section>
  );
};

export default HeroSection;