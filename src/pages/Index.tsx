
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import TestimonialSlider from '@/components/TestimonialSlider';
import Footer from '@/components/Footer';
import SmoothScroll from '@/components/SmoothScroll';
import CustomCursor from '@/components/CustomCursor';
import ModeToggle from '@/components/ModeToggle';
import PageTransition from '@/components/PageTransition';
import PageBackground from '@/components/PageBackground';

const Index = () => {
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
    <PageTransition>
      <PageBackground>
        <div className="relative">
          <CustomCursor />
          <SmoothScroll />
          
          <Header />
          
          <main>
            <ModeToggle />
            <Hero />
            <Projects />
            <TestimonialSlider />
          </main>
          
          <Footer />
        </div>
      </PageBackground>
    </PageTransition>
  );
};

export default Index;
