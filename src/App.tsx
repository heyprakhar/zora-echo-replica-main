import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Suspense, lazy } from "react";

const Index = lazy(() => import("./pages/Index"));
const NotFound = lazy(() => import("./pages/NotFound"));
const ServerError = lazy(() => import("./pages/ServerError"));
const WeddingVenueNoida = lazy(() => import("./pages/WeddingVenueNoida"));
const LuxuryBanquetHallNoida = lazy(() => import("./pages/LuxuryBanquetHallNoida"));
const BanquetHallNearMe = lazy(() => import("./pages/BanquetHallNearMe"));
const LuxuryEventGuideWorking = lazy(() => import("./pages/LuxuryEventGuideWorking"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/wedding-venue-noida" element={<WeddingVenueNoida />} />
              <Route path="/luxury-banquet-hall-noida" element={<LuxuryBanquetHallNoida />} />
              <Route path="/banquet-hall-near-me" element={<BanquetHallNearMe />} />
              <Route path="/luxury-event-guide-noida" element={<LuxuryEventGuideWorking />} />
              <Route path="/500" element={<ServerError />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
