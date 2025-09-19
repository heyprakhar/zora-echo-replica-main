import React from 'react';
import BlogLayout from '../components/blog/BlogLayout';
import BlogHeader from '../components/blog/BlogHeader';
import BlogSection from '../components/blog/BlogSection';
import TableOfContents from '../components/blog/TableOfContents';
import { Badge } from '../components/ui/badge';
import { Card, CardContent } from '../components/ui/card';
import { Separator } from '../components/ui/separator';

const MultiSocietyCommunityFocus: React.FC = () => {
  const tocItems = [
    { id: 'introduction', title: 'The Heart of Noida\'s Premium Community Network' },
    { id: 'comprehensive-coverage', title: 'Comprehensive Society Coverage and Accessibility' },
    { id: 'cross-community-events', title: 'Cross-Community Event Coordination' },
    { id: 'transportation-solutions', title: 'Transportation and Accessibility Solutions' },
    { id: 'service-customization', title: 'Community-Specific Service Customization' },
    { id: 'economic-impact', title: 'Economic and Community Development Impact' },
    { id: 'event-planning', title: 'Event Planning for Multi-Community Celebrations' },
    { id: 'future-development', title: 'Future Development and Expansion Opportunities' },
    { id: 'conclusion', title: 'The Central Hub for Premium Community Celebrations' }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Multi-Society Community Focus: Connecting Noida's Premium Neighborhoods",
    "description": "Discover how The Opera House serves as the central celebration venue for multiple residential societies across Sector 50, 73, 75, and 120, creating the perfect hub for Noida's premium community celebrations.",
    "author": {
      "@type": "Organization",
      "name": "The Opera House"
    },
    "publisher": {
      "@type": "Organization",
      "name": "The Opera House",
      "logo": {
        "@type": "ImageObject",
        "url": "/logo.png"
      }
    },
    "datePublished": "2024-01-01",
    "dateModified": "2024-01-01",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "/multi-society-community-focus"
    },
    "keywords": "The Opera House, Noida wedding venue, multi-society events, community celebrations, Sector 50, Sector 73, Sector 75, Sector 120, premium residential societies, cross-community events"
  };

  return (
    <BlogLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <BlogHeader
        title="Multi-Society Community Focus: Connecting Noida's Premium Neighborhoods"
        subtitle="Discover how The Opera House serves as the central celebration venue for multiple residential societies across Sector 50, 73, 75, and 120, creating the perfect hub for Noida's premium community celebrations."
        author="The Opera House Team"
        publishDate="January 2024"
        readTime="12 min read"
        tags={['Community Events', 'Multi-Society', 'Noida Premium', 'Event Planning', 'Residential Societies']}
      />

      <div className="grid lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3">
          <BlogSection id="introduction" title="The Heart of Noida's Premium Community Network">
            <p className="text-lg leading-relaxed mb-6">
              The Opera House's strategic position in Sector 120 creates a unique advantage—serving as the central celebration venue for multiple premium residential societies across Noida's most desirable sectors. This multi-society accessibility transforms The Opera House from a neighborhood venue into a community hub that connects and serves the celebration needs of Noida's most sophisticated residential developments.
            </p>

            <p className="mb-6">
              This central positioning enables families from diverse premium communities to choose The Opera House with confidence, knowing that the venue serves their neighbors and maintains standards that reflect the collective values of Noida's luxury residential corridor. The result is a celebration destination that understands and serves the sophisticated requirements of multiple upscale communities while maintaining the personalized service that each family deserves.
            </p>

            <Card className="border-l-4 border-l-orange-500 bg-orange-50/50">
              <CardContent className="p-6">
                <p className="font-medium text-gray-900">
                  For event planners considering venues that can accommodate guest lists spanning multiple residential societies, The Opera House provides the accessibility, reputation, and service quality that makes cross-community celebrations seamless and successful.
                </p>
              </CardContent>
            </Card>
          </BlogSection>

          <Separator className="my-8" />

          <BlogSection id="comprehensive-coverage" title="Comprehensive Society Coverage and Accessibility">
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card>
                <CardContent className="p-6">
                  <h4 className="font-semibold text-lg mb-4 flex items-center">
                    <Badge variant="outline" className="mr-2">Sector 50</Badge>
                    Premium Residential Community
                  </h4>
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-medium text-gray-900 mb-2">ATS Greens Village (Sector 93A)</h5>
                      <p className="text-sm text-gray-600 mb-2">
                        25 towers across 17.5 acres housing 736 units. Comprehensive amenities including swimming pools, gymnasiums, clubhouses, and banquet halls.
                      </p>
                      <p className="text-sm font-medium text-blue-600">Distance: 8 km (15-minute drive)</p>
                    </div>
                    <div>
                      <h5 className="font-medium text-gray-900 mb-2">TGB Meghdutam</h5>
                      <p className="text-sm text-gray-600 mb-2">
                        Built in 2012 across 3.25 acres near the 32-acre Meghdoot Park. Established excellence with proven quality standards.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h4 className="font-semibold text-lg mb-4 flex items-center">
                    <Badge variant="outline" className="mr-2">Sector 73</Badge>
                    Corporate & Residential Integration
                  </h4>
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-medium text-gray-900 mb-2">I-Thum 73 Corporate Community</h5>
                      <p className="text-sm text-gray-600 mb-2">
                        5.5-acre IT/ITes commercial development creating professional community requiring corporate event venues.
                      </p>
                    </div>
                    <div>
                      <h5 className="font-medium text-gray-900 mb-2">Dual-Purpose Accessibility</h5>
                      <p className="text-sm text-gray-600">
                        Serves both corporate events and personal celebrations for integrated community.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <h4 className="font-semibold text-lg mb-4 flex items-center">
                    <Badge variant="outline" className="mr-2">Sector 75</Badge>
                    Modern Living Developments
                  </h4>
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-medium text-gray-900 mb-2">Gardenia Gateway</h5>
                      <p className="text-sm text-gray-600 mb-2">
                        9.88 acres with seven 19-floor towers. Contemporary luxury living.
                      </p>
                      <p className="text-sm font-medium text-blue-600">Distance: 5 km (12-minute drive)</p>
                    </div>
                    <div>
                      <h5 className="font-medium text-gray-900 mb-2">Golf City</h5>
                      <p className="text-sm text-gray-600">
                        Completed March 2020, 2 km from Sector 50 Metro station. Optimal transportation flexibility.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h4 className="font-semibold text-lg mb-4 flex items-center">
                    <Badge variant="outline" className="mr-2">Sector 120-121</Badge>
                    Premium Neighborhood
                  </h4>
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-medium text-gray-900 mb-2">Prateek Laurel</h5>
                      <p className="text-sm text-gray-600 mb-2">
                        1-2 km from The Opera House. 14 towers across 12.75 acres with comprehensive luxury amenities.
                      </p>
                      <p className="text-sm font-medium text-green-600">Walking Distance Access</p>
                    </div>
                    <div>
                      <h5 className="font-medium text-gray-900 mb-2">ABA Cleo County (Sector 121)</h5>
                      <p className="text-sm text-gray-600">
                        3 km distance. Egyptian-themed luxury with 5-level cascading swimming pool.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </BlogSection>

          <Separator className="my-8" />

          <BlogSection id="cross-community-events" title="Cross-Community Event Coordination">
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-lg mb-4">Inter-Society Social Events</h4>
                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <Card className="bg-blue-50/50">
                    <CardContent className="p-4">
                      <h5 className="font-medium mb-2">Shared Cultural Celebrations</h5>
                      <p className="text-sm text-gray-600">
                        Diwali parties, Holi festivals, New Year events bringing together diverse community members.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="bg-green-50/50">
                    <CardContent className="p-4">
                      <h5 className="font-medium mb-2">Professional Network Events</h5>
                      <p className="text-sm text-gray-600">
                        Business relationship-building gatherings leveraging diverse residential community connections.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="bg-purple-50/50">
                    <CardContent className="p-4">
                      <h5 className="font-medium mb-2">Educational Programs</h5>
                      <p className="text-sm text-gray-600">
                        Achievement recognition events and community learning programs serving multiple societies.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-lg mb-4">Wedding and Celebration Coordination</h4>
                <div className="space-y-4">
                  <div className="border-l-4 border-l-rose-500 pl-4">
                    <h5 className="font-medium text-gray-900 mb-2">Multi-Family Wedding Events</h5>
                    <p className="text-sm text-gray-600">
                      Neutral ground that accommodates diverse community standards while maintaining luxury service quality for families from different societies.
                    </p>
                  </div>
                  <div className="border-l-4 border-l-amber-500 pl-4">
                    <h5 className="font-medium text-gray-900 mb-2">Anniversary and Milestone Coordination</h5>
                    <p className="text-sm text-gray-600">
                      Shared celebration events honoring individual achievements while creating community celebration experiences.
                    </p>
                  </div>
                  <div className="border-l-4 border-l-indigo-500 pl-4">
                    <h5 className="font-medium text-gray-900 mb-2">Seasonal Event Series</h5>
                    <p className="text-sm text-gray-600">
                      Ongoing community relationships with economies of scale for elaborate celebration planning across multiple societies.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </BlogSection>

          <Separator className="my-8" />

          <BlogSection id="transportation-solutions" title="Transportation and Accessibility Solutions">
            <div className="space-y-6">
              <Card className="border-l-4 border-l-blue-500 bg-blue-50/50">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-lg mb-4">Metro Network Integration</h4>
                  <p className="mb-4">
                    The Aqua Line's Sector 50 station provides metro access for residents across multiple societies, while the completed skywalk between Sector 51 (Aqua Line) and Sector 52 (Blue Line) creates comprehensive metro connectivity for event guests traveling from across the NCR region.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-medium text-blue-700 mb-2">Aqua Line Access</h5>
                      <p className="text-sm text-gray-600">Direct connectivity to Sector 50 station serving multiple residential societies</p>
                    </div>
                    <div>
                      <h5 className="font-medium text-blue-700 mb-2">Blue Line Integration</h5>
                      <p className="text-sm text-gray-600">Skywalk connection enabling comprehensive NCR region access</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-lg mb-4">Highway and Road Network</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Greater Noida Expressway connectivity</li>
                      <li>• NH-24 highway access</li>
                      <li>• Dadri Road network</li>
                      <li>• Multiple route options reducing traffic dependency</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-lg mb-4">Transportation Services</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Uber and Ola ride-sharing services</li>
                      <li>• Luxury car service coordination</li>
                      <li>• Multiple pickup location efficiency</li>
                      <li>• Service quality matching venue sophistication</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </BlogSection>

          <Separator className="my-8" />

          <BlogSection id="service-customization" title="Community-Specific Service Customization">
            <div className="space-y-6">
              <h4 className="font-semibold text-lg mb-4">Understanding Diverse Community Needs</h4>

              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <Card className="bg-amber-50/50">
                  <CardContent className="p-4">
                    <h5 className="font-medium mb-2">Income and Lifestyle Diversity</h5>
                    <p className="text-sm text-gray-600">
                      Flexible venue services accommodating various celebration scales and customization needs across premium communities.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-rose-50/50">
                  <CardContent className="p-4">
                    <h5 className="font-medium mb-2">Cultural Diversity Integration</h5>
                    <p className="text-sm text-gray-600">
                      Accommodation of religious, cultural, and traditional diversity characterizing Noida's cosmopolitan development.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-green-50/50">
                  <CardContent className="p-4">
                    <h5 className="font-medium mb-2">Professional Integration</h5>
                    <p className="text-sm text-gray-600">
                      Seamless integration of business associates, family friends, and professional contacts within celebrations.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <Card className="border-l-4 border-l-purple-500 bg-purple-50/50">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-lg mb-4">Service Package Development</h4>
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-medium text-purple-700 mb-2">Community-Specific Packages</h5>
                      <p className="text-sm text-gray-600 mb-3">
                        Understanding preferences and requirements of different residential societies enables development of community-specific celebration packages.
                      </p>
                    </div>
                    <div>
                      <h5 className="font-medium text-purple-700 mb-2">Scalable Service Options</h5>
                      <p className="text-sm text-gray-600 mb-3">
                        Flexible services accommodating intimate family gatherings or large inter-community celebrations.
                      </p>
                    </div>
                    <div>
                      <h5 className="font-medium text-purple-700 mb-2">Cultural Customization Capabilities</h5>
                      <p className="text-sm text-gray-600">
                        Accommodation of diverse cultural celebration requirements while maintaining authentic elements and sophisticated service standards.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </BlogSection>

          <Separator className="my-8" />

          <BlogSection id="economic-impact" title="Economic and Community Development Impact">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <Card>
                <CardContent className="p-6">
                  <h4 className="font-semibold text-lg mb-4">Local Economic Integration</h4>
                  <ul className="space-y-3 text-sm text-gray-600">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Multi-community business development creating economies of scale
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Employment opportunities and business development serving the broader area
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Property value enhancement through high-quality celebration venues
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h4 className="font-semibold text-lg mb-4">Community Network Development</h4>
                  <ul className="space-y-3 text-sm text-gray-600">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Inter-community relationships extending beyond individual societies
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Shared resource development benefiting all communities
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Regional reputation enhancement attracting premium residents
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-l-4 border-l-indigo-500">
              <CardContent className="p-6">
                <h4 className="font-semibold text-lg mb-4">Cultural and Social Impact</h4>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <h5 className="font-medium text-indigo-700 mb-2">Cultural Exchange</h5>
                    <p className="text-sm text-gray-600">
                      Multi-community events facilitate cultural exchange and social integration.
                    </p>
                  </div>
                  <div>
                    <h5 className="font-medium text-indigo-700 mb-2">Community Leadership</h5>
                    <p className="text-sm text-gray-600">
                      Families hosting events emerge as community leaders building social networks.
                    </p>
                  </div>
                  <div>
                    <h5 className="font-medium text-indigo-700 mb-2">Tradition Innovation</h5>
                    <p className="text-sm text-gray-600">
                      Support for cultural tradition preservation and celebration innovation.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </BlogSection>

          <Separator className="my-8" />

          <BlogSection id="event-planning" title="Event Planning for Multi-Community Celebrations">
            <div className="space-y-6">
              <Card className="bg-orange-50/50 border-l-4 border-l-orange-500">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-lg mb-4">Coordination Complexity Management</h4>
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-medium text-orange-700 mb-2">Guest List Integration</h5>
                      <p className="text-sm text-gray-600">
                        Sophisticated guest management coordinating diverse invitation lists while accommodating dietary restrictions and cultural preferences.
                      </p>
                    </div>
                    <div>
                      <h5 className="font-medium text-orange-700 mb-2">Timeline Coordination</h5>
                      <p className="text-sm text-gray-600">
                        Managing multiple community schedules, religious observances, and cultural timing requirements.
                      </p>
                    </div>
                    <div>
                      <h5 className="font-medium text-orange-700 mb-2">Vendor Coordination</h5>
                      <p className="text-sm text-gray-600">
                        Coordinating diverse vendors for cohesive celebration experiences honoring cultural requirements.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-lg mb-4">Cultural Integration and Respect</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Multi-cultural ceremony accommodation</li>
                      <li>• Dietary and catering complexity management</li>
                      <li>• Entertainment and cultural programming</li>
                      <li>• Religious requirement accommodation</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-lg mb-4">Communication Management</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Multi-community communication strategies</li>
                      <li>• Expectation alignment across communities</li>
                      <li>• Professional coordination standards</li>
                      <li>• Feedback integration for improvement</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </BlogSection>

          <Separator className="my-8" />

          <BlogSection id="future-development" title="Future Development and Expansion Opportunities">
            <div className="space-y-6">
              <h4 className="font-semibold text-lg mb-4">Community Network Expansion</h4>

              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <Card className="bg-teal-50/50">
                  <CardContent className="p-4">
                    <h5 className="font-medium mb-2">Additional Society Integration</h5>
                    <p className="text-sm text-gray-600">
                      Expanding multi-community service network as new premium developments emerge.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-cyan-50/50">
                  <CardContent className="p-4">
                    <h5 className="font-medium mb-2">Service Area Development</h5>
                    <p className="text-sm text-gray-600">
                      Enhanced infrastructure expanding practical service area to additional communities.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-sky-50/50">
                  <CardContent className="p-4">
                    <h5 className="font-medium mb-2">Regional Leadership</h5>
                    <p className="text-sm text-gray-600">
                      Positioning as regional celebration hub across Noida's premium corridor.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <Card className="border-l-4 border-l-emerald-500 bg-emerald-50/50">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-lg mb-4">Service Innovation and Development</h4>
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-medium text-emerald-700 mb-2">Technology Integration</h5>
                      <p className="text-sm text-gray-600">
                        Digital community management platforms and online coordination systems enhancing multi-community event planning.
                      </p>
                    </div>
                    <div>
                      <h5 className="font-medium text-emerald-700 mb-2">Cultural Service Enhancement</h5>
                      <p className="text-sm text-gray-600">
                        Increasing specialization in cultural celebration requirements and traditional ceremony coordination.
                      </p>
                    </div>
                    <div>
                      <h5 className="font-medium text-emerald-700 mb-2">Community Partnership Development</h5>
                      <p className="text-sm text-gray-600">
                        Growing relationships driving service innovation and collaborative community programming.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </BlogSection>

          <Separator className="my-8" />

          <BlogSection id="conclusion" title="The Central Hub for Premium Community Celebrations">
            <div className="space-y-6">
              <p className="text-lg leading-relaxed">
                The Opera House's position as the central celebration venue for multiple premium residential societies across Sectors 50, 73, 75, and 120 creates unique value that extends beyond simple venue access. This multi-community integration enables celebration experiences that honor diversity while maintaining the sophisticated service standards that characterize Noida's premium residential corridor.
              </p>

              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <Card className="bg-blue-50/50 border-l-4 border-l-blue-500">
                  <CardContent className="p-4">
                    <h5 className="font-medium text-blue-700 mb-2">Immediate Benefits</h5>
                    <p className="text-sm text-gray-600">
                      Access to services understanding diverse community needs while providing sophisticated celebration experiences.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-green-50/50 border-l-4 border-l-green-500">
                  <CardContent className="p-4">
                    <h5 className="font-medium text-green-700 mb-2">Long-term Integration</h5>
                    <p className="text-sm text-gray-600">
                      Increasing value through service customization and community network development.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-purple-50/50 border-l-4 border-l-purple-500">
                  <CardContent className="p-4">
                    <h5 className="font-medium text-purple-700 mb-2">Cultural Leadership</h5>
                    <p className="text-sm text-gray-600">
                      Supporting cultural diversity preservation and community relationship building.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <Card className="bg-gradient-to-r from-orange-50 to-rose-50 border-2 border-orange-200">
                <CardContent className="p-6 text-center">
                  <p className="text-lg font-medium text-gray-900 mb-4">
                    For families living in Noida's premium residential societies, The Opera House offers more than venue access—it provides community integration, cultural accommodation, and service excellence that reflects the collective values and aspirations of Noida's most desirable residential communities.
                  </p>
                  <p className="text-sm text-gray-600 italic">
                    Experience the multi-community advantage of The Opera House—where Noida's premium residential societies unite in celebration excellence across the region's most sophisticated event destination.
                  </p>
                </CardContent>
              </Card>
            </div>
          </BlogSection>
        </div>

        <div className="lg:col-span-1">
          <div className="sticky top-8">
            <TableOfContents items={tocItems} />
          </div>
        </div>
      </div>
    </BlogLayout>
  );
};

export default MultiSocietyCommunityFocus;