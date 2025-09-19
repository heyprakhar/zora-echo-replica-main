import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import BlogLayout from "@/components/blog/BlogLayout";
import BlogHeader from "@/components/blog/BlogHeader";
import BlogSection from "@/components/blog/BlogSection";
import TableOfContents from "@/components/blog/TableOfContents";
import HighlightBox from "@/components/blog/HighlightBox";
import { Phone, Crown, Users, Camera, Sparkles, Heart } from "lucide-react";

const GrandBallroomExcellence = () => {
  const sections = [
    { id: "architectural-grandeur", title: "Architectural Grandeur", level: 2 },
    { id: "capacity-configurations", title: "Capacity and Configurations", level: 2 },
    { id: "luxury-amenities", title: "Luxury Amenities", level: 2 },
    { id: "service-excellence", title: "Service Excellence Standards", level: 2 },
    { id: "customization", title: "Customization Capabilities", level: 2 },
    { id: "photography", title: "Wedding Photography Opportunities", level: 2 },
    { id: "safety-accessibility", title: "Safety and Accessibility", level: 2 },
    { id: "booking-process", title: "Booking and Consultation Process", level: 2 }
  ];

  const architecturalFeatures = [
    { icon: Crown, title: "Soaring Ceilings", description: "20-foot high ceilings create majesty and spaciousness" },
    { icon: Sparkles, title: "Crystal Chandeliers", description: "Hand-selected Austrian crystal fixtures cast enchanting light" },
    { icon: Heart, title: "Marble Flooring", description: "Italian Carrara marble with intricate inlay patterns" }
  ];

  const capacityOptions = [
    { type: "Wedding Ceremonies", capacity: "Up to 300 guests", layout: "Theater-style seating" },
    { type: "Reception Celebrations", capacity: "200 guests", layout: "Banquet seating with dance floor" },
    { type: "Corporate Functions", capacity: "150 participants", layout: "Conference style setup" }
  ];

  const luxuryAmenities = [
    { title: "Bridal Preparation Suite", features: ["Hollywood lighting", "Comfortable seating area", "Private entrance"] },
    { title: "Groom's Preparation Area", features: ["Sophisticated furnishings", "Full-service bar area", "Private restroom facilities"] },
    { title: "Guest Comfort Features", features: ["Climate control", "Professional sound system", "Luxury restroom facilities"] }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EventVenue",
    "name": "The Opera House Grand Ballroom",
    "description": "Luxury wedding venue with exquisite design, world-class amenities, and personalized service for unforgettable celebrations in Noida",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Noida",
      "addressRegion": "Uttar Pradesh",
      "addressCountry": "IN"
    },
    "telephone": "+91 9911620620",
    "url": "https://theoperahouse.in/grand-ballroom-excellence",
    "amenityFeature": [
      { "@type": "LocationFeatureSpecification", "name": "20-foot high ceilings" },
      { "@type": "LocationFeatureSpecification", "name": "Austrian crystal chandeliers" },
      { "@type": "LocationFeatureSpecification", "name": "Italian Carrara marble flooring" },
      { "@type": "LocationFeatureSpecification", "name": "Professional audio-visual system" },
      { "@type": "LocationFeatureSpecification", "name": "Bridal preparation suite" },
      { "@type": "LocationFeatureSpecification", "name": "Climate control" }
    ],
    "maximumAttendeeCapacity": 300,
    "publicAccess": true,
    "isAccessibleForFree": false
  };

  return (
    <>
      <Helmet>
        <title>Grand Ballroom Excellence | Luxury Wedding Venue | The Opera House Noida</title>
        <meta name="description" content="Experience luxury redefined at The Opera House Grand Ballroom in Noida. Premium wedding venue with exquisite design, world-class amenities, and personalized service for unforgettable celebrations." />
        <meta name="keywords" content="grand ballroom, luxury wedding venue noida, premium event space, crystal chandeliers, marble flooring, wedding ceremony, reception hall, The Opera House" />
        <link rel="canonical" href="https://theoperahouse.in/grand-ballroom-excellence" />
        <meta property="og:title" content="Grand Ballroom Excellence | Luxury Wedding Venue | The Opera House Noida" />
        <meta property="og:description" content="Experience luxury redefined at The Opera House Grand Ballroom in Noida. Premium wedding venue with exquisite design, world-class amenities, and personalized service." />
        <meta property="og:url" content="https://theoperahouse.in/grand-ballroom-excellence" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <BlogLayout>
        <BlogHeader
          title="Grand Ballroom Excellence"
          subtitle="Where Luxury Meets Timeless Elegance"
          description="Experience the pinnacle of luxury event hosting at The Opera House Grand Ballroom. This magnificent space combines architectural grandeur with contemporary sophistication, creating an atmosphere where your most cherished moments come to life with unparalleled elegance."
        />

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <TableOfContents sections={sections} />
          </div>

          <div className="lg:col-span-3 space-y-12">
            <HighlightBox
              title="Grand Ballroom at a Glance"
              items={[
                "20-foot soaring ceilings with crystal chandeliers",
                "Capacity for up to 300 guests",
                "Italian Carrara marble flooring",
                "Professional audio-visual systems",
                "Dedicated bridal and groom preparation suites",
                "Seamless indoor-outdoor flow"
              ]}
            />

            <BlogSection id="architectural-grandeur" title="Architectural Grandeur">
              <p className="text-lg text-luxury-text mb-6">
                The Grand Ballroom embodies architectural excellence through every carefully considered detail,
                creating an atmosphere of majesty and timeless sophistication.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {architecturalFeatures.map((feature, index) => (
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
                <h4 className="font-semibold text-luxury-blue mb-3">Design Philosophy</h4>
                <p className="text-luxury-text">
                  Our design harmoniously blends classical elements with modern functionality, featuring
                  ornate crown molding, decorative columns, and natural light filtering through elegant
                  arched windows, creating a space that feels both grand and intimate.
                </p>
              </div>
            </BlogSection>

            <BlogSection id="capacity-configurations" title="Capacity and Configurations">
              <p className="text-lg text-luxury-text mb-6">
                The Grand Ballroom's flexible design accommodates various event styles and guest counts,
                ensuring your celebration fits perfectly within our magnificent space.
              </p>

              <div className="space-y-4 mb-8">
                {capacityOptions.map((option, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border border-luxury-gold/20 rounded-lg">
                    <div>
                      <h4 className="font-semibold text-luxury-blue">{option.type}</h4>
                      <p className="text-luxury-text">{option.layout}</p>
                    </div>
                    <Badge variant="outline" className="border-luxury-gold text-luxury-gold">
                      <Users className="h-3 w-3 mr-1" />
                      {option.capacity}
                    </Badge>
                  </div>
                ))}
              </div>

              <HighlightBox
                title="Layout Versatility"
                items={[
                  "Moveable partitions for creating intimate sub-spaces",
                  "Multiple entrance points for smooth guest flow",
                  "Dedicated service areas maintaining event elegance",
                  "Strategic positioning of bars and service stations"
                ]}
              />
            </BlogSection>

            <BlogSection id="luxury-amenities" title="Luxury Amenities">
              <p className="text-lg text-luxury-text mb-6">
                Every element is designed to exceed expectations, providing premium amenities that ensure
                comfort and elegance for you and your guests.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {luxuryAmenities.map((amenity, index) => (
                  <Card key={index} className="border-luxury-gold/20">
                    <CardHeader>
                      <CardTitle className="text-lg text-luxury-blue">{amenity.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {amenity.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-luxury-text">
                            <div className="w-1.5 h-1.5 bg-luxury-gold rounded-full mr-2"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </BlogSection>

            <BlogSection id="service-excellence" title="Service Excellence Standards">
              <p className="text-lg text-luxury-text mb-6">
                Your Grand Ballroom celebration includes comprehensive service from our experienced team,
                ensuring every detail is executed to perfection.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="border-luxury-gold/20">
                  <CardHeader>
                    <CardTitle className="text-luxury-blue">Dedicated Event Coordination</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-luxury-text">
                      <li>• Experienced professional overseeing every detail</li>
                      <li>• Pre-event planning sessions and venue walkthroughs</li>
                      <li>• Day-of coordination ensuring seamless execution</li>
                      <li>• Emergency management and contingency planning</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-luxury-gold/20">
                  <CardHeader>
                    <CardTitle className="text-luxury-blue">Service Team Excellence</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-luxury-text">
                      <li>• Professional wait staff trained in luxury service standards</li>
                      <li>• Discrete service maintaining event atmosphere</li>
                      <li>• Coordinated timing for all service elements</li>
                      <li>• Specialized dietary accommodation capabilities</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </BlogSection>

            <BlogSection id="customization" title="Customization Capabilities">
              <p className="text-lg text-luxury-text mb-6">
                Transform the Grand Ballroom to reflect your unique vision with our comprehensive
                customization options and design flexibility.
              </p>

              <HighlightBox
                title="Design Personalization Options"
                items={[
                  "Custom lighting schemes matching your color palette",
                  "Professional staging areas for elaborate floral displays",
                  "Cultural celebration accommodations and specialized equipment",
                  "Seasonal adaptations for year-round beauty",
                  "Flexible setup accommodating various design themes"
                ]}
              />
            </BlogSection>

            <BlogSection id="photography" title="Wedding Photography Opportunities">
              <div className="flex items-center mb-4">
                <Camera className="h-6 w-6 text-luxury-gold mr-2" />
                <p className="text-lg text-luxury-text">
                  The Grand Ballroom provides stunning backdrops for wedding photography with
                  purpose-built areas for capturing your special moments.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="border-luxury-gold/20">
                  <CardHeader>
                    <CardTitle className="text-luxury-blue">Interior Portrait Features</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-luxury-text">
                      <li>• Dramatic archway framing for couple portraits</li>
                      <li>• Crystal chandelier backgrounds creating magical lighting</li>
                      <li>• Marble column settings for elegant formal photos</li>
                      <li>• Grand staircase access for sweeping romantic images</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-luxury-gold/20">
                  <CardHeader>
                    <CardTitle className="text-luxury-blue">Lighting Advantages</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-luxury-text">
                      <li>• Professional photography lighting pre-installed</li>
                      <li>• Natural light options during daytime events</li>
                      <li>• Dramatic evening lighting creating romantic atmosphere</li>
                      <li>• Customizable lighting for photographer requirements</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </BlogSection>

            <BlogSection id="safety-accessibility" title="Safety and Accessibility">
              <p className="text-lg text-luxury-text mb-6">
                We prioritize the safety and comfort of all guests with comprehensive safety measures
                and universal design ensuring everyone feels welcome.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-semibold text-luxury-blue">Safety Features</h4>
                  <ul className="space-y-2 text-luxury-text">
                    <li>• Emergency evacuation procedures clearly marked</li>
                    <li>• Professional security available upon request</li>
                    <li>• Medical emergency response coordination</li>
                    <li>• Safe storage for valuable items and gifts</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="font-semibold text-luxury-blue">Accessibility Commitment</h4>
                  <ul className="space-y-2 text-luxury-text">
                    <li>• Wheelchair accessible entrances and pathways</li>
                    <li>• Accessible restroom facilities meeting ADA standards</li>
                    <li>• Assistance available for guests with mobility needs</li>
                    <li>• Clear sightlines for guests with hearing or visual impairments</li>
                  </ul>
                </div>
              </div>
            </BlogSection>

            <BlogSection id="booking-process" title="Booking and Consultation Process">
              <p className="text-lg text-luxury-text mb-6">
                Begin your Grand Ballroom journey with personalized service and comprehensive planning support.
              </p>

              <Card className="border-luxury-gold/20 mb-8">
                <CardHeader>
                  <CardTitle className="text-luxury-blue">Your Journey Begins</CardTitle>
                  <CardDescription>
                    Experience the Grand Ballroom difference with our personalized consultation process
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-semibold text-luxury-blue mb-2">Initial Consultation</h5>
                      <ul className="space-y-1 text-luxury-text">
                        <li>• Private venue tour showcasing ballroom features</li>
                        <li>• Discussion of your vision and requirements</li>
                        <li>• Customization options review</li>
                        <li>• Timeline development and coordination planning</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold text-luxury-blue mb-2">Planning Partnership</h5>
                      <ul className="space-y-1 text-luxury-text">
                        <li>• Detailed planning sessions refining every element</li>
                        <li>• Vendor coordination and recommendation services</li>
                        <li>• Timeline development ensuring smooth event flow</li>
                        <li>• Rehearsal opportunities familiarizing wedding parties</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="text-center">
                <Button className="btn-luxury text-white font-light tracking-wide px-8 py-3">
                  <Phone className="h-4 w-4 mr-2" />
                  Schedule Your Grand Ballroom Tour
                </Button>
                <p className="text-luxury-text mt-2">Call +91 9911620620 to begin planning your perfect celebration</p>
              </div>
            </BlogSection>

            <div className="bg-gradient-to-r from-luxury-cream/20 to-luxury-gold/10 rounded-lg p-8 text-center">
              <h3 className="text-2xl font-light text-luxury-blue mb-4">Explore More Venue Options</h3>
              <p className="text-luxury-text mb-6">
                Discover our complete collection of luxury event spaces, each designed to create unforgettable moments.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button variant="outline" className="border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-white">
                  <a href="/outdoor-garden-celebrations">Outdoor Garden Celebrations</a>
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

export default GrandBallroomExcellence;