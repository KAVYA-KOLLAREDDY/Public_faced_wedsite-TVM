import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
// Dark theme: uncomment to restore next-themes (applies `dark` class on <html>)
// import { ThemeProvider } from "@/components/theme-provider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ScrollToTop } from "@/components/ScrollToTop";

// Eager imports = normal SPA navigation (no per-route chunk wait / Suspense flash)
import Index from "./pages/Index";
import Launch from "./pages/Launch";
import About from "./pages/About";
import AbacusCourse from "./pages/AbacusCourse";
import VedicMathCourse from "./pages/VedicMathCourse";
import SignaturePrograms from "./pages/SignaturePrograms";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import NotFound from "./pages/NotFound";
import { LaunchExperience } from "@/components/launch/LaunchExperience";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
      staleTime: 5 * 60 * 1000,
    },
    mutations: {
      retry: false,
    },
  },
});

const App = () => (
  <>
    {/* Dark theme: wrap below with ThemeProvider when re-enabled */}
    {/* <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange> */}
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="flex min-h-[100dvh] w-full min-w-0 max-w-[100vw] flex-col overflow-x-clip">
            <ScrollToTop />
            <Routes>
              <Route
                path="/"
                element={
                  <LaunchExperience>
                    <Index />
                  </LaunchExperience>
                }
              />
              <Route path="/launch" element={<Launch />} />
              <Route path="/about" element={<About />} />
              <Route path="/courses/abacus" element={<AbacusCourse />} />
              <Route path="/courses/vedic-math" element={<VedicMathCourse />} />
              <Route path="/courses/signature-programs" element={<SignaturePrograms />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
    {/* </ThemeProvider> */}
  </>
);

export default App;
