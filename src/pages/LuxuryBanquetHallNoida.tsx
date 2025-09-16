import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Crown, Star, Award, CheckCircle, Phone, MapPin, Clock } from "lucide-react";

const LuxuryBanquetHallNoida = () => {
  return (
    <>
      <Helmet>
        <title>Luxury Banquet Hall in Noida | Premium Event Venue | The Opera House</title>
        <meta
          name="description"
          content="Premium luxury banquet hall in Noida with 500+ capacity. Elite venue for weddings, corporate events & celebrations. World-class amenities, valet parking, catering."
        />
        <meta
          name="keywords"
          content="luxury banquet hall noida, premium banquet hall, luxury event venue noida, high-end banquet hall, elite marriage hall, luxury wedding venue noida"
        />
        <link rel="canonical" href="https://theoperahouse.com/luxury-banquet-hall-noida" />

        {/* Luxury Venue Schema */}
        <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "EventVenue",
          "name": "The Opera House - Luxury Banquet Hall in Noida",
          "description": "Premier luxury banquet hall in Noida offering world-class amenities and exceptional service for high-end events",
          "url": "https://theoperahouse.com/luxury-banquet-hall-noida",
          "telephone": "+91-9999999999",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Sector 63, H1A/25",
            "addressLocality": "Noida",
            "addressRegion": "Uttar Pradesh",
            "postalCode": "201301",
            "addressCountry": "IN"
          },
          "priceRange": "₹₹₹₹",
          "amenityFeature": [
            {"@type": "LocationFeatureSpecification", "name": "Crystal Chandeliers"},
            {"@type": "LocationFeatureSpecification", "name": "Premium Italian Marble Flooring"},
            {"@type": "LocationFeatureSpecification", "name": "State-of-the-art Sound System"},
            {"@type": "LocationFeatureSpecification", "name": "Professional Lighting Setup"},
            {"@type": "LocationFeatureSpecification", "name": "VIP Lounge Area"},
            {"@type": "LocationFeatureSpecification", "name": "Luxury Restrooms"}
          ],
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "312"
          }
        })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navigation />

        {/* Hero Section */}
        <section className="relative py-24 bg-gradient-to-r from-luxury-dark to-luxury-gold/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <Badge className="mb-4 bg-luxury-gold text-luxury-dark font-semibold">
                <Crown className="w-4 h-4 mr-1" />
                Premium Luxury Venue
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Noida's Most <span className="text-luxury-gold">Luxurious</span>
                <br />Banquet Hall
              </h1>
              <p className="text-xl mb-8 leading-relaxed opacity-90">
                Experience unparalleled elegance at The Opera House - where luxury meets perfection.
                Elite venue for distinguished guests who demand the finest in event hosting.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-luxury-gold text-luxury-dark hover:bg-luxury-gold/90 font-semibold">
                  Schedule VIP Tour
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-luxury-dark">
                  View Luxury Packages
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Luxury Features */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-luxury-dark mb-4">
                Unmatched Luxury & Sophistication
              </h2>
              <p className="text-lg text-luxury-dark/70 max-w-3xl mx-auto">
                Every detail has been meticulously crafted to create an atmosphere of refined elegance,
                making The Opera House the premier choice for luxury events in Noida.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border-luxury-gold/30 hover:shadow-2xl transition-all duration-300 group">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-luxury-gold/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-luxury-gold/20 transition-colors">
                    <Crown className="w-8 h-8 text-luxury-gold" />
                  </div>
                  <CardTitle className="text-xl">Royal Interiors</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-luxury-dark/70 text-center">
                    Opulent crystal chandeliers, premium Italian marble flooring, and gold-accented décor
                    create an atmosphere of regal magnificence.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-luxury-gold/30 hover:shadow-2xl transition-all duration-300 group">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-luxury-gold/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-luxury-gold/20 transition-colors">
                    <Star className="w-8 h-8 text-luxury-gold" />
                  </div>
                  <CardTitle className="text-xl">Five-Star Service</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-luxury-dark/70 text-center">
                    Dedicated event butler, personal concierge service, and white-glove treatment
                    ensure every guest feels like royalty.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-luxury-gold/30 hover:shadow-2xl transition-all duration-300 group">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-luxury-gold/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-luxury-gold/20 transition-colors">
                    <Award className="w-8 h-8 text-luxury-gold" />
                  </div>
                  <CardTitle className="text-xl">Award-Winning Cuisine</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-luxury-dark/70 text-center">
                    Michelin-trained chefs create culinary masterpieces with premium ingredients
                    and international flavors for discerning palates.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-luxury-gold/30 hover:shadow-2xl transition-all duration-300 group">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-luxury-gold/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-luxury-gold/20 transition-colors">
                    <CheckCircle className="w-8 h-8 text-luxury-gold" />
                  </div>
                  <CardTitle className="text-xl">Premium Amenities</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-luxury-dark/70 text-center">
                    VIP lounge, luxury restrooms with marble fittings, climate-controlled environment,
                    and state-of-the-art audio-visual systems.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-luxury-gold/30 hover:shadow-2xl transition-all duration-300 group">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-luxury-gold/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-luxury-gold/20 transition-colors">
                    <MapPin className="w-8 h-8 text-luxury-gold" />
                  </div>
                  <CardTitle className="text-xl">Prime Location</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-luxury-dark/70 text-center">
                    Prestigious address in Noida Sector 63 with easy access from Delhi NCR,
                    surrounded by luxury hotels and corporate hubs.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-luxury-gold/30 hover:shadow-2xl transition-all duration-300 group">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-luxury-gold/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-luxury-gold/20 transition-colors">
                    <Phone className="w-8 h-8 text-luxury-gold" />
                  </div>
                  <CardTitle className="text-xl">24/7 Concierge</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-luxury-dark/70 text-center">
                    Round-the-clock luxury concierge service to handle every detail,
                    from guest accommodations to special requests.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Luxury Packages */}
        <section className="py-20 bg-luxury-cream/10">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-luxury-dark mb-4">
                Exclusive Luxury Packages
              </h2>
              <p className="text-lg text-luxury-dark/70 max-w-2xl mx-auto">
                Bespoke packages designed for the most discerning clients who expect nothing but perfection.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <Card className="border-2 border-luxury-gold bg-gradient-to-br from-white to-luxury-gold/5 hover:shadow-2xl transition-all duration-300">
                <CardHeader className="text-center pb-6">
                  <Badge className="w-fit mx-auto mb-4 bg-luxury-gold text-luxury-dark">
                    <Crown className="w-4 h-4 mr-1" />
                    Elite Package
                  </Badge>
                  <CardTitle className="text-2xl mb-2">Platinum Experience</CardTitle>
                  <CardDescription className="text-lg">For the most exclusive events</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-luxury-gold mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Michelin-level gourmet dining with premium imported ingredients</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-luxury-gold mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Professional celebrity event management and coordination</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-luxury-gold mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Luxury transportation and valet service for all guests</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-luxury-gold mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Premium floral arrangements and designer décor</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-luxury-gold mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Exclusive VIP lounge access and private dining areas</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-luxury-gold mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Professional photography and videography team</span>
                    </li>
                  </ul>
                  <Button className="w-full bg-luxury-gold text-luxury-dark hover:bg-luxury-gold/90 font-semibold mt-6">
                    Request Consultation
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-luxury-gold/30 hover:shadow-xl transition-all duration-300">
                <CardHeader className="text-center pb-6">
                  <Badge className="w-fit mx-auto mb-4 bg-luxury-dark text-white">
                    Premium Package
                  </Badge>
                  <CardTitle className="text-2xl mb-2">Gold Experience</CardTitle>
                  <CardDescription className="text-lg">Luxury with exceptional value</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-luxury-gold mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Premium multi-cuisine buffet with live cooking stations</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-luxury-gold mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Dedicated event coordinator and support staff</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-luxury-gold mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Complimentary valet parking for 200+ vehicles</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-luxury-gold mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Professional lighting and sound system setup</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-luxury-gold mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Elegant table settings and premium linens</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-luxury-gold mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Complimentary bridal suite and VIP areas</span>
                    </li>
                  </ul>
                  <Button className="w-full bg-luxury-gold text-luxury-dark hover:bg-luxury-gold/90 font-semibold mt-6">
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
                Premier Luxury Banquet Hall in Noida - The Opera House
              </h2>

              <div className="prose prose-lg max-w-none text-luxury-dark/80">
                <p className="mb-6">
                  When it comes to finding a <strong>luxury banquet hall in Noida</strong>, The Opera House stands unrivaled as the
                  premier destination for sophisticated events. Our <strong>premium banquet hall in Noida</strong> has been the venue
                  of choice for high-profile weddings, corporate galas, and exclusive celebrations for over a decade.
                </p>

                <h3 className="text-2xl font-semibold text-luxury-dark mt-8 mb-4">
                  What Makes Our Luxury Venue Exceptional?
                </h3>

                <p className="mb-4">
                  As the <strong>best luxury banquet hall in Noida</strong>, we've redefined what it means to host an extraordinary event.
                  Our venue features opulent crystal chandeliers, premium Italian marble flooring, and gold-accented interiors that create
                  an atmosphere of unparalleled elegance. Every element has been carefully curated to provide a truly <strong>luxury experience in Noida</strong>.
                </p>

                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>500+ guest capacity with flexible seating arrangements</li>
                  <li>Premium crystal chandeliers and ambient lighting systems</li>
                  <li>Italian marble flooring with gold accents throughout</li>
                  <li>State-of-the-art climate control for year-round comfort</li>
                  <li>Professional-grade audio-visual equipment and lighting</li>
                  <li>VIP lounge areas with luxury furnishings</li>
                  <li>Dedicated bridal suites with premium amenities</li>
                  <li>Luxury restrooms with marble fittings and premium fixtures</li>
                </ul>

                <h3 className="text-2xl font-semibold text-luxury-dark mt-8 mb-4">
                  Elite Services for Discerning Clients
                </h3>

                <p className="mb-4">
                  Our <strong>elite banquet hall in Noida</strong> offers more than just a beautiful space - we provide a complete luxury experience.
                  From Michelin-trained chefs creating culinary masterpieces to our dedicated concierge service handling every detail, we ensure
                  that your event exceeds every expectation.
                </p>

                <p className="mb-6">
                  Located in the prestigious Sector 63 area of Noida, our venue offers easy accessibility from Delhi, Ghaziabad, Greater Noida,
                  and other parts of NCR. The prime location, combined with our <strong>luxury amenities and world-class service</strong>, makes
                  The Opera House the preferred choice for Noida's most distinguished events.
                </p>

                <h3 className="text-2xl font-semibold text-luxury-dark mt-8 mb-4">
                  Book Your Luxury Event Today
                </h3>

                <p className="mb-4">
                  Experience the pinnacle of luxury event hosting at The Opera House. Whether you're planning an intimate gathering or a grand
                  celebration, our team of luxury event specialists will ensure every moment is perfect. Contact us today to schedule a VIP
                  tour of Noida's most exclusive banquet hall and discover why we're the preferred choice for luxury events.
                </p>
              </div>

              <div className="mt-12 bg-luxury-gold/10 p-8 rounded-lg">
                <div className="flex items-center gap-4 mb-4">
                  <Clock className="w-6 h-6 text-luxury-gold" />
                  <h4 className="text-xl font-semibold text-luxury-dark">Ready to Experience Luxury?</h4>
                </div>
                <p className="text-luxury-dark/70 mb-6">
                  Schedule a private tour of our luxury banquet hall and discover why The Opera House is Noida's most prestigious venue.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-luxury-gold text-luxury-dark hover:bg-luxury-gold/90">
                    Schedule VIP Tour
                  </Button>
                  <Button variant="outline" className="border-luxury-gold text-luxury-gold">
                    Download Brochure
                  </Button>
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

export default LuxuryBanquetHallNoida;