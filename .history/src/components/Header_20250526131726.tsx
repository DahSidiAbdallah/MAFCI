import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { FaFacebook, FaTiktok, FaLinkedin } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import Logo from './Logo';
import LanguageSelector from './LanguageSelector';

const Header: React.FC = () => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 bg-white shadow-md ${
        isScrolled ? 'py-2' : 'py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Logo />

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <a href="#" className="text-secondary font-medium hover:text-primary transition-colors">
              {t('nav.home')}
            </a>
            <a href="#services" className="text-secondary font-medium hover:text-primary transition-colors">
              {t('nav.services')}
            </a>
            <a href="#realisations" className="text-secondary font-medium hover:text-primary transition-colors">
              {t('nav.projects')}
            </a>
            <a href="#about" className="text-secondary font-medium hover:text-primary transition-colors">
              {t('nav.about')}
            </a>
            <a href="#products" className="text-secondary font-medium hover:text-primary transition-colors">
              {t('nav.products')}
            </a>
            <div className="flex items-center space-x-4 xl:space-x-6">
              <div className="flex items-center space-x-3 xl:space-x-4">
                <a href="https://www.facebook.com/profile.php?id=100070467002288" className="text-secondary hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">
                  <FaFacebook size={18} />
                </a>
                <a href="https://www.linkedin.com/company/mafci" className="text-secondary hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin size={18} />
                </a>
                <a href="https://www.tiktok.com/@mafci_mr" className="text-secondary hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">
                  <FaTiktok size={18} />
                </a>
              </div>
              <a href="#contact" className="bg-primary text-white px-6 py-2 rounded-md hover:bg-primary-dark transition-colors">
                {t('nav.contact')}
              </a>
              <LanguageSelector />
            </div>
          </nav>

          {/* Mobile menu button & Language Selector */}
          <div className="lg:hidden flex items-center space-x-2">
            <LanguageSelector />
            <button 
              className="text-secondary focus:outline-none"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="fixed inset-0 z-50">
            {/* Blurred background */}
            <div
              className="absolute inset-0 bg-black/30 backdrop-blur-sm"
              onClick={toggleMenu}
            />
            {/* Popup menu in top right */}
            <div className="absolute top-4 right-4 rtl:right-auto rtl:left-4 bg-white rounded-xl shadow-2xl w-[90vw] max-w-xs p-6 z-10">
              {/* Close button */}
              <button
                className="absolute top-3 right-3 rtl:right-auto rtl:left-3 text-gray-500 hover:text-primary"
                onClick={toggleMenu}
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
              {/* Menu items */}
              <nav className="flex flex-col gap-5 mt-2 mb-6 text-right rtl:text-left">
                <a
                  href="#"
                  className="text-lg text-gray-800 font-medium hover:text-primary transition-colors"
                  onClick={toggleMenu}
                >
                  {t('nav.home')}
                </a>
                <a
                  href="#services"
                  className="text-lg text-gray-800 font-medium hover:text-primary transition-colors"
                  onClick={toggleMenu}
                >
                  {t('nav.services')}
                </a>
                <a
                  href="#realisations"
                  className="text-lg text-gray-800 font-medium hover:text-primary transition-colors"
                  onClick={toggleMenu}
                >
                  {t('nav.projects')}
                </a>
                <a
                  href="#about"
                  className="text-lg text-gray-800 font-medium hover:text-primary transition-colors"
                  onClick={toggleMenu}
                >
                  {t('nav.about')}
                </a>
                <a
                  href="#products"
                  className="text-lg text-gray-800 font-medium hover:text-primary transition-colors"
                  onClick={toggleMenu}
                >
                  {t('nav.products')}
                </a>
              </nav>
              {/* Contact button */}
              <a
                href="#contact"
                className="block w-full text-center bg-primary text-white font-semibold py-2 rounded-lg hover:bg-primary-dark transition-colors mb-4"
                onClick={toggleMenu}
              >
                {t('nav.contact')}
              </a>
              {/* Social icons */}
              <div className="flex items-center justify-center space-x-4 mt-2">
                <a href="https://www.facebook.com/profile.php?id=100070467002288" className="text-secondary hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">
                  <FaFacebook size={20} />
                </a>
                <a href="https://www.linkedin.com/company/mafci" className="text-secondary hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin size={20} />
                </a>
                <a href="https://www.tiktok.com/@mafci_mr" className="text-secondary hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">
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