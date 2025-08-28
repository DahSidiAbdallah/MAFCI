import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';

const ContactSection: React.FC = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.dir() === 'rtl';
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      // EmailJS configuration - replace these with your actual EmailJS credentials
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_mafci';
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_contact';
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';
      
      // Template parameters for EmailJS
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: 'info@mafci.mr',
        reply_to: formData.email,
      };

      // Send email using EmailJS
      const result = await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      if (result.status === 200) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Email sending error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

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

  <div className={`grid grid-cols-1 lg:grid-cols-3 gap-8`}>
          <div className="lg:col-span-1" data-aos={isRTL ? "fade-left" : "fade-right"}>
            <div className={`bg-secondary text-white rounded-lg shadow-md p-8 ${isRTL ? 'text-right' : 'text-left'}`}>
              <h3 className="text-2xl font-bold mb-6">{t('contact.infoTitle')}</h3>
              
              <div className="space-y-6">
                <div className="flex items-start" style={{ flexDirection: 'row' }}>
                  <div
                    style={{ order: isRTL ? 2 : 1, marginLeft: isRTL ? 16 : 0, marginRight: isRTL ? 0 : 16 }}
                    className="bg-primary rounded-full p-3"
                  >
                    <Phone size={20} />
                  </div>
                  <div style={{ order: isRTL ? 1 : 2, textAlign: isRTL ? 'right' : 'left' }}>
                    <h4 className="font-medium mb-1">{t('contact.phone')}</h4>
                    <p dir="ltr">{t('contact.phone.value')}</p>
                    <p dir="ltr">{t('contact.phone.value2')}</p>
                  </div>
                </div>
                
                <div className="flex items-start" style={{ flexDirection: 'row' }}>
                  <div
                    style={{ order: isRTL ? 2 : 1, marginLeft: isRTL ? 16 : 0, marginRight: isRTL ? 0 : 16 }}
                    className="bg-primary rounded-full p-3"
                  >
                    <Mail size={20} />
                  </div>
                  <div style={{ order: isRTL ? 1 : 2, textAlign: isRTL ? 'right' : 'left' }}>
                    <h4 className="font-medium mb-1">{t('contact.email')}</h4>
                    <p>info@mafci.mr</p>
                  </div>
                </div>
                
                <div className="flex items-start" style={{ flexDirection: 'row' }}>
                  <div
                    style={{ order: isRTL ? 2 : 1, marginLeft: isRTL ? 16 : 0, marginRight: isRTL ? 0 : 16 }}
                    className="bg-primary rounded-full p-3"
                  >
                    <MapPin size={20} />
                  </div>
                  <div style={{ order: isRTL ? 1 : 2, textAlign: isRTL ? 'right' : 'left' }} className="space-y-4">
                    <h4 className="font-medium mb-2">{t('contact.locations.title')}</h4>

                    <button
                      type="button"
                      aria-label={t('contact.locations.hq.title')}
                      className="w-full text-left cursor-pointer hover:text-primary transition-colors p-2 rounded-md hover:bg-gray-50 border border-transparent hover:border-primary/20"
                      onClick={() => window.open('https://maps.google.com/?q=18.099830093254496,-15.98168431763217&z=18', '_blank')}
                    >
                      <p className="font-medium text-primary mb-1 flex items-center">
                        <MapPin size={16} className={isRTL ? 'ml-2' : 'mr-2'} />
                        {t('contact.locations.hq.title')}
                      </p>
                      <p className={isRTL ? 'text-sm pr-6' : 'text-sm pl-6'}>{t('contact.locations.hq.address')}</p>
                    </button>

                    <button
                      type="button"
                      aria-label={t('contact.locations.port.title')}
                      className="w-full text-left cursor-pointer hover:text-primary transition-colors p-2 rounded-md hover:bg-gray-50 border border-transparent hover:border-primary/20"
                      onClick={() => window.open('https://maps.google.com/?q=17.992597330621802,-16.010241707472147&z=18', '_blank')}
                    >
                      <p className="font-medium text-primary mb-1 flex items-center">
                        <MapPin size={16} className={isRTL ? 'ml-2' : 'mr-2'} />
                        {t('contact.locations.port.title')}
                      </p>
                      <p className={isRTL ? 'text-sm pr-6' : 'text-sm pl-6'}>{t('contact.locations.port.address')}</p>
                    </button>

                    <button
                      type="button"
                      aria-label={t('contact.locations.bpe.title')}
                      className="w-full text-left cursor-pointer hover:text-primary transition-colors p-2 rounded-md hover:bg-gray-50 border border-transparent hover:border-primary/20"
                      onClick={() => window.open('https://maps.google.com/?q=18.091170813480574,-16.019838222844477&z=18', '_blank')}
                    >
                      <p className="font-medium text-primary mb-1 flex items-center">
                        <MapPin size={16} className={isRTL ? 'ml-2' : 'mr-2'} />
                        {t('contact.locations.bpe.title')}
                      </p>
                      <p className={isRTL ? 'text-sm pr-6' : 'text-sm pl-6'}>{t('contact.locations.bpe.address')}</p>
                    </button>

                    <p className="text-xs text-gray-400 mt-2">{t('contact.locations.clickToMap')}</p>
                  </div>
                </div>
                
                <div className="flex items-start" style={{ flexDirection: 'row' }}>
                  <div
                    style={{ order: isRTL ? 2 : 1, marginLeft: isRTL ? 16 : 0, marginRight: isRTL ? 0 : 16 }}
                    className="bg-primary rounded-full p-3"
                  >
                    <Clock size={20} />
                  </div>
                  <div style={{ order: isRTL ? 1 : 2, textAlign: isRTL ? 'right' : 'left' }}>
                    <h4 className="font-medium mb-1">{t('contact.hours.title')}</h4>
                    <p>{t('contact.hours.weekdays')}</p>
                    <p>{t('contact.hours.friday')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-2" data-aos={isRTL ? "fade-right" : "fade-left"}>
            <form onSubmit={handleSubmit} className={`bg-white rounded-lg shadow-md p-8 ${isRTL ? 'text-right' : 'text-left'}`}>
              <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 ${isRTL ? 'md:flex-row-reverse' : ''}`}>
                <div className={isRTL ? 'md:order-2' : ''}>
                  <label htmlFor="name" className={`block text-sm font-medium text-gray-700 mb-2 ${isRTL ? 'text-right' : 'text-left'}`}>
                    {t('contact.form.name')}
                  </label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
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
                    value={formData.email}
                    onChange={handleInputChange}
                    required
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
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
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
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5} 
                  className={`w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary ${isRTL ? 'text-right' : 'text-left'}`}
                  placeholder={t('contact.form.messagePlaceholder')}
                />
              </div>
              
              <button 
                type="submit" 
                disabled={isSubmitting}
                className={`bg-primary text-white px-8 py-3 rounded-md font-medium hover:bg-primary-dark transition-colors w-full ${isRTL ? 'md:float-right' : 'md:w-auto'} disabled:opacity-50 disabled:cursor-not-allowed`}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Envoi en cours...
                  </span>
                ) : (
                  t('contact.form.send')
                )}
              </button>
              
              {submitStatus === 'success' && (
                <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-md">
                  <p className="text-green-800">{t('contact.form.success')}</p>
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-md">
                  <p className="text-red-800">{t('contact.form.error')}</p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;