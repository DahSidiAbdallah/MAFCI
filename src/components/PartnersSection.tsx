import React from 'react';
import { useTranslation } from 'react-i18next';

const PartnersSection: React.FC = () => {
  const { t } = useTranslation();

  // Partner data with actual logos from assets
  const partners = [
      {
    id: 1,
    name: 'ATTM',
    logo: './assets/ATTM.jpg'
  },
  {
    id: 2,
    name: 'Kinross',
    logo: './assets/Kinross.png'
  },
  {
    id: 3,
    name: 'Green Sahel',
    logo: './assets/Green Sahel.jpeg'
  },
  {
    id: 4,
    name: 'SMV',
    logo: './assets/SMV.png'
  },
  {
    id: 5,
    name: 'SINO HYDRO',
    logo: './assets/SINO HYDRO.png'  
  },
  ];

  return (
    <section id="partners" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('partners.title')}
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t('partners.description')}
          </p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 items-center justify-center">
          {partners.map((partner) => (
            <div 
              key={partner.id} 
              className="flex flex-col items-center group"
              data-aos="fade-up"
              data-aos-delay={partner.id * 50}
            >
              <div className="w-32 h-32 rounded-full bg-white shadow-md flex items-center justify-center overflow-hidden mb-3 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                <img 
                  src={partner.logo} 
                  alt={partner.name}
                  className="w-4/5 h-4/5 object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <span className="text-sm text-gray-600 text-center font-medium mt-2 group-hover:text-primary transition-colors">
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
