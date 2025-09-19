import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, Users, Camera, Music, Car, Utensils, Sparkles, Shield, Crown, Star } from "lucide-react";

const MarriageHallNoida = () => {
  return (
    <>
      <Helmet>
        <title>Marriage Hall in Noida | Best Wedding Venue | The Opera House</title>
        <meta
          name="description"
          content="Elegant marriage hall in Noida for traditional wedding ceremonies. Luxury venue with mandap setup, 500+ capacity, premium catering & full wedding services."
        />
        <meta
          name="keywords"
          content="marriage hall noida, wedding hall noida, marriage venue noida, wedding ceremony hall, luxury marriage hall, mandap decoration noida, traditional wedding venue"
        />
        <link rel="canonical" href="https://theoperahouse.com/marriage-hall-noida" />

        {/* Marriage Hall Schema */}
        <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "EventVenue",
          "name": "The Opera House - Premier Marriage Hall in Noida",
          "description": "Luxury marriage hall in Noida with traditional mandap setup, premium amenities and complete wedding ceremony services",
          "url": "https://theoperahouse.com/marriage-hall-noida",
          "telephone": "+91 9911620620",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "The Opera House Banquet, Near Prateek Laurel, Sector-73",
            "addressLocality": "Noida",
            "addressRegion": "Uttar Pradesh",
            "postalCode": "201307",
            "addressCountry": "IN"
          },
          "maximumAttendeeCapacity": 500,
          "amenityFeature": [
            {"@type": "LocationFeatureSpecification", "name": "Traditional Mandap Setup"},
            {"@type": "LocationFeatureSpecification", "name": "Marriage Ceremony Hall"},
            {"@type": "LocationFeatureSpecification", "name": "Bridal Suite"},
            {"@type": "LocationFeatureSpecification", "name": "Priest Coordination"},
            {"@type": "LocationFeatureSpecification", "name": "Traditional Catering"},
            {"@type": "LocationFeatureSpecification", "name": "Cultural Music System"},
            {"@type": "LocationFeatureSpecification", "name": "Parking Facility"}
          ],
          "priceRange": "₹₹₹₹",
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "reviewCount": "150"
          }
        })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-luxury-ivory to-luxury-white">
        <Navigation />

        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-luxury-gold/10 to-luxury-cream/20"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center">
              <Badge className="mb-6 bg-luxury-gold text-white">
                <Crown className="h-4 w-4 mr-2" />
                Traditional Marriage Hall
              </Badge>
              <h1 className="text-4xl md:text-6xl font-serif font-bold text-luxury-text mb-6 leading-tight">
                Elegant Marriage Hall in{" "}
                <span className="text-luxury-blue">
                  Noida
                </span>
              </h1>
              <p className="text-xl text-luxury-text-muted max-w-3xl mx-auto font-light leading-relaxed">
                Celebrate your sacred union in our beautifully designed marriage hall, perfect for traditional wedding ceremonies with mandap setup and cultural celebrations.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-luxury-gold hover:bg-luxury-gold-dark px-8 py-3 text-lg">
                  <Heart className="h-5 w-5 mr-2" />
                  Book Your Marriage Hall
                </Button>
                <Button variant="outline" className="border-luxury-blue text-luxury-blue px-8 py-3 text-lg">
                  Virtual Tour
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-20 bg-white/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-luxury-text mb-4">
                Marriage Hall Features
              </h2>
              <p className="text-lg text-luxury-text-muted max-w-2xl mx-auto">
                Everything you need for a perfect traditional wedding ceremony
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Crown,
                  title: "Traditional Mandap",
                  description: "Beautiful mandap setup with floral decorations and traditional elements"
                },
                {
                  icon: Users,
                  title: "500+ Capacity",
                  description: "Spacious hall accommodating large family gatherings"
                },
                {
                  icon: Sparkles,
                  title: "Bridal Suite",
                  description: "Private preparation room for the bride with luxury amenities"
                },
                {
                  icon: Music,
                  title: "Cultural Music",
                  description: "Sound system perfect for traditional ceremony music"
                },
                {
                  icon: Utensils,
                  title: "Traditional Catering",
                  description: "Authentic regional cuisines and traditional wedding feast"
                },
                {
                  icon: Camera,
                  title: "Photography Area",
                  description: "Dedicated spaces for wedding photography and videography"
                },
                {
                  icon: Car,
                  title: "Valet Parking",
                  description: "Convenient parking services for all your guests"
                },
                {
                  icon: Shield,
                  title: "Event Security",
                  description: "Professional security ensuring a safe celebration"
                }
              ].map((feature, index) => (
                <Card key={index} className="border-luxury-gold/20 hover:shadow-lg transition-shadow">
                  <CardHeader className="text-center pb-4">
                    <feature.icon className="h-12 w-12 text-luxury-gold mx-auto mb-4" />
                    <CardTitle className="text-luxury-blue">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center text-luxury-text-muted">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Marriage Packages */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-luxury-text mb-4">
                Marriage Hall Packages
              </h2>
              <p className="text-lg text-luxury-text-muted max-w-2xl mx-auto">
                Comprehensive packages for your traditional wedding ceremony
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Traditional Ceremony",
                  price: "Starting from ₹2,50,000",
                  features: [
                    "Marriage hall for 6 hours",
                    "Traditional mandap decoration",
                    "Bridal suite access",
                    "Basic sound system",
                    "Parking facility",
                    "Security services"
                  ]
                },
                {
                  name: "Grand Celebration",
                  price: "Starting from ₹4,50,000",
                  features: [
                    "Full day hall access",
                    "Premium mandap with flowers",
                    "Traditional catering (200 guests)",
                    "Bridal suite with amenities",
                    "Professional photography area",
                    "Cultural music system",
                    "Priest coordination",
                    "Valet parking"
                  ],
                  popular: true
                },
                {
                  name: "Royal Wedding",
                  price: "Starting from ₹7,50,000",
                  features: [
                    "Two-day celebration access",
                    "Royal mandap with premium décor",
                    "Multi-cuisine catering (500 guests)",
                    "Luxury bridal & groom suites",
                    "Professional photography/videography",
                    "Traditional dance performances",
                    "Horse arrangement (Baraat)",
                    "Complete event management"
                  ]
                }
              ].map((pkg, index) => (
                <Card key={index} className={`relative ${pkg.popular ? 'border-luxury-blue ring-2 ring-luxury-blue/20' : 'border-luxury-gold/20'} hover:shadow-lg transition-shadow`}>
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-luxury-gold text-white px-4 py-1">
                        <Star className="h-3 w-3 mr-1" />
                        Most Popular
                      </Badge>
                    </div>
                  )}
                  <CardHeader className="text-center pb-6">
                    <CardTitle className="text-2xl text-luxury-blue mb-2">{pkg.name}</CardTitle>
                    <CardDescription className="text-3xl font-bold text-luxury-gold">{pkg.price}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {pkg.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-luxury-text-muted">
                          <div className="h-2 w-2 bg-luxury-gold rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full mt-6 bg-luxury-gold hover:bg-luxury-gold-dark">
                      Book This Package
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Our Marriage Hall */}
        <section className="py-20 bg-white/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-luxury-text mb-6">
                  Why Choose Our Marriage Hall?
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="h-8 w-8 bg-luxury-gold rounded-full flex items-center justify-center">
                        <Crown className="h-4 w-4 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-luxury-blue mb-2">Traditional Elegance</h3>
                      <p className="text-luxury-text-muted">Authentic traditional setup with modern luxury amenities for your perfect wedding ceremony.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="h-8 w-8 bg-luxury-gold rounded-full flex items-center justify-center">
                        <Users className="h-4 w-4 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-luxury-blue mb-2">Spacious & Comfortable</h3>
                      <p className="text-luxury-text-muted">Large marriage hall accommodating 500+ guests with comfortable seating arrangements.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="h-8 w-8 bg-luxury-gold rounded-full flex items-center justify-center">
                        <Sparkles className="h-4 w-4 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-luxury-blue mb-2">Complete Services</h3>
                      <p className="text-luxury-text-muted">From mandap decoration to catering, we handle every aspect of your marriage ceremony.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-w-16 aspect-h-12 rounded-lg overflow-hidden shadow-luxury">
                  <div className="bg-gradient-to-br from-luxury-gold/20 to-luxury-gold/40 flex items-center justify-center">
                    <div className="text-center text-luxury-text">
                      <Crown className="h-16 w-16 mx-auto mb-4 text-luxury-gold" />
                      <p className="text-lg font-semibold">Marriage Hall Gallery</p>
                      <p className="text-sm text-luxury-text-muted">Coming Soon</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-luxury-gold/10 to-luxury-gold/5">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-luxury-text mb-6">
              Ready to Book Your Marriage Hall?
            </h2>
            <p className="text-lg text-luxury-text-muted mb-8 max-w-2xl mx-auto">
              Contact us today to discuss your wedding ceremony requirements and book our elegant marriage hall in Noida.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-luxury-gold hover:bg-luxury-gold-dark px-8 py-3 text-lg">
                <Heart className="h-5 w-5 mr-2" />
                Book Consultation
              </Button>
              <Button variant="outline" className="border-luxury-blue text-luxury-blue px-8 py-3 text-lg">
                Call +91 9911620620
              </Button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default MarriageHallNoida;