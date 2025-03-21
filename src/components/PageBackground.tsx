
import React from 'react';

const PageBackground: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="relative min-h-screen">
      <div className="page-background absolute inset-0 z-0" />
      <div className="relative z-10 min-h-screen">
        <div className="max-w-6xl mx-auto my-24 px-6 py-8 rounded-3xl glass-container">
          {children}
        </div>
      </div>
    </div>
  );
};

export default PageBackground;
