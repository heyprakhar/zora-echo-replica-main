import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Crown, Users, Sparkles, Camera, Music, Utensils, Car, Shield, Palette, Building } from "lucide-react";
import grandBallroomHero from "@/assets/grand-ballroom.jpg";

const GrandBallroom = () => {
  return (
    <>
      <Helmet>
        <title>Grand Ballroom | Premium Event Hall in Noida | The Opera House</title>
        <meta
          name="description"
          content="Experience Noida's most magnificent Grand Ballroom - 15,000 sq.ft. luxury event space perfect for 250-500 guests. Elegant chandeliers, premium amenities & exceptional service."
        />
        <meta
          name="keywords"
          content="grand ballroom noida, luxury event hall noida, ballroom rental noida, premium venue noida, elegant event space, intimate gatherings noida, 15000 sq ft venue"
        />
        <link rel="canonical" href="https://theoperahouse.com/grand-ballroom" />

        {/* Event Venue Schema */}
        <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "EventVenue",
          "name": "The Opera House Grand Ballroom - Premium Event Hall Noida",
          "description": "Magnificent 15,000 sq.ft. Grand Ballroom with elegant chandeliers and premium amenities, perfect for intimate gatherings to grand celebrations",
          "url": "https://theoperahouse.com/grand-ballroom",
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
          "minimumAttendeeCapacity": 250,
          "floorSize": {
            "@type": "QuantitativeValue",
            "value": 15000,
            "unitCode": "SQF"
          },
          "amenityFeature": [
            {"@type": "LocationFeatureSpecification", "name": "Crystal Chandeliers"},
            {"@type": "LocationFeatureSpecification", "name": "Premium Sound System"},
            {"@type": "LocationFeatureSpecification", "name": "Professional Lighting"},
            {"@type": "LocationFeatureSpecification", "name": "Elegant Architecture"},
            {"@type": "LocationFeatureSpecification", "name": "Climate Control"},
            {"@type": "LocationFeatureSpecification", "name": "Valet Parking"}
          ],
          "priceRange": "₹₹₹₹",
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "127"
          }
        })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navigation />

        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-r from-luxury-gold/10 to-luxury-cream/20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="mb-4 bg-luxury-gold text-white">Magnificent Event Space</Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  <span className="text-luxury-blue">Grand Ballroom</span>
                  <span className="block text-luxury-gold">Noida's Crown Jewel</span>
                </h1>
                <p className="text-xl text-luxury-text-muted mb-6 leading-relaxed">
                  Step into 15,000 sq.ft. of architectural magnificence. Our Grand Ballroom features soaring ceilings,
                  crystal chandeliers, and elegant columns - perfect for intimate gatherings of 250 guests to grand
                  celebrations hosting 500 distinguished guests.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center gap-2 text-luxury-text">
                    <Building className="w-5 h-5 text-luxury-gold" />
                    <span className="font-medium">15,000 sq.ft.</span>
                  </div>
                  <div className="flex items-center gap-2 text-luxury-text">
                    <Users className="w-5 h-5 text-luxury-gold" />
                    <span className="font-medium">250-500 guests</span>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-luxury-gold hover:bg-luxury-gold-dark">
                    Schedule Private Tour
                  </Button>
                  <Button size="lg" variant="outline" className="border-luxury-blue text-luxury-blue">
                    View Event Packages
                  </Button>
                </div>
              </div>
              <div className="relative">
                <img
                  src={grandBallroomHero}
                  alt="The Opera House Grand Ballroom with elegant chandeliers and classical architecture"
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
                Architectural Excellence Meets Modern Luxury
              </h2>
              <p className="text-lg text-luxury-text-muted max-w-2xl mx-auto">
                Every detail of our Grand Ballroom has been meticulously designed to create an atmosphere
                of refined elegance and timeless sophistication.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="border-luxury-gold/20 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <Crown className="w-12 h-12 text-luxury-gold mx-auto mb-2" />
                  <CardTitle className="text-lg text-luxury-blue">Majestic Architecture</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-luxury-text-muted text-center">
                    Soaring coffered ceilings, ornate columns, and classical details create an atmosphere of grandeur.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-luxury-gold/20 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <Sparkles className="w-12 h-12 text-luxury-gold mx-auto mb-2" />
                  <CardTitle className="text-lg text-luxury-blue">Crystal Chandeliers</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-luxury-text-muted text-center">
                    Magnificent crystal chandeliers provide elegant ambient lighting that transforms any event.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-luxury-gold/20 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <Users className="w-12 h-12 text-luxury-gold mx-auto mb-2" />
                  <CardTitle className="text-lg text-luxury-blue">Flexible Capacity</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-luxury-text-muted text-center">
                    Adaptable layout accommodates intimate gatherings of 250 to grand celebrations of 500 guests.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-luxury-gold/20 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <Camera className="w-12 h-12 text-luxury-gold mx-auto mb-2" />
                  <CardTitle className="text-lg text-luxury-blue">Photography Paradise</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-luxury-text-muted text-center">
                    Instagram-worthy interiors with professional lighting create stunning photo opportunities.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Event Packages */}
        <section className="py-16 bg-luxury-cream/10">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-luxury-text mb-4">
                Grand Ballroom Event Packages
              </h2>
              <p className="text-lg text-luxury-text-muted max-w-2xl mx-auto">
                Curated packages designed to transform your vision into an unforgettable experience
                in Noida's most prestigious event space. For complete planning guidance, explore our <a href="/luxury-event-guide-noida" className="text-luxury-blue hover:text-luxury-gold underline font-medium">comprehensive event planning guide</a>.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-luxury-gold/20 hover:shadow-xl transition-shadow">
                <CardHeader>
                  <Badge className="w-fit mb-2">Intimate Celebration</Badge>
                  <CardTitle className="text-xl">Royal Elegance</CardTitle>
                  <CardDescription>Perfect for 250-300 guests</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <Utensils className="w-4 h-4 text-luxury-gold" />
                      Premium catering with live cooking stations
                    </li>
                    <li className="flex items-center gap-2">
                      <Palette className="w-4 h-4 text-luxury-gold" />
                      Elegant décor with chandelier highlights
                    </li>
                    <li className="flex items-center gap-2">
                      <Music className="w-4 h-4 text-luxury-gold" />
                      Professional sound system & lighting
                    </li>
                    <li className="flex items-center gap-2">
                      <Car className="w-4 h-4 text-luxury-gold" />
                      Valet parking for 150 vehicles
                    </li>
                  </ul>
                  <Button className="w-full bg-luxury-gold hover:bg-luxury-gold/90">
                    Get Custom Quote
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-luxury-blue/20 hover:shadow-xl transition-shadow border-2 border-luxury-blue">
                <CardHeader>
                  <Badge className="w-fit mb-2 bg-luxury-blue">Most Popular</Badge>
                  <CardTitle className="text-xl">Grand Gala</CardTitle>
                  <CardDescription>Perfect for 350-450 guests</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <Utensils className="w-4 h-4 text-luxury-gold" />
                      Luxury buffet with international cuisine
                    </li>
                    <li className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-luxury-gold" />
                      Designer décor with chandelier enhancement
                    </li>
                    <li className="flex items-center gap-2">
                      <Music className="w-4 h-4 text-luxury-gold" />
                      Live entertainment + DJ services
                    </li>
                    <li className="flex items-center gap-2">
                      <Camera className="w-4 h-4 text-luxury-gold" />
                      Professional photography session
                    </li>
                    <li className="flex items-center gap-2">
                      <Shield className="w-4 h-4 text-luxury-blue" />
                      Dedicated event coordinator
                    </li>
                  </ul>
                  <Button className="w-full bg-luxury-blue hover:bg-luxury-blue/90">
                    Get Custom Quote
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-luxury-gold/20 hover:shadow-xl transition-shadow">
                <CardHeader>
                  <Badge className="w-fit mb-2">Royal Reception</Badge>
                  <CardTitle className="text-xl">Imperial Package</CardTitle>
                  <CardDescription>Perfect for 450-500+ guests</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <Utensils className="w-4 h-4 text-luxury-gold" />
                      Gourmet dining with chef's special menu
                    </li>
                    <li className="flex items-center gap-2">
                      <Crown className="w-4 h-4 text-luxury-gold" />
                      Opulent themed decoration & florals
                    </li>
                    <li className="flex items-center gap-2">
                      <Music className="w-4 h-4 text-luxury-gold" />
                      Celebrity DJ + live orchestra
                    </li>
                    <li className="flex items-center gap-2">
                      <Camera className="w-4 h-4 text-luxury-gold" />
                      Cinematic photography & videography
                    </li>
                    <li className="flex items-center gap-2">
                      <Car className="w-4 h-4 text-luxury-gold" />
                      Premium valet + guest concierge
                    </li>
                  </ul>
                  <Button className="w-full bg-luxury-gold hover:bg-luxury-gold/90">
                    Get Custom Quote
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Venue Specifications */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-luxury-text mb-8 text-center">
                Technical Specifications & Amenities
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-luxury-text mb-4">Space Details</h3>
                  <ul className="space-y-3 text-luxury-text/80">
                    <li className="flex items-center gap-3">
                      <Building className="w-5 h-5 text-luxury-gold" />
                      <span><strong>Total Area:</strong> 15,000 sq.ft. of elegant event space</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Users className="w-5 h-5 text-luxury-blue" />
                      <span><strong>Capacity:</strong> 250-500 guests (flexible seating)</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Crown className="w-5 h-5 text-luxury-gold" />
                      <span><strong>Ceiling Height:</strong> 18 feet with coffered details</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Sparkles className="w-5 h-5 text-luxury-gold" />
                      <span><strong>Lighting:</strong> Crystal chandeliers + professional lighting</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-luxury-text mb-4">Premium Amenities</h3>
                  <ul className="space-y-3 text-luxury-text/80">
                    <li className="flex items-center gap-3">
                      <Music className="w-5 h-5 text-luxury-gold" />
                      <span><strong>Audio-Visual:</strong> Professional sound & projection system</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Car className="w-5 h-5 text-luxury-gold" />
                      <span><strong>Parking:</strong> Valet service for 200+ vehicles</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Shield className="w-5 h-5 text-luxury-blue" />
                      <span><strong>Climate:</strong> Central air conditioning & power backup</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Camera className="w-5 h-5 text-luxury-gold" />
                      <span><strong>Photography:</strong> Professional lighting for photos</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SEO Content */}
        <section className="py-16 bg-luxury-cream/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-luxury-text mb-6">
                The Opera House Grand Ballroom - Noida's Premier Event Destination
              </h2>

              <div className="prose prose-lg max-w-none text-luxury-text/80">
                <p className="mb-6">
                  The <strong>Grand Ballroom at The Opera House</strong> stands as Noida's most magnificent event space,
                  combining classical architecture with modern luxury across 15,000 sq.ft. of elegantly appointed interiors.
                  Located in Sector 63, our <strong>premium ballroom in Noida</strong> has become the preferred choice for
                  discerning hosts seeking an exceptional venue for their most important celebrations.
                </p>

                <h3 className="text-2xl font-semibold text-luxury-text mt-8 mb-4">
                  Unparalleled Elegance in Every Detail
                </h3>

                <p className="mb-4">
                  Our <strong>luxury event hall in Noida</strong> features soaring 18-foot coffered ceilings adorned with
                  magnificent crystal chandeliers that cast a warm, romantic glow throughout the space. Classical columns
                  and ornate architectural details create an atmosphere of timeless sophistication, while state-of-the-art
                  lighting and sound systems ensure your event runs flawlessly.
                </p>

                <h3 className="text-2xl font-semibold text-luxury-text mt-8 mb-4">
                  Flexible Capacity for Every Occasion
                </h3>

                <p className="mb-4">
                  Whether you're planning an <strong>intimate gathering in Noida</strong> for 250 guests or a grand celebration
                  for 500 distinguished attendees, our Grand Ballroom adapts to your vision. The flexible layout allows for
                  various seating configurations, from round table dinners to cocktail receptions, theater-style presentations,
                  and dancing celebrations. For those seeking outdoor options, explore our <a href="/outdoor-gardens" className="text-luxury-blue hover:text-luxury-gold underline font-medium">beautiful outdoor gardens</a> or intimate <a href="/glass-house" className="text-luxury-blue hover:text-luxury-gold underline font-medium">Glass House venue</a>.
                </p>

                <h3 className="text-2xl font-semibold text-luxury-text mt-8 mb-4">
                  Complete Event Solutions
                </h3>

                <p className="mb-4">
                  As Noida's <strong>premier ballroom rental</strong> destination, we provide comprehensive event services
                  including luxury catering, professional décor, entertainment coordination, and photography support.
                  Our experienced event team ensures every detail is perfectly executed, from the initial planning stages
                  to the final farewell.
                </p>

                <p className="mb-6">
                  Experience the pinnacle of event hosting at The Opera House Grand Ballroom. Contact us today to schedule
                  a private tour and discover why our <strong>elegant event space in Noida</strong> continues to set the
                  standard for luxury celebrations in the Delhi NCR region.
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

export default GrandBallroom;