import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Loader2, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { API_ENDPOINTS } from "@/utils/api";

// Form validation schema
const contactFormSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  phone: z.string().regex(/^[\+]?[\d\s\-\(\)]{10,}$/, "Please enter a valid phone number"),
  eventType: z.string().min(3, "Event type must be at least 3 characters"),
  eventDate: z.string().min(1, "Event date is required"),
  guestCount: z.string().min(1, "Guest count is required"),
  additionalDetails: z.string().optional()
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema)
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    console.log('📤 Submitting form to:', API_ENDPOINTS.contact);
    console.log('📋 Form data:', data);
    
    try {
      const response = await fetch(API_ENDPOINTS.contact, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      });
      
      console.log('📡 Response status:', response.status);
      console.log('📡 Response headers:', Object.fromEntries(response.headers.entries()));
      
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }
      
      const result = await response.json();
      console.log('📥 Response data:', result);
      
      if (result.success) {
        setSubmitStatus('success');
        setSubmitMessage('Thank you! Your inquiry has been sent successfully. We will contact you soon.');
        reset(); // Clear the form
      } else {
        setSubmitStatus('error');
        setSubmitMessage(result.message || 'Failed to send inquiry. Please try again.');
      }
    } catch (error) {
      console.error('❌ Contact form error:', error);
      setSubmitStatus('error');
      
      // More specific error messages
      if (error instanceof TypeError && error.message.includes('fetch')) {
        setSubmitMessage('Network error: Unable to connect to server. Please check your internet connection.');
      } else if (error instanceof Error) {
        setSubmitMessage(`Request failed: ${error.message}`);
      } else {
        setSubmitMessage('An unexpected error occurred. Please try again later.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <section id="contact" className="py-20 bg-luxury-dark-lighter">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="w-32 h-0.5 bg-luxury-gold mx-auto mb-8"></div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light text-luxury-gold mb-8 tracking-wide">
              Plan Your Distinguished
              <br />
              <span className="block mt-4">Celebration</span>
            </h2>
            <p className="text-luxury-text-muted text-xl font-light tracking-wide">
              Connect with our team to craft your perfect event
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-serif text-luxury-gold mb-6">
                  Get in Touch
                </h3>
                <p className="text-luxury-text font-light leading-relaxed mb-8">
                  Experience the epitome of luxury at The Opera House. Our
                  dedicated team is ready to assist you in creating
                  unforgettable moments that reflect your distinguished taste.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-luxury-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-luxury-gold" />
                  </div>
                  <div>
                    <h4 className="text-luxury-gold font-medium mb-1">
                      Location
                    </h4>
                    <p className="text-luxury-text font-light">
                      Bhule ram Palace, near Prateek Laurel, Sarfabad Village,
                      Sarfabad, Sector 73, Noida, Uttar Pradesh 201301
                      <br />
                      Noida, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-luxury-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 text-luxury-gold" />
                  </div>
                  <div>
                    <h4 className="text-luxury-gold font-medium mb-1">Phone</h4>
                    <p className="text-luxury-text font-light">
                      +91 9911620620
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-luxury-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-luxury-gold" />
                  </div>
                  <div>
                    <h4 className="text-luxury-gold font-medium mb-1">Email</h4>
                    <p className="text-luxury-text font-light">
                      theoperahousenoida@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-luxury-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="h-5 w-5 text-luxury-gold" />
                  </div>
                  <div>
                    <h4 className="text-luxury-gold font-medium mb-1">
                      Operating Hours
                    </h4>
                    <p className="text-luxury-text font-light">
                      Monday - Sunday: 9:00 AM - 11:00 PM
                      <br />
                      Event Planning: By Appointment
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="bg-luxury-dark border-luxury-gold/20 p-8 shadow-elegant">
              <h3 className="text-2xl font-serif text-luxury-gold mb-6">
                Request Information
              </h3>
              <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-luxury-text font-light mb-2">
                      Full Name
                    </label>
                    <Input
                      {...register('fullName')}
                      className={`bg-luxury-dark-lighter border-luxury-gold/30 text-luxury-text focus:border-luxury-gold ${
                        errors.fullName ? 'border-red-500' : ''
                      }`}
                      placeholder="Your name"
                    />
                    {errors.fullName && (
                      <p className="text-red-400 text-sm mt-1">{errors.fullName.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-luxury-text font-light mb-2">
                      Phone Number
                    </label>
                    <Input
                      {...register('phone')}
                      className={`bg-luxury-dark-lighter border-luxury-gold/30 text-luxury-text focus:border-luxury-gold ${
                        errors.phone ? 'border-red-500' : ''
                      }`}
                      placeholder="+91 9876543210"
                    />
                    {errors.phone && (
                      <p className="text-red-400 text-sm mt-1">{errors.phone.message}</p>
                    )}
                  </div>
                </div>

                {/* <div>
                  <label className="block text-luxury-text font-light mb-2">
                    Email Address
                  </label>
                  <Input
                    type="email"
                    className="bg-luxury-dark-lighter border-luxury-gold/30 text-luxury-text focus:border-luxury-gold"
                    placeholder="your.email@example.com"
                  />
                </div> */}

                <div>
                  <label className="block text-luxury-text font-light mb-2">
                    Event Type
                  </label>
                  <Input
                    {...register('eventType')}
                    className={`bg-luxury-dark-lighter border-luxury-gold/30 text-luxury-text focus:border-luxury-gold ${
                      errors.eventType ? 'border-red-500' : ''
                    }`}
                    placeholder="Wedding, Corporate, Social, etc."
                  />
                  {errors.eventType && (
                    <p className="text-red-400 text-sm mt-1">{errors.eventType.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-luxury-text font-light mb-2">
                    Event Date
                  </label>
                  <Input
                    {...register('eventDate')}
                    type="date"
                    className={`bg-luxury-dark-lighter border-luxury-gold/30 text-luxury-text focus:border-luxury-gold ${
                      errors.eventDate ? 'border-red-500' : ''
                    }`}
                  />
                  {errors.eventDate && (
                    <p className="text-red-400 text-sm mt-1">{errors.eventDate.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-luxury-text font-light mb-2">
                    Guest Count
                  </label>
                  <Input
                    {...register('guestCount')}
                    className={`bg-luxury-dark-lighter border-luxury-gold/30 text-luxury-text focus:border-luxury-gold ${
                      errors.guestCount ? 'border-red-500' : ''
                    }`}
                    placeholder="Approximate number of guests"
                  />
                  {errors.guestCount && (
                    <p className="text-red-400 text-sm mt-1">{errors.guestCount.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-luxury-text font-light mb-2">
                    Additional Details (Optional)
                  </label>
                  <Textarea
                    {...register('additionalDetails')}
                    className="bg-luxury-dark-lighter border-luxury-gold/30 text-luxury-text focus:border-luxury-gold min-h-[100px]"
                    placeholder="Tell us about your vision for this event..."
                  />
                </div>

                {/* Success/Error Messages */}
                {submitStatus === 'success' && (
                  <div className="flex items-center space-x-2 p-4 bg-green-900/30 border border-green-700 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <p className="text-green-300 text-sm">{submitMessage}</p>
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="flex items-center space-x-2 p-4 bg-red-900/30 border border-red-700 rounded-lg">
                    <Mail className="h-5 w-5 text-red-400" />
                    <p className="text-red-300 text-sm">{submitMessage}</p>
                  </div>
                )}

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full bg-luxury-gold hover:bg-luxury-gold-light text-luxury-dark font-medium py-4 text-lg tracking-wide shadow-luxury transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-5 w-5 mr-2 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    'Send Inquiry'
                  )}
                </Button>
              </form>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;