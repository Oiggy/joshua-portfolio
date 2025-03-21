
import React, { useRef, useEffect } from 'react';

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('section-appear', 'is-visible');
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
      className="py-24 px-6 md:px-12 section-appear"
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* Maple leaves image */}
        <div className="flex justify-center mb-16 animate-slide-in-up" style={{ animationDelay: '0.3s' }}>
          <div className="overflow-hidden rounded-lg w-full sm:w-auto shadow-lg transition-all duration-300 hover:shadow-xl">
            <img 
              src="/lovable-uploads/032efd57-d151-43df-9765-f38df27f842f.png" 
              alt="Canadian maple leaves" 
              className="max-w-full sm:max-w-md md:max-w-lg"
            />
          </div>
        </div>
        
        <p className="text-xl md:text-2xl lg:text-3xl italic text-[#ea384c] mb-8 leading-relaxed">
          Life is all about balance, staying curious, embracing passions, and 
          enjoying the things that bring excitement and growth. Whether it's the 
          thrill of competition, the latest tech innovations, or a perfectly curated 
          living space, I love diving deep into the things that spark my interest.
        </p>
        
        <p className="text-lg md:text-xl text-muted-foreground mb-8">
          Here's a glimpse into what keeps me engaged and entertained:
        </p>
      </div>
    </section>
  );
};

export default About;
