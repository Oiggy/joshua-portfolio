
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const SmoothScroll = () => {
  const { pathname } = useLocation();
  
  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, [pathname]);
  
  useEffect(() => {
    // Handle smooth scrolling for anchor links
    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const closestAnchor = target.closest('a');
      
      if (closestAnchor && closestAnchor.hash && (closestAnchor.pathname === window.location.pathname || 
          closestAnchor.getAttribute('href')?.startsWith('#'))) {
        e.preventDefault();
        
        const targetElement = document.querySelector(closestAnchor.hash);
        if (targetElement) {
          // Add some offset for fixed header
          const headerOffset = 80;
          const elementPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }
      }
    };
    
    document.addEventListener("click", handleLinkClick);
    
    return () => {
      document.removeEventListener("click", handleLinkClick);
    };
  }, []);
  
  return null;
};

export default SmoothScroll;
