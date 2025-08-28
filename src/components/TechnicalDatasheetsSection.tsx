import React from 'react';
import { useTranslation } from 'react-i18next';

const TechnicalDatasheetsSection: React.FC = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.dir() === 'rtl';

  const datasheets = [
    {
      title: t('datasheets.betonC30'),
      file: isRTL ? './assets/BETON-C30-ar.pdf' : './assets/BETON-C30.pdf',
      image: 'https://dummyimage.com/150x150/cccccc/000000&text=Beton+C30',
    },
    {
      title: t('datasheets.betonC25'),
      file: isRTL ? './assets/BETON-C25-ar.pdf' : './assets/BETON-C25.pdf',
      image: 'https://dummyimage.com/150x150/cccccc/000000&text=Beton+C25',
    },
    {
      title: t('datasheets.betonC20'),
      file: isRTL ? './assets/BETON-C20-ar.pdf' : './assets/BETON-C20.pdf',
      image: 'https://dummyimage.com/150x150/cccccc/000000&text=Beton+C20',
    },
    {
      title: t('datasheets.betonC15'),
      file: isRTL ? './assets/BETON-C15-ar.pdf' : './assets/BETON-C15.pdf',
      image: 'https://dummyimage.com/150x150/cccccc/000000&text=Beton+C15',
    },
    {
      title: t('datasheets.cemI42_5R_SR'),
      file: isRTL ? './assets/CEM-I-42.5R-SR-ar.pdf' : './assets/CEM I 42.5R-SR.pdf',
      image: './assets/SR.png',
    },
    {
      title: t('datasheets.cemI52_5N_PM_ES'),
      file: isRTL ? './assets/CEM-I-52.5N-PM-ES-ar.pdf' : './assets/CEM I 52.5N PM-ES.pdf',
      image: 'https://dummyimage.com/150x150/cccccc/000000&text=CEM+I+52.5N+PM+ES',
    },
    {
      title: t('datasheets.cemIIA_L42_5R'),
      file: isRTL ? './assets/CEM-II-A-L-42.5R-ar.pdf' : './assets/CEM II  A-L 42.5R.pdf',
      image: './assets/42.5 R.png',
    },
    {
      title: t('datasheets.cemIIB_L32_5R'),
      file: isRTL ? './assets/CEM-II-B-L-32.5R-ar.pdf' : './assets/CEM II  B-L 32.5R.pdf',
      image: './assets/32.5 R.png',
    },
    {
      title: t('datasheets.cemIII_A42_5N'),
      file: isRTL ? './assets/CEM-III-A-42.5N-ar.pdf' : './assets/CEM III A 42.5N.pdf',
      image: 'https://dummyimage.com/150x150/cccccc/000000&text=CEM+III+A+42.5N',
    },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
          {t('datasheets.title')}
        </h2>
        <p className="text-gray-600 text-center mb-6">
          Voici les fiches techniques de quelques produits proposés par MAFCI.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {datasheets.map((sheet, index) => (
            <div
              key={index}
              className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow text-center"
            >
              <img
                src={sheet.image}
                alt={sheet.title}
                className="w-full h-32 object-contain rounded-md mb-4 transition-transform duration-300 hover:scale-105"
              />
              <h3 className="text-xl font-semibold text-primary mb-4">{sheet.title}</h3>
              <a
                href={sheet.file}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 underline hover:text-primary"
              >
                {t('datasheets.download')}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnicalDatasheetsSection;
