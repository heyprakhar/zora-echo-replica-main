import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import BlogLayout from "@/components/blog/BlogLayout";
import { BlogHeader } from "@/components/blog/BlogHeader";
import { BlogSection } from "@/components/blog/BlogSection";
import { TableOfContents } from "@/components/blog/TableOfContents";
import { HighlightBox } from "@/components/blog/HighlightBox";
import { Phone, Building2, Sun, Camera, Zap, Users, Accessibility, Recycle } from "lucide-react";

const GlassHouseElegance = () => {
  const sections = [
    { id: "architectural-innovation", title: "Architectural Innovation", level: 2 },
    { id: "natural-light", title: "Natural Light Integration", level: 2 },
    { id: "flexible-configuration", title: "Flexible Space Configuration", level: 2 },
    { id: "technology-innovation", title: "Technology and Innovation", level: 2 },
    { id: "service-excellence", title: "Service Excellence in Modern Settings", level: 2 },
    { id: "indoor-outdoor", title: "Indoor-Outdoor Integration", level: 2 },
    { id: "accessibility", title: "Accessibility and Universal Design", level: 2 },
    { id: "photography", title: "Photography and Videography Excellence", level: 2 },
    { id: "cultural-accommodations", title: "Cultural Celebration Accommodations", level: 2 },
    { id: "environmental", title: "Environmental Consciousness", level: 2 },
    { id: "booking-consultation", title: "Booking and Consultation Process", level: 2 }
  ];

  const architecturalFeatures = [
    { icon: Building2, title: "Floor-to-Ceiling Glass", description: "Expansive glass surfaces creating uninterrupted garden views" },
    { icon: Sun, title: "Natural Light Optimization", description: "Advanced design maximizing daylight throughout celebrations" },
    { icon: Zap, title: "Smart Building Systems", description: "Intelligent climate control and automated lighting systems" }
  ];

  const eventConfigurations = [
    { type: "Wedding Ceremonies", capacity: "Up to 250 guests", layout: "Theater-style with glass wall backdrops" },
    { type: "Reception Celebrations", capacity: "200 guests", layout: "Banquet seating with seamless service" },
    { type: "Corporate Functions", capacity: "150 participants", layout: "Conference style with natural lighting" }
  ];

  const technologyFeatures = [
    { title: "Climate Control Excellence", features: ["Intelligent HVAC systems", "Zone-based climate control", "Air quality monitoring", "Backup systems"] },
    { title: "Audio-Visual Integration", features: ["Professional sound systems", "Integrated projection displays", "Lighting control systems", "High-speed Wi-Fi networks"] },
    { title: "Smart Building Systems", features: ["Automated window tinting", "Security system integration", "Energy monitoring", "Building management systems"] }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EventVenue",
    "name": "The Opera House Glass House",
    "description": "Modern luxury wedding venue with floor-to-ceiling windows, seamless indoor-outdoor integration, and stunning architectural design for unforgettable celebrations in Noida",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Noida",
      "addressRegion": "Uttar Pradesh",
      "addressCountry": "IN"
    },
    "telephone": "+91 9911620620",
    "url": "https://theoperahouse.in/glass-house-elegance",
    "amenityFeature": [
      { "@type": "LocationFeatureSpecification", "name": "Floor-to-ceiling glass walls" },
      { "@type": "LocationFeatureSpecification", "name": "Climate-controlled environment" },
      { "@type": "LocationFeatureSpecification", "name": "Professional audio-visual systems" },
      { "@type": "LocationFeatureSpecification", "name": "Retractable glass panels" },
      { "@type": "LocationFeatureSpecification", "name": "Smart building technology" },
      { "@type": "LocationFeatureSpecification", "name": "Universal accessibility design" }
    ],
    "maximumAttendeeCapacity": 250,
    "publicAccess": true,
    "isAccessibleForFree": false
  };

  return (
    <>
      <Helmet>
        <title>Glass House Elegance | Modern Wedding Venue | The Opera House Noida</title>
        <meta name="description" content="Experience contemporary sophistication at The Opera House Glass House in Noida. Modern luxury wedding venue with floor-to-ceiling windows, seamless indoor-outdoor integration, and stunning architectural design for unforgettable celebrations." />
        <meta name="keywords" content="glass house wedding venue, modern wedding venue noida, contemporary event space, floor-to-ceiling windows, indoor-outdoor venue, smart building technology, The Opera House" />
        <link rel="canonical" href="https://theoperahouse.in/glass-house-elegance" />
        <meta property="og:title" content="Glass House Elegance | Modern Wedding Venue | The Opera House Noida" />
        <meta property="og:description" content="Experience contemporary sophistication at The Opera House Glass House in Noida. Modern luxury wedding venue with stunning architectural design." />
        <meta property="og:url" content="https://theoperahouse.in/glass-house-elegance" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <BlogLayout>
        <BlogHeader
          title="Glass House Elegance"
          subtitle="Where Contemporary Sophistication Meets Timeless Romance"
          description="Experience the pinnacle of contemporary luxury at The Opera House Glass House. This stunning modern venue features floor-to-ceiling glass walls that create seamless integration between indoor comfort and outdoor beauty, offering your guests an immersive experience in natural light and panoramic views while maintaining sophisticated luxury amenities."
        />

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <TableOfContents sections={sections} />
          </div>

          <div className="lg:col-span-3 space-y-12">
            <HighlightBox
              title="Glass House Contemporary Features"
              items={[
                "Floor-to-ceiling glass walls with uninterrupted garden views",
                "Capacity for up to 250 guests with flexible configurations",
                "Advanced climate control and smart building systems",
                "Professional audio-visual integration and lighting control",
                "Retractable glass panels for complete indoor-outdoor flow",
                "Universal accessibility design and inclusive features"
              ]}
            />

            <BlogSection id="architectural-innovation" title="Architectural Innovation">
              <p className="text-lg text-luxury-text mb-6">
                The Glass House embodies cutting-edge architectural principles, creating spaces that feel both
                intimate and grand through innovative use of glass, light, and modern engineering.
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
                <h4 className="font-semibold text-luxury-blue mb-3">Contemporary Design Philosophy</h4>
                <p className="text-luxury-text">
                  Modern engineering creates spaces through soaring ceiling heights, structural steel framework
                  providing strength while maintaining visual lightness, retractable glass panels offering
                  complete indoor-outdoor integration, and professional lighting systems seamlessly integrated
                  into architectural elements.
                </p>
              </div>
            </BlogSection>

            <BlogSection id="natural-light" title="Natural Light Integration">
              <p className="text-lg text-luxury-text mb-6">
                The Glass House maximizes natural light for stunning celebrations throughout the day,
                creating dynamic atmospheres that change beautifully from morning to evening.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="border-luxury-gold/20">
                  <CardHeader>
                    <CardTitle className="text-luxury-blue flex items-center">
                      <Sun className="h-5 w-5 mr-2 text-luxury-gold" />
                      Morning Events
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-luxury-text">
                      <li>• Soft, diffused light creating romantic ceremony atmospheres</li>
                      <li>• Eastern exposure providing gentle illumination</li>
                      <li>• Natural warmth enhancing intimate gathering feelings</li>
                      <li>• Photography opportunities with gorgeous natural backlighting</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-luxury-gold/20">
                  <CardHeader>
                    <CardTitle className="text-luxury-blue">Afternoon Celebrations</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-luxury-text">
                      <li>• Abundant natural light reducing artificial lighting needs</li>
                      <li>• Strategic shading systems preventing glare</li>
                      <li>• Optimal lighting for photography throughout venue</li>
                      <li>• Dynamic lighting changes creating evolving atmospheres</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-luxury-gold/20">
                  <CardHeader>
                    <CardTitle className="text-luxury-blue">Evening Magic</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-luxury-text">
                      <li>• Professional lighting creating magical evening atmospheres</li>
                      <li>• Glass walls reflecting interior lighting</li>
                      <li>• Seamless transition from natural to artificial lighting</li>
                      <li>• Starlight filtering through glass ceiling</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </BlogSection>

            <BlogSection id="flexible-configuration" title="Flexible Space Configuration">
              <p className="text-lg text-luxury-text mb-6">
                The Glass House adapts to various celebration styles and guest counts with modular design
                elements and professional infrastructure supporting modern event requirements.
              </p>

              <div className="space-y-4 mb-8">
                {eventConfigurations.map((config, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border border-luxury-gold/20 rounded-lg">
                    <div>
                      <h4 className="font-semibold text-luxury-blue">{config.type}</h4>
                      <p className="text-luxury-text">{config.layout}</p>
                    </div>
                    <Badge variant="outline" className="border-luxury-gold text-luxury-gold">
                      <Users className="h-3 w-3 mr-1" />
                      {config.capacity}
                    </Badge>
                  </div>
                ))}
              </div>

              <HighlightBox
                title="Modular Design Elements"
                items={[
                  "Movable partition systems creating intimate spaces within larger venue",
                  "Professional staging areas adaptable for different entertainment configurations",
                  "Multiple service access points maintaining event flow and guest experience",
                  "Integrated technology infrastructure supporting modern event requirements"
                ]}
              />
            </BlogSection>

            <BlogSection id="technology-innovation" title="Technology and Innovation">
              <p className="text-lg text-luxury-text mb-6">
                Advanced technology seamlessly integrated into Glass House design provides smart venue
                features that enhance comfort, convenience, and celebration quality.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {technologyFeatures.map((tech, index) => (
                  <Card key={index} className="border-luxury-gold/20">
                    <CardHeader>
                      <CardTitle className="text-lg text-luxury-blue">{tech.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {tech.features.map((feature, featureIndex) => (
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

              <div className="mt-8 bg-luxury-cream/30 rounded-lg p-6">
                <h4 className="font-semibold text-luxury-blue mb-3 flex items-center">
                  <Recycle className="h-5 w-5 mr-2 text-luxury-gold" />
                  Sustainable Technology
                </h4>
                <p className="text-luxury-text">
                  Environmental responsibility integrated through solar glass technology, LED lighting systems,
                  smart glass technology adjusting transparency automatically, and energy monitoring systems
                  optimizing resource utilization throughout events.
                </p>
              </div>
            </BlogSection>

            <BlogSection id="service-excellence" title="Service Excellence in Modern Settings">
              <p className="text-lg text-luxury-text mb-6">
                Glass House service combines luxury hospitality with modern efficiency, featuring
                contemporary service standards and professional event coordination.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="border-luxury-gold/20">
                  <CardHeader>
                    <CardTitle className="text-luxury-blue">Professional Event Coordination</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-luxury-text">
                      <li>• Coordinators specializing in Glass House events and logistics</li>
                      <li>• Technology integration support for modern event requirements</li>
                      <li>• Timeline coordination optimizing natural light and architectural features</li>
                      <li>• Emergency response planning adapted for glass architecture</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-luxury-gold/20">
                  <CardHeader>
                    <CardTitle className="text-luxury-blue">Service Team Excellence</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-luxury-text">
                      <li>• Staff trained in Glass House-specific service protocols</li>
                      <li>• Understanding of climate control and lighting systems</li>
                      <li>• Professional service with modern architectural elements</li>
                      <li>• Cultural sensitivity training for diverse celebrations</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </BlogSection>

            <BlogSection id="indoor-outdoor" title="Indoor-Outdoor Integration">
              <p className="text-lg text-luxury-text mb-6">
                Glass House design creates perfect harmony between interior and exterior through
                retractable glass systems and seamless transition spaces.
              </p>

              <HighlightBox
                title="Seamless Integration Features"
                items={[
                  "Large glass panels opening completely to surrounding terraces and gardens",
                  "Professional installation ensuring weather sealing and security",
                  "Sound system integration maintaining audio quality in open-air configurations",
                  "Professional landscaping creating natural extensions of interior design",
                  "Lighting design extending interior ambiance to outdoor spaces"
                ]}
              />
            </BlogSection>

            <BlogSection id="accessibility" title="Accessibility and Universal Design">
              <p className="text-lg text-luxury-text mb-6">
                Glass House design prioritizes universal access and inclusion with modern accessibility
                standards and inclusive design philosophy.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="border-luxury-gold/20">
                  <CardHeader>
                    <CardTitle className="text-luxury-blue flex items-center">
                      <Accessibility className="h-5 w-5 mr-2 text-luxury-gold" />
                      Physical Accessibility
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-luxury-text">
                      <li>• Wheelchair accessible entrances with automatic doors</li>
                      <li>• Level flooring eliminating barriers throughout venue</li>
                      <li>• Accessible restroom facilities exceeding ADA requirements</li>
                      <li>• Clear sight lines utilizing glass wall advantages</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-luxury-gold/20">
                  <CardHeader>
                    <CardTitle className="text-luxury-blue">Inclusive Design</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-luxury-text">
                      <li>• Multiple seating options for different needs</li>
                      <li>• Clear wayfinding systems using visual and tactile elements</li>
                      <li>• Temperature and lighting controls for sensory sensitivities</li>
                      <li>• Quiet spaces available for breaks from activities</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </BlogSection>

            <BlogSection id="photography" title="Photography and Videography Excellence">
              <div className="flex items-center mb-4">
                <Camera className="h-6 w-6 text-luxury-gold mr-2" />
                <p className="text-lg text-luxury-text">
                  Glass House design provides exceptional visual storytelling opportunities with
                  architectural photography features and professional videography advantages.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="border-luxury-gold/20">
                  <CardHeader>
                    <CardTitle className="text-luxury-blue">Natural Light Photography</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-luxury-text">
                      <li>• Floor-to-ceiling windows providing gorgeous natural backlighting</li>
                      <li>• Changing light throughout day creating diverse photography moods</li>
                      <li>• Reflection opportunities using glass surfaces creatively</li>
                      <li>• Garden views through glass creating layered compositions</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-luxury-gold/20">
                  <CardHeader>
                    <CardTitle className="text-luxury-blue">Architectural Photography</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-luxury-text">
                      <li>• Modern design elements providing contemporary backdrops</li>
                      <li>• Clean lines and geometric shapes for striking compositions</li>
                      <li>• Glass and steel details adding sophisticated elements</li>
                      <li>• Interior and exterior integration creating unique perspectives</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </BlogSection>

            <BlogSection id="cultural-accommodations" title="Cultural Celebration Accommodations">
              <p className="text-lg text-luxury-text mb-6">
                Glass House flexibility accommodates various cultural celebration requirements while
                providing modern amenities and contemporary venue aesthetics.
              </p>

              <HighlightBox
                title="Cultural Integration Features"
                items={[
                  "Space configuration flexibility accommodating different cultural ceremony layouts",
                  "Religious and cultural decoration integration with modern architectural elements",
                  "Specialized equipment installation for cultural music and performances",
                  "Service team cultural sensitivity training ensuring respectful assistance",
                  "Technology integration supporting cultural presentations and multimedia"
                ]}
              />
            </BlogSection>

            <BlogSection id="environmental" title="Environmental Consciousness">
              <p className="text-lg text-luxury-text mb-6">
                Glass House design incorporates environmental responsibility through sustainable venue
                operations and energy efficiency measures.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="border-luxury-gold/20">
                  <CardHeader>
                    <CardTitle className="text-luxury-blue flex items-center">
                      <Recycle className="h-5 w-5 mr-2 text-luxury-gold" />
                      Energy Efficiency
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-luxury-text">
                      <li>• Natural light utilization reducing artificial lighting consumption</li>
                      <li>• High-performance glass providing excellent insulation</li>
                      <li>• LED lighting systems reducing power consumption</li>
                      <li>• Smart building systems optimizing energy usage</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-luxury-gold/20">
                  <CardHeader>
                    <CardTitle className="text-luxury-blue">Waste Reduction Programs</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-luxury-text">
                      <li>• Recycling programs for all venue waste</li>
                      <li>• Composting programs for organic waste</li>
                      <li>• Digital communication systems reducing paper waste</li>
                      <li>• Reusable service items and decoration options</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </BlogSection>

            <BlogSection id="booking-consultation" title="Booking and Consultation Process">
              <p className="text-lg text-luxury-text mb-6">
                Specialized consultation for modern venue celebrations includes Glass House experience
                planning and custom design consultation services.
              </p>

              <Card className="border-luxury-gold/20 mb-8">
                <CardHeader>
                  <CardTitle className="text-luxury-blue">Glass House Experience Planning</CardTitle>
                  <CardDescription>
                    Comprehensive consultation maximizing contemporary venue potential
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-semibold text-luxury-blue mb-2">Initial Glass House Tour</h5>
                      <ul className="space-y-1 text-luxury-text">
                        <li>• Private venue tours showcasing natural light features</li>
                        <li>• Technology demonstration of audio-visual capabilities</li>
                        <li>• Garden and outdoor space integration planning</li>
                        <li>• Photography consultation utilizing unique features</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold text-luxury-blue mb-2">Custom Design Consultation</h5>
                      <ul className="space-y-1 text-luxury-text">
                        <li>• Lighting design utilizing natural and professional systems</li>
                        <li>• Decoration planning with modern architecture integration</li>
                        <li>• Service coordination within Glass House layout</li>
                        <li>• Guest experience planning maximizing venue features</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="text-center">
                <Button className="btn-luxury text-white font-light tracking-wide px-8 py-3">
                  <Phone className="h-4 w-4 mr-2" />
                  Schedule Your Glass House Tour
                </Button>
                <p className="text-luxury-text mt-2">Call +91 9911620620 to experience contemporary elegance</p>
              </div>
            </BlogSection>

            <div className="bg-gradient-to-r from-luxury-cream/20 to-luxury-gold/10 rounded-lg p-8 text-center">
              <h3 className="text-2xl font-light text-luxury-blue mb-4">Explore Our Complete Venue Collection</h3>
              <p className="text-luxury-text mb-6">
                Discover the perfect venue for your celebration, each offering unique beauty and luxury amenities
                designed to create unforgettable moments.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button variant="outline" className="border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-white">
                  <a href="/grand-ballroom-excellence">Grand Ballroom Excellence</a>
                </Button>
                <Button variant="outline" className="border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-white">
                  <a href="/outdoor-garden-celebrations">Outdoor Garden Celebrations</a>
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

export default GlassHouseElegance;