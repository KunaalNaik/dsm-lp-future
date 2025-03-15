
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import VisionSection from '@/components/VisionSection';
import ProgramsSection from '@/components/ProgramsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import WhyChooseUs from '@/components/WhyChooseUs';
import CtaSection from '@/components/CtaSection';
import PolicySection from '@/components/PolicySection';
import Footer from '@/components/Footer';

const Index = () => {
  // Add a subtle parallax effect on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const elements = document.querySelectorAll('.cyber-card');
      
      elements.forEach((el, index) => {
        const element = el as HTMLElement;
        const speed = 0.03;
        const offset = scrollY * speed * (index % 3 === 0 ? 1 : -1) * 0.3;
        element.style.transform = `translateY(${offset}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-cyber-black text-white overflow-x-hidden">
      <Header />
      <main>
        <VisionSection />
        <ProgramsSection />
        <TestimonialsSection />
        <WhyChooseUs />
        <CtaSection />
        <PolicySection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
