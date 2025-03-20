
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 px-6 md:px-12 border-t">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <p className="text-lg font-medium">Joshua Ighalo</p>
            <p className="text-muted-foreground">Product Management Professional</p>
          </div>
          
          <div>
            <p className="text-sm text-muted-foreground">
              © {currentYear} Joshua Ighalo. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
