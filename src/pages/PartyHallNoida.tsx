import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, Users, Camera, Music, Car, Utensils, Sparkles, Shield, PartyPopper, Star, Gift } from "lucide-react";

const PartyHallNoida = () => {
  return (
    <>
      <Helmet>
        <title>Party Hall in Noida | Birthday & Anniversary Venue | The Opera House</title>
        <meta
          name="description"
          content="Premium party hall in Noida for birthdays, anniversaries & celebrations. DJ, dance floor, 500+ capacity, catering & entertainment services available."
        />
        <meta
          name="keywords"
          content="party hall noida, birthday party venue noida, anniversary party hall, celebration venue noida, party place noida, birthday hall noida"
        />
        <link rel="canonical" href="https://theoperahouse.com/party-hall-noida" />

        {/* Party Hall Schema */}
        <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "EventVenue",
          "name": "The Opera House - Premier Party Hall in Noida",
          "description": "Premium party hall in Noida with DJ, dance floor, entertainment and complete party services for birthdays, anniversaries and celebrations",
          "url": "https://theoperahouse.com/party-hall-noida",
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
            {"@type": "LocationFeatureSpecification", "name": "DJ Services"},
            {"@type": "LocationFeatureSpecification", "name": "Party Decorations"},
            {"@type": "LocationFeatureSpecification", "name": "Entertainment Area"},
            {"@type": "LocationFeatureSpecification", "name": "Party Catering"},
            {"@type": "LocationFeatureSpecification", "name": "Birthday Setup"},
            {"@type": "LocationFeatureSpecification", "name": "Parking Facility"}
          ],
          "priceRange": "₹₹₹",
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.7",
            "reviewCount": "95"
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
                <PartyPopper className="h-4 w-4 mr-2" />
                Party Hall
              </Badge>
              <h1 className="text-4xl md:text-6xl font-serif font-bold text-luxury-text mb-6 leading-tight">
                Premium Party Hall in{" "}
                <span className="text-luxury-blue">
                  Noida
                </span>
              </h1>
              <p className="text-xl text-luxury-text-muted max-w-3xl mx-auto font-light leading-relaxed">
                Make every celebration memorable in our vibrant party hall, perfect for birthdays, anniversaries, and special occasions with entertainment and fun.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-luxury-gold hover:bg-luxury-gold-dark px-8 py-3 text-lg">
                  <PartyPopper className="h-5 w-5 mr-2" />
                  Book Your Party
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
                Party Hall Features
              </h2>
              <p className="text-lg text-luxury-text-muted max-w-2xl mx-auto">
                Everything you need for an exciting and memorable party celebration
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Music,
                  title: "DJ & Sound System",
                  description: "Professional DJ services with high-quality sound and music"
                },
                {
                  icon: Sparkles,
                  title: "Dance Floor",
                  description: "Spacious dance floor with party lighting and effects"
                },
                {
                  icon: Gift,
                  title: "Theme Decorations",
                  description: "Customizable decorations for birthdays and special themes"
                },
                {
                  icon: Users,
                  title: "500+ Capacity",
                  description: "Large party hall accommodating all your guests"
                },
                {
                  icon: Utensils,
                  title: "Party Catering",
                  description: "Special party menus including snacks, meals, and cakes"
                },
                {
                  icon: Camera,
                  title: "Photo Booth",
                  description: "Fun photo booth setup with props and backdrops"
                },
                {
                  icon: Car,
                  title: "Easy Parking",
                  description: "Convenient parking for all party guests"
                },
                {
                  icon: Shield,
                  title: "Party Security",
                  description: "Safe and secure environment for family celebrations"
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

        {/* Party Packages */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-luxury-text mb-4">
                Party Hall Packages
              </h2>
              <p className="text-lg text-luxury-text-muted max-w-2xl mx-auto">
                Fun and affordable packages for every type of party celebration
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Birthday Bash",
                  price: "Starting from ₹1,50,000",
                  features: [
                    "Party hall for 4 hours",
                    "Birthday decorations",
                    "DJ and music system",
                    "Dance floor lighting",
                    "Photo booth setup",
                    "Basic catering (50 guests)",
                    "Parking facility"
                  ]
                },
                {
                  name: "Anniversary Special",
                  price: "Starting from ₹2,75,000",
                  features: [
                    "Party hall for 6 hours",
                    "Romantic decorations",
                    "Professional DJ services",
                    "Special anniversary setup",
                    "Premium catering (100 guests)",
                    "Photography area",
                    "Cake cutting ceremony",
                    "Valet parking"
                  ],
                  popular: true
                },
                {
                  name: "Grand Celebration",
                  price: "Starting from ₹4,50,000",
                  features: [
                    "Full day party hall access",
                    "Premium theme decorations",
                    "Live entertainment & DJ",
                    "Multi-level party setup",
                    "Gourmet catering (200+ guests)",
                    "Professional photography",
                    "Special effects lighting",
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

        {/* Party Types */}
        <section className="py-20 bg-white/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-luxury-text mb-4">
                Perfect for Every Celebration
              </h2>
              <p className="text-lg text-luxury-text-muted max-w-2xl mx-auto">
                Our party hall is ideal for various types of celebrations and special occasions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Birthday Parties",
                  description: "Kids & adult birthday celebrations with theme decorations and entertainment",
                  icon: Gift
                },
                {
                  title: "Anniversary Celebrations",
                  description: "Romantic anniversary parties with special setups and dining",
                  icon: Heart
                },
                {
                  title: "Corporate Parties",
                  description: "Office celebrations, team building events, and company milestones",
                  icon: Users
                },
                {
                  title: "Graduation Parties",
                  description: "Academic achievement celebrations with friends and family",
                  icon: Sparkles
                },
                {
                  title: "Festival Celebrations",
                  description: "Cultural festivals, holiday parties, and community gatherings",
                  icon: PartyPopper
                },
                {
                  title: "Social Gatherings",
                  description: "Friends reunions, family get-togethers, and special occasions",
                  icon: Users
                }
              ].map((party, index) => (
                <Card key={index} className="border-luxury-gold/20 hover:shadow-lg transition-shadow">
                  <CardHeader className="text-center pb-4">
                    <party.icon className="h-12 w-12 text-luxury-gold mx-auto mb-4" />
                    <CardTitle className="text-luxury-text">{party.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center text-luxury-text-muted">
                      {party.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-luxury-gold/10 to-luxury-gold/5">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-luxury-text mb-6">
              Ready to Plan Your Perfect Party?
            </h2>
            <p className="text-lg text-luxury-text-muted mb-8 max-w-2xl mx-auto">
              Contact us today to discuss your celebration requirements and book our exciting party hall in Noida.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-luxury-gold hover:bg-luxury-gold-dark px-8 py-3 text-lg">
                <PartyPopper className="h-5 w-5 mr-2" />
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

export default PartyHallNoida;