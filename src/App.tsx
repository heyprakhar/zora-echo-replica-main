import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ServerError from "./pages/ServerError";
import WeddingVenueNoida from "./pages/WeddingVenueNoida";
import LuxuryBanquetHallNoida from "./pages/LuxuryBanquetHallNoida";
import BanquetHallNearMe from "./pages/BanquetHallNearMe";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/wedding-venue-noida" element={<WeddingVenueNoida />} />
            <Route path="/luxury-banquet-hall-noida" element={<LuxuryBanquetHallNoida />} />
            <Route path="/banquet-hall-near-me" element={<BanquetHallNearMe />} />
            <Route path="/500" element={<ServerError />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
