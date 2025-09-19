import { useState, useRef, useEffect } from "react";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Helper functions for dropdown management
  const showDropdown = (itemName: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setActiveDropdown(itemName);
  };

  const hideDropdown = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
      timeoutRef.current = null;
    }, 150); // 150ms delay to allow cursor movement
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    {
      name: "Venues",
      href: "#venues",
      dropdown: [
        { name: "Grand Ballroom", href: "/grand-ballroom-excellence" },
        { name: "Outdoor Gardens", href: "/outdoor-garden-celebrations" },
        { name: "Glass House", href: "/glass-house-elegance" },
        { name: "Complete Venue Tour", href: "/event-excellence-showcase" }
      ]
    },
    {
      name: "Experience",
      href: "#experience",
      dropdown: [
        { name: "The Opera House Experience", href: "/event-excellence-showcase" },
        { name: "Virtual Venue Tour", href: "/virtual-tour" },
        { name: "Service Excellence", href: "/service-excellence-standards" },
        { name: "Culinary Journey", href: "/culinary-excellence-program" },
        { name: "Technology Features", href: "/technology-innovation-features" }
      ]
    },
    {
      name: "Events",
      href: "#events",
      dropdown: [
        { name: "Luxury Weddings", href: "/luxury-event-guide-noida" },
        { name: "Luxury Amenities Guide", href: "/luxury-venue-amenities-noida" },
        { name: "Wedding Planning Timeline", href: "/luxury-wedding-planning-timeline-noida" },
        { name: "Smart Technology Features", href: "/smart-venue-technology-features-noida" },
        { name: "Sector 73 Guide", href: "/sector-73-destination-guide" },
        { name: "Sector 120 Premium Guide", href: "/sector-120-premium-destination" },
        { name: "Sector 73 Corporate Community", href: "/sector-73-corporate-community" },
        { name: "Sector 73 Residential Societies", href: "/sector-73-residential-societies" },
        { name: "Sector 120 Premium Living", href: "/sector-120-premium-living" },
        { name: "Multi-Society Community Focus", href: "/multi-society-community-focus" },
        { name: "Metro Connectivity Guide", href: "/metro-connectivity-guide" },
        { name: "Corporate Events", href: "/corporate-events" },
        { name: "Social Functions", href: "/social-functions" }
      ]
    },
    {
      name: "Services",
      href: "#services",
      dropdown: [
        { name: "Event Planning", href: "/event-planning" },
        { name: "Catering Excellence", href: "/culinary-excellence-program" },
        { name: "Décor & Design", href: "/decor-design" },
        { name: "Entertainment", href: "/entertainment" }
      ]
    },
    { name: "Gallery", href: "#gallery" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 glass shadow-soft border-b border-luxury-gold/30"
      role="navigation"
      aria-label="Main navigation"
      id="navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <a
              href="/"
              className="focus:outline-none"
              aria-label="The Opera House - Return to homepage"
            >
              <div className="text-luxury-blue font-bold text-2xl tracking-wider hover:text-luxury-gold transition-colors duration-300">
                THE OPERA HOUSE
              </div>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8" role="menubar">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.dropdown ? (
                  <div
                    className="flex items-center space-x-1 text-luxury-text hover:text-luxury-blue transition-all duration-300 font-light tracking-wider text-sm uppercase cursor-pointer hover:scale-105"
                    onMouseEnter={() => showDropdown(item.name)}
                    onMouseLeave={hideDropdown}
                  >
                    <span>{item.name}</span>
                    <ChevronDown className="h-3 w-3" />

                    {/* Dropdown Menu */}
                    {activeDropdown === item.name && (
                      <div
                        className="absolute top-full left-0 w-56 glass border border-luxury-gold/30 rounded-lg shadow-luxury z-50"
                        onMouseEnter={() => showDropdown(item.name)}
                        onMouseLeave={hideDropdown}
                      >
                        <div className="py-2">
                          {item.dropdown.map((subItem) => (
                            <a
                              key={subItem.name}
                              href={subItem.href}
                              className="block px-4 py-3 text-luxury-text hover:text-luxury-blue hover:bg-luxury-blue/5 transition-all duration-300 font-light tracking-wide text-sm"
                            >
                              {subItem.name}
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    href={item.href}
                    className="text-luxury-text hover:text-luxury-blue transition-all duration-300 font-light tracking-wider text-sm uppercase hover:scale-105"
                    role="menuitem"
                    aria-label={`Navigate to ${item.name} section`}
                  >
                    {item.name}
                  </a>
                )}
              </div>
            ))}
            <Button
              className="btn-luxury text-white font-light tracking-wide px-6 py-2 rounded-full"
              aria-label="Call The Opera House at +91 9911620620"
            >
              <Phone className="h-4 w-4 mr-2" aria-hidden="true" />
              <span className="text-sm">+91 9911620620</span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-luxury-gold hover:bg-luxury-gold/10 transition-all duration-300"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden glass border-t border-luxury-gold/30 mt-2">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <div key={item.name}>
                  {item.dropdown ? (
                    <div>
                      <div
                        className="block px-3 py-3 text-luxury-text hover:text-luxury-blue transition-all duration-300 font-light tracking-wider uppercase text-sm cursor-pointer"
                        onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                      >
                        <div className="flex items-center justify-between">
                          <span>{item.name}</span>
                          <ChevronDown
                            className={`h-3 w-3 transition-transform duration-200 ${
                              activeDropdown === item.name ? 'rotate-180' : ''
                            }`}
                          />
                        </div>
                      </div>
                      {activeDropdown === item.name && (
                        <div className="pl-6 space-y-1">
                          {item.dropdown.map((subItem) => (
                            <a
                              key={subItem.name}
                              href={subItem.href}
                              className="block px-3 py-2 text-luxury-text hover:text-luxury-blue transition-all duration-300 font-light tracking-wide text-sm hover:pl-5"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {subItem.name}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <a
                      href={item.href}
                      className="block px-3 py-3 text-luxury-text hover:text-luxury-gold transition-all duration-300 font-light tracking-wider uppercase text-sm hover:pl-5"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  )}
                </div>
              ))}
              <div className="px-3 py-2 flex items-center space-x-2 text-luxury-gold border-t border-luxury-gold/20 mt-4 pt-4">
                <Phone className="h-4 w-4" />
                <span className="text-sm">+91 9990528866</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;