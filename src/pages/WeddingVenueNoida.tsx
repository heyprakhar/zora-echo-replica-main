import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, Users, Camera, Music, Car, Utensils, Sparkles, Shield } from "lucide-react";

const WeddingVenueNoida = () => {
  return (
    <>
      <Helmet>
        <title>Wedding Venue in Noida | Best Marriage Hall | The Opera House</title>
        <meta
          name="description"
          content="Perfect wedding venue in Noida with luxury marriage hall for 500+ guests. Complete wedding packages, decoration, catering & valet parking. Book your dream wedding today!"
        />
        <meta
          name="keywords"
          content="wedding venue noida, marriage hall noida, wedding banquet hall noida, luxury wedding venue, bridal suite, wedding catering noida, destination wedding noida"
        />
        <link rel="canonical" href="https://theoperahouse.com/wedding-venue-noida" />

        {/* Local Wedding Venue Schema */}
        <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WeddingVenue",
          "name": "The Opera House - Premium Wedding Venue in Noida",
          "description": "Luxury wedding venue in Noida with marriage hall for 500+ guests, complete wedding services and premium amenities",
          "url": "https://theoperahouse.com/wedding-venue-noida",
          "telephone": "+91 9911620620",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Sector 63, H1A/25",
            "addressLocality": "Noida",
            "addressRegion": "Uttar Pradesh",
            "postalCode": "201301",
            "addressCountry": "IN"
          },
          "maximumAttendeeCapacity": 500,
          "amenityFeature": [
            {"@type": "LocationFeatureSpecification", "name": "Bridal Suite"},
            {"@type": "LocationFeatureSpecification", "name": "Photography Services"},
            {"@type": "LocationFeatureSpecification", "name": "Wedding Decoration"},
            {"@type": "LocationFeatureSpecification", "name": "Catering Services"},
            {"@type": "LocationFeatureSpecification", "name": "Valet Parking"},
            {"@type": "LocationFeatureSpecification", "name": "DJ & Music System"}
          ],
          "priceRange": "₹₹₹₹",
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "158"
          }
        })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navigation />

        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-r from-luxury-gold/10 to-luxury-cream/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-4 bg-luxury-gold text-white">Premium Wedding Venue</Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-luxury-dark mb-6">
                Dream Wedding Venue in <span className="text-luxury-gold">Noida</span>
              </h1>
              <p className="text-xl text-luxury-dark/80 mb-8 leading-relaxed">
                Create magical memories at The Opera House - Noida's most sought-after luxury marriage hall.
                Perfect for intimate ceremonies to grand celebrations with 500+ guest capacity.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-luxury-gold hover:bg-luxury-gold/90">
                  Book Venue Tour
                </Button>
                <Button size="lg" variant="outline" className="border-luxury-gold text-luxury-gold">
                  View Wedding Packages
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us for Wedding */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-luxury-dark mb-4">
                Why Couples Choose The Opera House for Their Wedding
              </h2>
              <p className="text-lg text-luxury-dark/70 max-w-2xl mx-auto">
                From intimate ceremonies to grand receptions, we make every wedding moment unforgettable in Noida's most elegant venue.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="border-luxury-gold/20 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <Heart className="w-12 h-12 text-luxury-gold mx-auto mb-2" />
                  <CardTitle className="text-lg">Romantic Ambiance</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-luxury-dark/70 text-center">
                    Elegant décor and lighting create the perfect romantic atmosphere for your special day.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-luxury-gold/20 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <Users className="w-12 h-12 text-luxury-gold mx-auto mb-2" />
                  <CardTitle className="text-lg">500+ Guest Capacity</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-luxury-dark/70 text-center">
                    Spacious marriage hall accommodating both intimate gatherings and grand celebrations.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-luxury-gold/20 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <Sparkles className="w-12 h-12 text-luxury-gold mx-auto mb-2" />
                  <CardTitle className="text-lg">Bridal Suite</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-luxury-dark/70 text-center">
                    Luxurious bridal suite for getting ready with professional makeup area and full-length mirrors.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-luxury-gold/20 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <Camera className="w-12 h-12 text-luxury-gold mx-auto mb-2" />
                  <CardTitle className="text-lg">Photography Ready</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-luxury-dark/70 text-center">
                    Instagram-worthy interiors and lighting perfect for wedding photography and videography.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Wedding Packages */}
        <section className="py-16 bg-luxury-cream/10">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-luxury-dark mb-4">
                Complete Wedding Packages in Noida
              </h2>
              <p className="text-lg text-luxury-dark/70 max-w-2xl mx-auto">
                All-inclusive wedding packages designed to make your planning stress-free and your day perfect.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-luxury-gold/20 hover:shadow-xl transition-shadow">
                <CardHeader>
                  <Badge className="w-fit mb-2">Intimate Wedding</Badge>
                  <CardTitle className="text-xl">Royal Celebration</CardTitle>
                  <CardDescription>Perfect for 50-150 guests</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <Utensils className="w-4 h-4 text-luxury-gold" />
                      Multi-cuisine catering for all guests
                    </li>
                    <li className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-luxury-gold" />
                      Basic stage decoration & lighting
                    </li>
                    <li className="flex items-center gap-2">
                      <Music className="w-4 h-4 text-luxury-gold" />
                      DJ services & sound system
                    </li>
                    <li className="flex items-center gap-2">
                      <Car className="w-4 h-4 text-luxury-gold" />
                      Complimentary valet parking
                    </li>
                  </ul>
                  <Button className="w-full bg-luxury-gold hover:bg-luxury-gold/90">
                    Get Quote
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-luxury-gold/20 hover:shadow-xl transition-shadow border-2 border-luxury-gold">
                <CardHeader>
                  <Badge className="w-fit mb-2 bg-luxury-gold">Most Popular</Badge>
                  <CardTitle className="text-xl">Grand Wedding</CardTitle>
                  <CardDescription>Perfect for 200-350 guests</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <Utensils className="w-4 h-4 text-luxury-gold" />
                      Premium catering with live counters
                    </li>
                    <li className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-luxury-gold" />
                      Premium decoration & floral arrangements
                    </li>
                    <li className="flex items-center gap-2">
                      <Music className="w-4 h-4 text-luxury-gold" />
                      Live band + DJ services
                    </li>
                    <li className="flex items-center gap-2">
                      <Heart className="w-4 h-4 text-luxury-gold" />
                      Bridal suite access & makeup room
                    </li>
                    <li className="flex items-center gap-2">
                      <Camera className="w-4 h-4 text-luxury-gold" />
                      Professional photography session
                    </li>
                  </ul>
                  <Button className="w-full bg-luxury-gold hover:bg-luxury-gold/90">
                    Get Quote
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-luxury-gold/20 hover:shadow-xl transition-shadow">
                <CardHeader>
                  <Badge className="w-fit mb-2">Luxury Wedding</Badge>
                  <CardTitle className="text-xl">Maharaja Package</CardTitle>
                  <CardDescription>Perfect for 400-500+ guests</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <Utensils className="w-4 h-4 text-luxury-gold" />
                      Luxury buffet with international cuisine
                    </li>
                    <li className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-luxury-gold" />
                      Designer decoration & themed setup
                    </li>
                    <li className="flex items-center gap-2">
                      <Music className="w-4 h-4 text-luxury-gold" />
                      Celebrity DJ + live entertainment
                    </li>
                    <li className="flex items-center gap-2">
                      <Shield className="w-4 h-4 text-luxury-gold" />
                      Dedicated wedding coordinator
                    </li>
                    <li className="flex items-center gap-2">
                      <Car className="w-4 h-4 text-luxury-gold" />
                      Luxury car decoration included
                    </li>
                  </ul>
                  <Button className="w-full bg-luxury-gold hover:bg-luxury-gold/90">
                    Get Quote
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Local SEO Content */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-luxury-dark mb-6">
                Premier Wedding Venue in Noida - The Opera House
              </h2>

              <div className="prose prose-lg max-w-none text-luxury-dark/80">
                <p className="mb-6">
                  Looking for the perfect <strong>wedding venue in Noida</strong>? The Opera House stands as the premier choice for couples seeking a
                  <strong> luxury marriage hall in Noida</strong> that combines elegance, sophistication, and exceptional service. Located in the heart
                  of Sector 63, our venue has been the backdrop for over 500 successful weddings, making us the <strong>best wedding venue in Noida</strong>.
                </p>

                <h3 className="text-2xl font-semibold text-luxury-dark mt-8 mb-4">
                  Why Choose Our Marriage Hall in Noida?
                </h3>

                <p className="mb-4">
                  Our <strong>banquet hall in Noida</strong> offers unmatched amenities for your special day. With a capacity to host 500+ guests,
                  we provide the perfect setting for both intimate ceremonies and grand celebrations. Our venue features:
                </p>

                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>Spacious marriage hall with premium interiors and lighting</li>
                  <li>Dedicated bridal suite with makeup and dressing facilities</li>
                  <li>Professional photography and videography support areas</li>
                  <li>In-house catering with multi-cuisine options</li>
                  <li>Valet parking for 200+ vehicles</li>
                  <li>Air-conditioned halls with power backup</li>
                  <li>Professional event coordination team</li>
                </ul>

                <h3 className="text-2xl font-semibold text-luxury-dark mt-8 mb-4">
                  Complete Wedding Services in Noida
                </h3>

                <p className="mb-4">
                  As the <strong>top wedding venue in Noida</strong>, we offer comprehensive wedding packages that include everything you need for
                  your perfect day. Our experienced team handles decoration, catering, entertainment, and coordination, ensuring a stress-free
                  experience for couples and their families.
                </p>

                <p className="mb-6">
                  Our location in Noida Sector 63 provides easy accessibility from Delhi, Ghaziabad, Greater Noida, and other NCR areas.
                  With metro connectivity and major highways nearby, your guests can easily reach our <strong>luxury banquet hall in Noida</strong>.
                </p>

                <h3 className="text-2xl font-semibold text-luxury-dark mt-8 mb-4">
                  Book Your Dream Wedding Venue Today
                </h3>

                <p className="mb-4">
                  Don't wait to secure your preferred wedding date at Noida's most prestigious marriage hall. Contact us today for a venue tour
                  and personalized wedding package quote. Our team is ready to help you create the wedding of your dreams at The Opera House.
                </p>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default WeddingVenueNoida;