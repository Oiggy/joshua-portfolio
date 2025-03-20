
import React, { useState, useEffect } from 'react';

const Loader = () => {
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div className={`loader ${!loading ? 'loaded' : ''}`}>
      <div className="loader-content">
        <div className="text-3xl font-bold tracking-tight mb-2 animate-pulse">
          Joshua Ighalo
        </div>
        <div className="h-0.5 w-24 bg-primary/20 relative overflow-hidden">
          <div 
            className="h-full bg-primary absolute left-0 top-0 transition-all duration-2000"
            style={{ width: loading ? '0%' : '100%' }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
