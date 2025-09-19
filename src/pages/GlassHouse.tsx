import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Crown, Users, Sparkles, Camera, Music, Utensils, Car, Shield, Palette, Building, Presentation, Calendar, Heart } from "lucide-react";
import grandBallroomHero from "@/assets/grand-ballroom.jpg";

const GlassHouse = () => {
  return (
    <>
      <Helmet>
        <title>Glass House | Modern Event Space in Noida | The Opera House</title>
        <meta
          name="description"
          content="Discover The Opera House Glass House - A magnificent 3,500 sq.ft. modern event space in Noida for 80-120 guests. Perfect for corporate seminars, birthday parties & anniversary celebrations."
        />
        <meta
          name="keywords"
          content="glass house noida, modern event space noida, corporate seminar venue noida, birthday party hall noida, anniversary party venue, 3500 sq ft venue, small event space noida"
        />
        <link rel="canonical" href="https://theoperahouse.com/glass-house" />

        {/* Event Venue Schema */}
        <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "EventVenue",
          "name": "The Opera House Glass House - Modern Event Space Noida",
          "description": "A magnificent predesigned space spanning 3,500 sq.ft. with a capacity of 80-120 guests, perfect for corporate seminars, birthday parties, and anniversary celebrations",
          "url": "https://theoperahouse.com/glass-house",
          "telephone": "+91 9911620620",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "The Opera House Banquet, Near Prateek Laurel, Sector-73",
            "addressLocality": "Noida",
            "addressRegion": "Uttar Pradesh",
            "postalCode": "201307",
            "addressCountry": "IN"
          },
          "maximumAttendeeCapacity": 120,
          "minimumAttendeeCapacity": 80,
          "floorSize": {
            "@type": "QuantitativeValue",
            "value": 3500,
            "unitCode": "SQF"
          },
          "amenityFeature": [
            {"@type": "LocationFeatureSpecification", "name": "Glass Architecture"},
            {"@type": "LocationFeatureSpecification", "name": "Natural Lighting"},
            {"@type": "LocationFeatureSpecification", "name": "Modern Interiors"},
            {"@type": "LocationFeatureSpecification", "name": "Air Conditioning"},
            {"@type": "LocationFeatureSpecification", "name": "Professional Audio Visual"},
            {"@type": "LocationFeatureSpecification", "name": "Catering Services"},
            {"@type": "LocationFeatureSpecification", "name": "Parking Facilities"}
          ],
          "eventType": ["Corporate Seminar", "Birthday Party", "Anniversary Party", "Business Meeting", "Social Function"],
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "28.6139",
            "longitude": "77.2090"
          }
        })}
        </script>
      </Helmet>

      <Navigation />

      <main className="min-h-screen bg-white" role="main">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-luxury-cream/20 to-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              <div className="space-y-6">
                <div className="space-y-2">
                  <Badge className="bg-luxury-gold/10 text-luxury-gold border-luxury-gold/20">
                    Modern Event Space
                  </Badge>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-luxury-text leading-tight">
                    Glass House
                    <span className="block text-luxury-blue text-2xl md:text-3xl lg:text-4xl font-light mt-2">
                      Contemporary Elegance
                    </span>
                  </h1>
                </div>

                <p className="text-lg md:text-xl text-luxury-text-muted leading-relaxed">
                  A magnificent predesigned space spanning <strong>3,500 sq.ft.</strong> with modern glass architecture,
                  perfect for corporate seminars, birthday parties, and anniversary celebrations with a capacity of 80-120 guests.
                </p>

                <div className="flex flex-wrap gap-4 text-sm">
                  <div className="flex items-center gap-2 bg-luxury-gold/10 px-3 py-2 rounded-full">
                    <Users className="w-4 h-4 text-luxury-gold" />
                    <span className="text-luxury-text font-medium">80-120 Guests</span>
                  </div>
                  <div className="flex items-center gap-2 bg-luxury-blue/10 px-3 py-2 rounded-full">
                    <Building className="w-4 h-4 text-luxury-blue" />
                    <span className="text-luxury-text font-medium">3,500 sq.ft.</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="btn-luxury">
                    Book Glass House
                  </Button>
                  <Button variant="outline" size="lg" className="border-luxury-gold text-luxury-gold hover:bg-luxury-gold/10">
                    View Event Packages
                  </Button>
                </div>
              </div>
              <div className="relative">
                <img
                  src={grandBallroomHero}
                  alt="The Opera House Glass House with modern glass architecture and contemporary design"
                  className="rounded-lg shadow-luxury w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Venue Features */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-luxury-text mb-4">
                Modern Design Meets Functional Excellence
              </h2>
              <p className="text-lg text-luxury-text-muted max-w-2xl mx-auto">
                The Glass House combines contemporary architecture with sophisticated amenities,
                creating the perfect atmosphere for intimate corporate and social events.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="border-luxury-gold/20 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <Sparkles className="w-12 h-12 text-luxury-gold mx-auto mb-2" />
                  <CardTitle className="text-lg text-luxury-blue">Glass Architecture</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-luxury-text-muted text-center">
                    Floor-to-ceiling glass walls create a bright, airy atmosphere with natural lighting throughout.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-luxury-gold/20 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <Users className="w-12 h-12 text-luxury-gold mx-auto mb-2" />
                  <CardTitle className="text-lg text-luxury-blue">Intimate Capacity</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-luxury-text-muted text-center">
                    Perfectly sized for 80-120 guests, creating an intimate and engaging atmosphere for any event.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-luxury-gold/20 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <Presentation className="w-12 h-12 text-luxury-gold mx-auto mb-2" />
                  <CardTitle className="text-lg text-luxury-blue">Modern AV Setup</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-luxury-text-muted text-center">
                    State-of-the-art audio-visual equipment perfect for corporate presentations and entertainment.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-luxury-gold/20 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <Camera className="w-12 h-12 text-luxury-gold mx-auto mb-2" />
                  <CardTitle className="text-lg text-luxury-blue">Photography Ready</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-luxury-text-muted text-center">
                    Modern interiors and excellent lighting create stunning backdrops for memorable photos.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Event Types */}
        <section className="py-16 bg-luxury-cream/10">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-luxury-text mb-4">
                Perfect for Every Occasion
              </h2>
              <p className="text-lg text-luxury-text-muted max-w-2xl mx-auto">
                The Glass House's versatile design and modern amenities make it ideal for
                a wide range of corporate and social events.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-luxury-gold/20 hover:shadow-xl transition-shadow">
                <CardHeader>
                  <Badge className="w-fit mb-2">Corporate Events</Badge>
                  <CardTitle className="text-xl">Business Excellence</CardTitle>
                  <CardDescription>Professional corporate gatherings</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2 text-sm text-luxury-text-muted">
                    <li className="flex items-center gap-2">
                      <Presentation className="w-4 h-4 text-luxury-gold" />
                      Corporate seminars & workshops
                    </li>
                    <li className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-luxury-gold" />
                      Business meetings & conferences
                    </li>
                    <li className="flex items-center gap-2">
                      <Crown className="w-4 h-4 text-luxury-gold" />
                      Product launches & exhibitions
                    </li>
                    <li className="flex items-center gap-2">
                      <Shield className="w-4 h-4 text-luxury-gold" />
                      Team building events
                    </li>
                  </ul>
                  <Button className="w-full btn-luxury">
                    Plan Corporate Event
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-luxury-gold/20 hover:shadow-xl transition-shadow">
                <CardHeader>
                  <Badge className="w-fit mb-2">Birthday Celebrations</Badge>
                  <CardTitle className="text-xl">Joyful Moments</CardTitle>
                  <CardDescription>Memorable birthday parties</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2 text-sm text-luxury-text-muted">
                    <li className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-luxury-gold" />
                      Adult birthday parties
                    </li>
                    <li className="flex items-center gap-2">
                      <Music className="w-4 h-4 text-luxury-gold" />
                      Themed celebrations
                    </li>
                    <li className="flex items-center gap-2">
                      <Utensils className="w-4 h-4 text-luxury-gold" />
                      Custom catering options
                    </li>
                    <li className="flex items-center gap-2">
                      <Palette className="w-4 h-4 text-luxury-gold" />
                      Personalized decorations
                    </li>
                  </ul>
                  <Button className="w-full btn-luxury">
                    Plan Birthday Party
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-luxury-gold/20 hover:shadow-xl transition-shadow">
                <CardHeader>
                  <Badge className="w-fit mb-2">Anniversary Parties</Badge>
                  <CardTitle className="text-xl">Timeless Romance</CardTitle>
                  <CardDescription>Celebrating love & milestones</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2 text-sm text-luxury-text-muted">
                    <li className="flex items-center gap-2">
                      <Heart className="w-4 h-4 text-luxury-gold" />
                      Wedding anniversaries
                    </li>
                    <li className="flex items-center gap-2">
                      <Crown className="w-4 h-4 text-luxury-gold" />
                      Milestone celebrations
                    </li>
                    <li className="flex items-center gap-2">
                      <Camera className="w-4 h-4 text-luxury-gold" />
                      Romantic ambiance
                    </li>
                    <li className="flex items-center gap-2">
                      <Music className="w-4 h-4 text-luxury-gold" />
                      Live entertainment options
                    </li>
                  </ul>
                  <Button className="w-full btn-luxury">
                    Plan Anniversary
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Amenities & Services */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-luxury-text mb-4">
                Premium Amenities & Services
              </h2>
              <p className="text-lg text-luxury-text-muted max-w-2xl mx-auto">
                Every detail is carefully curated to ensure your event is flawless and memorable.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="flex items-start gap-4 p-6 rounded-lg border border-luxury-gold/20 hover:shadow-md transition-shadow">
                <Music className="w-8 h-8 text-luxury-gold flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-luxury-text mb-2">Professional Audio-Visual</h3>
                  <p className="text-sm text-luxury-text-muted">State-of-the-art sound system, microphones, and projection facilities for presentations.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 rounded-lg border border-luxury-gold/20 hover:shadow-md transition-shadow">
                <Utensils className="w-8 h-8 text-luxury-gold flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-luxury-text mb-2">Catering Excellence</h3>
                  <p className="text-sm text-luxury-text-muted">Customized menus from traditional to international cuisine prepared by expert chefs.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 rounded-lg border border-luxury-gold/20 hover:shadow-md transition-shadow">
                <Car className="w-8 h-8 text-luxury-gold flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-luxury-text mb-2">Valet Parking</h3>
                  <p className="text-sm text-luxury-text-muted">Complimentary valet parking service for all guests with secure vehicle handling.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 rounded-lg border border-luxury-gold/20 hover:shadow-md transition-shadow">
                <Shield className="w-8 h-8 text-luxury-gold flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-luxury-text mb-2">Climate Control</h3>
                  <p className="text-sm text-luxury-text-muted">Advanced air conditioning system ensuring perfect comfort throughout your event.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 rounded-lg border border-luxury-gold/20 hover:shadow-md transition-shadow">
                <Palette className="w-8 h-8 text-luxury-gold flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-luxury-text mb-2">Event Styling</h3>
                  <p className="text-sm text-luxury-text-muted">Professional decoration and styling services to match your event theme and vision.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 rounded-lg border border-luxury-gold/20 hover:shadow-md transition-shadow">
                <Crown className="w-8 h-8 text-luxury-gold flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-luxury-text mb-2">Dedicated Support</h3>
                  <p className="text-sm text-luxury-text-muted">Personal event coordinator to ensure every detail is perfectly executed.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-br from-luxury-blue to-luxury-blue/90 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Host Your Perfect Event?
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto text-white/90">
              Experience the Glass House difference. Contact us today to schedule a visit and discover why
              it's Noida's premier choice for intimate corporate and social events.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-luxury-blue hover:bg-white/90">
                Schedule Visit
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                Call +91 9911620620
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default GlassHouse;