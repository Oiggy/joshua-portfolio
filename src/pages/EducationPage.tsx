
import React from 'react';
import PageTransition from '@/components/PageTransition';
import Header from '@/components/Header';
import ModeToggle from '@/components/ModeToggle';
import HeroEducation from '@/components/HeroEducation';
import EducationContent from '@/components/EducationContent';
import Footer from '@/components/Footer';
import PageBackground from '@/components/PageBackground';

const EducationPage = () => {
  return (
    <PageTransition>
      <PageBackground>
        <div className="min-h-screen bg-transparent">
          <Header />
          <ModeToggle />
          <HeroEducation />
          <EducationContent />
          <Footer />
        </div>
      </PageBackground>
    </PageTransition>
  );
};

export default EducationPage;
