import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Suspense, lazy } from "react";
import LoadingSpinner from "@/components/LoadingSpinner";

const Index = lazy(() => import("./pages/Index"));
const NotFound = lazy(() => import("./pages/NotFound"));
const ServerError = lazy(() => import("./pages/ServerError"));
const WeddingVenueNoida = lazy(() => import("./pages/WeddingVenueNoida"));
const LuxuryBanquetHallNoida = lazy(() => import("./pages/LuxuryBanquetHallNoida"));
const BanquetHallNearMe = lazy(() => import("./pages/BanquetHallNearMe"));
const LuxuryEventGuideWorking = lazy(() => import("./pages/LuxuryEventGuideWorking"));
const SectorSeventyThreeDestinationGuide = lazy(() => import("./pages/SectorSeventyThreeDestinationGuide"));
const MarriageHallNoida = lazy(() => import("./pages/MarriageHallNoida"));
const ReceptionHallNoida = lazy(() => import("./pages/ReceptionHallNoida"));
const PartyHallNoida = lazy(() => import("./pages/PartyHallNoida"));
const FunctionHallNoida = lazy(() => import("./pages/FunctionHallNoida"));
const GrandBallroom = lazy(() => import("./pages/GrandBallroom"));
const OutdoorGardens = lazy(() => import("./pages/OutdoorGardens"));
const GlassHouse = lazy(() => import("./pages/GlassHouse"));
const LuxuryVenueAmenitiesNoida = lazy(() => import("./pages/LuxuryVenueAmenitiesNoida"));
const LuxuryWeddingPlanningTimelineNoida = lazy(() => import("./pages/LuxuryWeddingPlanningTimelineNoida"));
const SmartVenueTechnologyFeaturesNoida = lazy(() => import("./pages/SmartVenueTechnologyFeaturesNoida"));
const EventExcellenceShowcase = lazy(() => import("./pages/EventExcellenceShowcase"));
const GrandBallroomExcellence = lazy(() => import("./pages/GrandBallroomExcellence"));
const OutdoorGardenCelebrations = lazy(() => import("./pages/OutdoorGardenCelebrations"));
const GlassHouseElegance = lazy(() => import("./pages/GlassHouseElegance"));
const SectorOneTwentyPremiumDestination = lazy(() => import("./pages/SectorOneTwentyPremiumDestination"));
const SectorSeventyThreeCorporateCommunity = lazy(() => import("./pages/SectorSeventyThreeCorporateCommunity"));
const SectorSeventyThreeResidentialSocieties = lazy(() => import("./pages/SectorSeventyThreeResidentialSocieties"));
const SectorOneTwentyPremiumLiving = lazy(() => import("./pages/SectorOneTwentyPremiumLiving"));
const MultiSocietyCommunityFocus = lazy(() => import("./pages/MultiSocietyCommunityFocus"));
const MetroConnectivityGuide = lazy(() => import("./pages/MetroConnectivityGuide"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/wedding-venue-noida" element={<WeddingVenueNoida />} />
              <Route path="/luxury-banquet-hall-noida" element={<LuxuryBanquetHallNoida />} />
              <Route path="/banquet-hall-near-me" element={<BanquetHallNearMe />} />
              <Route path="/luxury-event-guide-noida" element={<LuxuryEventGuideWorking />} />
              <Route path="/sector-73-destination-guide" element={<SectorSeventyThreeDestinationGuide />} />
              <Route path="/marriage-hall-noida" element={<MarriageHallNoida />} />
              <Route path="/reception-hall-noida" element={<ReceptionHallNoida />} />
              <Route path="/party-hall-noida" element={<PartyHallNoida />} />
              <Route path="/function-hall-noida" element={<FunctionHallNoida />} />
              <Route path="/grand-ballroom" element={<GrandBallroom />} />
              <Route path="/outdoor-gardens" element={<OutdoorGardens />} />
              <Route path="/glass-house" element={<GlassHouse />} />
              <Route path="/luxury-venue-amenities-noida" element={<LuxuryVenueAmenitiesNoida />} />
              <Route path="/luxury-wedding-planning-timeline-noida" element={<LuxuryWeddingPlanningTimelineNoida />} />
              <Route path="/smart-venue-technology-features-noida" element={<SmartVenueTechnologyFeaturesNoida />} />
              <Route path="/event-excellence-showcase" element={<EventExcellenceShowcase />} />
              <Route path="/grand-ballroom-excellence" element={<GrandBallroomExcellence />} />
              <Route path="/outdoor-garden-celebrations" element={<OutdoorGardenCelebrations />} />
              <Route path="/glass-house-elegance" element={<GlassHouseElegance />} />
              <Route path="/sector-120-premium-destination" element={<SectorOneTwentyPremiumDestination />} />
              <Route path="/sector-73-corporate-community" element={<SectorSeventyThreeCorporateCommunity />} />
              <Route path="/sector-73-residential-societies" element={<SectorSeventyThreeResidentialSocieties />} />
              <Route path="/sector-120-premium-living" element={<SectorOneTwentyPremiumLiving />} />
              <Route path="/multi-society-community-focus" element={<MultiSocietyCommunityFocus />} />
              <Route path="/metro-connectivity-guide" element={<MetroConnectivityGuide />} />
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
