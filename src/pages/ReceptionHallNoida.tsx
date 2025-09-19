import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, Users, Camera, Music, Car, Utensils, Sparkles, Shield, Wine, Star } from "lucide-react";

const ReceptionHallNoida = () => {
  return (
    <>
      <Helmet>
        <title>Reception Hall in Noida | Wedding Reception Venue | The Opera House</title>
        <meta
          name="description"
          content="Elegant reception hall in Noida for wedding receptions and celebrations. Luxury venue with dance floor, 500+ capacity, premium catering & entertainment services."
        />
        <meta
          name="keywords"
          content="reception hall noida, wedding reception venue noida, reception venue noida, party reception hall, luxury reception hall, reception banquet hall noida"
        />
        <link rel="canonical" href="https://theoperahouse.com/reception-hall-noida" />

        {/* Reception Hall Schema */}
        <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "EventVenue",
          "name": "The Opera House - Premier Reception Hall in Noida",
          "description": "Luxury reception hall in Noida with dance floor, premium amenities and complete reception services for weddings and celebrations",
          "url": "https://theoperahouse.com/reception-hall-noida",
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
            {"@type": "LocationFeatureSpecification", "name": "Dance Floor"},
            {"@type": "LocationFeatureSpecification", "name": "Reception Hall"},
            {"@type": "LocationFeatureSpecification", "name": "Stage Setup"},
            {"@type": "LocationFeatureSpecification", "name": "DJ & Music System"},
            {"@type": "LocationFeatureSpecification", "name": "Premium Catering"},
            {"@type": "LocationFeatureSpecification", "name": "Bar Services"},
            {"@type": "LocationFeatureSpecification", "name": "Parking Facility"}
          ],
          "priceRange": "₹₹₹₹",
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "reviewCount": "120"
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
                <Wine className="h-4 w-4 mr-2" />
                Reception Hall
              </Badge>
              <h1 className="text-4xl md:text-6xl font-serif font-bold text-luxury-text mb-6 leading-tight">
                Elegant Reception Hall in{" "}
                <span className="text-luxury-blue">
                  Noida
                </span>
              </h1>
              <p className="text-xl text-luxury-text-muted max-w-3xl mx-auto font-light leading-relaxed">
                Celebrate your special moments in our stunning reception hall, perfect for wedding receptions, anniversaries, and grand celebrations with entertainment and dining.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-luxury-gold hover:bg-luxury-gold-dark px-8 py-3 text-lg">
                  <Wine className="h-5 w-5 mr-2" />
                  Book Your Reception
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
                Reception Hall Features
              </h2>
              <p className="text-lg text-luxury-text-muted max-w-2xl mx-auto">
                Everything you need for an unforgettable reception celebration
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Sparkles,
                  title: "Grand Dance Floor",
                  description: "Spacious dance floor with professional lighting for celebrations"
                },
                {
                  icon: Users,
                  title: "500+ Capacity",
                  description: "Large reception hall accommodating all your guests comfortably"
                },
                {
                  icon: Music,
                  title: "Professional Stage",
                  description: "Elevated stage with premium sound and lighting systems"
                },
                {
                  icon: Wine,
                  title: "Bar Services",
                  description: "Professional bar setup with premium beverages and cocktails"
                },
                {
                  icon: Utensils,
                  title: "Gourmet Catering",
                  description: "Multi-cuisine buffet and plated dinner options"
                },
                {
                  icon: Camera,
                  title: "Photography Setup",
                  description: "Professional photography areas and backdrop arrangements"
                },
                {
                  icon: Car,
                  title: "Valet Parking",
                  description: "Convenient parking services for all reception guests"
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

        {/* Reception Packages */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-luxury-text mb-4">
                Reception Hall Packages
              </h2>
              <p className="text-lg text-luxury-text-muted max-w-2xl mx-auto">
                Comprehensive packages for your perfect reception celebration
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Classic Reception",
                  price: "Starting from ₹3,00,000",
                  features: [
                    "Reception hall for 6 hours",
                    "Basic stage and lighting",
                    "Dance floor access",
                    "Sound system",
                    "Basic decoration",
                    "Parking facility"
                  ]
                },
                {
                  name: "Premium Celebration",
                  price: "Starting from ₹5,50,000",
                  features: [
                    "Full evening hall access",
                    "Premium stage with lighting",
                    "Professional DJ services",
                    "Multi-cuisine buffet (200 guests)",
                    "Bar setup with beverages",
                    "Elegant decoration",
                    "Photography area",
                    "Valet parking"
                  ],
                  popular: true
                },
                {
                  name: "Grand Reception",
                  price: "Starting from ₹8,50,000",
                  features: [
                    "Full day hall access",
                    "Royal stage with premium décor",
                    "Live band and DJ",
                    "Premium buffet (500 guests)",
                    "Full bar with cocktails",
                    "Luxury decoration themes",
                    "Professional photography/videography",
                    "Entertainment performances",
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

        {/* Why Choose Our Reception Hall */}
        <section className="py-20 bg-white/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-luxury-text mb-6">
                  Why Choose Our Reception Hall?
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="h-8 w-8 bg-luxury-gold rounded-full flex items-center justify-center">
                        <Sparkles className="h-4 w-4 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-luxury-text mb-2">Entertainment Ready</h3>
                      <p className="text-luxury-text-muted">Professional stage, dance floor, and sound system perfect for celebrations and entertainment.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="h-8 w-8 bg-luxury-gold rounded-full flex items-center justify-center">
                        <Wine className="h-4 w-4 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-luxury-text mb-2">Premium Dining</h3>
                      <p className="text-luxury-text-muted">Gourmet catering options with bar services for an elevated reception experience.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="h-8 w-8 bg-luxury-gold rounded-full flex items-center justify-center">
                        <Heart className="h-4 w-4 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-luxury-text mb-2">Memorable Moments</h3>
                      <p className="text-luxury-text-muted">Elegant ambiance and professional service ensuring your reception is truly unforgettable.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-w-16 aspect-h-12 rounded-lg overflow-hidden shadow-luxury">
                  <div className="bg-gradient-to-br from-luxury-gold/20 to-luxury-gold/40 flex items-center justify-center">
                    <div className="text-center text-luxury-text">
                      <Wine className="h-16 w-16 mx-auto mb-4 text-luxury-gold" />
                      <p className="text-lg font-semibold">Reception Hall Gallery</p>
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
              Ready to Book Your Reception Hall?
            </h2>
            <p className="text-lg text-luxury-text-muted mb-8 max-w-2xl mx-auto">
              Contact us today to discuss your reception requirements and book our elegant reception hall in Noida.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-luxury-gold hover:bg-luxury-gold-dark px-8 py-3 text-lg">
                <Wine className="h-5 w-5 mr-2" />
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

export default ReceptionHallNoida;