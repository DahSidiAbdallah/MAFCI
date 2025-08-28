import React from 'react';
import { Truck, Building, Hammer, HardHat, Scale, ShieldCheck } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import nosservImage from '../assets/nosserv.jpg';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
  isRTL: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, delay, isRTL }) => {
  const { t } = useTranslation();
  
  return (
    <div 
      className="group relative bg-white/90 backdrop-blur-sm rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl shadow-lg border border-white/10"
      data-aos="fade-up" 
      data-aos-delay={delay}
    >
      {/* Top accent bar with gradient */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-primary-light to-blue-500"></div>
      
      {/* Icon with glowing effect on hover */}
      <div className="relative mt-8 mb-4 flex justify-center">
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary to-blue-600 rounded-full blur opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
          <div className="relative flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary/10 to-blue-700/10 text-primary rounded-full p-3 group-hover:text-white group-hover:bg-primary transition-all duration-300">
            {icon}
          </div>
        </div>
      </div>
      
      {/* Content */}
      <div className="px-6 pb-6">
        <h3 className="text-xl font-bold text-secondary text-center mb-4 group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        <p className={`text-gray-600 text-center ${isRTL ? 'text-right' : 'text-left'}`}>
          {description}
        </p>
        
        {/* Read more button (visible on hover) */}
        <div className="mt-6 text-center transform translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
          <a href="#" className={`inline-flex items-center text-primary font-medium hover:text-primary-dark ${isRTL ? 'flex-row-reverse' : ''}`}>
            {t('services.readMore')}
            <svg 
              className={`${isRTL ? 'mr-1 rotate-180' : 'ml-1'} w-4 h-4 group-hover:translate-x-1 transition-transform duration-300`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

const ServicesSection: React.FC = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.dir() === 'rtl';

  const services = [
    {
      icon: <Truck size={28} />,
      titleKey: "services.concrete",
      descriptionKey: "services.concrete.desc",
      delay: 100
    },
    {
      icon: <Building size={28} />,
      titleKey: "services.cement",
      descriptionKey: "services.cement.desc",
      delay: 200
    },
    {
      icon: <Hammer size={28} />,
      titleKey: "services.construction",
      descriptionKey: "services.construction.desc",
      delay: 300
    },
    {
      icon: <HardHat size={28} />,
      titleKey: "services.technical",
      descriptionKey: "services.technical.desc",
      delay: 400
    },
    {
      icon: <Scale size={28} />,
      titleKey: "services.custom",
      descriptionKey: "services.custom.desc",
      delay: 500
    },
    {
      icon: <ShieldCheck size={28} />,
      titleKey: "services.quality",
      descriptionKey: "services.quality.desc",
      delay: 600
    }
  ];

  return (
    <section id="services" className="py-20 relative overflow-hidden">
      {/* Globe-like curved background with dark blue gradient */}
      <div className="absolute inset-0 z-0">
        {/* Main background image */}
        <img 
          src={nosservImage} 
          alt={t('services.backgroundAlt')} 
          className="absolute w-full h-full object-cover opacity-40"
        />
        
        {/* Dark blue gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950 via-blue-900 to-blue-950"></div>
        
        {/* Top curved shape */}
        <svg 
          className="absolute top-0 left-0 w-full"
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1440 200"
          preserveAspectRatio="none"
        >
          <path 
            fill="white" 
            d="M0,200 Q720,0 1440,200 V0 H0 Z"
            opacity="0.05"
          ></path>
        </svg>
        
        {/* Bottom curved shape */}
        <svg 
          className="absolute bottom-0 left-0 w-full"
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1440 200"
          preserveAspectRatio="none"
        >
          <path 
            fill="white" 
            d="M0,0 Q720,200 1440,0 V200 H0 Z"
            opacity="0.05"
          ></path>
        </svg>
        
        {/* Add subtle grid patterns */}
        <div 
          className="absolute inset-0"
          style={{ 
            backgroundImage: 'linear-gradient(0deg, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
            opacity: 0.2
          }}
        ></div>
        
        {/* Add subtle dotted connections like in the screenshot */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="dotPattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                <circle cx="30" cy="30" r="1" fill="white" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dotPattern)" />
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-20">
        <div className="text-center mb-16">
          {/* Decorative element above title */}
          <div className="inline-block mb-4">
            <div className={`flex items-center ${isRTL ? 'flex-row-reverse space-x-reverse' : ''} space-x-2`}>
              <div className="w-8 h-1 bg-primary rounded-full"></div>
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <div className="w-2 h-2 bg-primary rounded-full"></div>
            </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4" data-aos="fade-up">
            {t('services.title')} <span className="text-primary">{t('services.titleHighlight')}</span>
          </h2>
          
          <p className={`max-w-3xl mx-auto text-gray-200 text-lg ${isRTL ? 'text-right' : 'text-left'}`} data-aos="fade-up" data-aos-delay="100">
            {t('services.subtitle')}
          </p>
        </div>

        {/* Services grid with improved layout and spacing */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon} 
              title={t(service.titleKey)}
              description={t(service.descriptionKey)}
              delay={service.delay}
              isRTL={isRTL}
            />
          ))}
        </div>
        
        {/* Bottom CTA */}
        <div className="mt-16 text-center" data-aos="fade-up" data-aos-delay="700">
          <a 
            href="https://wa.me/22248910061" 
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center px-8 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary-dark transition-colors shadow-lg hover:shadow-primary/30 ${isRTL ? 'flex-row-reverse space-x-reverse' : ''}`}
          >
            {t('services.contactUs')}
            <svg 
              className={`${isRTL ? 'mr-2 rotate-180' : 'ml-2'} w-5 h-5`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;