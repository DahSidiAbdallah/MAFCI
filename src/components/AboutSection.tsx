import React from 'react';
import { Building, UserCheck, Award, TrendingUp } from 'lucide-react';
import { useTranslation } from 'react-i18next';

// Import images from the assets folder
const Image1 = './assets/LNC_0479 copy.jpg';
const Image2 = './assets/DJI_0164.JPG';
import PresidentImage from '../assets/mohamed_abdallahi_zeine_540.jpg';

interface StatsCardProps {
  icon: React.ReactNode;
  titleKey: string;
  value: string;
  isRTL: boolean;
}

const StatsCard: React.FC<StatsCardProps> = ({ icon, titleKey, value, isRTL }) => {
  const { t } = useTranslation();
  return (
    <div className={`bg-white p-6 rounded-lg shadow-md flex items-center hover:shadow-lg transition-shadow ${isRTL ? 'flex-row-reverse' : ''} h-full`}>
      <div className={`${isRTL ? 'ml-4' : 'mr-4'} text-primary`}>
        {icon}
      </div>
      <div className={`${isRTL ? 'text-right' : 'text-left'}`}>
        <h3 className="text-3xl font-bold text-secondary">{value}</h3>
        <p className="text-gray-600">{t(titleKey)}</p>
      </div>
    </div>
  );
};

const AboutSection: React.FC = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.dir() === 'rtl';

  const stats = [
    { icon: <Building size={40} />, value: "400K+", titleKey: "about.stats.production", delay: 100 },
    { icon: <UserCheck size={40} />, value: "150+", titleKey: "about.stats.employees", delay: 200 },
    { icon: <Award size={40} />, value: "ISO 9001", titleKey: "about.stats.certification", delay: 300 },
    { icon: <TrendingUp size={40} />, value: "#1", titleKey: "about.stats.marketLeader", delay: 400 },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
            {t('about.welcome')}
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className={`max-w-3xl mx-auto text-gray-600 text-lg ${isRTL ? 'text-right' : 'text-left'}`}>
            {t('about.intro')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div data-aos={isRTL ? "fade-left" : "fade-right"} data-aos-delay="100">
            <div className="grid grid-cols-2 gap-4 h-full">
              <img 
                src={Image1}
                alt={t('about.imageAlt1')}
                className="rounded-lg shadow-md h-full w-full object-cover"
              />
              <img 
                src={Image2}
                alt={t('about.imageAlt2')}
                className="rounded-lg shadow-md h-full w-full object-cover"
              />
            </div>
          </div>
          <div 
            className={`flex flex-col justify-center ${isRTL ? 'text-right' : 'text-left'}`} 
            data-aos={isRTL ? "fade-right" : "fade-left"} 
            data-aos-delay="200"
          >
            <h3 className="text-2xl font-bold text-secondary mb-4">{t('about.companyTitle')}</h3>
            <p className="text-gray-700 mb-4">
              {t('about.companyDesc1')}
            </p>
            <p className="text-gray-700 mb-4">
              {t('about.companyDesc2')}
            </p>
            <p className="text-gray-700 mb-6">
              {t('about.companyDesc3')}
            </p>
            <a 
              href="#contact" 
              className={`inline-flex items-center text-primary font-medium hover:text-primary-dark transition-colors ${isRTL ? 'self-end' : 'self-start'}`}
            >
              {t('about.learnMore')}
              <svg className={`${isRTL ? 'mr-2 rotate-180' : 'ml-2'} w-4 h-4`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 mb-16" data-aos="fade-up">
          <div className={`flex flex-col ${isRTL ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8`}>
            <div className="md:w-1/3 flex justify-center">
              <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-primary shadow-lg">
                <img 
                  src={PresidentImage} 
                  alt={t('about.presidentAlt')}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className={`md:w-2/3 ${isRTL ? 'text-right' : 'text-left'}`}>
              <blockquote className={`text-xl italic text-gray-700 mb-4 ${isRTL ? 'border-r-4 pr-4' : 'border-l-4 pl-4'} border-primary`}>
                <span className="text-2xl text-primary">" </span>
                {t('about.presidentQuote')}
                <span className="text-2xl text-primary"> "</span>
              </blockquote>
              <div className={isRTL ? 'text-left' : 'text-right'}>
                <p className="font-bold text-secondary text-lg">{t('about.presidentName')}</p>
                <p className="text-gray-600">{t('about.presidentTitle')}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div key={stat.titleKey} data-aos="fade-up" data-aos-delay={stat.delay}>
              <StatsCard 
                icon={stat.icon} 
                value={stat.value} 
                titleKey={stat.titleKey}
                isRTL={isRTL}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;