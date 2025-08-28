import React from 'react';
import { Facebook, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import Logo from './Logo';
import FooterLogo from '../assets/MAFCI footer.png';


const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="mb-6">
              <img src={FooterLogo} alt="MAFCI Logo" className="w-22 h-22" />
            </div>
            <p className="text-gray-300 mb-6">
              Leader dans le marché mauritanien du ciment et du béton prêt à l'emploi depuis plus de 10 ans.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-secondary-light hover:bg-primary p-2 rounded-full transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="bg-secondary-light hover:bg-primary p-2 rounded-full transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="bg-secondary-light hover:bg-primary p-2 rounded-full transition-colors">
                <Instagram size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6 relative">
              <span className="after:content-[''] after:absolute after:left-0 after:bottom-[-10px] after:w-12 after:h-1 after:bg-primary">
                Pages
              </span>
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Accueil
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-white transition-colors">
                  À Propos De Nous
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-white transition-colors">
                  Nos Services
                </a>
              </li>
              <li>
                <a href="#products" className="text-gray-300 hover:text-white transition-colors">
                  Nos Produits
                </a>
              </li>
              <li>
                <a href="#realisations" className="text-gray-300 hover:text-white transition-colors">
                  Nos Réalisations
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6 relative">
              <span className="after:content-[''] after:absolute after:left-0 after:bottom-[-10px] after:w-12 after:h-1 after:bg-primary">
                Nos Produits
              </span>
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Béton
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Ciments
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Matériaux de Construction
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Solutions Techniques
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6 relative">
              <span className="after:content-[''] after:absolute after:left-0 after:bottom-[-10px] after:w-12 after:h-1 after:bg-primary">
                Contact
              </span>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone size={18} className="mr-3 mt-1 text-primary" />
                <span className="text-gray-300">+222 49 91 00 61</span>
              </li>
              <li className="flex items-start">
                <Mail size={18} className="mr-3 mt-1 text-primary" />
                <span className="text-gray-300">info@mafci.com</span>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="mr-3 mt-1 text-primary" />
                <span className="text-gray-300">Ilot K, Nouakchott, Mauritanie</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-secondary-light pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-center md:text-left mb-4 md:mb-0">
              © {new Date().getFullYear()} MAFCI Mauritanie. Tous droits réservés.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Mentions Légales
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Politique de Confidentialité
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;