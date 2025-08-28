import React from 'react';
import { Building, UserCheck, Award, TrendingUp } from 'lucide-react';

// Import your new images from the assets folder
import ImageAcc1 from '../assets/acc-1.jpg'; // Updated to your filename
import ImageM1 from '../assets/m1.jpg';       // Updated to your filename
import PresidentImage from '../assets/mohamed_abdallahi_zeine_540.jpg'; // Import the president's image

interface StatsCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
}

const StatsCard: React.FC<StatsCardProps> = ({ icon, title, value }) => (
  <div className="bg-white p-6 rounded-lg shadow-md flex items-center hover:shadow-lg transition-shadow">
    <div className="mr-4 text-primary">
      {icon}
    </div>
    <div>
      <h3 className="text-3xl font-bold text-secondary">{value}</h3>
      <p className="text-gray-600">{title}</p>
    </div>
  </div>
);

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
            BIENVENUE À MAFCI
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="max-w-3xl mx-auto text-gray-600 text-lg">
            Leader dans le marché mauritanien du ciment et du béton prêt à l'emploi, 
            nous combinons expertise technique et qualité supérieure pour répondre à tous vos projets de construction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div data-aos="fade-right" data-aos-delay="100">
            <div className="grid grid-cols-2 gap-4 h-full">
              <img 
                src={ImageAcc1}
                alt="Description de l'image acc-1"
                className="rounded-lg shadow-md h-full object-cover"
              />
              <img 
                src={ImageM1}
                alt="Description de l'image m1"
                className="rounded-lg shadow-md h-full object-cover"
              />
            </div>
          </div>
          <div className="flex flex-col justify-center" data-aos="fade-left" data-aos-delay="200">
            <h3 className="text-2xl font-bold text-secondary mb-4">Notre Entreprise</h3>
            <p className="text-gray-700 mb-4">
              MAFCI est l'un des leaders du marché mauritanien du Ciment et du Béton Prêt à l'emploi.
            </p>
            <p className="text-gray-700 mb-4">
              L'usine de Mafci est équipée de deux broyeurs, trois silos et deux lignes d'ensachage, 
              permettant une capacité de production de 400.000 tonnes / an.
            </p>
            <p className="text-gray-700 mb-6">
              MAFCI compte plus de 150 employés répartis entre les activités ciment et matériaux.
              MAFCI est certifiée ISO 9001.
            </p>
            <a 
              href="#contact" 
              className="inline-flex items-center text-primary font-medium hover:text-primary-dark transition-colors"
            >
              En savoir plus
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </a>
          </div>
        </div>

        {/* Presidential Citation Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-16" data-aos="fade-up">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/3 flex justify-center">
              <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-primary shadow-lg">
                <img 
                  src={PresidentImage} 
                  alt="Président de MAFCI" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="md:w-2/3">
             
            <blockquote className="text-xl italic text-gray-700 mb-4">
                <span className="text-2xl text-primary">"</span>Notre mission chez MAFCI est de contribuer au développement de la Mauritanie à travers des produits de qualité supérieure et des pratiques durables. Nous nous engageons à servir nos clients avec excellence et à bâtir l'avenir de notre nation, un projet à la fois.<span className="text-2xl text-primary">"</span>
              </blockquote>
              
              <div className="text-right">
                <p className="font-bold text-secondary text-lg">Mohamed Abdallahi Zein</p>
                <p className="text-gray-600">Président Directeur Général, MAFCI</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div data-aos="fade-up" data-aos-delay="100">
            <StatsCard 
              icon={<Building size={40} />} 
              value="400K+" 
              title="Tonnes de production annuelle" 
            />
          </div>
          <div data-aos="fade-up" data-aos-delay="200">
            <StatsCard 
              icon={<UserCheck size={40} />} 
              value="150+" 
              title="Employés qualifiés" 
            />
          </div>
          <div data-aos="fade-up" data-aos-delay="300">
            <StatsCard 
              icon={<Award size={40} />} 
              value="ISO 9001" 
              title="Certification qualité" 
            />
          </div>
          <div data-aos="fade-up" data-aos-delay="400">
            <StatsCard 
              icon={<TrendingUp size={40} />} 
              value="#1" 
              title="Leader du marché" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;