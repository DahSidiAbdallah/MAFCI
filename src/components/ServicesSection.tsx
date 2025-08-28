import React from 'react';
import { Building, Hammer, HardHat, Scale, ShieldCheck } from 'lucide-react';
import { useTranslation } from 'react-i18next';


const Toupie = './assets/toupie-icon.webp';


interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
  isRTL: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, delay, isRTL }) => {
  const { t } = useTranslation();
  const pdfLink = isRTL ? './assets/presentation-ar.pdf' : './assets/presentation.pdf';
  
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
          <a href={pdfLink} className={`inline-flex items-center text-primary font-medium hover:text-primary-dark ${isRTL ? 'flex-row-reverse' : ''}`} target="_blank" rel="noopener noreferrer">
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
      icon: <img src={Toupie} alt="Toupie Icon" className="w-7 h-7  group-hover:brightness-0 group-hover:invert" />, // Using the Toupie icon
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
    <section id="services" className="py-20 relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Subtle pattern overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23000000\' fill-opacity=\'0.1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
        }}
      ></div>
      


      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-16">
        <div className="text-center mb-16">
          {/* Decorative element above title */}
          <div className="inline-block mb-4">
            <div className={`flex items-center ${isRTL ? 'flex-row-reverse space-x-reverse' : ''} space-x-2`}>
              <div className="w-8 h-1 bg-primary rounded-full"></div>
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <div className="w-2 h-2 bg-primary rounded-full"></div>
            </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" data-aos="fade-up">
            {t('services.title')} <span className="text-primary">{t('services.titleHighlight')}</span>
          </h2>
          
          <p className={`max-w-3xl mx-auto text-gray-600 text-lg ${isRTL ? 'text-right' : 'text-left'}`} data-aos="fade-up" data-aos-delay="100">
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
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-secondary/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
    </section>
  );
};

const TechnicalDatasheetsSection: React.FC = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.dir() === 'rtl';

  const datasheets = [
    {
      title: t('datasheets.betonC30'),
      file: isRTL ? './assets/BETON-C30-ar.pdf' : './assets/BETON-C30.pdf',
    },
    {
      title: t('datasheets.betonC25'),
      file: isRTL ? './assets/BETON-C25-ar.pdf' : './assets/BETON-C25.pdf',
    },
    {
      title: t('datasheets.betonC20'),
      file: isRTL ? './assets/BETON-C20-ar.pdf' : './assets/BETON-C20.pdf',
    },
    {
      title: t('datasheets.betonC15'),
      file: isRTL ? './assets/BETON-C15-ar.pdf' : './assets/BETON-C15.pdf',
    },
    {
      title: t('datasheets.cemI42_5R_SR'),
      file: isRTL ? './assets/CEM-I-42.5R-SR-ar.pdf' : './assets/CEM-I-42.5R-SR.pdf',
    },
    {
      title: t('datasheets.cemI52_5N_PM_ES'),
      file: isRTL ? './assets/CEM-I-52.5N-PM-ES-ar.pdf' : './assets/CEM-I-52.5N-PM-ES.pdf',
    },
    {
      title: t('datashees.cemIIA_L42_5R'),
      file: isRTL ? './assets/CEM-II-A-L-42.5R-ar.pdf' : './assets/CEM-II-A-L-42.5R.pdf',
    },
    {
      title: t('datasheets.cemIIB_L32_5R'),
      file: isRTL ? './assets/CEM-II-B-L-32.5R-ar.pdf' : './assets/CEM-II-B-L-32.5R.pdf',
    },
    {
      title: t('datasheets.cemIII_A42_5N'),
      file: isRTL ? './assets/CEM-III-A-42.5N-ar.pdf' : './assets/CEM-III-A-42.5N.pdf',
    },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
          {t('datasheets.title')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {datasheets.map((sheet, index) => (
            <a
              key={index}
              href={sheet.file}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow text-center"
            >
              <h3 className="text-xl font-semibold text-primary mb-4">{sheet.title}</h3>
              <p className="text-gray-600">{t('datasheets.download')}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

// Add the new section below the existing Services section
<>
  <ServicesSection />
  <TechnicalDatasheetsSection />
</>

// Export the ServicesSection as default
export default ServicesSection;