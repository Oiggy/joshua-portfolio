
import React, { useEffect, useRef } from 'react';

const FileCabinet = () => {
  const cabinetRef = useRef<HTMLDivElement>(null);
  
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
    
    if (cabinetRef.current) {
      observer.observe(cabinetRef.current);
    }
    
    return () => {
      if (cabinetRef.current) {
        observer.unobserve(cabinetRef.current);
      }
    };
  }, []);
  
  return (
    <section 
      ref={cabinetRef}
      className="w-full max-w-3xl mx-auto py-16 px-4 opacity-0 transition-opacity duration-1000"
    >
      <div className="relative w-full max-w-md mx-auto h-[400px]">
        {/* Cabinet Body - orthogonal top view */}
        <div className="absolute inset-0 bg-amber-500/90 rounded-sm shadow-lg border-2 border-amber-600/50">
          {/* Cabinet interior shadow */}
          <div className="absolute inset-2 bg-amber-700/20"></div>
          
          {/* Cabinet drawers - from orthogonal top view */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            {/* First drawer - closed */}
            <div className="w-[95%] h-[28%] my-1 bg-amber-600/90 rounded-sm shadow-inner relative">
              {/* Drawer handle */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-2 bg-amber-300 rounded-full border border-amber-700/30"></div>
              
              {/* Label */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-2 w-32 h-8 bg-white/90 border border-amber-700/30 flex items-center justify-center">
                <div className="text-amber-950 text-xs font-mono">CERTIFICATES</div>
              </div>
            </div>
            
            {/* Second drawer - closed */}
            <div className="w-[95%] h-[28%] my-1 bg-amber-600/90 rounded-sm shadow-inner relative">
              {/* Drawer handle */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-2 bg-amber-300 rounded-full border border-amber-700/30"></div>
              
              {/* Label */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-2 w-32 h-8 bg-white/90 border border-amber-700/30 flex items-center justify-center">
                <div className="text-amber-950 text-xs font-mono">ACHIEVEMENTS</div>
              </div>
            </div>
            
            {/* Third drawer - open */}
            <div className="w-full h-[28%] my-1 relative">
              {/* Drawer front face - pulled out */}
              <div className="absolute top-0 left-[2.5%] w-[95%] h-full bg-amber-600/90 rounded-sm shadow-md">
                {/* Drawer handle */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-2 bg-amber-300 rounded-full border border-amber-700/30"></div>
                
                {/* Label */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-2 w-32 h-8 bg-white/90 border border-amber-700/30 flex items-center justify-center">
                  <div className="text-amber-950 text-xs font-mono">PROJECTS</div>
                </div>
              </div>
              
              {/* Open drawer contents - empty drawer with shadow */}
              <div className="absolute top-0 left-0 w-full h-full bg-amber-700/40 -z-10 rounded-sm">
                {/* Empty drawer interior */}
                <div className="absolute inset-1 bg-amber-800/20 rounded-sm"></div>
                
                {/* Drawer rails */}
                <div className="absolute left-1 top-2 bottom-2 w-1 bg-amber-600/70"></div>
                <div className="absolute right-1 top-2 bottom-2 w-1 bg-amber-600/70"></div>
              </div>
            </div>
          </div>
          
          {/* Cabinet shadow effects */}
          <div className="absolute inset-x-4 top-0 h-2 bg-amber-600/30"></div>
          <div className="absolute inset-x-0 bottom-0 h-4 bg-amber-800/30 rounded-b-sm"></div>
          <div className="absolute inset-y-4 left-0 w-2 bg-amber-600/20"></div>
          <div className="absolute inset-y-4 right-0 w-2 bg-amber-800/40"></div>
        </div>
      </div>
    </section>
  );
};

export default FileCabinet;
