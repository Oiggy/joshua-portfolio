
import React from 'react';
import PageTransition from '@/components/PageTransition';
import Header from '@/components/Header';
import ModeToggle from '@/components/ModeToggle';
import HeroCertifications from '@/components/HeroCertifications';
import FileDrawer3D from '@/components/FileDrawer3D';
import TestimonialSlider from '@/components/TestimonialSlider';
import Footer from '@/components/Footer';

const CertificationsPage = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Header />
        <ModeToggle />
        <HeroCertifications />
        <FileDrawer3D />
        <TestimonialSlider />
        <Footer />
      </div>
    </PageTransition>
  );
};

export default CertificationsPage;
