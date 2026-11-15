import React from 'react';
import HeroSection from '../components/home/HeroSection';
import AboutPreview from '../components/home/AboutPreview';
import ServicesOverview from '../components/home/ServicesOverview';
import WhyChooseUs from '../components/home/WhyChooseUs';
import ConsultationProcess from '../components/home/ConsultationProcess';
import TestimonialsSection from '../components/home/TestimonialsSection';
import FaqSection from '../components/home/FaqSection';
import CtaBanner from '../components/home/CtaBanner';

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <AboutPreview />
      <ServicesOverview />
      <WhyChooseUs />
      <ConsultationProcess />
      <TestimonialsSection />
      <FaqSection />
      <CtaBanner />
    </div>
  );
};

export default HomePage;
