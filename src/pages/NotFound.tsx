import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-luxury-soft flex flex-col items-center justify-center px-4">
      <div className="max-w-md text-center">
        {/* Elegant 404 Display */}
        <div className="mb-8">
          <h1 className="text-8xl font-light text-luxury-gold mb-4 heading-luxury">
            404
          </h1>
          <h2 className="text-2xl font-semibold text-luxury-text mb-4">
            Page Not Found
          </h2>
          <p className="text-luxury-text-muted mb-8 leading-relaxed">
            The page you're looking for seems to have wandered off from our elegant halls.
            Allow us to guide you back to the grandeur of The Opera House.
          </p>
        </div>

        {/* Luxury Action Buttons */}
        <div className="space-y-4">
          <Button
            onClick={() => window.location.href = '/'}
            className="w-full btn-luxury text-white font-medium py-3"
          >
            Return to Home
          </Button>

          <Button
            variant="outline"
            onClick={() => window.history.back()}
            className="w-full border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-white transition-all duration-300"
          >
            Go Back
          </Button>
        </div>

        {/* Contact Information */}
        <div className="mt-8 text-sm text-luxury-text-muted">
          <p className="mb-2">Need assistance finding what you're looking for?</p>
          <a
            href="mailto:info@theoperahouse.com"
            className="text-luxury-gold hover:underline transition-colors duration-200"
          >
            Contact our concierge
          </a>
        </div>

        {/* Decorative Element */}
        <div className="mt-12 flex justify-center">
          <div className="w-24 h-0.5 bg-gradient-luxury rounded-full opacity-60"></div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
