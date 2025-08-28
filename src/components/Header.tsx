import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { FaFacebook, FaTiktok, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import Logo from './Logo';
import LanguageSelector from './LanguageSelector';

const Header: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const isRTL = i18n.dir() === 'rtl';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`fixed w-full transition-all duration-300 bg-white shadow-md ${isScrolled ? 'py-2' : 'py-4'}`} style={{ zIndex: 9999 }}>
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between relative">
          {/* Logo */}
          <div className={`flex-shrink-0 ${isRTL ? 'order-3' : 'order-1'}`}>
            <Logo />
          </div>

          {/* Desktop Navigation */}
          <div className={`hidden lg:flex items-center ${isRTL ? 'order-2 justify-end flex-1 mx-8' : 'order-2 justify-start flex-1 mx-8'}`}>
            <div className={`flex items-center gap-x-8`}>
              <a href="#" className="text-secondary font-medium hover:text-primary transition-colors whitespace-nowrap">
                {t('nav.home')}
              </a>
              <a href="#services" className="text-secondary font-medium hover:text-primary transition-colors whitespace-nowrap">
                {t('nav.services')}
              </a>
              <a href="#realisations" className="text-secondary font-medium hover:text-primary transition-colors whitespace-nowrap">
                {t('nav.projects')}
              </a>
              <a href="#about" className="text-secondary font-medium hover:text-primary transition-colors whitespace-nowrap">
                {t('nav.about')}
              </a>
              <a href="#partners" className="text-secondary font-medium hover:text-primary transition-colors whitespace-nowrap">
                {t('nav.partners')}
              </a>
            </div>
          </div>

          {/* Desktop Actions */}
          <div className={`hidden lg:flex items-center gap-x-6 ${isRTL ? 'order-1' : 'order-3'}`}>
            <div className="flex items-center gap-x-4">
              <a
                href="https://www.facebook.com/MAFCImr"
                className="text-secondary hover:text-primary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook size={18} />
              </a>
              <a
                href="https://www.youtube.com/@MAFCI_mr"
                className="text-secondary hover:text-primary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube size={18} />
              </a>
              <a
                href="https://www.linkedin.com/company/mafcimr/"
                className="text-secondary hover:text-primary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={18} />
              </a>
              <a
                href="https://www.tiktok.com/@mafci_mr"
                className="text-secondary hover:text-primary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTiktok size={18} />
              </a>
            </div>
            <a
              href="#contact"
              className="bg-primary text-white px-6 py-2 rounded-md hover:bg-primary-dark transition-colors whitespace-nowrap"
            >
              {t('nav.contact')}
            </a>
            <div className="relative" style={{ zIndex: 9999 }}>
              <LanguageSelector />
            </div>
          </div>

          {/* Mobile Menu Button and Language Selector */}
          <div 
            className={`lg:hidden flex items-center gap-x-4 ${isRTL ? 'order-1 flex-row-reverse' : 'order-3'}`}
            style={{ zIndex: 9999 }}
          >
            <div className="relative" style={{ zIndex: 9999 }}>
              <LanguageSelector />
            </div>
            <button
              onClick={toggleMenu}
              className="text-secondary focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="fixed inset-0" style={{ zIndex: 9998 }}>
            <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" onClick={toggleMenu} />
            <div
              className={`absolute top-[72px] w-[90vw] max-w-xs bg-white rounded-xl shadow-2xl p-6 right-4`}
            >
              <nav className={`flex flex-col gap-y-5 mb-6 ${isRTL ? 'text-right' : 'text-left'}`}>
                <a href="#" className="text-lg text-gray-800 font-medium hover:text-primary transition-colors" onClick={toggleMenu}>
                  {t('nav.home')}
                </a>
                <a href="#services" className="text-lg text-gray-800 font-medium hover:text-primary transition-colors" onClick={toggleMenu}>
                  {t('nav.services')}
                </a>
                <a href="#realisations" className="text-lg text-gray-800 font-medium hover:text-primary transition-colors" onClick={toggleMenu}>
                  {t('nav.projects')}
                </a>
                <a href="#about" className="text-lg text-gray-800 font-medium hover:text-primary transition-colors" onClick={toggleMenu}>
                  {t('nav.about')}
                </a>
                <a href="#partners" className="text-lg text-gray-800 font-medium hover:text-primary transition-colors" onClick={toggleMenu}>
                  {t('nav.partners')}
                </a>
              </nav>

              <a
                href="#contact"
                className="block w-full text-center bg-primary text-white font-semibold py-2 rounded-lg hover:bg-primary-dark transition-colors mb-4"
                onClick={toggleMenu}
              >
                {t('nav.contact')}
              </a>

              <div className="flex items-center justify-center gap-x-4">
                <a
                  href="https://www.facebook.com/MAFCImr"
                  className="text-secondary hover:text-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook size={20} />
                </a>
                <a
                  href="https://www.youtube.com/@MAFCI_mr"
                  className="text-secondary hover:text-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaYoutube size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/company/mafcimr/"
                  className="text-secondary hover:text-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin size={20} />
                </a>
                <a
                  href="https://www.tiktok.com/@mafci_mr"
                  className="text-secondary hover:text-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTiktok size={20} />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;