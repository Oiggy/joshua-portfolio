
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, HashRouter } from "react-router-dom";
import AnimatedRoutes from "./components/AnimatedRoutes";
import SmoothScroll from "./components/SmoothScroll";

// Create a new QueryClient instance
const queryClient = new QueryClient();

// Determine if we're in production
const isProduction = import.meta.env.PROD;

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      {/* Use HashRouter for GitHub Pages in production to avoid 404 issues */}
      {isProduction ? (
        <HashRouter>
          <SmoothScroll />
          <AnimatedRoutes />
        </HashRouter>
      ) : (
        <BrowserRouter>
          <SmoothScroll />
          <AnimatedRoutes />
        </BrowserRouter>
      )}
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
