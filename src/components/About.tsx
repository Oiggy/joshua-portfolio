
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
        {/* Passport image with Canada flag */}
        <div className="flex justify-center mb-16 animate-slide-in-up" style={{ animationDelay: '0.3s' }}>
          <img 
            src="/lovable-uploads/abf77643-9d19-4fe2-a671-d1cb5785af3a.png" 
            alt="Passport with Canadian flag" 
            className="max-w-full sm:max-w-md md:max-w-lg rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl"
          />
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
