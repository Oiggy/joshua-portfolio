
import React from 'react';
import PageTransition from '@/components/PageTransition';
import Header from '@/components/Header';
import ModeToggle from '@/components/ModeToggle';
import HeroEducation from '@/components/HeroEducation';
import Education from '@/components/Education';
import Footer from '@/components/Footer';

const EducationPage = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Header />
        <ModeToggle />
        <HeroEducation />
        <Education />
        <Footer />
      </div>
    </PageTransition>
  );
};

export default EducationPage;
