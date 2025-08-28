import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { FaFacebook, FaTiktok, FaLinkedin } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import Logo from './Logo';
import LanguageSelector from './LanguageSelector';

const Header: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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
    <header 
      className={`fixed w-full z-40 transition-all duration-300 bg-white shadow-md ${isScrolled ? 'py-2' : 'py-4'}`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo: Takes remaining space on LTR, pushed to right on RTL */}
          <div className="flex-grow lg:flex-grow-0 lg:order-1 rtl:lg:order-3">
            <Logo />
          </div>

          {/* Desktop Navigation & Actions Container*/}
          {/* Order 2 for LTR, Order 1 for RTL to place it before logo in visual order */}
          <div className="hidden lg:flex lg:items-center lg:justify-end lg:order-2 rtl:lg:order-1 lg:flex-grow">
            {/* Navigation Links: Order 1 within this container for LTR, Order 3 for RTL */}
            <nav className={`flex items-center space-x-6 xl:space-x-8 order-1 rtl:order-3 mx-auto rtl:ml-0 rtl:mr-auto ${i18n.dir() === 'rtl' ? 'space-x-reverse' : ''}`}>
              <a href="#" className="text-secondary font-medium hover:text-primary transition-colors">{t('nav.home')}</a>
              <a href="#services" className="text-secondary font-medium hover:text-primary transition-colors">{t('nav.services')}</a>
              <a href="#realisations" className="text-secondary font-medium hover:text-primary transition-colors">{t('nav.projects')}</a>
              <a href="#about" className="text-secondary font-medium hover:text-primary transition-colors">{t('nav.about')}</a>
              <a href="#products" className="text-secondary font-medium hover:text-primary transition-colors">{t('nav.products')}</a>
            </nav>

            {/* Actions: Language, Social, Contact - Order 3 within this container for LTR, Order 1 for RTL */}
            {/* For RTL, this group will be on the far left */}
            <div className={`flex items-center space-x-4 xl:space-x-6 order-3 rtl:order-1 ml-auto rtl:ml-0 rtl:mr-auto ${i18n.dir() === 'rtl' ? 'space-x-reverse' : ''}`}>
              <LanguageSelector /> {/* Moved here for better grouping */}
              <div className="flex items-center space-x-3 xl:space-x-4">
                <a href="https://www.facebook.com/profile.php?id=100070467002288" className="text-secondary hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer"><FaFacebook size={18} /></a>
                <a href="https://www.linkedin.com/company/mafci" className="text-secondary hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer"><FaLinkedin size={18} /></a>
                <a href="https://www.tiktok.com/@mafci_mr" className="text-secondary hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer"><FaTiktok size={18} /></a>
              </div>
              <a href="#contact" className={`bg-primary text-white px-6 py-2 rounded-md hover:bg-primary-dark transition-colors whitespace-nowrap ${i18n.dir() === 'rtl' ? 'me-4' : 'ms-4'}`}>{t('nav.contact')}</a>
            </div>
          </div>

          {/* Mobile Menu Toggle & Language Selector Container */}
          {/* Order 3 for LTR (far right), Order 1 for RTL (far left, before logo) */}
          <div className="lg:hidden flex items-center space-x-2 order-3 rtl:order-1">
            {/* LanguageSelector appears first in this group for LTR, second for RTL */}
            <div className="order-1 rtl:order-2"><LanguageSelector /></div>
            {/* Menu toggle appears second for LTR, first for RTL */}
            <button 
              className="text-secondary focus:outline-none order-2 rtl:order-1"
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
            <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" onClick={toggleMenu} />
            <div className={`absolute top-4 bg-white rounded-xl shadow-2xl w-[90vw] max-w-xs p-6 z-50 ${i18n.dir() === 'rtl' ? 'left-4' : 'right-4'}`}>
              <button
                className={`absolute top-3 text-gray-500 hover:text-primary ${i18n.dir() === 'rtl' ? 'left-3' : 'right-3'}`}
                onClick={toggleMenu}
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
              {/* Nav items now respect text-alignment from parent for RTL */}
              <nav className={`flex flex-col gap-5 mt-2 mb-6 ${i18n.dir() === 'rtl' ? 'text-right' : 'text-left'}`}>
                <a href="#" className="text-lg text-gray-800 font-medium hover:text-primary transition-colors" onClick={toggleMenu}>{t('nav.home')}</a>
                <a href="#services" className="text-lg text-gray-800 font-medium hover:text-primary transition-colors" onClick={toggleMenu}>{t('nav.services')}</a>
                <a href="#realisations" className="text-lg text-gray-800 font-medium hover:text-primary transition-colors" onClick={toggleMenu}>{t('nav.projects')}</a>
                <a href="#about" className="text-lg text-gray-800 font-medium hover:text-primary transition-colors" onClick={toggleMenu}>{t('nav.about')}</a>
                <a href="#products" className="text-lg text-gray-800 font-medium hover:text-primary transition-colors" onClick={toggleMenu}>{t('nav.products')}</a>
              </nav>
              <a href="#contact" className="block w-full text-center bg-primary text-white font-semibold py-2 rounded-lg hover:bg-primary-dark transition-colors mb-4" onClick={toggleMenu}>{t('nav.contact')}</a>
              <div className="flex items-center justify-center space-x-4 mt-2">
                <a href="https://www.facebook.com/profile.php?id=100070467002288" className="text-secondary hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer"><FaFacebook size={20} /></a>
                <a href="https://www.linkedin.com/company/mafci" className="text-secondary hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer"><FaLinkedin size={20} /></a>
                <a href="https://www.tiktok.com/@mafci_mr" className="text-secondary hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer"><FaTiktok size={20} /></a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;