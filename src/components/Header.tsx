
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-12 ${
        isScrolled ? 'py-4 bg-background/80 backdrop-blur-md border-b' : 'py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link 
          to="/" 
          className="text-lg font-medium tracking-tight hover:opacity-80 transition-opacity"
        >
          Joshua Ighalo
        </Link>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#about" className="link-underline text-sm">About</a>
          <a href="#experience" className="link-underline text-sm">Experience</a>
          <a href="#skills" className="link-underline text-sm">Skills</a>
          <a href="#contact" className="link-underline text-sm">Contact</a>
        </nav>
        
        <button 
          className="block md:hidden"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile menu */}
      <div 
        className={`md:hidden fixed inset-0 bg-background z-40 transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8 text-lg">
          <a 
            href="#about" 
            className="link-underline"
            onClick={() => setMobileMenuOpen(false)}
          >
            About
          </a>
          <a 
            href="#experience" 
            className="link-underline"
            onClick={() => setMobileMenuOpen(false)}
          >
            Experience
          </a>
          <a 
            href="#skills" 
            className="link-underline"
            onClick={() => setMobileMenuOpen(false)}
          >
            Skills
          </a>
          <a 
            href="#contact" 
            className="link-underline"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
