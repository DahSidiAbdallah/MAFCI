import React from 'react';
import { useTranslation } from 'react-i18next';

const LoadingOverlay: React.FC<{ visible: boolean }> = ({ visible }) => {
  const { t } = useTranslation();
  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-white bg-opacity-80 transition-opacity duration-500 pointer-events-none ${
        visible ? 'opacity-100' : 'opacity-0'
      }`}
      aria-live="polite"
      aria-busy={visible}
    >
      <div className="flex flex-col items-center gap-4">
        <svg className="animate-spin h-10 w-10 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
        </svg>
        <span className="text-lg font-semibold text-gray-700">{t('loading.languageSwitch', 'Changement de langue...')}</span>
      </div>
    </div>
  );
};

export default LoadingOverlay;
