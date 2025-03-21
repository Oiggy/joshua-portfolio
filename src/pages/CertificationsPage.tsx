
import React from 'react';
import PageTransition from '@/components/PageTransition';
import Header from '@/components/Header';
import ModeToggle from '@/components/ModeToggle';
import HeroCertifications from '@/components/HeroCertifications';
import FileCabinet from '@/components/FileCabinet';
import TestimonialSlider from '@/components/TestimonialSlider';
import Footer from '@/components/Footer';

const CertificationsPage = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Header />
        <ModeToggle />
        <HeroCertifications />
        <FileCabinet />
        <TestimonialSlider />
        <Footer />
      </div>
    </PageTransition>
  );
};

export default CertificationsPage;
