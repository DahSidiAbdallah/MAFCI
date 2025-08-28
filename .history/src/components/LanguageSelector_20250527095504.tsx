import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

const LanguageSelector: React.FC = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-full hover:bg-primary/10 transition-colors duration-200 text-secondary hover:text-primary"
        aria-label="Select language"
      >
        <Globe size={24} strokeWidth={2} />
      </button>
      {isOpen && (
        <div 
        className={`absolute mt-2 w-40 bg-white dark:bg-gray-800 rounded-md shadow-lg overflow-hidden z-20 
          transform
          ${i18n.dir() === 'rtl' ? 'left-0 -translate-x-full' : 'right-0'}`}
          >
          <button
            onClick={() => changeLanguage('fr')}
            className={`w-full text-left rtl:text-right px-4 py-2 text-sm font-medium 
                        ${i18n.language === 'fr' 
                          ? 'bg-primary text-white' 
                          : 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700'}`}
          >
            Français
          </button>
          <button
            onClick={() => changeLanguage('ar')}
            className={`w-full text-left rtl:text-right px-4 py-2 text-sm font-medium 
                        ${i18n.language === 'ar' 
                          ? 'bg-primary text-white' 
                          : 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700'}`}
          >
            العربية
          </button>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector; 