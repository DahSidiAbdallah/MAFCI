import React from 'react';
import { Truck, Building, Hammer, HardHat, Scale, ShieldCheck } from 'lucide-react';
import nosservImage from '../assets/nosserv.jpg';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => (
  <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow border-t-4 border-primary">
    <div className="text-primary mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-secondary mb-3">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-20 relative overflow-hidden">
      {/* Globe-like curved background with dark blue gradient */}
      <div className="absolute inset-0 z-0">
        {/* Main background image */}
        <img 
          src={nosservImage} 
          alt="Construction background" 
          className="absolute w-full h-full object-cover opacity-40"
        />
        
        {/* Dark blue gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950 via-blue-900 to-blue-950"></div>
        
        {/* Top curved shape */}
        <svg 
          className="absolute top-0 left-0 w-full"
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1440 200"
          preserveAspectRatio="none"
        >
          <path 
            fill="white" 
            d="M0,200 Q720,0 1440,200 V0 H0 Z"
            opacity="0.05"
          ></path>
        </svg>
        
        {/* Bottom curved shape */}
        <svg 
          className="absolute bottom-0 left-0 w-full"
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1440 200"
          preserveAspectRatio="none"
        >
          <path 
            fill="white" 
            d="M0,0 Q720,200 1440,0 V200 H0 Z"
            opacity="0.05"
          ></path>
        </svg>
        
        {/* Add subtle grid patterns */}
        <div 
          className="absolute inset-0"
          style={{ 
            backgroundImage: 'linear-gradient(0deg, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
            opacity: 0.2
          }}
        ></div>
        
        {/* Add subtle dotted connections like in the screenshot */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="dotPattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                <circle cx="30" cy="30" r="1" fill="white" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dotPattern)" />
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-20">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            NOS SERVICES
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="max-w-3xl mx-auto text-white text-lg">
            MAFCI propose une gamme complète de services pour répondre à tous vos besoins en matière de construction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div data-aos="fade-up" data-aos-delay="100">
            <ServiceCard 
              icon={<Truck size={48} />} 
              title="Livraison de Béton" 
              description="Livraison rapide et fiable de béton prêt à l'emploi sur tous vos chantiers, avec une flotte moderne et un suivi en temps réel." 
            />
          </div>
          <div data-aos="fade-up" data-aos-delay="200">
            <ServiceCard  
              icon={<Building size={48} />} 
              title="Production de Ciment" 
              description="Fabrication de ciment de haute qualité répondant aux normes internationales, adapté à tous types de projets de construction." 
            />
          </div>
          <div data-aos="fade-up" data-aos-delay="300">
            <ServiceCard 
              icon={<Hammer size={48} />} 
              title="Matériaux de Construction" 
              description="Large gamme de matériaux de construction durables et performants pour tous vos besoins en construction et rénovation." 
            />
          </div>
          <div data-aos="fade-up" data-aos-delay="400">
            <ServiceCard 
              icon={<HardHat size={48} />} 
              title="Conseil Technique" 
              description="Expertise et conseils techniques pour optimiser vos projets de construction et garantir leur succès." 
            />
          </div>
          <div data-aos="fade-up" data-aos-delay="500">
            <ServiceCard 
              icon={<Scale size={48} />} 
              title="Solutions Sur Mesure" 
              description="Développement de solutions personnalisées pour répondre aux exigences spécifiques de vos projets, quelle que soit leur complexité." 
            />
          </div>
          <div data-aos="fade-up" data-aos-delay="600">
            <ServiceCard 
              icon={<ShieldCheck size={48} />} 
              title="Contrôle Qualité" 
              description="Processus rigoureux de contrôle qualité à chaque étape pour garantir l'excellence et la durabilité de nos produits." 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;