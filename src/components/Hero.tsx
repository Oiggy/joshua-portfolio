
import React, { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
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
      className="min-h-screen flex flex-col justify-center items-center px-6 md:px-12 pt-24 opacity-0 transition-opacity duration-1000"
    >
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-block px-3 py-1 rounded-full bg-muted text-sm font-medium animate-fade-in mb-6">
          Product Management Professional
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 animate-slide-in-up" style={{ animationDelay: '0.2s' }}>
          Building exceptional <br /> product experiences
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto animate-slide-in-up" style={{ animationDelay: '0.4s' }}>
          Agile Product Manager specializing in user-centered design, 
          data-driven decision making, and cross-functional team leadership.
        </p>
        
        <div className="animate-slide-in-up" style={{ animationDelay: '0.6s' }}>
          <a 
            href="#about"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Explore my work
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-10 animate-fade-in" style={{ animationDelay: '1s' }}>
        <a 
          href="#about"
          className="flex flex-col items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <span className="mb-2">Scroll down</span>
          <ArrowDown size={16} className="animate-bounce" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
