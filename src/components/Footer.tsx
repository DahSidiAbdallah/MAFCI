import React from 'react';
import { FaFacebook, FaTiktok, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { Phone, Mail, MapPin } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Logo from './Logo';
import FooterLogo from '../assets/MAFCI footer.png';

const Footer: React.FC = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.dir() === 'rtl';

  return (
    <footer className="bg-secondary text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className={`${isRTL ? 'text-right' : 'text-left'}`}>
            <div className={`mb-6 ${isRTL ? 'flex justify-end' : ''}`}>
              <img 
                src={FooterLogo} 
                alt="MAFCI Logo" 
                height={100}
                width={100}
              />
            </div>
            <p className={`text-gray-300 mb-6 ${isRTL ? 'text-right' : 'text-left'}`}>
              {t('marketLeader')}
            </p>
            <div className={`flex ${isRTL ? 'justify-end' : ''} gap-4`}>
              <a 
                href="https://www.facebook.com/MAFCImr" 
                className="bg-secondary-light hover:bg-primary p-2 rounded-full transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook size={18} />
              </a>
              <a 
                href="https://www.linkedin.com/company/mafcimr/" 
                className="bg-secondary-light hover:bg-primary p-2 rounded-full transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={18} />
              </a>
              <a 
                href="https://www.tiktok.com/@mafci_mr" 
                className="bg-secondary-light hover:bg-primary p-2 rounded-full transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTiktok size={18} />
              </a>
              <a 
                href="https://www.youtube.com/@MAFCI-g2e" 
                className="bg-secondary-light hover:bg-primary p-2 rounded-full transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube size={18} />
              </a>
            </div>
          </div>
          
          <div className={`${isRTL ? 'text-right' : 'text-left'}`}>
            <h3 className="text-xl font-bold mb-6 relative">
              <span className={`after:content-[''] after:absolute ${isRTL ? 'after:right-0' : 'after:left-0'} after:bottom-[-10px] after:w-12 after:h-1 after:bg-primary`}>
                {t('footer.company')}
              </span>
            </h3>
            <ul className="space-y-3">
              <li className={`${isRTL ? 'text-right' : 'text-left'}`}>
                <a href="#" className="text-gray-300 hover:text-white transition-colors block">
                  {t('nav.home')}
                </a>
              </li>
              <li className={`${isRTL ? 'text-right' : 'text-left'}`}>
                <a href="#about" className="text-gray-300 hover:text-white transition-colors block">
                  {t('nav.about')}
                </a>
              </li>
              <li className={`${isRTL ? 'text-right' : 'text-left'}`}>
                <a href="#services" className="text-gray-300 hover:text-white transition-colors block">
                  {t('nav.services')}
                </a>
              </li>
              <li className={`${isRTL ? 'text-right' : 'text-left'}`}>
                <a href="#products" className="text-gray-300 hover:text-white transition-colors block">
                  {t('nav.products')}
                </a>
              </li>
              <li className={`${isRTL ? 'text-right' : 'text-left'}`}>
                <a href="#realisations" className="text-gray-300 hover:text-white transition-colors block">
                  {t('nav.projects')}
                </a>
              </li>
            </ul>
          </div>
          
          <div className={`${isRTL ? 'text-right' : 'text-left'}`}>
            <h3 className="text-xl font-bold mb-6 relative">
              <span className={`after:content-[''] after:absolute ${isRTL ? 'after:right-0' : 'after:left-0'} after:bottom-[-10px] after:w-12 after:h-1 after:bg-primary`}>
                {t('nav.services')}
              </span>
            </h3>
            <ul className="space-y-3">
              <li className={`${isRTL ? 'text-right' : 'text-left'}`}>
                <a href="#" className="text-gray-300 hover:text-white transition-colors block">
                  {t('services.concrete')}
                </a>
              </li>
              <li className={`${isRTL ? 'text-right' : 'text-left'}`}>
                <a href="#" className="text-gray-300 hover:text-white transition-colors block">
                  {t('services.cement')}
                </a>
              </li>
              <li className={`${isRTL ? 'text-right' : 'text-left'}`}>
                <a href="#" className="text-gray-300 hover:text-white transition-colors block">
                  {t('services.construction')}
                </a>
              </li>
              <li className={`${isRTL ? 'text-right' : 'text-left'}`}>
                <a href="#" className="text-gray-300 hover:text-white transition-colors block">
                  {t('services.transport')}
                </a>
              </li>
            </ul>
          </div>
          
          <div className={`${isRTL ? 'text-right' : 'text-left'}`}>
            <h3 className="text-xl font-bold mb-6 relative">
              <span className={`after:content-[''] after:absolute ${isRTL ? 'after:right-0' : 'after:left-0'} after:bottom-[-10px] after:w-12 after:h-1 after:bg-primary`}>
                {t('nav.contact')}
              </span>
            </h3>
            <ul className="space-y-4">
              <li className={`${isRTL ? 'text-right' : 'text-left'}`}>
                <div className="flex items-center">
                  {isRTL && <Phone size={18} className="mr-0 ml-2 mt-0.5 text-primary flex-shrink-0" />}
                  <span className="text-gray-300" dir="auto">{t('contact.phone.value')}</span>
                  {!isRTL && <Phone size={18} className="ml-0 mr-3 mt-0.5 text-primary flex-shrink-0" />}
                </div>
              </li>
              <li className={`${isRTL ? 'text-right' : 'text-left'}`}>
                <div className="flex items-center">
                  {isRTL && <Mail size={18} className="mr-0 ml-2 mt-0.5 text-primary flex-shrink-0" />}
                  <span className="text-gray-300" dir="auto">{t('contact.email.value')}</span>
                  {!isRTL && <Mail size={18} className="ml-0 mr-3 mt-0.5 text-primary flex-shrink-0" />}
                </div>
              </li>
              <li className={`${isRTL ? 'text-right' : 'text-left'}`}>
                <div className="flex items-center">
                  {isRTL && <MapPin size={18} className="mr-0 ml-2 mt-0.5 text-primary flex-shrink-0" />}
                  <span className="text-gray-300" dir="auto">{t('contact.address.value')}, {t('contact.address.country')}</span>
                  {!isRTL && <MapPin size={18} className="ml-0 mr-3 mt-0.5 text-primary flex-shrink-0" />}
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-secondary-light pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className={`text-gray-400 text-center ${isRTL ? 'md:text-right' : 'md:text-left'} mb-4 md:mb-0 w-full`}>
              {t('footer.copyright', { year: new Date().getFullYear() })}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;