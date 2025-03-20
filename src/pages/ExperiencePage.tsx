
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import HeroExperience from '@/components/HeroExperience';
import Experience from '@/components/Experience';
import Footer from '@/components/Footer';
import Loader from '@/components/Loader';
import SmoothScroll from '@/components/SmoothScroll';
import CustomCursor from '@/components/CustomCursor';
import ModeToggle from '@/components/ModeToggle';

const ExperiencePage = () => {
  useEffect(() => {
    // Add intersection observer for animations
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('section-appear', 'is-visible');
            sectionObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    document.querySelectorAll('.section-appear').forEach((section) => {
      sectionObserver.observe(section);
    });
    
    return () => {
      document.querySelectorAll('.section-appear').forEach((section) => {
        sectionObserver.unobserve(section);
      });
    };
  }, []);
  
  return (
    <div className="relative">
      <Loader />
      <CustomCursor />
      <SmoothScroll />
      
      <Header />
      
      <main>
        <ModeToggle />
        <HeroExperience />
        <Experience />
      </main>
      
      <Footer />
    </div>
  );
};

export default ExperiencePage;
