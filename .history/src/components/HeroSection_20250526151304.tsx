import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const slidesData = [
  {
    id: 1,
    image: "https://images.pexels.com/photos/236705/pexels-photo-236705.jpeg?auto=compress&cs=tinysrgb&w=1600",
    titleKey: "innovativeConstructionSolutions",
    subtitleKey: "marketLeader",
  },
  {
    id: 2,
    image: "https://images.pexels.com/photos/2760242/pexels-photo-2760242.jpeg?auto=compress&cs=tinysrgb&w=1600",
    titleKey: "superiorInfrastructure",
    subtitleKey: "modernEquipment",
  },
  {
    id: 3,
    image: "https://images.pexels.com/photos/2138126/pexels-photo-2138126.jpeg?auto=compress&cs=tinysrgb&w=1600",
    titleKey: "unmatchedTechnicalExpertise",
    subtitleKey: "qualifiedEmployees",
  }
];

const HeroSection: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);
  const isRTL = i18n.dir() === 'rtl';

  useEffect(() => {
    document.documentElement.lang = i18n.language;
    document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
  }, [i18n.language]);

  const slides = slidesData.map(slide => ({
    ...slide,
    title: t(slide.titleKey),
    subtitle: t(slide.subtitleKey),
  }));

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative h-screen">
      {/* Slides */}
      <div className="relative h-full">
        {slides.map((slide, index) => (
          <div 
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          >
            <div className="absolute inset-0 bg-black/50 z-10"></div>
            <img 
              src={slide.image} 
              alt={slide.title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4 z-20">
              <div 
                className="max-w-3xl px-4 py-8 mx-auto"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-xl text-gray-200 mb-8">
                  {slide.subtitle}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
                  {i18n.language === 'fr' && (
                    <a
                      href="/assets/presentation.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-primary text-white px-8 py-3 rounded-md font-medium hover:bg-primary-dark transition-colors"
                    >
                      {t('presentationFR')}
                    </a>
                  )}
                  {i18n.language === 'ar' && (
                    <a
                      href="/assets/presentation-ar.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-primary text-white px-8 py-3 rounded-md font-medium hover:bg-primary-dark transition-colors"
                    >
                      {t('presentationAR')}
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation arrows */}
      <button 
        className={`absolute top-1/2 transform -translate-y-1/2 z-30 bg-white/20 hover:bg-white/40 rounded-full p-2 text-white transition-colors ${isRTL ? 'right-4' : 'left-4'}`}
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        {isRTL ? <ChevronRight size={24} /> : <ChevronLeft size={24} />}
      </button>
      <button 
        className={`absolute top-1/2 transform -translate-y-1/2 z-30 bg-white/20 hover:bg-white/40 rounded-full p-2 text-white transition-colors ${isRTL ? 'left-4' : 'right-4'}`}
        onClick={nextSlide}
        aria-label="Next slide"
      >
        {isRTL ? <ChevronLeft size={24} /> : <ChevronRight size={24} />}
      </button>

      {/* Slide indicators */}
      <div className={`absolute bottom-6 left-1/2 transform -translate-x-1/2 z-30 flex ${isRTL ? 'space-x-reverse' : ''} gap-x-3`}>
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? 'bg-primary' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;