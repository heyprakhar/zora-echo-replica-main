import { useState } from "react";
import { motion } from "framer-motion";
import { Play, Pause, Volume2, VolumeX, Star, Quote } from "lucide-react";

const TestimonialSection = () => {
  const [activeVideo, setActiveVideo] = useState<number | null>(null);
  const [mutedVideos, setMutedVideos] = useState<Set<number>>(new Set());

  const testimonials = [
    {
      id: 1,
      name: "Priya & Arjun Sharma",
      event: "Wedding Reception",
      date: "December 2024",
      rating: 5,
      quote: "The Opera House made our dream wedding a reality. Every detail was perfect!",
      videoUrl: "/testimonials/video1.mp4", // Replace with actual video URLs
      thumbnail: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&auto=format&fit=crop&q=60"
    },
    {
      id: 2,
      name: "Rajesh Malhotra",
      event: "Corporate Summit",
      date: "November 2024",
      rating: 5,
      quote: "World-class facilities and impeccable service. Our international delegates were thoroughly impressed.",
      videoUrl: "/testimonials/video2.mp4",
      thumbnail: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format&fit=crop&q=60"
    },
    {
      id: 3,
      name: "Anita Desai",
      event: "50th Anniversary Celebration",
      date: "October 2024",
      rating: 5,
      quote: "The ambiance and attention to detail exceeded our expectations. Truly memorable!",
      videoUrl: "/testimonials/video3.mp4",
      thumbnail: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&auto=format&fit=crop&q=60"
    },
  ];

  const toggleVideo = (id: number) => {
    setActiveVideo(activeVideo === id ? null : id);
  };

  const toggleMute = (id: number) => {
    const newMuted = new Set(mutedVideos);
    if (newMuted.has(id)) {
      newMuted.delete(id);
    } else {
      newMuted.add(id);
    }
    setMutedVideos(newMuted);
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-luxury-dark to-luxury-dark-lighter relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-luxury-gold to-transparent"></div>
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-luxury-gold/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-luxury-gold/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center mb-6">
              <div className="w-12 h-0.5 bg-luxury-gold"></div>
              <Quote className="mx-4 text-luxury-gold w-8 h-8" />
              <div className="w-12 h-0.5 bg-luxury-gold"></div>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light text-luxury-gold mb-6 tracking-wide">
              Stories of Excellence
            </h2>
            <p className="text-luxury-text-muted text-xl font-light tracking-wide max-w-3xl mx-auto">
              Hear from our distinguished guests about their extraordinary experiences at The Opera House
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="group"
              >
                <div className="bg-luxury-dark border border-luxury-gold/20 rounded-lg overflow-hidden hover:border-luxury-gold/40 transition-all duration-500 hover:shadow-2xl hover:shadow-luxury-gold/10">
                  {/* Video Section */}
                  <div className="relative aspect-video bg-luxury-dark-lighter">
                    {activeVideo === testimonial.id ? (
                      <video
                        className="w-full h-full object-cover"
                        src={testimonial.videoUrl}
                        autoPlay
                        loop
                        muted={mutedVideos.has(testimonial.id)}
                        onError={(e) => {
                          console.error("Video failed to load:", e);
                          // Fallback to thumbnail if video fails
                          setActiveVideo(null);
                        }}
                      />
                    ) : (
                      <img
                        src={testimonial.thumbnail}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    )}

                    {/* Play/Pause Button */}
                    <button
                      onClick={() => toggleVideo(testimonial.id)}
                      className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      <div className="w-16 h-16 bg-luxury-gold/90 rounded-full flex items-center justify-center hover:bg-luxury-gold transition-colors duration-300">
                        {activeVideo === testimonial.id ? (
                          <Pause className="w-6 h-6 text-luxury-dark" />
                        ) : (
                          <Play className="w-6 h-6 text-luxury-dark ml-1" />
                        )}
                      </div>
                    </button>

                    {/* Mute Button */}
                    {activeVideo === testimonial.id && (
                      <button
                        onClick={() => toggleMute(testimonial.id)}
                        className="absolute bottom-4 right-4 w-10 h-10 bg-luxury-dark/80 rounded-full flex items-center justify-center hover:bg-luxury-dark transition-colors duration-300"
                      >
                        {mutedVideos.has(testimonial.id) ? (
                          <VolumeX className="w-5 h-5 text-luxury-gold" />
                        ) : (
                          <Volume2 className="w-5 h-5 text-luxury-gold" />
                        )}
                      </button>
                    )}
                  </div>

                  {/* Content Section */}
                  <div className="p-6">
                    {/* Rating */}
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-luxury-gold text-luxury-gold" />
                      ))}
                    </div>

                    {/* Quote */}
                    <p className="text-luxury-text font-light italic mb-6 leading-relaxed">
                      "{testimonial.quote}"
                    </p>

                    {/* Author Info */}
                    <div className="border-t border-luxury-gold/20 pt-4">
                      <h4 className="text-luxury-gold font-serif text-lg mb-1">
                        {testimonial.name}
                      </h4>
                      <p className="text-luxury-text-muted text-sm font-light">
                        {testimonial.event} • {testimonial.date}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mt-16"
          >
            <p className="text-luxury-text-muted text-lg font-light mb-8">
              Join our distinguished clientele and create your own memorable story
            </p>
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-4 bg-luxury-gold text-luxury-dark font-serif text-lg rounded-lg hover:bg-luxury-gold-light transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-luxury-gold/30"
            >
              Plan Your Event
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialSection;