import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSelector: React.FC = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="fixed top-4 right-4 z-50 flex space-x-2">
      <button
        onClick={() => changeLanguage('fr')}
        className={`px-3 py-1 rounded-md text-sm font-medium 
                    ${i18n.language === 'fr' 
                      ? 'bg-primary text-white' 
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
      >
        FR
      </button>
      <button
        onClick={() => changeLanguage('ar')}
        className={`px-3 py-1 rounded-md text-sm font-medium 
                    ${i18n.language === 'ar' 
                      ? 'bg-primary text-white' 
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
      >
        AR
      </button>
    </div>
  );
};

export default LanguageSelector; 