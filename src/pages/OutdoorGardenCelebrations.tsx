import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import BlogLayout from "@/components/blog/BlogLayout";
import BlogHeader from "@/components/blog/BlogHeader";
import BlogSection from "@/components/blog/BlogSection";
import TableOfContents from "@/components/blog/TableOfContents";
import HighlightBox from "@/components/blog/HighlightBox";
import { Phone, Flower, TreePine, Camera, Sun, Users, Shield, Leaf } from "lucide-react";

const OutdoorGardenCelebrations = () => {
  const sections = [
    { id: "garden-landscape", title: "Garden Landscape Design", level: 2 },
    { id: "seasonal-beauty", title: "Seasonal Garden Beauty", level: 2 },
    { id: "ceremony-configurations", title: "Ceremony Configurations", level: 2 },
    { id: "weather-contingency", title: "Weather Contingency Planning", level: 2 },
    { id: "garden-amenities", title: "Garden Amenities", level: 2 },
    { id: "culinary-excellence", title: "Culinary Excellence in Garden Settings", level: 2 },
    { id: "photography", title: "Photography and Videography Opportunities", level: 2 },
    { id: "sustainability", title: "Sustainability and Environmental Responsibility", level: 2 },
    { id: "safety-security", title: "Safety and Security in Garden Settings", level: 2 },
    { id: "booking-planning", title: "Booking and Planning Process", level: 2 }
  ];

  const gardenFeatures = [
    { icon: Flower, title: "Manicured Lawns", description: "Expansive emerald green lawns providing perfect ceremony backdrops" },
    { icon: TreePine, title: "Heritage Trees", description: "Mature shade trees creating natural canopies and intimate gathering spaces" },
    { icon: Leaf, title: "Seasonal Blooms", description: "Carefully planned flower gardens ensuring year-round beauty" }
  ];

  const seasonalHighlights = [
    {
      season: "Spring (March - May)",
      highlights: ["Cherry blossoms and flowering trees", "Fresh green lawns", "Cool weather perfect for outdoor ceremonies"]
    },
    {
      season: "Summer (June - August)",
      highlights: ["Full foliage creating natural shade", "Evening celebrations under starlit skies", "Extended daylight hours"]
    },
    {
      season: "Autumn (October - November)",
      highlights: ["Perfect temperatures for outdoor ceremonies", "Golden hour lighting", "Clear skies for photography"]
    },
    {
      season: "Winter (December - February)",
      highlights: ["Crisp, clear weather", "Bright sunshine", "Intimate gatherings in peaceful settings"]
    }
  ];

  const ceremonyOptions = [
    { type: "Meadow Ceremony", capacity: "200-300 guests", features: ["Open lawn setting", "Natural amphitheater seating", "Mountain views"] },
    { type: "Terrace Ceremony", capacity: "150-200 guests", features: ["Elevated platform", "Water feature sounds", "Shaded areas"] },
    { type: "Garden Alcove Ceremony", capacity: "75-150 guests", features: ["Intimate setting", "Natural privacy", "Diverse backdrops"] }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EventVenue",
    "name": "The Opera House Outdoor Gardens",
    "description": "Enchanting garden wedding venue with lush landscapes, romantic settings, and seamless indoor-outdoor flow for magical celebrations in Noida",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Noida",
      "addressRegion": "Uttar Pradesh",
      "addressCountry": "IN"
    },
    "telephone": "+91 9911620620",
    "url": "https://theoperahouse.in/outdoor-garden-celebrations",
    "amenityFeature": [
      { "@type": "LocationFeatureSpecification", "name": "Manicured lawns" },
      { "@type": "LocationFeatureSpecification", "name": "Heritage trees" },
      { "@type": "LocationFeatureSpecification", "name": "Water features" },
      { "@type": "LocationFeatureSpecification", "name": "Garden pathways" },
      { "@type": "LocationFeatureSpecification", "name": "Weather contingency pavilion" },
      { "@type": "LocationFeatureSpecification", "name": "Professional outdoor lighting" }
    ],
    "maximumAttendeeCapacity": 300,
    "publicAccess": true,
    "isAccessibleForFree": false
  };

  return (
    <>
      <Helmet>
        <title>Outdoor Garden Celebrations | Garden Wedding Venue | The Opera House Noida</title>
        <meta name="description" content="Celebrate amidst natural beauty at The Opera House Outdoor Gardens in Noida. Enchanting garden wedding venue with lush landscapes, romantic settings, and seamless indoor-outdoor flow for magical celebrations." />
        <meta name="keywords" content="outdoor garden wedding, garden venue noida, outdoor wedding ceremony, garden reception, natural wedding venue, outdoor celebration, The Opera House gardens" />
        <link rel="canonical" href="https://theoperahouse.in/outdoor-garden-celebrations" />
        <meta property="og:title" content="Outdoor Garden Celebrations | Garden Wedding Venue | The Opera House Noida" />
        <meta property="og:description" content="Celebrate amidst natural beauty at The Opera House Outdoor Gardens in Noida. Enchanting garden wedding venue with lush landscapes and romantic settings." />
        <meta property="og:url" content="https://theoperahouse.in/outdoor-garden-celebrations" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <BlogLayout>
        <BlogHeader
          title="Outdoor Garden Celebrations"
          subtitle="Where Natural Beauty Meets Romantic Elegance"
          description="Celebrate amidst the enchanting beauty of our meticulously landscaped gardens. The Opera House Outdoor Gardens offer a romantic escape into nature, where your celebration unfolds against breathtaking garden vistas and lush landscapes, creating an atmosphere of timeless romance and natural elegance."
        />

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <TableOfContents sections={sections} />
          </div>

          <div className="lg:col-span-3 space-y-12">
            <HighlightBox
              title="Garden Celebration Features"
              items={[
                "Expansive emerald green lawns for ceremonies up to 300 guests",
                "Heritage trees creating natural canopies and intimate spaces",
                "Seasonal flower gardens ensuring year-round beauty",
                "Water features adding tranquil sounds and visual interest",
                "Professional weather contingency planning and covered pavilions",
                "Seamless indoor-outdoor flow with luxury amenities"
              ]}
            />

            <BlogSection id="garden-landscape" title="Garden Landscape Design">
              <p className="text-lg text-luxury-text mb-6">
                Our garden spaces showcase thoughtfully curated landscapes that provide the perfect backdrop
                for your celebration, combining natural beauty with professional event infrastructure.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {gardenFeatures.map((feature, index) => (
                  <Card key={index} className="border-luxury-gold/20 hover:border-luxury-gold/40 transition-all duration-300">
                    <CardHeader className="text-center">
                      <feature.icon className="h-8 w-8 text-luxury-gold mx-auto mb-2" />
                      <CardTitle className="text-lg">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-luxury-text text-center">{feature.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="bg-luxury-cream/30 rounded-lg p-6">
                <h4 className="font-semibold text-luxury-blue mb-3">Landscape Architecture</h4>
                <p className="text-luxury-text">
                  Professional landscape design creates distinct zones within the garden: ceremony meadow with
                  mountain views, cocktail terrace with water features, reception lawn accommodating various
                  configurations, and intimate conversation nooks nestled among flowering shrubs.
                </p>
              </div>
            </BlogSection>

            <BlogSection id="seasonal-beauty" title="Seasonal Garden Beauty">
              <p className="text-lg text-luxury-text mb-6">
                Experience the ever-changing beauty of our gardens throughout the year, with each season
                offering unique advantages and breathtaking natural backdrops for your celebration.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {seasonalHighlights.map((season, index) => (
                  <Card key={index} className="border-luxury-gold/20">
                    <CardHeader>
                      <CardTitle className="text-luxury-blue flex items-center">
                        <Sun className="h-5 w-5 mr-2 text-luxury-gold" />
                        {season.season}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {season.highlights.map((highlight, highlightIndex) => (
                          <li key={highlightIndex} className="flex items-center text-luxury-text">
                            <div className="w-1.5 h-1.5 bg-luxury-gold rounded-full mr-2"></div>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </BlogSection>

            <BlogSection id="ceremony-configurations" title="Ceremony Configurations">
              <p className="text-lg text-luxury-text mb-6">
                Multiple ceremony settings accommodate different styles and guest counts, each offering
                unique advantages and stunning natural backdrops.
              </p>

              <div className="space-y-4 mb-8">
                {ceremonyOptions.map((option, index) => (
                  <Card key={index} className="border-luxury-gold/20">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-luxury-blue">{option.type}</CardTitle>
                        <Badge variant="outline" className="border-luxury-gold text-luxury-gold">
                          <Users className="h-3 w-3 mr-1" />
                          {option.capacity}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {option.features.map((feature, featureIndex) => (
                          <Badge key={featureIndex} variant="secondary" className="bg-luxury-cream/50">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <HighlightBox
                title="Reception Configuration Options"
                items={[
                  "Lawn Reception: Open-air dining for 250-300 guests with dance floor",
                  "Terrace Reception: Elevated dining experience overlooking gardens",
                  "Professional lighting creating romantic evening atmosphere",
                  "Multiple bar stations positioned throughout garden areas"
                ]}
              />
            </BlogSection>

            <BlogSection id="weather-contingency" title="Weather Contingency Planning">
              <p className="text-lg text-luxury-text mb-6">
                Elegant covered areas and comprehensive backup plans ensure your celebration proceeds
                beautifully regardless of weather conditions.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="border-luxury-gold/20">
                  <CardHeader>
                    <CardTitle className="text-luxury-blue flex items-center">
                      <Shield className="h-5 w-5 mr-2 text-luxury-gold" />
                      Covered Pavilion Options
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-luxury-text">
                      <li>• Garden Pavilion with capacity for 200 guests</li>
                      <li>• Open-air covered structure maintaining outdoor atmosphere</li>
                      <li>• Professional lighting and sound system integration</li>
                      <li>• Retractable sides for flexible indoor-outdoor experience</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-luxury-gold/20">
                  <CardHeader>
                    <CardTitle className="text-luxury-blue">Indoor Backup Venues</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-luxury-text">
                      <li>• Grand Ballroom available for immediate weather contingency</li>
                      <li>• Glass House providing indoor space with garden views</li>
                      <li>• Service coordination ensuring smooth venue transitions</li>
                      <li>• Professional weather monitoring and decision support</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </BlogSection>

            <BlogSection id="garden-amenities" title="Garden Amenities">
              <p className="text-lg text-luxury-text mb-6">
                Thoughtful amenities enhance outdoor celebration comfort while maintaining the natural
                beauty and elegance of the garden setting.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-6">
                  <Card className="border-luxury-gold/20">
                    <CardHeader>
                      <CardTitle className="text-luxury-blue">Guest Comfort Features</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-luxury-text">
                        <li>• Professional outdoor furniture for extended events</li>
                        <li>• Strategic shade provision for daytime events</li>
                        <li>• Heating options for cooler weather celebrations</li>
                        <li>• Accessible pathways and seating for all guests</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <div className="space-y-6">
                  <Card className="border-luxury-gold/20">
                    <CardHeader>
                      <CardTitle className="text-luxury-blue">Technology Integration</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-luxury-text">
                        <li>• Wireless sound system with clear audio throughout gardens</li>
                        <li>• Professional lighting design highlighting garden beauty</li>
                        <li>• Wi-Fi connectivity for guest social media sharing</li>
                        <li>• Weather monitoring systems for real-time planning</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </BlogSection>

            <BlogSection id="culinary-excellence" title="Culinary Excellence in Garden Settings">
              <p className="text-lg text-luxury-text mb-6">
                Garden celebrations feature exceptional outdoor dining experiences with fresh, seasonal
                menu options and professional service maintaining luxury standards.
              </p>

              <HighlightBox
                title="Garden-to-Table Dining Experience"
                items={[
                  "Fresh, seasonal menu options reflecting garden settings",
                  "Outdoor kitchen capabilities for fresh preparation",
                  "Professional service maintaining luxury standards outdoors",
                  "Signature cocktails inspired by garden herbs and seasonal fruits",
                  "Cultural celebration accommodations within garden settings"
                ]}
              />
            </BlogSection>

            <BlogSection id="photography" title="Photography and Videography Opportunities">
              <div className="flex items-center mb-4">
                <Camera className="h-6 w-6 text-luxury-gold mr-2" />
                <p className="text-lg text-luxury-text">
                  Garden settings provide exceptional photography opportunities with natural backdrops
                  and diverse location options within the space.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="border-luxury-gold/20">
                  <CardHeader>
                    <CardTitle className="text-luxury-blue">Natural Backdrops</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-luxury-text">
                      <li>• Sweeping garden vistas for romantic couple portraits</li>
                      <li>• Seasonal flower arrangements providing colorful backdrops</li>
                      <li>• Water features creating reflection opportunities</li>
                      <li>• Heritage trees offering dramatic framing and natural archways</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-luxury-gold/20">
                  <CardHeader>
                    <CardTitle className="text-luxury-blue">Golden Hour Photography</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-luxury-text">
                      <li>• Strategic positioning maximizing natural light opportunities</li>
                      <li>• Sunset photography with garden silhouettes</li>
                      <li>• Professional lighting coordination enhancing natural beauty</li>
                      <li>• Multiple location options within garden space for variety</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </BlogSection>

            <BlogSection id="sustainability" title="Sustainability and Environmental Responsibility">
              <p className="text-lg text-luxury-text mb-6">
                Garden venues naturally support sustainable celebration practices through eco-friendly
                operations and environmental stewardship.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="border-luxury-gold/20">
                  <CardHeader>
                    <CardTitle className="text-luxury-blue flex items-center">
                      <Leaf className="h-5 w-5 mr-2 text-luxury-gold" />
                      Environmental Stewardship
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-luxury-text">
                      <li>• Native plant landscaping reducing water requirements</li>
                      <li>• Organic gardening practices supporting ecosystem health</li>
                      <li>• Energy-efficient lighting systems</li>
                      <li>• Local sourcing for flowers and decorative elements</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-luxury-gold/20">
                  <CardHeader>
                    <CardTitle className="text-luxury-blue">Sustainable Service Options</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-luxury-text">
                      <li>• Biodegradable service items for outdoor dining</li>
                      <li>• Composting programs for organic celebration waste</li>
                      <li>• Water conservation practices in garden maintenance</li>
                      <li>• Partnership with local suppliers reducing transportation impact</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </BlogSection>

            <BlogSection id="safety-security" title="Safety and Security in Garden Settings">
              <p className="text-lg text-luxury-text mb-6">
                Comprehensive safety protocols ensure secure outdoor celebrations with professional
                emergency procedures and infrastructure safety measures.
              </p>

              <HighlightBox
                title="Outdoor Safety Measures"
                items={[
                  "Well-lit pathways ensuring safe movement throughout gardens",
                  "Professional security available for outdoor celebrations",
                  "Weather monitoring and emergency shelter procedures",
                  "Medical emergency access and response coordination",
                  "Professional electrical installation for outdoor power needs"
                ]}
              />
            </BlogSection>

            <BlogSection id="booking-planning" title="Booking and Planning Process">
              <p className="text-lg text-luxury-text mb-6">
                Specialized consultation for outdoor garden celebrations includes seasonal timing guidance,
                weather contingency planning, and comprehensive coordination services.
              </p>

              <Card className="border-luxury-gold/20 mb-8">
                <CardHeader>
                  <CardTitle className="text-luxury-blue">Garden Consultation Experience</CardTitle>
                  <CardDescription>
                    Personalized planning for your perfect outdoor celebration
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-semibold text-luxury-blue mb-2">Site Evaluation</h5>
                      <ul className="space-y-1 text-luxury-text">
                        <li>• Seasonal timing consultation for optimal garden beauty</li>
                        <li>• Weather pattern analysis and contingency planning</li>
                        <li>• Guest count assessment for optimal space utilization</li>
                        <li>• Photography planning for garden settings</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold text-luxury-blue mb-2">Customization Planning</h5>
                      <ul className="space-y-1 text-luxury-text">
                        <li>• Garden decoration integration respecting landscape</li>
                        <li>• Lighting design enhancing natural beauty</li>
                        <li>• Service logistics for outdoor requirements</li>
                        <li>• Vendor coordination for garden-specific needs</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="text-center">
                <Button className="btn-luxury text-white font-light tracking-wide px-8 py-3">
                  <Phone className="h-4 w-4 mr-2" />
                  Schedule Your Garden Tour
                </Button>
                <p className="text-luxury-text mt-2">Call +91 9911620620 to explore our enchanting gardens</p>
              </div>
            </BlogSection>

            <div className="bg-gradient-to-r from-luxury-cream/20 to-luxury-gold/10 rounded-lg p-8 text-center">
              <h3 className="text-2xl font-light text-luxury-blue mb-4">Complete Your Venue Experience</h3>
              <p className="text-luxury-text mb-6">
                Explore our full collection of luxury event spaces, each designed to create magical moments
                in their own unique way.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button variant="outline" className="border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-white">
                  <a href="/grand-ballroom-excellence">Grand Ballroom Excellence</a>
                </Button>
                <Button variant="outline" className="border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-white">
                  <a href="/glass-house-elegance">Glass House Elegance</a>
                </Button>
                <Button variant="outline" className="border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-white">
                  <a href="/event-excellence-showcase">Complete Venue Showcase</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </BlogLayout>
    </>
  );
};

export default OutdoorGardenCelebrations;