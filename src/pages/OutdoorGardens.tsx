import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  TreePine,
  Flower2,
  Sun,
  Camera,
  Users,
  MapPin,
  Palette,
  Wifi,
  Car,
  Clock,
  Sparkles,
  Heart,
  Music,
  Utensils
} from "lucide-react";

const OutdoorGardens = () => {
  return (
    <>
      <Helmet>
        <title>Outdoor Gardens & Lawn Wedding Venue in Noida | The Opera House</title>
        <meta
          name="description"
          content="Stunning outdoor gardens and lawn wedding venue in Noida. Perfect for garden weddings, outdoor ceremonies, and lawn parties with natural settings and luxury amenities."
        />
        <meta
          name="keywords"
          content="outdoor wedding venue noida, garden wedding venue, lawn wedding noida, outdoor gardens noida, garden party venue, outdoor ceremony venue, lawn party hall noida"
        />
        <link rel="canonical" href="https://theoperahouse.com/outdoor-gardens" />

        {/* Garden Wedding Venue Schema */}
        <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "EventVenue",
          "name": "The Opera House - Outdoor Gardens & Lawn Wedding Venue",
          "description": "Beautiful outdoor gardens and lawn wedding venue in Noida with natural settings, perfect for garden weddings and outdoor celebrations",
          "url": "https://theoperahouse.com/outdoor-gardens",
          "telephone": "+91 9911620620",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "The Opera House Banquet, Near Prateek Laurel, Sector-73",
            "addressLocality": "Noida",
            "addressRegion": "Uttar Pradesh",
            "postalCode": "201307",
            "addressCountry": "IN"
          },
          "maximumAttendeeCapacity": 300,
          "amenityFeature": [
            {"@type": "LocationFeatureSpecification", "name": "Landscaped Gardens"},
            {"@type": "LocationFeatureSpecification", "name": "Open Lawn Space"},
            {"@type": "LocationFeatureSpecification", "name": "Natural Lighting"},
            {"@type": "LocationFeatureSpecification", "name": "Weather Protection"},
            {"@type": "LocationFeatureSpecification", "name": "Garden Photography"},
            {"@type": "LocationFeatureSpecification", "name": "Outdoor Catering Setup"}
          ],
          "priceRange": "₹₹₹",
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "reviewCount": "94"
          }
        })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navigation />

        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-r from-green-100/80 to-blue-50/60">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-4 bg-green-600 text-white">Outdoor Garden Venue</Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-luxury-text mb-6">
                Stunning <span className="text-green-600">Outdoor Gardens</span> & Lawn
              </h1>
              <p className="text-xl text-luxury-text-muted mb-8 leading-relaxed">
                Experience the magic of nature at The Opera House's beautiful outdoor gardens and lawn spaces.
                Perfect for garden weddings, outdoor ceremonies, and celebrations under the open sky.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-green-600 hover:bg-green-700">
                  Book Garden Tour
                </Button>
                <Button size="lg" variant="outline" className="border-green-600 text-green-600">
                  View Garden Gallery
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Garden Spaces Overview */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-luxury-text mb-4">
                Beautiful Outdoor Spaces for Every Celebration
              </h2>
              <p className="text-lg text-luxury-text-muted max-w-2xl mx-auto">
                Choose from our meticulously maintained garden spaces, each offering unique natural beauty and versatile layouts.
              </p>
            </div>

            <Tabs defaultValue="main-garden" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="main-garden">Main Garden</TabsTrigger>
                <TabsTrigger value="lawn-area">Open Lawn</TabsTrigger>
                <TabsTrigger value="terrace-garden">Terrace Garden</TabsTrigger>
              </TabsList>

              <TabsContent value="main-garden" className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold text-luxury-text mb-4">Main Garden Space</h3>
                    <p className="text-luxury-text-muted mb-6">
                      Our signature garden space features beautifully landscaped areas with mature trees,
                      seasonal flower beds, and charming pathways. Perfect for ceremonies and intimate gatherings.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center gap-2">
                        <Users className="w-5 h-5 text-green-600" />
                        <span className="text-sm">Up to 200 guests</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <TreePine className="w-5 h-5 text-green-600" />
                        <span className="text-sm">Mature shade trees</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Flower2 className="w-5 h-5 text-green-600" />
                        <span className="text-sm">Seasonal flowers</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Camera className="w-5 h-5 text-green-600" />
                        <span className="text-sm">Photo-ready spaces</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-green-50 p-8 rounded-lg">
                    <div className="text-center text-gray-500">
                      <Camera className="w-16 h-16 mx-auto mb-4" />
                      <p className="text-sm">📸 Main Garden Image Placeholder</p>
                      <p className="text-xs mt-2">Beautiful landscaped garden with ceremony setup</p>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="lawn-area" className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold text-luxury-text mb-4">Open Lawn Area</h3>
                    <p className="text-luxury-text-muted mb-6">
                      Expansive open lawn space ideal for larger celebrations, cocktail receptions,
                      and outdoor entertainment. Offers flexibility for various seating arrangements.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center gap-2">
                        <Users className="w-5 h-5 text-green-600" />
                        <span className="text-sm">Up to 300 guests</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-5 h-5 text-green-600" />
                        <span className="text-sm">Flexible layouts</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Sun className="w-5 h-5 text-green-600" />
                        <span className="text-sm">Open sky setting</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Music className="w-5 h-5 text-green-600" />
                        <span className="text-sm">Entertainment ready</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-blue-50 p-8 rounded-lg">
                    <div className="text-center text-gray-500">
                      <Sun className="w-16 h-16 mx-auto mb-4" />
                      <p className="text-sm">🌿 Open Lawn Image Placeholder</p>
                      <p className="text-xs mt-2">Spacious lawn with party setup under the sky</p>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="terrace-garden" className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold text-luxury-text mb-4">Terrace Garden</h3>
                    <p className="text-luxury-text-muted mb-6">
                      Elevated terrace garden offering panoramic views and intimate outdoor dining experiences.
                      Perfect for smaller gatherings and pre-event cocktails.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center gap-2">
                        <Users className="w-5 h-5 text-green-600" />
                        <span className="text-sm">Up to 100 guests</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Sun className="w-5 h-5 text-green-600" />
                        <span className="text-sm">Sunset views</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Flower2 className="w-5 h-5 text-green-600" />
                        <span className="text-sm">Container gardens</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Utensils className="w-5 h-5 text-green-600" />
                        <span className="text-sm">Outdoor dining</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-orange-50 p-8 rounded-lg">
                    <div className="text-center text-gray-500">
                      <Sparkles className="w-16 h-16 mx-auto mb-4" />
                      <p className="text-sm">🌅 Terrace Garden Image Placeholder</p>
                      <p className="text-xs mt-2">Elegant terrace setup with city views</p>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Garden Features */}
        <section className="py-16 bg-green-50/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-luxury-text mb-4">
                Why Choose Our Outdoor Gardens
              </h2>
              <p className="text-lg text-luxury-text-muted max-w-2xl mx-auto">
                Experience the perfect blend of natural beauty and modern amenities for your outdoor celebration. Planning an event? Check our <a href="/luxury-event-guide-noida" className="text-luxury-blue hover:text-luxury-gold underline font-medium">comprehensive event planning guide</a> or explore our indoor <a href="/grand-ballroom" className="text-luxury-blue hover:text-luxury-gold underline font-medium">Grand Ballroom</a> for all-weather options.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="border-green-200 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <TreePine className="w-12 h-12 text-green-600 mx-auto mb-2" />
                  <CardTitle className="text-lg text-luxury-blue">Natural Beauty</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-luxury-text-muted text-center">
                    Lush greenery, mature trees, and seasonal flowers create a stunning natural backdrop.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-green-200 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <Palette className="w-12 h-12 text-green-600 mx-auto mb-2" />
                  <CardTitle className="text-lg text-luxury-blue">Weather Protection</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-luxury-text-muted text-center">
                    Retractable canopies and covered areas ensure your event proceeds rain or shine.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-green-200 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <Sun className="w-12 h-12 text-green-600 mx-auto mb-2" />
                  <CardTitle className="text-lg text-luxury-blue">Natural Lighting</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-luxury-text-muted text-center">
                    Perfect natural lighting during golden hour with professional outdoor lighting systems.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-green-200 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <Camera className="w-12 h-12 text-green-600 mx-auto mb-2" />
                  <CardTitle className="text-lg text-luxury-blue">Photography Heaven</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-luxury-text-muted text-center">
                    Instagram-worthy natural settings perfect for wedding photography and candid moments.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Garden Amenities */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-luxury-text mb-4">
                Outdoor Event Amenities
              </h2>
              <p className="text-lg text-luxury-text-muted max-w-2xl mx-auto">
                Complete outdoor event infrastructure ensuring comfort and convenience for all guests.
              </p>
            </div>

            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
              <Card className="border-luxury-gold/20 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center pb-2">
                  <Wifi className="w-10 h-10 text-luxury-blue mx-auto mb-2" />
                  <CardTitle className="text-base">Wi-Fi Coverage</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-luxury-text-muted text-center">
                    High-speed internet throughout all garden areas
                  </p>
                </CardContent>
              </Card>

              <Card className="border-luxury-gold/20 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center pb-2">
                  <Car className="w-10 h-10 text-luxury-blue mx-auto mb-2" />
                  <CardTitle className="text-base">Valet Parking</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-luxury-text-muted text-center">
                    Complimentary parking for up to 150 vehicles
                  </p>
                </CardContent>
              </Card>

              <Card className="border-luxury-gold/20 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center pb-2">
                  <Clock className="w-10 h-10 text-luxury-blue mx-auto mb-2" />
                  <CardTitle className="text-base">Extended Hours</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-luxury-text-muted text-center">
                    Events from sunrise to late evening permitted
                  </p>
                </CardContent>
              </Card>

              <Card className="border-luxury-gold/20 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center pb-2">
                  <Utensils className="w-10 h-10 text-luxury-blue mx-auto mb-2" />
                  <CardTitle className="text-base">Outdoor Catering</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-luxury-text-muted text-center">
                    Full outdoor kitchen and serving setup
                  </p>
                </CardContent>
              </Card>

              <Card className="border-luxury-gold/20 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center pb-2">
                  <Music className="w-10 h-10 text-luxury-blue mx-auto mb-2" />
                  <CardTitle className="text-base">Sound Systems</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-luxury-text-muted text-center">
                    Weather-resistant professional audio equipment
                  </p>
                </CardContent>
              </Card>

              <Card className="border-luxury-gold/20 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center pb-2">
                  <Sparkles className="w-10 h-10 text-luxury-blue mx-auto mb-2" />
                  <CardTitle className="text-base">Lighting Design</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-luxury-text-muted text-center">
                    Ambient and decorative outdoor lighting options
                  </p>
                </CardContent>
              </Card>

              <Card className="border-luxury-gold/20 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center pb-2">
                  <Heart className="w-10 h-10 text-luxury-blue mx-auto mb-2" />
                  <CardTitle className="text-base">Bridal Areas</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-luxury-text-muted text-center">
                    Private outdoor preparation and photo spaces
                  </p>
                </CardContent>
              </Card>

              <Card className="border-luxury-gold/20 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center pb-2">
                  <Users className="w-10 h-10 text-luxury-blue mx-auto mb-2" />
                  <CardTitle className="text-base">Guest Comfort</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-luxury-text-muted text-center">
                    Outdoor restrooms and climate comfort areas
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Image Gallery Placeholder */}
        <section className="py-16 bg-luxury-cream/10">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-luxury-text mb-4">
                Garden Gallery
              </h2>
              <p className="text-lg text-luxury-text-muted max-w-2xl mx-auto">
                Explore our beautiful outdoor spaces through our photo gallery.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Main Garden Ceremony", description: "Garden wedding ceremony setup" },
                { title: "Lawn Reception", description: "Open lawn evening reception" },
                { title: "Terrace Cocktails", description: "Sunset cocktail hour setup" },
                { title: "Garden Photography", description: "Couple photo session areas" },
                { title: "Seasonal Flowers", description: "Beautiful seasonal garden displays" },
                { title: "Evening Ambiance", description: "Garden lighting at golden hour" }
              ].map((item, index) => (
                <Card key={index} className="border-green-200 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="bg-green-50 p-8 rounded-lg mb-4">
                      <div className="text-center text-gray-500">
                        <Camera className="w-12 h-12 mx-auto mb-2" />
                        <p className="text-sm">📸 {item.title}</p>
                        <p className="text-xs mt-1">{item.description}</p>
                      </div>
                    </div>
                    <h3 className="font-semibold text-luxury-text">{item.title}</h3>
                    <p className="text-sm text-luxury-text-muted mt-1">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Garden Packages */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-luxury-text mb-4">
                Outdoor Garden Packages
              </h2>
              <p className="text-lg text-luxury-text-muted max-w-2xl mx-auto">
                Specially designed packages for outdoor celebrations combining natural beauty with luxury service.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-green-200 hover:shadow-xl transition-shadow">
                <CardHeader>
                  <Badge className="w-fit mb-2 bg-green-100 text-green-800">Garden Ceremony</Badge>
                  <CardTitle className="text-xl">Nature's Blessing</CardTitle>
                  <CardDescription>Perfect for 80-150 guests</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <TreePine className="w-4 h-4 text-green-600" />
                      Main garden ceremony setup
                    </li>
                    <li className="flex items-center gap-2">
                      <Flower2 className="w-4 h-4 text-green-600" />
                      Seasonal floral arrangements
                    </li>
                    <li className="flex items-center gap-2">
                      <Music className="w-4 h-4 text-green-600" />
                      Outdoor sound system
                    </li>
                    <li className="flex items-center gap-2">
                      <Camera className="w-4 h-4 text-green-600" />
                      Natural lighting setup
                    </li>
                    <li className="flex items-center gap-2">
                      <Utensils className="w-4 h-4 text-green-600" />
                      Outdoor catering service
                    </li>
                  </ul>
                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    Get Quote
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-green-200 hover:shadow-xl transition-shadow border-2 border-green-600">
                <CardHeader>
                  <Badge className="w-fit mb-2 bg-green-600 text-white">Most Popular</Badge>
                  <CardTitle className="text-xl">Garden Paradise</CardTitle>
                  <CardDescription>Perfect for 200-300 guests</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <Sun className="w-4 h-4 text-green-600" />
                      Full lawn and garden access
                    </li>
                    <li className="flex items-center gap-2">
                      <Palette className="w-4 h-4 text-green-600" />
                      Weather protection canopies
                    </li>
                    <li className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-green-600" />
                      Premium outdoor lighting
                    </li>
                    <li className="flex items-center gap-2">
                      <Music className="w-4 h-4 text-green-600" />
                      Professional DJ + live music area
                    </li>
                    <li className="flex items-center gap-2">
                      <Heart className="w-4 h-4 text-green-600" />
                      Outdoor bridal photography session
                    </li>
                  </ul>
                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    Get Quote
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-green-200 hover:shadow-xl transition-shadow">
                <CardHeader>
                  <Badge className="w-fit mb-2 bg-green-100 text-green-800">Luxury Garden</Badge>
                  <CardTitle className="text-xl">Royal Garden</CardTitle>
                  <CardDescription>Complete outdoor luxury experience</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-green-600" />
                      All garden spaces included
                    </li>
                    <li className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-green-600" />
                      Designer outdoor decoration
                    </li>
                    <li className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-green-600" />
                      Dedicated garden coordinator
                    </li>
                    <li className="flex items-center gap-2">
                      <Camera className="w-4 h-4 text-green-600" />
                      Professional garden photography
                    </li>
                    <li className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-green-600" />
                      Extended venue hours
                    </li>
                  </ul>
                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    Get Quote
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Local SEO Content */}
        <section className="py-16 bg-green-50/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-luxury-text mb-6">
                Premier Outdoor Gardens & Lawn Wedding Venue in Noida
              </h2>

              <div className="prose prose-lg max-w-none text-luxury-text-muted">
                <p className="mb-6">
                  Experience the magic of outdoor celebrations at The Opera House's stunning <strong>outdoor gardens and lawn wedding venue in Noida</strong>.
                  Our beautifully landscaped gardens provide the perfect natural setting for <strong>garden weddings in Noida</strong>, outdoor ceremonies,
                  and lawn parties that your guests will remember forever.
                </p>

                <h3 className="text-2xl font-semibold text-luxury-text mt-8 mb-4">
                  Why Choose Our Garden Wedding Venue in Noida?
                </h3>

                <p className="mb-4">
                  Our <strong>outdoor wedding venue in Noida</strong> offers three distinct garden spaces, each designed to provide unique experiences
                  for your special celebration. Whether you're planning an intimate garden ceremony or a grand lawn reception, our venue provides
                  the perfect blend of natural beauty and modern amenities.
                </p>

                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>Main garden space with mature trees and seasonal flower displays</li>
                  <li>Expansive open lawn area for larger celebrations and receptions</li>
                  <li>Elevated terrace garden with panoramic views</li>
                  <li>Weather protection with retractable canopies and covered areas</li>
                  <li>Professional outdoor lighting systems for evening events</li>
                  <li>Full outdoor catering setup and kitchen facilities</li>
                  <li>Photography-ready natural backdrops throughout the gardens</li>
                </ul>

                <h3 className="text-2xl font-semibold text-luxury-text mt-8 mb-4">
                  Complete Outdoor Event Services
                </h3>

                <p className="mb-4">
                  As Noida's premier <strong>lawn wedding venue</strong>, we understand that outdoor events require specialized planning and support.
                  Our experienced team provides comprehensive outdoor event services including weather contingency planning,
                  outdoor catering coordination, and garden-specific decoration services.
                </p>

                <p className="mb-6">
                  Located in Noida Sector 63, our garden venue offers easy access from Delhi, Ghaziabad, and Greater Noida.
                  The natural beauty of our gardens, combined with professional event management, makes us the perfect choice
                  for couples seeking an <strong>outdoor garden wedding venue in Noida</strong>.
                </p>

                <h3 className="text-2xl font-semibold text-luxury-text mt-8 mb-4">
                  Book Your Garden Celebration Today
                </h3>

                <p className="mb-4">
                  Don't miss the opportunity to celebrate in nature's embrace at Noida's most beautiful outdoor venue.
                  Contact us today to schedule a garden tour and discover how our outdoor spaces can transform your
                  celebration into an unforgettable experience under the open sky.
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

export default OutdoorGardens;