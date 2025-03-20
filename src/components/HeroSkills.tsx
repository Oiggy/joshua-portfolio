
import React, { useEffect, useRef } from 'react';

const HeroSkills = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  return (
    <section 
      ref={sectionRef}
      className="min-h-[70vh] flex flex-col justify-center items-center px-6 md:px-12 pt-24 opacity-0 transition-opacity duration-1000 relative"
    >
      <div className="max-w-4xl mx-auto text-center z-10">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 animate-slide-in-up text-green-500">
          hi, i'm joshua
        </h1>
        
        <div className="animate-slide-in-up" style={{ animationDelay: '0.3s' }}>
          <div className="inline-flex items-center text-lg text-muted-foreground mb-6">
            <span className="mr-2">📍</span> West Coast, Canada
          </div>
        </div>
        
        <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto animate-slide-in-up" style={{ animationDelay: '0.4s' }}>
          aspiring to work within product management, specializing in agile methodologies,
          user-centered design, and data-driven decision making.
        </p>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-1/5 w-6 h-6 bg-muted/30 rounded-md rotate-12 animate-float"></div>
      <div className="absolute top-2/3 right-1/4 w-4 h-4 bg-muted/20 rounded-md -rotate-6 animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-1/4 left-1/3 w-5 h-5 bg-muted/25 rounded-md rotate-45 animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/3 right-1/5 w-3 h-3 bg-muted/15 rounded-full animate-float" style={{ animationDelay: '1.5s' }}></div>
      <div className="absolute bottom-1/3 left-1/4 w-3 h-3 bg-muted/15 rounded-full animate-float" style={{ animationDelay: '0.5s' }}></div>
    </section>
  );
};

export default HeroSkills;
