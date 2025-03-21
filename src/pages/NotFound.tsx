
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import PageBackground from '@/components/PageBackground';
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  const handleGoHome = () => {
    // Get the base URL from the environment or use the default
    const base = import.meta.env.BASE_URL || '/';
    window.location.href = base;
  };

  return (
    <PageBackground>
      <div className="min-h-screen flex items-center justify-center bg-transparent">
        <div className="text-center p-8 bg-background/80 backdrop-blur-md rounded-lg shadow-lg">
          <h1 className="text-4xl font-bold mb-4">404</h1>
          <p className="text-xl text-gray-600 mb-6">Oops! Page not found</p>
          <Button 
            onClick={handleGoHome}
            className="flex items-center gap-2"
          >
            <Home size={16} />
            Return to Home
          </Button>
        </div>
      </div>
    </PageBackground>
  );
};

export default NotFound;
