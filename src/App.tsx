
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Services from "./pages/Services";
import Fleet from "./pages/Fleet";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Pricing from "./pages/Pricing";
import Tracking from "./pages/Tracking";
import Insurance from "./pages/Insurance";
import Warehousing from "./pages/Warehousing";
import Logistics from "./pages/Logistics";
import News from "./pages/News";
import Careers from "./pages/Careers";
import Partners from "./pages/Partners";
import Safety from "./pages/Safety";
import Technology from "./pages/Technology";
import Sustainability from "./pages/Sustainability";
import Regions from "./pages/Regions";
import Quality from "./pages/Quality";
import Training from "./pages/Training";
import Documents from "./pages/Documents";
import Blog from "./pages/Blog";
import FAQ from "./pages/FAQ";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<Services />} />
          <Route path="/fleet" element={<Fleet />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/tracking" element={<Tracking />} />
          <Route path="/insurance" element={<Insurance />} />
          <Route path="/warehousing" element={<Warehousing />} />
          <Route path="/logistics" element={<Logistics />} />
          <Route path="/news" element={<News />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/safety" element={<Safety />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/sustainability" element={<Sustainability />} />
          <Route path="/regions" element={<Regions />} />
          <Route path="/quality" element={<Quality />} />
          <Route path="/training" element={<Training />} />
          <Route path="/documents" element={<Documents />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/faq" element={<FAQ />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
