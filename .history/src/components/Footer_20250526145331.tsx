import React from 'react';
import { FaFacebook, FaTiktok, FaLinkedin } from 'react-icons/fa';
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
          <div>
            <div className="mb-6">
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
            <div className={`flex ${isRTL ? 'space-x-reverse' : ''} space-x-4`}>
              <a 
                href="https://www.facebook.com/profile.php?id=100070467002288" 
                className="bg-secondary-light hover:bg-primary p-2 rounded-full transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook size={18} />
              </a>
              <a 
                href="https://www.linkedin.com/company/mafci" 
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
            </div>
          </div>
          
          <div className={isRTL ? 'text-right' : 'text-left'}>
            <h3 className="text-xl font-bold mb-6 relative">
              <span className={`after:content-[''] after:absolute ${isRTL ? 'after:right-0' : 'after:left-0'} after:bottom-[-10px] after:w-12 after:h-1 after:bg-primary`}>
                {t('footer.company')}
              </span>
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  {t('nav.home')}
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-white transition-colors">
                  {t('nav.about')}
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-white transition-colors">
                  {t('nav.services')}
                </a>
              </li>
              <li>
                <a href="#products" className="text-gray-300 hover:text-white transition-colors">
                  {t('nav.products')}
                </a>
              </li>
              <li>
                <a href="#realisations" className="text-gray-300 hover:text-white transition-colors">
                  {t('nav.projects')}
                </a>
              </li>
            </ul>
          </div>
          
          <div className={isRTL ? 'text-right' : 'text-left'}>
            <h3 className="text-xl font-bold mb-6 relative">
              <span className={`after:content-[''] after:absolute ${isRTL ? 'after:right-0' : 'after:left-0'} after:bottom-[-10px] after:w-12 after:h-1 after:bg-primary`}>
                {t('nav.products')}
              </span>
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  {t('services.concrete')}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  {t('services.cement')}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  {t('services.construction')}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  {t('services.transport')}
                </a>
              </li>
            </ul>
          </div>
          
          <div className={isRTL ? 'text-right' : 'text-left'}>
            <h3 className="text-xl font-bold mb-6 relative">
              <span className={`after:content-[''] after:absolute ${isRTL ? 'after:right-0' : 'after:left-0'} after:bottom-[-10px] after:w-12 after:h-1 after:bg-primary`}>
                {t('nav.contact')}
              </span>
            </h3>
            <ul className="space-y-4">
              <li className={`flex items-start ${isRTL ? 'flex-row-reverse' : ''}`}>
                <Phone size={18} className={`${isRTL ? 'ml-3' : 'mr-3'} mt-1 text-primary`} />
                <span className="text-gray-300">{t('contact.phone.value')}</span>
              </li>
              <li className={`flex items-start ${isRTL ? 'flex-row-reverse' : ''}`}>
                <Mail size={18} className={`${isRTL ? 'ml-3' : 'mr-3'} mt-1 text-primary`} />
                <span className="text-gray-300">{t('contact.email.value')}</span>
              </li>
              <li className={`flex items-start ${isRTL ? 'flex-row-reverse' : ''}`}>
                <MapPin size={18} className={`${isRTL ? 'ml-3' : 'mr-3'} mt-1 text-primary`} />
                <span className="text-gray-300">{t('contact.address.value')}, {t('contact.address.country')}</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-secondary-light pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className={`text-gray-400 text-center md:text-${isRTL ? 'right' : 'left'} mb-4 md:mb-0`}>
              {t('footer.copyright', { year: new Date().getFullYear() })}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;