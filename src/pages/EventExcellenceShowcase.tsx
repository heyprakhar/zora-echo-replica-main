import { Helmet } from 'react-helmet-async';
import BlogLayout from '@/components/blog/BlogLayout';
import BlogHeader from '@/components/blog/BlogHeader';
import BlogSection from '@/components/blog/BlogSection';
import TableOfContents from '@/components/blog/TableOfContents';
import CallToActionBlog from '@/components/blog/CallToActionBlog';
import HighlightBox from '@/components/blog/HighlightBox';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Link } from 'react-router-dom';

const EventExcellenceShowcase = () => {
  const tableOfContentsItems = [
    { id: 'the-art-of-celebration', title: 'The Art of Celebration', level: 1 },
    { id: 'venue-features-deep-dive', title: 'Venue Features Deep Dive', level: 1 },
    { id: 'grand-ballroom-specifications', title: 'Grand Ballroom Specifications', level: 2 },
    { id: 'outdoor-spaces', title: 'Outdoor Spaces', level: 2 },
    { id: 'glass-house-features', title: 'Glass House Features', level: 2 },
    { id: 'technical-capabilities', title: 'Technical Capabilities', level: 2 },
    { id: 'service-excellence-standards', title: 'Service Excellence Standards', level: 1 },
    { id: 'dedicated-event-management', title: 'Dedicated Event Management', level: 2 },
    { id: 'culinary-team-expertise', title: 'Culinary Team Expertise', level: 2 },
    { id: 'decor-and-design-team', title: 'Décor and Design Team', level: 2 },
    { id: 'customization-possibilities', title: 'Customization Possibilities', level: 1 },
    { id: 'theme-implementation', title: 'Theme Implementation', level: 2 },
    { id: 'cultural-adaptations', title: 'Cultural Adaptations', level: 2 },
    { id: 'fusion-celebrations', title: 'Fusion Celebrations', level: 2 },
    { id: 'success-stories', title: 'Success Stories', level: 1 },
    { id: 'virtual-venue-tour-guide', title: 'Virtual Venue Tour Guide', level: 1 }
  ];

  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Creating Unforgettable Moments: The Opera House Experience | Event Excellence Showcase",
    "description": "Discover The Opera House's approach to creating transformative celebrations through architectural grandeur, service excellence, and cultural expertise. Experience luxury event hosting redefined.",
    "author": {
      "@type": "Organization",
      "name": "The Opera House",
      "url": "https://theoperahouse.in"
    },
    "publisher": {
      "@type": "Organization",
      "name": "The Opera House",
      "logo": {
        "@type": "ImageObject",
        "url": "https://theoperahouse.in/opera-logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://theoperahouse.in/event-excellence-showcase"
    },
    "datePublished": "2024-01-15",
    "dateModified": "2024-01-15"
  };

  return (
    <>
      <Helmet>
        <title>Creating Unforgettable Moments: The Opera House Experience | Event Excellence Showcase</title>
        <meta name="description" content="Discover The Opera House's approach to creating transformative celebrations through architectural grandeur, service excellence, and cultural expertise. Experience luxury event hosting redefined." />
        <meta name="keywords" content="luxury event venue noida, premium banquet hall features, event venue excellence noida, luxury wedding venue capabilities, The Opera House experience" />
        <link rel="canonical" href="https://theoperahouse.in/event-excellence-showcase" />
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
      </Helmet>

      <BlogLayout>
        <BlogHeader
          title="Creating Unforgettable Moments: The Opera House Experience"
          subtitle="Where architectural grandeur meets service excellence to create transformative celebrations"
          readTime="15 min read"
          publishDate="January 15, 2024"
          category="Event Excellence"
        />

        <TableOfContents items={tableOfContentsItems} />

        <BlogSection id="the-art-of-celebration" title="The Art of Celebration">
          <p className="text-luxury-text leading-relaxed mb-6">
            At The Opera House, we believe that every celebration is an opportunity to create lasting memories that transcend generations. Our philosophy centers on understanding the profound emotional significance of life's most important moments and translating that understanding into extraordinary experiences.
          </p>

          <HighlightBox className="mb-8">
            <h4 className="text-xl font-semibold text-luxury-gold mb-4">Our Philosophy of Luxury Event Hosting</h4>
            <p className="text-luxury-text leading-relaxed">
              True luxury in event hosting extends far beyond opulent décor or premium amenities. It lies in the seamless orchestration of countless details, each carefully curated to support the unique story you wish to tell.
            </p>
          </HighlightBox>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="glass border-luxury-gold/20">
              <CardContent className="p-6">
                <h5 className="font-semibold text-luxury-blue mb-3">The Opera House Approach</h5>
                <ul className="space-y-2 text-sm text-luxury-text">
                  <li>• <strong>Emotional Intelligence:</strong> Understanding the deeper meaning behind each celebration</li>
                  <li>• <strong>Cultural Sensitivity:</strong> Honoring traditions while embracing modern preferences</li>
                  <li>• <strong>Personalized Service:</strong> Tailoring every aspect to reflect your unique vision</li>
                  <li>• <strong>Attention to Detail:</strong> Ensuring perfection in elements both seen and unseen</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="glass border-luxury-gold/20">
              <CardContent className="p-6">
                <h5 className="font-semibold text-luxury-blue mb-3">Experience Creation Elements</h5>
                <ul className="space-y-2 text-sm text-luxury-text">
                  <li>• <strong>Atmospheric Design:</strong> Crafting environments that evoke desired emotions</li>
                  <li>• <strong>Cultural Integration:</strong> Seamlessly blending tradition with contemporary luxury</li>
                  <li>• <strong>Sensory Engagement:</strong> Engaging all senses through décor, cuisine, music, and ambiance</li>
                  <li>• <strong>Moment Curation:</strong> Creating specific moments that become cherished memories</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </BlogSection>

        <BlogSection id="venue-features-deep-dive" title="Venue Features Deep Dive">
          <p className="text-luxury-text leading-relaxed mb-8">
            The Opera House stands as a testament to architectural excellence, offering diverse spaces that can be transformed to accommodate any vision while maintaining the highest standards of luxury and functionality.
          </p>

          <div id="grand-ballroom-specifications" className="mb-10">
            <h3 className="text-2xl font-bold text-luxury-gold mb-6">Grand Ballroom Specifications</h3>

            <HighlightBox className="mb-6">
              <p className="text-luxury-text leading-relaxed">
                Our signature <strong>Grand Ballroom</strong> represents the pinnacle of luxury event spaces in Noida, designed to accommodate celebrations of any scale while maintaining intimate atmosphere and personalized service.
              </p>
            </HighlightBox>

            <div className="grid lg:grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="text-xl font-semibold text-luxury-blue mb-4">Architectural Features</h4>
                <ul className="space-y-3 text-luxury-text">
                  <li>• <strong>Capacity:</strong> Comfortably accommodates 500+ guests with multiple seating configurations</li>
                  <li>• <strong>Ceiling Height:</strong> Soaring 24-foot ceilings create a sense of grandeur and space</li>
                  <li>• <strong>Natural Light:</strong> Strategically placed windows provide natural illumination during daytime events</li>
                  <li>• <strong>Acoustic Design:</strong> Professional sound engineering ensures perfect audio throughout the space</li>
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-luxury-blue mb-4">Design Elements</h4>
                <ul className="space-y-3 text-luxury-text">
                  <li>• <strong>Classic Architecture:</strong> Timeless design elements that complement any décor theme</li>
                  <li>• <strong>Flexible Layout:</strong> Multiple configuration options for ceremonies, receptions, and celebrations</li>
                  <li>• <strong>Premium Finishes:</strong> Marble flooring, crystal chandeliers, and custom millwork</li>
                  <li>• <strong>Climate Control:</strong> Advanced HVAC systems maintain perfect comfort year-round</li>
                </ul>
              </div>
            </div>

            <div className="text-center mb-8">
              <Link
                to="/grand-ballroom-excellence"
                className="inline-flex items-center btn-luxury text-white px-8 py-3 rounded-full hover:scale-105 transition-transform duration-300"
              >
                Explore Grand Ballroom in Detail →
              </Link>
            </div>
          </div>

          <Separator className="my-8" />

          <div id="outdoor-spaces" className="mb-10">
            <h3 className="text-2xl font-bold text-luxury-gold mb-6">Outdoor Spaces</h3>

            <p className="text-luxury-text leading-relaxed mb-6">
              Our meticulously landscaped <strong>Outdoor Gardens</strong> provide a natural setting for ceremonies and celebrations that embrace the beauty of nature while maintaining luxury standards.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card className="glass border-luxury-gold/20">
                <CardContent className="p-6">
                  <h5 className="font-semibold text-luxury-blue mb-3">Garden Features</h5>
                  <ul className="space-y-2 text-sm text-luxury-text">
                    <li>• Professionally designed gardens with seasonal flowers and greenery</li>
                    <li>• Natural amphitheater with gently sloped terrain for ceremonies</li>
                    <li>• Elegant fountains and water elements for tranquil ambiance</li>
                    <li>• Sophisticated outdoor lighting for magical evening atmospheres</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="glass border-luxury-gold/20">
                <CardContent className="p-6">
                  <h5 className="font-semibold text-luxury-blue mb-3">Weather Contingency</h5>
                  <ul className="space-y-2 text-sm text-luxury-text">
                    <li>• Covered pavilions provide protection while maintaining outdoor feel</li>
                    <li>• Advanced weather tracking ensures perfect timing decisions</li>
                    <li>• Quick transition capabilities for weather-related changes</li>
                    <li>• Seamless integration with indoor spaces when needed</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mb-8">
              <Link
                to="/outdoor-garden-celebrations"
                className="inline-flex items-center btn-luxury text-white px-8 py-3 rounded-full hover:scale-105 transition-transform duration-300"
              >
                Discover Outdoor Celebrations →
              </Link>
            </div>
          </div>

          <Separator className="my-8" />

          <div id="glass-house-features" className="mb-10">
            <h3 className="text-2xl font-bold text-luxury-gold mb-6">Glass House Features</h3>

            <p className="text-luxury-text leading-relaxed mb-6">
              The architectural marvel of our <strong>Glass House</strong> offers a unique blend of indoor comfort with outdoor beauty, creating an unparalleled setting for modern luxury celebrations.
            </p>

            <div className="grid lg:grid-cols-3 gap-6 mb-8">
              <Card className="glass border-luxury-gold/20">
                <CardContent className="p-6">
                  <h5 className="font-semibold text-luxury-blue mb-3">Unique Architecture</h5>
                  <ul className="space-y-2 text-sm text-luxury-text">
                    <li>• Floor-to-ceiling glass with panoramic garden views</li>
                    <li>• Contemporary design complementing all themes</li>
                    <li>• Abundant natural light for beautiful daytime ambiance</li>
                    <li>• Climate-controlled with outdoor visual experience</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="glass border-luxury-gold/20">
                <CardContent className="p-6">
                  <h5 className="font-semibold text-luxury-blue mb-3">Design Versatility</h5>
                  <ul className="space-y-2 text-sm text-luxury-text">
                    <li>• Glass architecture allows décor to take center stage</li>
                    <li>• Beautiful in every season with changing outdoor views</li>
                    <li>• Stunning natural light for professional photography</li>
                    <li>• Perfect scale for intimate celebrations</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="glass border-luxury-gold/20">
                <CardContent className="p-6">
                  <h5 className="font-semibold text-luxury-blue mb-3">Capabilities</h5>
                  <ul className="space-y-2 text-sm text-luxury-text">
                    <li>• Accommodates 100-200 guests flexibly</li>
                    <li>• Multi-purpose ceremony and reception configurations</li>
                    <li>• Hidden technology maintains aesthetic integrity</li>
                    <li>• Advanced climate control ensures year-round comfort</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mb-8">
              <Link
                to="/glass-house-elegance"
                className="inline-flex items-center btn-luxury text-white px-8 py-3 rounded-full hover:scale-105 transition-transform duration-300"
              >
                Experience Glass House Elegance →
              </Link>
            </div>
          </div>

          <Separator className="my-8" />

          <div id="technical-capabilities" className="mb-10">
            <h3 className="text-2xl font-bold text-luxury-gold mb-6">Technical Capabilities</h3>

            <p className="text-luxury-text leading-relaxed mb-6">
              The Opera House integrates cutting-edge technology seamlessly into our luxury environments, ensuring that modern capabilities never compromise aesthetic beauty.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card className="glass border-luxury-gold/20">
                <CardContent className="p-6">
                  <h5 className="font-semibold text-luxury-blue mb-3">Audio-Visual Excellence</h5>
                  <ul className="space-y-2 text-sm text-luxury-text">
                    <li>• Professional sound systems for crystal-clear audio</li>
                    <li>• Customizable lighting scenarios for every celebration moment</li>
                    <li>• Professional projection and display systems</li>
                    <li>• High-quality audio and video recording capabilities</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="glass border-luxury-gold/20">
                <CardContent className="p-6">
                  <h5 className="font-semibold text-luxury-blue mb-3">Smart Venue Technology</h5>
                  <ul className="space-y-2 text-sm text-luxury-text">
                    <li>• Intelligent climate control systems</li>
                    <li>• Comprehensive but discreet security monitoring</li>
                    <li>• Professional-grade connectivity for live streaming</li>
                    <li>• Seamless integration of client technology</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mb-8">
              <Link
                to="/technology-innovation-features"
                className="inline-flex items-center btn-luxury text-white px-8 py-3 rounded-full hover:scale-105 transition-transform duration-300"
              >
                Explore Technology Features →
              </Link>
            </div>
          </div>
        </BlogSection>

        <BlogSection id="service-excellence-standards" title="Service Excellence Standards">
          <p className="text-luxury-text leading-relaxed mb-8">
            At The Opera House, service excellence is not just a goal—it's the foundation upon which every interaction, every detail, and every moment of your celebration is built.
          </p>

          <div id="dedicated-event-management" className="mb-10">
            <h3 className="text-2xl font-bold text-luxury-gold mb-6">Dedicated Event Management</h3>

            <HighlightBox className="mb-6">
              <p className="text-luxury-text leading-relaxed">
                Your celebration deserves focused, expert attention from professionals who understand both the logistical complexities and emotional significance of luxury events.
              </p>
            </HighlightBox>

            <div className="grid lg:grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="text-xl font-semibold text-luxury-blue mb-4">Personal Event Manager Assignment</h4>
                <ul className="space-y-3 text-luxury-text">
                  <li>• <strong>Dedicated Professional:</strong> A single point of contact throughout your planning journey</li>
                  <li>• <strong>Cultural Expertise:</strong> Event managers trained in diverse cultural traditions</li>
                  <li>• <strong>Planning Experience:</strong> Years of experience in luxury event coordination</li>
                  <li>• <strong>Communication Excellence:</strong> Regular updates and proactive communication</li>
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-luxury-blue mb-4">Day-of Event Management</h4>
                <ul className="space-y-3 text-luxury-text">
                  <li>• <strong>On-Site Coordination:</strong> Full-time presence ensuring flawless execution</li>
                  <li>• <strong>Timeline Management:</strong> Precise coordination of all ceremony elements</li>
                  <li>• <strong>Problem Resolution:</strong> Immediate attention to any issues that may arise</li>
                  <li>• <strong>Family Support:</strong> Special attention to family needs throughout the event</li>
                </ul>
              </div>
            </div>

            <div className="text-center mb-8">
              <Link
                to="/service-excellence-standards"
                className="inline-flex items-center btn-luxury text-white px-8 py-3 rounded-full hover:scale-105 transition-transform duration-300"
              >
                Learn About Service Excellence →
              </Link>
            </div>
          </div>

          <Separator className="my-8" />

          <div id="culinary-team-expertise" className="mb-10">
            <h3 className="text-2xl font-bold text-luxury-gold mb-6">Culinary Team Expertise</h3>

            <p className="text-luxury-text leading-relaxed mb-6">
              Our culinary program represents the finest in gourmet dining, with specialized expertise in authentic regional cuisines and contemporary fusion creations.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card className="glass border-luxury-gold/20">
                <CardContent className="p-6">
                  <h5 className="font-semibold text-luxury-blue mb-3">Executive Chef Leadership</h5>
                  <ul className="space-y-2 text-sm text-luxury-text">
                    <li>• Internationally trained chefs with luxury hospitality experience</li>
                    <li>• Cultural cuisine mastery and authentic preparation techniques</li>
                    <li>• Innovation focus with creative traditional recipe approaches</li>
                    <li>• Uncompromising quality standards in ingredients and presentation</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="glass border-luxury-gold/20">
                <CardContent className="p-6">
                  <h5 className="font-semibold text-luxury-blue mb-3">Menu Customization</h5>
                  <ul className="space-y-2 text-sm text-luxury-text">
                    <li>• Cultural authenticity with traditional recipes and techniques</li>
                    <li>• Expert dietary accommodations for all requirements</li>
                    <li>• Creative fusion options honoring multiple traditions</li>
                    <li>• Beautiful presentation complementing event aesthetics</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mb-8">
              <Link
                to="/culinary-excellence-program"
                className="inline-flex items-center btn-luxury text-white px-8 py-3 rounded-full hover:scale-105 transition-transform duration-300"
              >
                Explore Culinary Excellence →
              </Link>
            </div>
          </div>
        </BlogSection>

        <BlogSection id="customization-possibilities" title="Customization Possibilities">
          <p className="text-luxury-text leading-relaxed mb-8">
            The Opera House's commitment to personalization ensures that your celebration reflects your unique story, cultural heritage, and personal style while benefiting from our expertise in luxury event execution.
          </p>

          <div className="grid lg:grid-cols-2 gap-8 mb-10">
            <div id="theme-implementation">
              <h3 className="text-2xl font-bold text-luxury-gold mb-6">Theme Implementation</h3>

              <div className="space-y-6">
                <Card className="glass border-luxury-gold/20">
                  <CardContent className="p-6">
                    <h5 className="font-semibold text-luxury-blue mb-3">Traditional Cultural Themes</h5>
                    <ul className="space-y-2 text-sm text-luxury-text">
                      <li>• Regional wedding traditions from various Indian cultures</li>
                      <li>• Festival celebrations and religious ceremonies</li>
                      <li>• Heritage themes celebrating family history</li>
                      <li>• Royal traditions with luxurious interpretations</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="glass border-luxury-gold/20">
                  <CardContent className="p-6">
                    <h5 className="font-semibold text-luxury-blue mb-3">Modern Luxury Designs</h5>
                    <ul className="space-y-2 text-sm text-luxury-text">
                      <li>• Contemporary elegance with sophisticated design</li>
                      <li>• Urban sophistication reflecting modern lifestyle</li>
                      <li>• Minimalist luxury with quality materials</li>
                      <li>• Technology integration in modern themes</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div id="cultural-adaptations">
              <h3 className="text-2xl font-bold text-luxury-gold mb-6">Cultural Adaptations</h3>

              <div className="space-y-6">
                <Card className="glass border-luxury-gold/20">
                  <CardContent className="p-6">
                    <h5 className="font-semibold text-luxury-blue mb-3">Regional Ceremonies</h5>
                    <ul className="space-y-2 text-sm text-luxury-text">
                      <li>• Punjabi celebrations with vibrant colors and music</li>
                      <li>• Bengali traditions with elegant cultural elements</li>
                      <li>• South Indian ceremonies with sacred coordination</li>
                      <li>• Gujarati festivities with colorful celebrations</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="glass border-luxury-gold/20">
                  <CardContent className="p-6">
                    <h5 className="font-semibold text-luxury-blue mb-3">Festival Celebrations</h5>
                    <ul className="space-y-2 text-sm text-luxury-text">
                      <li>• Diwali magnificence with spectacular lighting</li>
                      <li>• Holi celebrations with colorful safe coordination</li>
                      <li>• Durga Puja events with traditional authenticity</li>
                      <li>• Regional festivals with authentic celebration</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          <div id="fusion-celebrations" className="mb-10">
            <h3 className="text-2xl font-bold text-luxury-gold mb-6">Fusion Celebrations</h3>

            <p className="text-luxury-text leading-relaxed mb-6">
              The art of fusion celebration lies in creating harmony between different cultural elements while maintaining the authentic integrity of each tradition.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card className="glass border-luxury-gold/20">
                <CardContent className="p-6">
                  <h5 className="font-semibold text-luxury-blue mb-3">Multi-Cultural Combinations</h5>
                  <ul className="space-y-2 text-sm text-luxury-text">
                    <li>• Sequential celebration of multiple cultural traditions</li>
                    <li>• Beautiful blending of decorative elements</li>
                    <li>• Menu combinations honoring multiple cuisines</li>
                    <li>• Cultural performances celebrating different heritages</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="glass border-luxury-gold/20">
                <CardContent className="p-6">
                  <h5 className="font-semibold text-luxury-blue mb-3">East-Meets-West Themes</h5>
                  <ul className="space-y-2 text-sm text-luxury-text">
                    <li>• Beautiful combination of Western and Indian elements</li>
                    <li>• Fashion integration celebrating both traditions</li>
                    <li>• Elegant fusion of Eastern and Western décor</li>
                    <li>• Thoughtful integration honoring both cultures</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </BlogSection>

        <BlogSection id="success-stories" title="Success Stories">
          <p className="text-luxury-text leading-relaxed mb-8">
            While we maintain the privacy and confidentiality of our clients, we can share the transformative impact that careful planning and expert execution can have on life's most important celebrations.
          </p>

          <div className="grid lg:grid-cols-2 gap-8 mb-10">
            <Card className="glass border-luxury-gold/20">
              <CardContent className="p-6">
                <Badge className="mb-4">Wedding Excellence</Badge>
                <h4 className="text-xl font-semibold text-luxury-blue mb-4">The Multi-Cultural Celebration</h4>
                <p className="text-luxury-text text-sm leading-relaxed">
                  A beautiful wedding that seamlessly integrated Bengali and Punjabi traditions over three days, with authentic ceremonies, traditional cuisines, and cultural performances that honored both families' heritage while creating new traditions for the couple.
                </p>
              </CardContent>
            </Card>

            <Card className="glass border-luxury-gold/20">
              <CardContent className="p-6">
                <Badge className="mb-4">Corporate Excellence</Badge>
                <h4 className="text-xl font-semibold text-luxury-blue mb-4">The Annual Gala Transformation</h4>
                <p className="text-luxury-text text-sm leading-relaxed">
                  A corporate celebration that transformed our Grand Ballroom into a sophisticated environment for 400 executives, featuring professional presentations, networking areas, and entertainment that reflected the company's achievement and culture.
                </p>
              </CardContent>
            </Card>

            <Card className="glass border-luxury-gold/20">
              <CardContent className="p-6">
                <Badge className="mb-4">Cultural Heritage</Badge>
                <h4 className="text-xl font-semibold text-luxury-blue mb-4">The Heritage Celebration</h4>
                <p className="text-luxury-text text-sm leading-relaxed">
                  A family reunion celebrating five generations, with traditional elements honoring family history, contemporary amenities for comfort, and entertainment that engaged family members of all ages.
                </p>
              </CardContent>
            </Card>

            <Card className="glass border-luxury-gold/20">
              <CardContent className="p-6">
                <Badge className="mb-4">Challenge to Triumph</Badge>
                <h4 className="text-xl font-semibold text-luxury-blue mb-4">The Weather Challenge</h4>
                <p className="text-luxury-text text-sm leading-relaxed">
                  An outdoor wedding celebration that faced unexpected weather changes, with our team seamlessly transitioning to our Glass House backup plan, maintaining the outdoor beauty vision while ensuring guest comfort and ceremony perfection.
                </p>
              </CardContent>
            </Card>
          </div>
        </BlogSection>

        <BlogSection id="virtual-venue-tour-guide" title="Virtual Venue Tour Guide">
          <p className="text-luxury-text leading-relaxed mb-8">
            Experience The Opera House from the comfort of your home with our comprehensive virtual tour system, designed to give you complete understanding of our spaces and capabilities.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <Card className="glass border-luxury-gold/20 hover:border-luxury-gold/40 transition-colors duration-300">
              <CardContent className="p-6 text-center">
                <h4 className="text-lg font-semibold text-luxury-blue mb-3">360-Degree Exploration</h4>
                <p className="text-luxury-text text-sm leading-relaxed mb-4">
                  Explore every corner of The Opera House with our advanced virtual tour technology, from grand ballroom configurations to intimate garden settings.
                </p>
                <div className="inline-flex items-center text-luxury-gold text-sm font-medium">
                  Take Virtual Tour →
                </div>
              </CardContent>
            </Card>

            <Card className="glass border-luxury-gold/20 hover:border-luxury-gold/40 transition-colors duration-300">
              <CardContent className="p-6 text-center">
                <h4 className="text-lg font-semibold text-luxury-blue mb-3">Interactive Features</h4>
                <p className="text-luxury-text text-sm leading-relaxed mb-4">
                  Click through detailed information about every aspect of our venue capabilities, from technical specifications to service options.
                </p>
                <div className="inline-flex items-center text-luxury-gold text-sm font-medium">
                  Explore Features →
                </div>
              </CardContent>
            </Card>

            <Card className="glass border-luxury-gold/20 hover:border-luxury-gold/40 transition-colors duration-300">
              <CardContent className="p-6 text-center">
                <h4 className="text-lg font-semibold text-luxury-blue mb-3">Planning Tools</h4>
                <p className="text-luxury-text text-sm leading-relaxed mb-4">
                  Use our virtual planning tools to visualize your celebration and understand configuration options for your perfect event.
                </p>
                <div className="inline-flex items-center text-luxury-gold text-sm font-medium">
                  Start Planning →
                </div>
              </CardContent>
            </Card>
          </div>
        </BlogSection>

        <CallToActionBlog
          title="Schedule Your Personal Consultation"
          description="Experience The Opera House difference through a personalized consultation where we explore your vision, discuss your cultural preferences, and create a custom proposal for your extraordinary celebration."
          primaryButtonText="Book Your Consultation"
          primaryButtonLink="/contact"
          secondaryButtonText="Take Virtual Tour"
          secondaryButtonLink="/virtual-tour"
        />
      </BlogLayout>
    </>
  );
};

export default EventExcellenceShowcase;