
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
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-24 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              Product Manager with a passion for innovation
            </h2>
            
            <p className="text-muted-foreground mb-4">
              I'm Joshua Ighalo, an Agile Product Manager with a background in engineering, 
              specializing in user-centered design, data-driven decision making, and cross-functional 
              team leadership.
            </p>
            
            <p className="text-muted-foreground mb-4">
              With experience spanning AI product development, software simulation for aviation, 
              and healthcare technology, I excel at translating complex user needs into elegant product solutions.
            </p>
            
            <p className="text-muted-foreground">
              I'm dedicated to building products that create meaningful impact through systematic 
              product strategy, meticulous execution, and continuous improvement.
            </p>
            
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">Location</h3>
                <p className="text-muted-foreground">
                  Mont-Royal, Quebec, Canada
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">Education</h3>
                <p className="text-muted-foreground">
                  MASc in Engineering Science
                </p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square bg-muted rounded-xl overflow-hidden">
              <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                <span className="text-9xl font-bold opacity-20">JI</span>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-background p-4 rounded-lg shadow-lg border animate-fade-in">
              <div className="flex flex-col items-center">
                <p className="text-4xl font-bold mb-1">3+</p>
                <p className="text-sm text-muted-foreground">Years of Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
