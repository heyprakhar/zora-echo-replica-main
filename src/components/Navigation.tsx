import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import operaLogo from "@/assets/opera-logo.png";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Overview", href: "#overview" },
    { name: "Gallery", href: "#gallery" },
    { name: "Features", href: "#features" },
    { name: "Contact Us", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass shadow-soft border-b border-luxury-gold/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <a href="/" className="focus:outline-none">
              <img src={operaLogo} alt="The Opera House Logo" className="h-12 w-auto" />
            </a>
            <div className="hidden md:block ml-4 border-l border-luxury-gold/40 pl-4">
              <div className="text-luxury-gold font-light text-sm tracking-widest">THE</div>
              <div className="text-luxury-text text-xs tracking-wider">OPERA HOUSE</div>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-luxury-text hover:text-luxury-gold transition-all duration-300 font-light tracking-wider text-sm uppercase hover:scale-105"
              >
                {item.name}
              </a>
            ))}
            <Button className="btn-luxury text-white font-light tracking-wide px-6 py-2 rounded-full">
              <Phone className="h-4 w-4 mr-2" />
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
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-3 text-luxury-text hover:text-luxury-gold transition-all duration-300 font-light tracking-wider uppercase text-sm hover:pl-5"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
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