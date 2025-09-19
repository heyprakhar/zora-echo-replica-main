import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, Users, Camera, Music, Car, Utensils, Sparkles, Shield, Building, Star, Settings } from "lucide-react";

const FunctionHallNoida = () => {
  return (
    <>
      <Helmet>
        <title>Function Hall in Noida | Multi-Purpose Event Venue | The Opera House</title>
        <meta
          name="description"
          content="Versatile function hall in Noida for corporate events, conferences, social functions. Multi-purpose venue with 500+ capacity & complete event services."
        />
        <meta
          name="keywords"
          content="function hall noida, multi purpose hall noida, conference hall noida, corporate event venue noida, social function hall, meeting hall noida"
        />
        <link rel="canonical" href="https://theoperahouse.com/function-hall-noida" />

        {/* Function Hall Schema */}
        <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "EventVenue",
          "name": "The Opera House - Premier Function Hall in Noida",
          "description": "Versatile function hall in Noida for corporate events, conferences, social functions with complete event services and professional amenities",
          "url": "https://theoperahouse.com/function-hall-noida",
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
            {"@type": "LocationFeatureSpecification", "name": "Multi-Purpose Hall"},
            {"@type": "LocationFeatureSpecification", "name": "Conference Setup"},
            {"@type": "LocationFeatureSpecification", "name": "AV Equipment"},
            {"@type": "LocationFeatureSpecification", "name": "Corporate Catering"},
            {"@type": "LocationFeatureSpecification", "name": "Meeting Rooms"},
            {"@type": "LocationFeatureSpecification", "name": "Business Center"},
            {"@type": "LocationFeatureSpecification", "name": "Parking Facility"}
          ],
          "priceRange": "₹₹₹",
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.6",
            "reviewCount": "85"
          }
        })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-luxury-ivory to-luxury-white">
        <Navigation />

        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-r from-luxury-gold/10 to-luxury-cream/20">
          <div className="absolute inset-0 bg-gradient-to-br from-transparent to-transparent"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center">
              <Badge className="mb-6 bg-luxury-gold text-white">
                <Building className="h-4 w-4 mr-2" />
                Function Hall
              </Badge>
              <h1 className="text-4xl md:text-6xl font-serif font-bold text-luxury-text mb-6 leading-tight">
                Versatile Function Hall in{" "}
                <span className="text-luxury-blue">
                  Noida
                </span>
              </h1>
              <p className="text-xl text-luxury-text-muted max-w-3xl mx-auto font-light leading-relaxed">
                Host your corporate events, conferences, and social functions in our flexible multi-purpose hall, designed to adapt to any occasion with professional amenities.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-luxury-gold hover:bg-luxury-gold-dark px-8 py-3 text-lg">
                  <Building className="h-5 w-5 mr-2" />
                  Book Your Function
                </Button>
                <Button variant="outline" className="border-luxury-blue text-luxury-blue hover:bg-luxury-blue/10 px-8 py-3 text-lg">
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
                Function Hall Features
              </h2>
              <p className="text-lg text-luxury-text-muted max-w-2xl mx-auto">
                Professional amenities and flexible setup for any type of function or event
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Settings,
                  title: "Flexible Layout",
                  description: "Adaptable hall configuration for different event types and seating"
                },
                {
                  icon: Users,
                  title: "500+ Capacity",
                  description: "Large function hall accommodating corporate and social events"
                },
                {
                  icon: Camera,
                  title: "AV Equipment",
                  description: "Professional audio-visual setup for presentations and conferences"
                },
                {
                  icon: Building,
                  title: "Business Setup",
                  description: "Corporate-ready environment with meeting room facilities"
                },
                {
                  icon: Utensils,
                  title: "Corporate Catering",
                  description: "Professional catering services for business and social functions"
                },
                {
                  icon: Music,
                  title: "Sound System",
                  description: "High-quality audio system for speeches and presentations"
                },
                {
                  icon: Car,
                  title: "Business Parking",
                  description: "Ample parking space for corporate guests and attendees"
                },
                {
                  icon: Shield,
                  title: "Event Security",
                  description: "Professional security for corporate and private functions"
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

        {/* Function Types */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-luxury-text mb-4">
                Perfect for Every Function
              </h2>
              <p className="text-lg text-luxury-text-muted max-w-2xl mx-auto">
                Our versatile function hall adapts to various event types and requirements
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Corporate Events",
                  description: "Company meetings, conferences, seminars, and business presentations",
                  icon: Building,
                  features: ["AV Setup", "Business Catering", "Meeting Rooms", "Wi-Fi"]
                },
                {
                  title: "Social Functions",
                  description: "Family gatherings, community events, and social celebrations",
                  icon: Users,
                  features: ["Flexible Seating", "Entertainment Setup", "Social Catering", "Decoration"]
                },
                {
                  title: "Conference & Seminars",
                  description: "Professional conferences, workshops, and educational seminars",
                  icon: Settings,
                  features: ["Presentation Setup", "Professional Lighting", "Recording Facilities", "Break Areas"]
                }
              ].map((type, index) => (
                <Card key={index} className="border-luxury-gold/20 hover:shadow-lg transition-shadow">
                  <CardHeader className="text-center pb-4">
                    <type.icon className="h-12 w-12 text-luxury-gold mx-auto mb-4" />
                    <CardTitle className="text-luxury-blue mb-2">{type.title}</CardTitle>
                    <CardDescription className="text-luxury-text-muted">
                      {type.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {type.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm text-luxury-text-muted">
                          <div className="h-1.5 w-1.5 bg-luxury-gold rounded-full mr-2"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Function Packages */}
        <section className="py-20 bg-white/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-luxury-text mb-4">
                Function Hall Packages
              </h2>
              <p className="text-lg text-luxury-text-muted max-w-2xl mx-auto">
                Comprehensive packages designed for different types of functions and events
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Business Meeting",
                  price: "Starting from ₹75,000",
                  features: [
                    "Half-day hall access",
                    "Basic AV equipment",
                    "Meeting room setup",
                    "Coffee/tea service",
                    "Wi-Fi access",
                    "Parking facility"
                  ]
                },
                {
                  name: "Corporate Conference",
                  price: "Starting from ₹1,50,000",
                  features: [
                    "Full day hall access",
                    "Professional AV setup",
                    "Conference catering (100 guests)",
                    "Business center access",
                    "Registration desk",
                    "Break area setup",
                    "Recording facilities",
                    "Dedicated support staff"
                  ],
                  popular: true
                },
                {
                  name: "Grand Function",
                  price: "Starting from ₹3,50,000",
                  features: [
                    "Multi-day event access",
                    "Complete AV & tech support",
                    "Premium catering (300+ guests)",
                    "Multiple room configurations",
                    "Event management team",
                    "Live streaming setup",
                    "VIP arrangements",
                    "Complete logistics support"
                  ]
                }
              ].map((pkg, index) => (
                <Card key={index} className={`relative ${pkg.popular ? 'border-luxury-blue ring-2 ring-luxury-blue/20' : 'border-luxury-gold/20'} hover:shadow-lg transition-shadow`}>
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-luxury-blue text-white px-4 py-1">
                        <Star className="h-3 w-3 mr-1" />
                        Most Popular
                      </Badge>
                    </div>
                  )}
                  <CardHeader className="text-center pb-6">
                    <CardTitle className="text-2xl text-luxury-text mb-2">{pkg.name}</CardTitle>
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

        {/* Why Choose Our Function Hall */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-luxury-text mb-6">
                  Why Choose Our Function Hall?
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="h-8 w-8 bg-luxury-gold rounded-full flex items-center justify-center">
                        <Settings className="h-4 w-4 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-luxury-blue mb-2">Flexible & Adaptable</h3>
                      <p className="text-luxury-text-muted">Multi-purpose hall that can be configured for any type of function or event requirement.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="h-8 w-8 bg-luxury-gold rounded-full flex items-center justify-center">
                        <Building className="h-4 w-4 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-luxury-blue mb-2">Professional Setup</h3>
                      <p className="text-luxury-text-muted">Business-ready environment with modern amenities and professional services.</p>
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
                      <p className="text-luxury-text-muted">From event planning to catering, we provide comprehensive support for successful functions.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-w-16 aspect-h-12 rounded-lg overflow-hidden shadow-luxury">
                  <div className="bg-gradient-to-br from-luxury-gold/20 to-luxury-gold/40 flex items-center justify-center">
                    <div className="text-center text-luxury-text">
                      <Building className="h-16 w-16 mx-auto mb-4 text-luxury-gold" />
                      <p className="text-lg font-semibold">Function Hall Gallery</p>
                      <p className="text-sm text-luxury-text-muted">Coming Soon</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-luxury-gold/10 to-luxury-cream/20">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-luxury-text mb-6">
              Ready to Book Your Function Hall?
            </h2>
            <p className="text-lg text-luxury-text-muted mb-8 max-w-2xl mx-auto">
              Contact us today to discuss your function requirements and book our versatile function hall in Noida.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-luxury-gold hover:bg-luxury-gold-dark px-8 py-3 text-lg">
                <Building className="h-5 w-5 mr-2" />
                Book Consultation
              </Button>
              <Button variant="outline" className="border-luxury-blue text-luxury-blue hover:bg-luxury-blue/10 px-8 py-3 text-lg">
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

export default FunctionHallNoida;