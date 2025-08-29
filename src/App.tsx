import React, { useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import TechnicalDatasheetsSection from './components/TechnicalDatasheetsSection';
import PartnersSection from './components/PartnersSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import SocialFeedsSection from './components/SocialFeedsSection';

function App() {
  // Set page title
  useEffect(() => {
    document.title = "MAFCI | Leader en Ciment et Béton";
  }, []);

  // Simulate AOS (Animate on Scroll) functionality with simple intersection observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const targetElement = entry.target as HTMLElement;
            targetElement.classList.add('animate-fade-in');
            targetElement.style.opacity = '1';
            targetElement.style.transform = 'translateY(0)';
            observer.unobserve(targetElement);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    const animateElements = document.querySelectorAll('[data-aos]');
    animateElements.forEach((el) => {
      const htmlEl = el as HTMLElement;
      htmlEl.style.opacity = '0';
      htmlEl.style.transform = 'translateY(20px)';
      htmlEl.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
      observer.observe(htmlEl);
    });

    return () => {
      animateElements.forEach((el) => {
        const htmlEl = el as HTMLElement;
        observer.unobserve(htmlEl);
      });
    };
  }, []);

  return (
    <div className="font-sans">
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <TechnicalDatasheetsSection />
      <PartnersSection />
      <ProjectsSection />
  <ContactSection />
  <SocialFeedsSection />
  <Footer />
    </div>
  );
}

export default App;