import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
            CONTACTEZ-NOUS
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="max-w-3xl mx-auto text-gray-600 text-lg">
            Nous sommes à votre disposition pour répondre à toutes vos questions et discuter de vos projets.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1" data-aos="fade-right">
            <div className="bg-secondary text-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold mb-6">Information de Contact</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="mr-4 bg-primary rounded-full p-3">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Téléphone</h4>
                    <p>+222 49 91 00 61</p>
                    <p>+222 36 61 77 67</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 bg-primary rounded-full p-3">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Email</h4>
                    <p>info@mafci.mr</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 bg-primary rounded-full p-3">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Adresse</h4>
                    <p>Clinique Kissi, Nouakchott</p>
                    <p>Mauritanie</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 bg-primary rounded-full p-3">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Heures d'Ouverture</h4>
                    <p>Lundi - Jeudi: 8:00 - 16:00</p>
                    <p>Vendredi: 8:00 - 12:00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-2" data-aos="fade-left">
            <form className="bg-white rounded-lg shadow-md p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nom
                  </label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Votre email"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Sujet
                </label>
                <input 
                  type="text" 
                  id="subject" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Sujet de votre message"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea 
                  id="message" 
                  rows={5} 
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Votre message"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="bg-primary text-white px-8 py-3 rounded-md font-medium hover:bg-primary-dark transition-colors w-full md:w-auto"
              >
                Envoyer le Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;