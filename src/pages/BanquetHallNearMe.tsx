import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Navigation as NavigationIcon, Clock, Phone, Star, CheckCircle } from "lucide-react";

const BanquetHallNearMe = () => {
  return (
    <>
      <Helmet>
        <title>Banquet Hall Near Me | Best Event Venue in Noida | The Opera House</title>
        <meta
          name="description"
          content="Looking for banquet hall near me? The Opera House in Noida offers the best event venue with easy access from Delhi NCR. Book your event today!"
        />
        <meta
          name="keywords"
          content="banquet hall near me, event venue near me, marriage hall near me, banquet hall noida, party hall near me, wedding venue near me"
        />
        <link rel="canonical" href="https://theoperahouse.com/banquet-hall-near-me" />

        {/* Local Business Schema with Location Focus */}
        <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "EventVenue",
          "name": "The Opera House - Best Banquet Hall Near You",
          "description": "Conveniently located banquet hall in Noida with easy access from Delhi NCR. Perfect venue for all your events.",
          "url": "https://theoperahouse.com/banquet-hall-near-me",
          "telephone": "+91 9911620620",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Sector 63, H1A/25",
            "addressLocality": "Noida",
            "addressRegion": "Uttar Pradesh",
            "postalCode": "201301",
            "addressCountry": "IN"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 28.5355,
            "longitude": 77.3910
          },
          "areaServed": [
            {
              "@type": "GeoCircle",
              "geoMidpoint": {
                "@type": "GeoCoordinates",
                "latitude": 28.5355,
                "longitude": 77.3910
              },
              "geoRadius": "50000"
            }
          ],
          "servedAreas": ["Noida", "Delhi", "Ghaziabad", "Greater Noida", "Faridabad", "Gurgaon"],
          "hasMap": "https://maps.google.com/?q=The+Opera+House+Noida"
        })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navigation />

        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-r from-blue-50 to-luxury-cream/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-4 bg-blue-600 text-white">
                <MapPin className="w-4 h-4 mr-1" />
                Conveniently Located
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-luxury-dark mb-6">
                Best <span className="text-luxury-gold">Banquet Hall</span>
                <br />Near You
              </h1>
              <p className="text-xl text-luxury-dark/80 mb-8 leading-relaxed">
                Searching for the perfect banquet hall near you? Look no further! The Opera House in Noida
                offers easy accessibility from Delhi NCR with world-class facilities and premium services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-luxury-gold hover:bg-luxury-gold/90">
                  <NavigationIcon className="w-4 h-4 mr-2" />
                  Get Directions
                </Button>
                <Button size="lg" variant="outline" className="border-luxury-gold text-luxury-gold">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Location Benefits */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-luxury-dark mb-4">
                Why Choose The Opera House Near You?
              </h2>
              <p className="text-lg text-luxury-dark/70 max-w-2xl mx-auto">
                Strategically located in Noida with excellent connectivity, making it the most accessible
                premium banquet hall for guests from across Delhi NCR.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="border-blue-200 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <MapPin className="w-12 h-12 text-blue-600 mx-auto mb-2" />
                  <CardTitle className="text-lg">Prime Location</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-luxury-dark/70 text-center">
                    Located in Noida Sector 63, easily accessible from Delhi, Ghaziabad, Greater Noida, and all NCR areas.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-blue-200 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <NavigationIcon className="w-12 h-12 text-blue-600 mx-auto mb-2" />
                  <CardTitle className="text-lg">Easy Navigation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-luxury-dark/70 text-center">
                    GPS-friendly location with clear landmarks and signage. Available on Google Maps and all navigation apps.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-blue-200 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <Clock className="w-12 h-12 text-blue-600 mx-auto mb-2" />
                  <CardTitle className="text-lg">Quick Reach</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-luxury-dark/70 text-center">
                    Just 30 minutes from Delhi, 15 minutes from Ghaziabad, and 20 minutes from Greater Noida.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-blue-200 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <Star className="w-12 h-12 text-blue-600 mx-auto mb-2" />
                  <CardTitle className="text-lg">5-Star Ratings</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-luxury-dark/70 text-center">
                    Consistently rated as the best banquet hall near Delhi NCR with 4.9/5 star reviews.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Distance & Connectivity */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-luxury-dark mb-4">
                Distance from Major Areas
              </h2>
              <p className="text-lg text-luxury-dark/70">
                Check how close we are to your location
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <Card className="bg-white border-0 shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-lg text-luxury-dark">Delhi (Connaught Place)</h3>
                      <p className="text-blue-600 font-medium">25-30 minutes</p>
                      <p className="text-sm text-gray-600">via DND Flyway</p>
                    </div>
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-blue-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white border-0 shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-lg text-luxury-dark">Ghaziabad</h3>
                      <p className="text-blue-600 font-medium">15-20 minutes</p>
                      <p className="text-sm text-gray-600">via NH-24</p>
                    </div>
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-blue-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white border-0 shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-lg text-luxury-dark">Greater Noida</h3>
                      <p className="text-blue-600 font-medium">20-25 minutes</p>
                      <p className="text-sm text-gray-600">via Noida Expressway</p>
                    </div>
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-blue-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white border-0 shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-lg text-luxury-dark">Faridabad</h3>
                      <p className="text-blue-600 font-medium">35-40 minutes</p>
                      <p className="text-sm text-gray-600">via Yamuna Expressway</p>
                    </div>
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-blue-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white border-0 shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-lg text-luxury-dark">Gurgaon</h3>
                      <p className="text-blue-600 font-medium">45-50 minutes</p>
                      <p className="text-sm text-gray-600">via DND & Ring Road</p>
                    </div>
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-blue-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white border-0 shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-lg text-luxury-dark">IGI Airport</h3>
                      <p className="text-blue-600 font-medium">45 minutes</p>
                      <p className="text-sm text-gray-600">via DND Flyway</p>
                    </div>
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-blue-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Transportation Options */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-luxury-dark mb-4">
                Multiple Ways to Reach Us
              </h2>
              <p className="text-lg text-luxury-dark/70">
                Choose the most convenient transportation option for your guests
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-luxury-gold/20 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-luxury-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <NavigationIcon className="w-8 h-8 text-luxury-gold" />
                  </div>
                  <CardTitle className="text-xl">By Car</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-luxury-gold mt-0.5" />
                    <span className="text-sm">Ample parking for 200+ vehicles</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-luxury-gold mt-0.5" />
                    <span className="text-sm">Complimentary valet parking service</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-luxury-gold mt-0.5" />
                    <span className="text-sm">24/7 security for all vehicles</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-luxury-gold mt-0.5" />
                    <span className="text-sm">Easy highway access from all directions</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-luxury-gold/20 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-luxury-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-8 h-8 text-luxury-gold" />
                  </div>
                  <CardTitle className="text-xl">By Metro</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-luxury-gold mt-0.5" />
                    <span className="text-sm">Nearest: Noida Sector 62 Metro Station</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-luxury-gold mt-0.5" />
                    <span className="text-sm">Just 10 minutes by auto/cab from metro</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-luxury-gold mt-0.5" />
                    <span className="text-sm">Blue Line connectivity to entire NCR</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-luxury-gold mt-0.5" />
                    <span className="text-sm">Complimentary shuttle on request</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-luxury-gold/20 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-luxury-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-8 h-8 text-luxury-gold" />
                  </div>
                  <CardTitle className="text-xl">Transportation Help</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-luxury-gold mt-0.5" />
                    <span className="text-sm">Guest transportation coordination</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-luxury-gold mt-0.5" />
                    <span className="text-sm">Cab booking assistance</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-luxury-gold mt-0.5" />
                    <span className="text-sm">Live GPS location sharing</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-luxury-gold mt-0.5" />
                    <span className="text-sm">24/7 directions helpline</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Local SEO Content */}
        <section className="py-16 bg-luxury-cream/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-luxury-dark mb-6">
                The Best Banquet Hall Near You - The Opera House Noida
              </h2>

              <div className="prose prose-lg max-w-none text-luxury-dark/80">
                <p className="mb-6">
                  When searching for a <strong>banquet hall near me</strong>, location convenience is just as important as quality and service.
                  The Opera House in Noida perfectly combines accessibility with luxury, making it the top choice for events across Delhi NCR.
                  Our strategic location in Sector 63 ensures that whether you're coming from Delhi, Ghaziabad, Greater Noida, or anywhere else
                  in NCR, reaching our venue is quick and hassle-free.
                </p>

                <h3 className="text-2xl font-semibold text-luxury-dark mt-8 mb-4">
                  Why Location Matters for Your Event
                </h3>

                <p className="mb-4">
                  Choosing a <strong>banquet hall near you</strong> isn't just about convenience - it's about ensuring maximum guest attendance
                  and comfort. Our centrally located venue in Noida offers:
                </p>

                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>Easy accessibility from all major areas of Delhi NCR</li>
                  <li>Multiple transportation options including metro, bus, and private vehicles</li>
                  <li>Ample parking space for 200+ vehicles with valet service</li>
                  <li>Clear GPS coordinates and landmark-based directions</li>
                  <li>24/7 helpline for directions and transportation assistance</li>
                  <li>Proximity to major hotels for out-of-town guests</li>
                </ul>

                <h3 className="text-2xl font-semibold text-luxury-dark mt-8 mb-4">
                  Accessibility from Major NCR Areas
                </h3>

                <p className="mb-4">
                  Our <strong>event venue near Delhi NCR</strong> is strategically positioned to serve guests from across the region:
                </p>

                <div className="bg-white p-6 rounded-lg mb-6">
                  <h4 className="font-semibold mb-3">Travel Times to The Opera House:</h4>
                  <div className="grid md:grid-cols-2 gap-3 text-sm">
                    <div>• Delhi (CP): 25-30 minutes via DND</div>
                    <div>• Ghaziabad: 15-20 minutes via NH-24</div>
                    <div>• Greater Noida: 20-25 minutes via Expressway</div>
                    <div>• Faridabad: 35-40 minutes via Yamuna Expressway</div>
                    <div>• Gurgaon: 45-50 minutes via Ring Road</div>
                    <div>• IGI Airport: 45 minutes via DND Flyway</div>
                  </div>
                </div>

                <h3 className="text-2xl font-semibold text-luxury-dark mt-8 mb-4">
                  Complete Event Solutions at Your Doorstep
                </h3>

                <p className="mb-4">
                  Being the <strong>best banquet hall near Delhi NCR</strong>, we don't just offer a convenient location - we provide
                  comprehensive event solutions that make your celebration truly memorable. From wedding receptions to corporate events,
                  birthday parties to anniversary celebrations, our venue caters to all types of gatherings with equal excellence.
                </p>

                <p className="mb-6">
                  Our team understands that when you're looking for a <strong>party hall near me</strong> or <strong>marriage hall near me</strong>,
                  you want a venue that combines convenience with quality. That's exactly what The Opera House delivers - a premium event
                  experience that's easily accessible to all your guests, regardless of where they're traveling from in the NCR region.
                </p>

                <h3 className="text-2xl font-semibold text-luxury-dark mt-8 mb-4">
                  Book Your Event at the Most Convenient Venue
                </h3>

                <p className="mb-4">
                  Don't let distance be a barrier to your perfect event. Choose The Opera House - the most conveniently located luxury
                  banquet hall in Noida. Our central location, combined with world-class facilities and service, makes us the obvious
                  choice for your next celebration.
                </p>
              </div>

              <div className="mt-12 bg-blue-50 p-8 rounded-lg">
                <div className="text-center">
                  <h4 className="text-xl font-semibold text-luxury-dark mb-4">Need Directions or Have Questions?</h4>
                  <p className="text-luxury-dark/70 mb-6">
                    Our team is available 24/7 to help you reach our venue or answer any questions about our location and accessibility.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button className="bg-luxury-gold text-luxury-dark hover:bg-luxury-gold/90">
                      <NavigationIcon className="w-4 h-4 mr-2" />
                      Get Live Directions
                    </Button>
                    <Button variant="outline" className="border-luxury-gold text-luxury-gold">
                      <Phone className="w-4 h-4 mr-2" />
                      Call for Assistance
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default BanquetHallNearMe;