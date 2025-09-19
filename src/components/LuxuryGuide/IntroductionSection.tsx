import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe, CheckCircle, TrendingUp, MapPin, Award, Users, Heart, Sparkles } from "lucide-react";

const IntroductionSection = () => {
  return (
    <section id="introduction" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-luxury-gold border-luxury-gold">
            <Globe className="w-4 h-4 mr-2" />
            Market Evolution
          </Badge>
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-luxury-text mb-6">
            The Evolution of Luxury Events in Noida
          </h2>
          <p className="text-lg text-luxury-text-muted max-w-3xl mx-auto mb-8">
            In the heart of India's National Capital Region, Noida has emerged as a premier destination for luxury events and celebrations. What began as a planned industrial city has transformed into a sophisticated urban landscape that rivals Delhi and Gurgaon in its capacity to host world-class events.
          </p>
          <p className="text-luxury-text-muted max-w-4xl mx-auto">
            The transformation of Noida from New Okhla Industrial Development Authority's vision into today's luxury event destination represents one of urban India's most remarkable success stories. This evolution reflects broader changes in Indian society—rising disposable incomes, changing lifestyle aspirations, and the growing importance of celebrations as expressions of cultural identity and social status.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-playfair font-bold text-luxury-text mb-6">The Rise of Noida's Event Industry</h3>
            <p className="text-luxury-text-muted mb-6">
              The statistics tell a compelling story of growth and opportunity. The Delhi NCR wedding and events industry, valued at over ₹24,000 crore and growing at 14.3% annually, has witnessed Noida's remarkable transformation from an industrial hub to a luxury event destination. Today, over 3,50,000 weddings occur in Delhi NCR annually, with Noida capturing an increasingly significant share of this lucrative market.
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-luxury-gold flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-luxury-text">Market Growth Trajectory</p>
                  <p className="text-luxury-text-muted">The Delhi NCR wedding industry, valued at over ₹24,000 crore and growing at 14.3% annually, positions the region as India's largest luxury event market</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-luxury-gold flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-luxury-text">Volume and Scale</p>
                  <p className="text-luxury-text-muted">Over 3,50,000 weddings occur in Delhi NCR annually, with average guest sizes growing from 270 to 310 guests post-pandemic</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-luxury-gold flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-luxury-text">Strategic Positioning</p>
                  <p className="text-luxury-text-muted">Noida's transformation from industrial hub to luxury event destination, capturing significant market share</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-luxury-gold flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-luxury-text">Future Projections</p>
                  <p className="text-luxury-text-muted">Industry projected to reach ₹290 billion by 2030, with organized sector worth over ₹673 billion</p>
                </div>
              </div>
            </div>
          </div>

          <Card className="border-luxury-gold/20 shadow-luxury">
            <CardHeader>
              <CardTitle className="text-luxury-text flex items-center">
                <TrendingUp className="w-5 h-5 mr-2 text-luxury-gold" />
                Growth Catalysts
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold text-luxury-text mb-3 flex items-center">
                  <MapPin className="w-4 h-4 mr-2 text-luxury-gold" />
                  Strategic Location Advantage
                </h4>
                <p className="text-sm text-luxury-text-muted mb-2">
                  Noida's proximity to Delhi, excellent connectivity via the Noida-Greater Noida Expressway, and accessibility from IGI Airport make it an ideal venue choice for families hosting guests from across India and internationally.
                </p>
                <ul className="text-xs text-luxury-text-muted space-y-1">
                  <li>• 30-minute drive from IGI Airport</li>
                  <li>• Direct connectivity to Delhi via multiple routes</li>
                  <li>• Upcoming Jewar International Airport proximity</li>
                  <li>• Metro connectivity to central Delhi</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-luxury-text mb-3 flex items-center">
                  <Award className="w-4 h-4 mr-2 text-luxury-gold" />
                  Modern Infrastructure Excellence
                </h4>
                <p className="text-sm text-luxury-text-muted mb-2">
                  Unlike older parts of Delhi, Noida's planned development has resulted in wider roads, ample parking facilities, and modern amenities that luxury venues require to deliver exceptional experiences.
                </p>
                <ul className="text-xs text-luxury-text-muted space-y-1">
                  <li>• Planned city layout with 130-foot wide roads</li>
                  <li>• Underground utilities and modern power infrastructure</li>
                  <li>• Advanced telecommunications and internet connectivity</li>
                  <li>• Integrated transportation systems</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-luxury-text mb-3 flex items-center">
                  <Users className="w-4 h-4 mr-2 text-luxury-gold" />
                  Premium Residential Ecosystem
                </h4>
                <p className="text-sm text-luxury-text-muted mb-2">
                  The presence of upscale residential societies in sectors like 50, 73, 75, and 120 has created a sophisticated clientele with refined tastes and substantial spending power for luxury celebrations.
                </p>
                <ul className="text-xs text-luxury-text-muted space-y-1">
                  <li>• 300+ families per sector with high disposable income</li>
                  <li>• Corporate executives and business families</li>
                  <li>• Multi-cultural communities from across India</li>
                  <li>• Premium societies like ATS Greens, Prateek Laurel</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-playfair font-bold text-luxury-text mb-8 text-center">Market Dynamics and Opportunity</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-luxury-gold/20 shadow-luxury">
              <CardHeader>
                <Badge variant="outline" className="w-fit mb-2">
                  Market Size
                </Badge>
                <CardTitle className="text-lg">Economic Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-luxury-text-muted mb-4">
                  The luxury events sector in Noida contributes significantly to the local economy, with venue and catering services accounting for 30% of total wedding expenditure.
                </p>
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span>Average Wedding Budget:</span>
                    <span className="font-semibold">₹15-50 lakhs</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Venue Share:</span>
                    <span className="font-semibold">25-30%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Annual Growth:</span>
                    <span className="font-semibold text-luxury-gold">14.3%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-luxury-gold/20 shadow-luxury">
              <CardHeader>
                <Badge variant="outline" className="w-fit mb-2">
                  Demographics
                </Badge>
                <CardTitle className="text-lg">Target Audience</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-luxury-text-muted mb-4">
                  Noida's luxury event market serves affluent families, corporate executives, and successful entrepreneurs who value quality and authenticity.
                </p>
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span>Household Income:</span>
                    <span className="font-semibold">₹25L+ annually</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Age Group:</span>
                    <span className="font-semibold">25-45 years</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Cultural Diversity:</span>
                    <span className="font-semibold text-luxury-gold">Multi-regional</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-luxury-gold/20 shadow-luxury">
              <CardHeader>
                <Badge variant="outline" className="w-fit mb-2">
                  Trends
                </Badge>
                <CardTitle className="text-lg">Future Outlook</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-luxury-text-muted mb-4">
                  Emerging trends indicate growing demand for experiential luxury, sustainability, and technology integration in event planning.
                </p>
                <div className="space-y-2 text-xs">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-luxury-gold rounded-full"></div>
                    <span>Micro-luxury experiences</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-luxury-gold rounded-full"></div>
                    <span>Sustainable celebrations</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-luxury-gold rounded-full"></div>
                    <span>Technology-enhanced events</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <Card className="bg-gradient-to-r from-luxury-gold/5 to-luxury-gold/10 border-luxury-gold/30">
          <CardContent className="p-8">
            <h3 className="text-xl font-playfair font-bold text-luxury-text mb-6">Cultural Confluence and Modern Luxury</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-luxury-text-muted mb-4">
                  Noida's unique position as a cosmopolitan city has fostered a beautiful blend of traditional Indian celebrations with contemporary luxury standards. Families from diverse cultural backgrounds—Punjabi, Bengali, Gujarati, South Indian, Marathi, Kashmiri, and others—have found in Noida venues that can authentically honor their traditions while providing the modern amenities and service standards they expect.
                </p>
                <p className="text-luxury-text-muted mb-4">
                  This cultural confluence has elevated the standard of luxury events in the region. Today's discerning hosts expect venues that can seamlessly transition from hosting a traditional South Indian ceremony in the morning to an elegant cocktail reception in the evening, all while maintaining the highest standards of service and hospitality.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-luxury-text mb-4">Cultural Integration Success Factors:</h4>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <Heart className="w-5 h-5 text-luxury-gold flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-luxury-text text-sm">Authentic Traditions</p>
                      <p className="text-xs text-luxury-text-muted">Respect for and expertise in diverse cultural ceremonies</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Sparkles className="w-5 h-5 text-luxury-gold flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-luxury-text text-sm">Modern Amenities</p>
                      <p className="text-xs text-luxury-text-muted">Contemporary facilities that enhance traditional celebrations</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Users className="w-5 h-5 text-luxury-gold flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-luxury-text text-sm">Inclusive Approach</p>
                      <p className="text-xs text-luxury-text-muted">Welcoming environment for all cultural communities</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default IntroductionSection;