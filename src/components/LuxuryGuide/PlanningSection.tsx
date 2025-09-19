import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, CheckCircle } from "lucide-react";

const PlanningSection = () => {
  return (
    <section id="planning-guide" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-luxury-gold border-luxury-gold">
            <Calendar className="w-4 h-4 mr-2" />
            Expert Planning
          </Badge>
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-luxury-text mb-6">
            Planning Your Luxury Event: A Comprehensive Guide
          </h2>
          <p className="text-lg text-luxury-text-muted max-w-3xl mx-auto">
            Successful luxury events require meticulous planning, cultural sensitivity, and attention to every detail. Our comprehensive planning framework ensures your celebration exceeds expectations.
          </p>
        </div>

        {/* Timeline Planning */}
        <div className="mb-16">
          <h3 className="text-2xl font-playfair font-bold text-luxury-text mb-8 text-center">Optimal Planning Timeline</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-luxury-gold/20 shadow-luxury text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-luxury-gold text-white rounded-full flex items-center justify-center mx-auto mb-2 text-xl font-bold">12</div>
                <CardTitle className="text-lg">12 Months Prior</CardTitle>
                <CardDescription>Foundation Phase</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-luxury-text-muted space-y-2">
                  <li>• Venue selection and booking</li>
                  <li>• Budget allocation planning</li>
                  <li>• Save-the-date announcements</li>
                  <li>• Theme and color palette</li>
                  <li>• Initial vendor consultations</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-luxury-gold/20 shadow-luxury text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-luxury-gold text-white rounded-full flex items-center justify-center mx-auto mb-2 text-xl font-bold">6</div>
                <CardTitle className="text-lg">6 Months Prior</CardTitle>
                <CardDescription>Design & Details</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-luxury-text-muted space-y-2">
                  <li>• Catering menu finalization</li>
                  <li>• Decoration design approval</li>
                  <li>• Entertainment booking</li>
                  <li>• Photography/videography</li>
                  <li>• Guest accommodation</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-luxury-gold/20 shadow-luxury text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-luxury-gold text-white rounded-full flex items-center justify-center mx-auto mb-2 text-xl font-bold">3</div>
                <CardTitle className="text-lg">3 Months Prior</CardTitle>
                <CardDescription>Refinement Phase</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-luxury-text-muted space-y-2">
                  <li>• Final guest count confirmation</li>
                  <li>• Detailed timeline creation</li>
                  <li>• Transportation planning</li>
                  <li>• Special dietary requirements</li>
                  <li>• Cultural ceremony details</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-luxury-gold/20 shadow-luxury text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-luxury-gold text-white rounded-full flex items-center justify-center mx-auto mb-2 text-xl font-bold">1</div>
                <CardTitle className="text-lg">1 Month Prior</CardTitle>
                <CardDescription>Final Execution</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-luxury-text-muted space-y-2">
                  <li>• Final venue walkthrough</li>
                  <li>• Emergency contingency plans</li>
                  <li>• Vendor coordination meeting</li>
                  <li>• Rehearsal scheduling</li>
                  <li>• Day-of timeline distribution</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Budget Planning Summary */}
        <div className="mb-16">
          <h3 className="text-2xl font-playfair font-bold text-luxury-text mb-8 text-center">Budget Planning Framework</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-luxury-gold/20 shadow-luxury">
              <CardHeader>
                <Badge variant="outline" className="w-fit mb-2">Premium Tier</Badge>
                <CardTitle className="text-lg">₹15-25 Lakhs</CardTitle>
                <CardDescription>Mid-size luxury events (200-300 guests)</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span>Venue & Facilities:</span>
                    <span className="font-semibold">₹4-6L (25%)</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Catering & Bar:</span>
                    <span className="font-semibold">₹6-9L (40%)</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Decoration & Flowers:</span>
                    <span className="font-semibold">₹2-3L (15%)</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Photography/Video:</span>
                    <span className="font-semibold">₹1.5-2.5L (10%)</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-luxury-gold/20 shadow-luxury border-2 border-luxury-gold">
              <CardHeader>
                <Badge className="w-fit mb-2 bg-luxury-gold">Ultra Luxury</Badge>
                <CardTitle className="text-lg">₹25-50 Lakhs</CardTitle>
                <CardDescription>Grand luxury celebrations (300-500 guests)</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span>Venue & Premium Facilities:</span>
                    <span className="font-semibold">₹7-12L (30%)</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Gourmet Catering & Bar:</span>
                    <span className="font-semibold">₹10-18L (40%)</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Designer Decor & Flowers:</span>
                    <span className="font-semibold">₹4-8L (16%)</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-luxury-gold/20 shadow-luxury">
              <CardHeader>
                <Badge variant="outline" className="w-fit mb-2">Bespoke Luxury</Badge>
                <CardTitle className="text-lg">₹50L+</CardTitle>
                <CardDescription>Ultra-luxury destination events (500+ guests)</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span>Exclusive Venue Access:</span>
                    <span className="font-semibold">₹15-25L (30%)</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Master Chef Experiences:</span>
                    <span className="font-semibold">₹18-30L (35%)</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Artistic Installations:</span>
                    <span className="font-semibold">₹8-15L (20%)</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <Card className="bg-gradient-to-r from-luxury-gold/5 to-luxury-gold/10 border-luxury-gold/30">
          <CardContent className="p-6">
            <h4 className="font-semibold text-luxury-text mb-3 flex items-center">
              <CheckCircle className="w-5 h-5 text-luxury-gold mr-2" />
              Cultural Wedding Expertise
            </h4>
            <p className="text-luxury-text-muted mb-4">
              Professional luxury venues maintain cultural specialists familiar with North Indian (Punjabi, Gujarati), South Indian (Tamil, Telugu), Bengali, Marathi, and interfaith ceremonies. Each cultural tradition requires specific arrangements, from Mandap construction to authentic cuisine and ceremony timing.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h5 className="font-medium text-luxury-text mb-2">Traditional Elements:</h5>
                <ul className="text-sm text-luxury-text-muted space-y-1">
                  <li>• Sacred fire arrangements with proper ventilation</li>
                  <li>• Cultural music and announcement systems</li>
                  <li>• Traditional decoration and floral arrangements</li>
                  <li>• Authentic regional cuisine and dietary accommodations</li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium text-luxury-text mb-2">Modern Integration:</h5>
                <ul className="text-sm text-luxury-text-muted space-y-1">
                  <li>• Technology-enhanced ceremonies with live streaming</li>
                  <li>• Climate-controlled environments for all seasons</li>
                  <li>• Professional photography setups for cultural moments</li>
                  <li>• Seamless transitions between traditional and modern elements</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default PlanningSection;