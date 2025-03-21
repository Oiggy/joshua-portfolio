
import React from 'react';
import PageTransition from '@/components/PageTransition';
import Header from '@/components/Header';
import ModeToggle from '@/components/ModeToggle';
import HeroCertifications from '@/components/HeroCertifications';
import CertificationCards from '@/components/CertificationCards';
import TestimonialSlider from '@/components/TestimonialSlider';
import Footer from '@/components/Footer';
import PageBackground from '@/components/PageBackground';

const CertificationsPage = () => {
  return (
    <PageTransition>
      <PageBackground>
        <div className="min-h-screen bg-transparent">
          <Header />
          <ModeToggle />
          <HeroCertifications />
          <CertificationCards />
          <TestimonialSlider />
          <Footer />
        </div>
      </PageBackground>
    </PageTransition>
  );
};

export default CertificationsPage;
