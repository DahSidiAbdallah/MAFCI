import React, { useState, useEffect } from 'react';
import { Menu, X, Facebook, Linkedin, Instagram } from 'lucide-react';
import Logo from './Logo';

const Header: React.FC = () => {
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
        <Logo 
        height={70}
        />

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#" className="text-secondary font-medium hover:text-primary transition-colors">
              Accueil
            </a>
            <a href="#services" className="text-secondary font-medium hover:text-primary transition-colors">
              Nos Services
            </a>
            <a href="#realisations" className="text-secondary font-medium hover:text-primary transition-colors">
              Nos Réalisations
            </a>
            <a href="#about" className="text-secondary font-medium hover:text-primary transition-colors">
              À Propos
            </a>
            <a href="#products" className="text-secondary font-medium hover:text-primary transition-colors">
              Nos Produits
            </a>
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-4">
                <a href="#" className="text-secondary hover:text-primary transition-colors">
                  <Facebook size={18} />
                </a>
                <a href="#" className="text-secondary hover:text-primary transition-colors">
                  <Linkedin size={18} />
                </a>
                <a href="#" className="text-secondary hover:text-primary transition-colors">
                  <Instagram size={18} />
                </a>
              </div>
              <a href="#contact" className="bg-primary text-white px-6 py-2 rounded-md hover:bg-primary-dark transition-colors">
                Contact
              </a>
            </div>
          </nav>

          {/* Mobile menu button */}
          <button 
            className="lg:hidden text-secondary focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 py-4 bg-white rounded-lg shadow-lg">
            <nav className="space-y-4">
              <a 
                href="#" 
                className="block px-4 py-2 text-secondary hover:bg-gray-100 hover:text-primary"
                onClick={toggleMenu}
              >
                Accueil
              </a>
              <a 
                href="#services" 
                className="block px-4 py-2 text-secondary hover:bg-gray-100 hover:text-primary"
                onClick={toggleMenu}
              >
                Nos Services
              </a>
              <a 
                href="#realisations" 
                className="block px-4 py-2 text-secondary hover:bg-gray-100 hover:text-primary"
                onClick={toggleMenu}
              >
                Nos Réalisations
              </a>
              <a 
                href="#about" 
                className="block px-4 py-2 text-secondary hover:bg-gray-100 hover:text-primary"
                onClick={toggleMenu}
              >
                À Propos
              </a>
              <a 
                href="#products" 
                className="block px-4 py-2 text-secondary hover:bg-gray-100 hover:text-primary"
                onClick={toggleMenu}
              >
                Nos Produits
              </a>
              <a 
                href="#contact" 
                className="block px-4 py-2 text-secondary hover:bg-gray-100 hover:text-primary"
                onClick={toggleMenu}
              >
                Contact
              </a>
            </nav>

            {/* Mobile social links */}
            <div className="mt-6 px-4 py-4 border-t border-gray-200">
              <div className="flex items-center justify-center space-x-4">
                <a href="#" className="text-secondary hover:text-primary transition-colors">
                  <Facebook size={20} />
                </a>
                <a href="#" className="text-secondary hover:text-primary transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="text-secondary hover:text-primary transition-colors">
                  <Instagram size={20} />
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