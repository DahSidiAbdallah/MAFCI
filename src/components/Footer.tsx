import React from 'react';
import { FaFacebook, FaTiktok, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { Phone, Mail, MapPin } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import FooterLogo from '../assets/MAFCI footer.png';

type ContactItemProps = {
  icon: React.ReactNode;
  children: React.ReactNode;
  isRTL: boolean;
};

const ContactItem: React.FC<ContactItemProps> = ({ icon, children, isRTL }) => (
  <li className={`${isRTL ? 'text-right' : 'text-left'}`}>
    <div className="flex items-center">
      {/* icon is rendered before text; margin adjusts for RTL */}
      <span className={`${isRTL ? 'ml-2' : 'mr-3'} mt-0.5 text-primary flex-shrink-0`}>
        {icon}
      </span>
      <span className="text-gray-300" dir="auto">{children}</span>
    </div>
  </li>
);

const SocialLinks: React.FC<{ isRTL: boolean }> = ({ isRTL }) => (
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
      href="https://www.youtube.com/@MAFCI_mr"
      className="bg-secondary-light hover:bg-primary p-2 rounded-full transition-colors"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaYoutube size={18} />
    </a>
  </div>
);

const LogoColumn: React.FC<{ isRTL: boolean; t: (k: string) => string }> = ({ isRTL, t }) => (
  <div className={`${isRTL ? 'text-right' : 'text-left'}`}>
    <div className={`mb-6 flex ${isRTL ? 'justify-end' : 'justify-start'}`}>
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
    <SocialLinks isRTL={isRTL} />
  </div>
);

const LinksColumn: React.FC<{ isRTL: boolean; t: (k: string) => string }> = ({ isRTL, t }) => (
  <div className={`${isRTL ? 'text-right' : 'text-left'}`}>
    <h3 className="text-xl font-bold mb-6 relative">
      <span className={`after:content-[''] after:absolute ${isRTL ? 'after:right-0' : 'after:left-0'} after:bottom-[-10px] after:w-12 after:h-1 after:bg-primary`}>
        {t('footer.company')}
      </span>
    </h3>
    <ul className="space-y-3">
      <li className={`${isRTL ? 'text-right' : 'text-left'}`}>
        <a href="/" className="text-gray-300 hover:text-white transition-colors block">{t('nav.home')}</a>
      </li>
      <li className={`${isRTL ? 'text-right' : 'text-left'}`}>
        <a href="#about" className="text-gray-300 hover:text-white transition-colors block">{t('nav.about')}</a>
      </li>
      <li className={`${isRTL ? 'text-right' : 'text-left'}`}>
        <a href="#services" className="text-gray-300 hover:text-white transition-colors block">{t('nav.services')}</a>
      </li>
      <li className={`${isRTL ? 'text-right' : 'text-left'}`}>
        <a href="#products" className="text-gray-300 hover:text-white transition-colors block">{t('nav.products')}</a>
      </li>
      <li className={`${isRTL ? 'text-right' : 'text-left'}`}>
        <a href="#realisations" className="text-gray-300 hover:text-white transition-colors block">{t('nav.projects')}</a>
      </li>
    </ul>
  </div>
);

const ServicesColumn: React.FC<{ isRTL: boolean; t: (k: string) => string }> = ({ isRTL, t }) => (
  <div className={`${isRTL ? 'text-right' : 'text-left'}`}>
    <h3 className="text-xl font-bold mb-6 relative">
      <span className={`after:content-[''] after:absolute ${isRTL ? 'after:right-0' : 'after:left-0'} after:bottom-[-10px] after:w-12 after:h-1 after:bg-primary`}>
        {t('nav.services')}
      </span>
    </h3>
    <ul className="space-y-3">
      <li className={`${isRTL ? 'text-right' : 'text-left'}`}>
        <a href="/" className="text-gray-300 hover:text-white transition-colors block">{t('services.concrete')}</a>
      </li>
      <li className={`${isRTL ? 'text-right' : 'text-left'}`}>
        <a href="/" className="text-gray-300 hover:text-white transition-colors block">{t('services.cement')}</a>
      </li>
      <li className={`${isRTL ? 'text-right' : 'text-left'}`}>
        <a href="/" className="text-gray-300 hover:text-white transition-colors block">{t('services.construction')}</a>
      </li>
      <li className={`${isRTL ? 'text-right' : 'text-left'}`}>
        <a href="/" className="text-gray-300 hover:text-white transition-colors block">{t('services.transport')}</a>
      </li>
    </ul>
  </div>
);

const ContactColumn: React.FC<{ isRTL: boolean; t: (k: string) => string }> = ({ isRTL, t }) => (
  <div className={`${isRTL ? 'text-right' : 'text-left'}`}>
    <h3 className="text-xl font-bold mb-6 relative">
      <span className={`after:content-[''] after:absolute ${isRTL ? 'after:right-0' : 'after:left-0'} after:bottom-[-10px] after:w-12 after:h-1 after:bg-primary`}>
        {t('nav.contact')}
      </span>
    </h3>
    <ul className="space-y-4">
      <ContactItem icon={<Phone size={18} />} isRTL={isRTL}>{t('contact.phone.value')}</ContactItem>
      <ContactItem icon={<Mail size={18} />} isRTL={isRTL}>{t('contact.email.value')}</ContactItem>
      <ContactItem icon={<MapPin size={18} />} isRTL={isRTL}>{t('contact.address.city')}, {t('contact.address.country')}</ContactItem>
    </ul>
  </div>
);

const CopyrightBar: React.FC<{ isRTL: boolean; t: any }> = ({ isRTL, t }) => (
  <div className="border-t border-secondary-light pt-8">
    <div className="flex flex-col md:flex-row justify-between items-center">
      <p className={`text-gray-400 text-center ${isRTL ? 'md:text-right' : 'md:text-left'} mb-4 md:mb-0 w-full`}>
  {t('footer.copyright', { year: new Date().getFullYear() })}
      </p>
    </div>
  </div>
);

const dirClass = (isRTL: boolean) => (isRTL ? 'text-right' : 'text-left');

const Footer: React.FC = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.dir() === 'rtl';

  return (
    <footer className="bg-secondary text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className={`${dirClass(isRTL)} ${isRTL ? 'lg:order-last' : ''}`}>
            <LogoColumn isRTL={isRTL} t={t} />
          </div>
          <div className={dirClass(isRTL)}>
            <LinksColumn isRTL={isRTL} t={t} />
          </div>
          <div className={dirClass(isRTL)}>
            <ServicesColumn isRTL={isRTL} t={t} />
          </div>
          <div className={dirClass(isRTL)}>
            <ContactColumn isRTL={isRTL} t={t} />
          </div>
        </div>
        
  <CopyrightBar isRTL={isRTL} t={t} />
      </div>
    </footer>
  );
};

export default Footer;