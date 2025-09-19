import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const FAQSection = () => {
  return (
    <section id="faq" className="py-20 bg-luxury-white-soft">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-luxury-gold border-luxury-gold">
            <CheckCircle className="w-4 h-4 mr-2" />
            Expert Answers
          </Badge>
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-luxury-text mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-luxury-text-muted max-w-3xl mx-auto">
            Common questions about planning luxury events in Noida, answered by industry experts with over 15 years of experience.
          </p>
        </div>

        <div className="grid gap-8">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-luxury-gold/20 shadow-luxury">
              <CardHeader>
                <CardTitle className="text-lg text-luxury-text">What is the ideal booking timeline for luxury venues in Noida?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-luxury-text-muted mb-3">
                  For peak wedding season (October-March), book 8-12 months in advance. Premium venues like The Opera House often have waiting lists during auspicious dates.
                </p>
                <div className="space-y-2 text-xs text-luxury-text-muted">
                  <div className="flex items-start space-x-2">
                    <div className="w-1 h-1 bg-luxury-gold rounded-full mt-2 flex-shrink-0"></div>
                    <span>Peak season (Oct-Mar): 8-12 months advance booking</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-1 h-1 bg-luxury-gold rounded-full mt-2 flex-shrink-0"></div>
                    <span>Off-season (Apr-Sep): 4-6 months sufficient</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-1 h-1 bg-luxury-gold rounded-full mt-2 flex-shrink-0"></div>
                    <span>Auspicious dates: Book immediately after dates are announced</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-luxury-gold/20 shadow-luxury">
              <CardHeader>
                <CardTitle className="text-lg text-luxury-text">How do luxury venues accommodate different cultural wedding traditions?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-luxury-text-muted mb-3">
                  Professional luxury venues maintain cultural specialists familiar with North Indian (Punjabi, Gujarati), South Indian (Tamil, Telugu), Bengali, Marathi, and interfaith ceremonies.
                </p>
                <div className="space-y-2 text-xs text-luxury-text-muted">
                  <div className="flex items-start space-x-2">
                    <div className="w-1 h-1 bg-luxury-gold rounded-full mt-2 flex-shrink-0"></div>
                    <span>Mandap/Mandapam construction expertise for all traditions</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-1 h-1 bg-luxury-gold rounded-full mt-2 flex-shrink-0"></div>
                    <span>Sacred fire arrangements with proper ventilation systems</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-1 h-1 bg-luxury-gold rounded-full mt-2 flex-shrink-0"></div>
                    <span>Multi-language announcement systems and cultural music</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-luxury-gold/20 shadow-luxury">
              <CardHeader>
                <CardTitle className="text-lg text-luxury-text">What are the parking and accessibility features at luxury venues?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-luxury-text-muted mb-3">
                  Modern luxury venues in Noida provide valet parking for 500+ vehicles, wheelchair accessibility, and dedicated elderly guest assistance with ramp access and priority seating.
                </p>
                <div className="space-y-2 text-xs text-luxury-text-muted">
                  <div className="flex items-start space-x-2">
                    <div className="w-1 h-1 bg-luxury-gold rounded-full mt-2 flex-shrink-0"></div>
                    <span>Valet parking with 500+ capacity and guest vehicle security</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-1 h-1 bg-luxury-gold rounded-full mt-2 flex-shrink-0"></div>
                    <span>Complete wheelchair accessibility with dedicated entrances</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-1 h-1 bg-luxury-gold rounded-full mt-2 flex-shrink-0"></div>
                    <span>Elderly guest assistance, priority seating, and medical support</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-luxury-gold/20 shadow-luxury">
              <CardHeader>
                <CardTitle className="text-lg text-luxury-text">How do venues handle dietary restrictions and special food requirements?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-luxury-text-muted mb-3">
                  Premium venues offer dedicated kitchen facilities for Jain food (no onion/garlic), separate vegetarian/non-vegetarian preparation areas, vegan options, and allergen-free alternatives.
                </p>
                <div className="space-y-2 text-xs text-luxury-text-muted">
                  <div className="flex items-start space-x-2">
                    <div className="w-1 h-1 bg-luxury-gold rounded-full mt-2 flex-shrink-0"></div>
                    <span>Separate Jain kitchen with no root vegetable preparation</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-1 h-1 bg-luxury-gold rounded-full mt-2 flex-shrink-0"></div>
                    <span>Dedicated vegetarian and non-vegetarian cooking areas</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-1 h-1 bg-luxury-gold rounded-full mt-2 flex-shrink-0"></div>
                    <span>Gluten-free, diabetic-friendly, and allergen-free menu options</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-luxury-gold/20 shadow-luxury">
              <CardHeader>
                <CardTitle className="text-lg text-luxury-text">What technology and AV equipment is available for modern events?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-luxury-text-muted mb-3">
                  Modern luxury venues provide LED walls, professional lighting systems, high-speed WiFi (minimum 1 Gbps), live streaming capabilities, and smart climate control systems.
                </p>
                <div className="space-y-2 text-xs text-luxury-text-muted">
                  <div className="flex items-start space-x-2">
                    <div className="w-1 h-1 bg-luxury-gold rounded-full mt-2 flex-shrink-0"></div>
                    <span>4K LED walls, professional sound systems, and intelligent lighting</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-1 h-1 bg-luxury-gold rounded-full mt-2 flex-shrink-0"></div>
                    <span>High-speed internet with backup, live streaming infrastructure</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-1 h-1 bg-luxury-gold rounded-full mt-2 flex-shrink-0"></div>
                    <span>Smart venue controls, digital guest services, and mobile apps</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-luxury-gold/20 shadow-luxury">
              <CardHeader>
                <CardTitle className="text-lg text-luxury-text">How far in advance should catering menus be finalized?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-luxury-text-muted mb-3">
                  Finalize catering menus 6-8 weeks before events. This allows for ingredient sourcing, kitchen preparation scheduling, and dietary accommodation planning.
                </p>
                <div className="space-y-2 text-xs text-luxury-text-muted">
                  <div className="flex items-start space-x-2">
                    <div className="w-1 h-1 bg-luxury-gold rounded-full mt-2 flex-shrink-0"></div>
                    <span>6-8 weeks for menu finalization and dietary planning</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-1 h-1 bg-luxury-gold rounded-full mt-2 flex-shrink-0"></div>
                    <span>2-3 weeks for final guest count and meal preferences</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-1 h-1 bg-luxury-gold rounded-full mt-2 flex-shrink-0"></div>
                    <span>1 week final confirmation with no major changes</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Additional FAQ Cards */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-luxury-gold/20 shadow-luxury">
              <CardHeader>
                <CardTitle className="text-lg text-luxury-text">What backup plans exist for outdoor events during monsoon season?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-luxury-text-muted mb-3">
                  Premium venues provide fully covered outdoor pavilions with retractable roofing, emergency indoor alternatives, and weather monitoring services with 48-hour advanced warnings.
                </p>
                <div className="space-y-2 text-xs text-luxury-text-muted">
                  <div className="flex items-start space-x-2">
                    <div className="w-1 h-1 bg-luxury-gold rounded-full mt-2 flex-shrink-0"></div>
                    <span>Covered outdoor pavilions with glass walls and retractable roofing</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-1 h-1 bg-luxury-gold rounded-full mt-2 flex-shrink-0"></div>
                    <span>Indoor backup venues with identical capacity and service standards</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-1 h-1 bg-luxury-gold rounded-full mt-2 flex-shrink-0"></div>
                    <span>Professional weather monitoring with 48-hour event decision timeline</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-luxury-gold/20 shadow-luxury">
              <CardHeader>
                <CardTitle className="text-lg text-luxury-text">How do venues ensure guest safety and security during large events?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-luxury-text-muted mb-3">
                  Professional venues employ certified security personnel, maintain 24/7 CCTV monitoring, provide medical first-aid stations, and coordinate with local police for traffic management.
                </p>
                <div className="space-y-2 text-xs text-luxury-text-muted">
                  <div className="flex items-start space-x-2">
                    <div className="w-1 h-1 bg-luxury-gold rounded-full mt-2 flex-shrink-0"></div>
                    <span>Trained security personnel with crowd management expertise</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-1 h-1 bg-luxury-gold rounded-full mt-2 flex-shrink-0"></div>
                    <span>24/7 CCTV surveillance and emergency response systems</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-1 h-1 bg-luxury-gold rounded-full mt-2 flex-shrink-0"></div>
                    <span>On-site medical assistance and emergency evacuation plans</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;