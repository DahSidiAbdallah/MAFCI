import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const ContactSection: React.FC = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.dir() === 'rtl';

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
            {t('contact.title')} <span className="text-primary">{t('contact.titleHighlight')}</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className={`max-w-3xl mx-auto text-gray-600 text-lg ${isRTL ? 'text-right' : 'text-left'}`}>
            {t('contact.subtitle')}
          </p>
        </div>

        <div className={`grid grid-cols-1 lg:grid-cols-3 gap-8 ${isRTL ? 'lg:flex-row-reverse' : ''}`}>
          <div className="lg:col-span-1" data-aos={isRTL ? "fade-left" : "fade-right"}>
            <div className={`bg-secondary text-white rounded-lg shadow-md p-8 ${isRTL ? 'text-right' : 'text-left'}`}>
              <h3 className="text-2xl font-bold mb-6">{t('contact.infoTitle')}</h3>
              
              <div className="space-y-6">
                <div className={`flex items-start ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <div className={`${isRTL ? 'ml-4' : 'mr-4'} bg-primary rounded-full p-3`}>
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">{t('contact.phone')}</h4>
                    <p dir="ltr">{t('contact.phone.value')}</p>
                    <p dir="ltr">{t('contact.phone.value2')}</p>
                  </div>
                </div>
                
                <div className={`flex items-start ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <div className={`${isRTL ? 'ml-4' : 'mr-4'} bg-primary rounded-full p-3`}>
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">{t('contact.email')}</h4>
                    <p>{t('contact.email.value')}</p>
                  </div>
                </div>
                
                <div className={`flex items-start ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <div className={`${isRTL ? 'ml-4' : 'mr-4'} bg-primary rounded-full p-3`}>
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">{t('contact.address')}</h4>
                    <p>{t('contact.address.value')}</p>
                    <p>{t('contact.address.country')}</p>
                  </div>
                </div>
                
                <div className={`flex items-start ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <div className={`${isRTL ? 'ml-4' : 'mr-4'} bg-primary rounded-full p-3`}>
                    <Clock size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">{t('contact.hours.title')}</h4>
                    <p>{t('contact.hours.weekdays')}</p>
                    <p>{t('contact.hours.friday')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-2" data-aos={isRTL ? "fade-right" : "fade-left"}>
            <form className={`bg-white rounded-lg shadow-md p-8 ${isRTL ? 'text-right' : 'text-left'}`}>
              <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 ${isRTL ? 'md:flex-row-reverse' : ''}`}>
                <div className={isRTL ? 'md:order-2' : ''}>
                  <label htmlFor="name" className={`block text-sm font-medium text-gray-700 mb-2 ${isRTL ? 'text-right' : 'text-left'}`}>
                    {t('contact.form.name')}
                  </label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name"
                    className={`w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary ${isRTL ? 'text-right' : 'text-left'}`}
                    placeholder={t('contact.form.namePlaceholder')}
                  />
                </div>
                <div className={isRTL ? 'md:order-1' : ''}>
                  <label htmlFor="email" className={`block text-sm font-medium text-gray-700 mb-2 ${isRTL ? 'text-right' : 'text-left'}`}>
                    {t('contact.form.email')}
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    className={`w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary ${isRTL ? 'text-right' : 'text-left'}`}
                    placeholder={t('contact.form.emailPlaceholder')}
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className={`block text-sm font-medium text-gray-700 mb-2 ${isRTL ? 'text-right' : 'text-left'}`}>
                  {t('contact.form.subject')}
                </label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject"
                  className={`w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary ${isRTL ? 'text-right' : 'text-left'}`}
                  placeholder={t('contact.form.subjectPlaceholder')}
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className={`block text-sm font-medium text-gray-700 mb-2 ${isRTL ? 'text-right' : 'text-left'}`}>
                  {t('contact.form.message')}
                </label>
                <textarea 
                  id="message" 
                  name="message"
                  rows={5} 
                  className={`w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary ${isRTL ? 'text-right' : 'text-left'}`}
                  placeholder={t('contact.form.messagePlaceholder')}
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className={`bg-primary text-white px-8 py-3 rounded-md font-medium hover:bg-primary-dark transition-colors w-full ${isRTL ? 'md:float-right' : 'md:w-auto'}`}
              >
                {t('contact.form.send')}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;