
import React from 'react';

const PageBackground: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="relative min-h-screen">
      <div className="page-background absolute inset-0 z-0" />
      <div className="relative z-10 min-h-screen glass-effect">
        {children}
      </div>
    </div>
  );
};

export default PageBackground;
