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
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={nosservImage} 
          alt="Construction background" 
          className="absolute w-full h-full object-cover"
        />
        {/* Main gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-800/85 to-blue-700/80"></div>
        
        {/* Wave overlay using SVG */}
        <div className="absolute inset-0 z-10 opacity-20">
          <svg 
            className="absolute bottom-0 left-0 w-full" 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 1440 320"
          >
            <path 
              fill="url(#blueGradient)" 
              fillOpacity="1" 
              d="M0,96L48,112C96,128,192,160,288,170.7C384,181,480,171,576,144C672,117,768,75,864,80C960,85,1056,139,1152,138.7C1248,139,1344,85,1392,58.7L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
            <defs>
              <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#1e40af" />
                <stop offset="50%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#60a5fa" />
              </linearGradient>
            </defs>
          </svg>
          
          {/* Second wave with different shape and opacity */}
          <svg 
            className="absolute bottom-0 left-0 w-full" 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 1440 320"
            style={{ transform: 'translateY(-50px)' }}
          >
            <path 
              fill="url(#lightBlueGradient)" 
              fillOpacity="0.8" 
              d="M0,160L40,165.3C80,171,160,181,240,176C320,171,400,149,480,154.7C560,160,640,192,720,197.3C800,203,880,181,960,165.3C1040,149,1120,139,1200,133.3C1280,128,1360,128,1400,128L1440,128L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
            ></path>
            <defs>
              <linearGradient id="lightBlueGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#60a5fa" />
                <stop offset="50%" stopColor="#93c5fd" />
                <stop offset="100%" stopColor="#bfdbfe" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        
        {/* Add a subtle grid pattern on top */}
        <div 
          className="absolute inset-0"
          style={{ 
            backgroundImage: 'linear-gradient(0deg, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
            opacity: 0.3,
            zIndex: 5
          }}
        ></div>
      </div>

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