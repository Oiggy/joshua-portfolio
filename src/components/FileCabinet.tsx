
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
      <div className="relative w-full max-w-md mx-auto h-[500px]">
        {/* Cabinet Body */}
        <div className="absolute inset-0 bg-amber-500/90 rounded-sm shadow-lg">
          {/* Cabinet top drawer (closed) */}
          <div className="absolute top-4 left-4 right-4 h-[140px] bg-amber-600/90 rounded-sm shadow-md">
            {/* Label holder */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-32 h-12 bg-white/90 border border-amber-700/30 flex items-center justify-center">
              <div className="text-amber-950 text-xs font-mono">CERTIFICATES</div>
            </div>
            {/* Drawer handle */}
            <div className="absolute bottom-[70px] left-1/2 -translate-x-1/2 w-20 h-2 bg-amber-300 rounded-full border border-amber-700/30"></div>
          </div>
          
          {/* Cabinet bottom drawer (open) */}
          <div className="absolute top-[168px] left-4 right-4 h-[140px] bg-amber-600/90 rounded-sm shadow-md">
            {/* Label holder */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-32 h-12 bg-white/90 border border-amber-700/30 flex items-center justify-center">
              <div className="text-amber-950 text-xs font-mono">ACHIEVEMENTS</div>
            </div>
            {/* Drawer handle */}
            <div className="absolute bottom-[70px] left-1/2 -translate-x-1/2 w-20 h-2 bg-amber-300 rounded-full border border-amber-700/30"></div>
          </div>
          
          {/* Open drawer */}
          <div className="absolute top-[332px] left-0 right-0 h-[140px] bg-amber-600/90 rounded-sm shadow-xl transform translate-y-5">
            {/* Label holder */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-32 h-12 bg-white/90 border border-amber-700/30 flex items-center justify-center">
              <div className="text-amber-950 text-xs font-mono">PROJECTS</div>
            </div>
            {/* Drawer handle */}
            <div className="absolute bottom-[70px] left-1/2 -translate-x-1/2 w-20 h-2 bg-amber-300 rounded-full border border-amber-700/30"></div>
            
            {/* File folders */}
            <div className="absolute inset-0 overflow-hidden p-3">
              <div className="relative w-full h-full">
                {[...Array(10)].map((_, index) => (
                  <div 
                    key={index}
                    className="absolute left-3 right-3 h-[85%] bg-amber-100/90 rounded-t-sm border-t border-l border-r border-amber-700/30"
                    style={{
                      transform: `translateX(${index * 10}px)`,
                      zIndex: 10 - index,
                      top: `${2 + index * 0.5}px`
                    }}
                  >
                    <div className="absolute top-2 left-0 right-0 h-6 flex justify-between items-center px-3">
                      <div className="text-amber-950 text-[10px] font-mono">NAME:</div>
                      <div className="text-amber-950 text-[10px] font-mono">DATE:</div>
                    </div>
                    <div className="absolute bottom-4 left-0 w-full h-4">
                      <div className="w-full h-[1px] bg-amber-700/30"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FileCabinet;
