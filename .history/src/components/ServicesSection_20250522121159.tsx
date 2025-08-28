import React from 'react';
import { Truck, Building, Hammer, HardHat, Scale, ShieldCheck } from 'lucide-react';
import nosservImage from '../assets/nosserv.jpg';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, delay }) => {
  return (
    <div 
      className="group relative bg-white/90 backdrop-blur-sm rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl shadow-lg border border-white/10"
      data-aos="fade-up" 
      data-aos-delay={delay}
    >
      {/* Top accent bar with gradient */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-primary-light to-blue-500"></div>
      
      {/* Icon with glowing effect on hover */}
      <div className="relative mt-8 mb-4 flex justify-center">
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary to-blue-600 rounded-full blur opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
          <div className="relative flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary/10 to-blue-700/10 text-primary rounded-full p-3 group-hover:text-white group-hover:bg-primary transition-all duration-300">
            {icon}
          </div>
        </div>
      </div>
      
      {/* Content */}
      <div className="px-6 pb-6">
        <h3 className="text-xl font-bold text-secondary text-center mb-4 group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-600 text-center">
          {description}
        </p>
        
        {/* Read more button (visible on hover) */}
        <div className="mt-6 text-center transform translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
          <a href="#" className="inline-flex items-center text-primary font-medium hover:text-primary-dark">
            En savoir plus
            <svg className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: <Truck size={28} />,
      title: "Livraison de Béton",
      description: "Livraison rapide et fiable de béton prêt à l'emploi sur tous vos chantiers, avec une flotte moderne et un suivi en temps réel.",
      delay: 100
    },
    {
      icon: <Building size={28} />,
      title: "Production de Ciment",
      description: "Fabrication de ciment de haute qualité répondant aux normes internationales, adapté à tous types de projets de construction.",
      delay: 200
    },
    {
      icon: <Hammer size={28} />,
      title: "Matériaux de Construction",
      description: "Large gamme de matériaux de construction durables et performants pour tous vos besoins en construction et rénovation.",
      delay: 300
    },
    {
      icon: <HardHat size={28} />,
      title: "Conseil Technique",
      description: "Expertise et conseils techniques pour optimiser vos projets de construction et garantir leur succès.",
      delay: 400
    },
    {
      icon: <Scale size={28} />,
      title: "Solutions Sur Mesure",
      description: "Développement de solutions personnalisées pour répondre aux exigences spécifiques de vos projets, quelle que soit leur complexité.",
      delay: 500
    },
    {
      icon: <ShieldCheck size={28} />,
      title: "Contrôle Qualité",
      description: "Processus rigoureux de contrôle qualité à chaque étape pour garantir l'excellence et la durabilité de nos produits.",
      delay: 600
    }
  ];

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
        <div className="text-center mb-16">
          {/* Decorative element above title */}
          <div className="inline-block mb-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-1 bg-primary rounded-full"></div>
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <div className="w-2 h-2 bg-primary rounded-full"></div>
            </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4" data-aos="fade-up">
            NOS <span className="text-primary">SERVICES</span>
          </h2>
          
          <p className="max-w-3xl mx-auto text-gray-200 text-lg" data-aos="fade-up" data-aos-delay="100">
            MAFCI propose une gamme complète de services pour répondre à tous vos besoins en matière de construction.
          </p>
        </div>

        {/* Services grid with improved layout and spacing */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon} 
              title={service.title} 
              description={service.description}
              delay={service.delay}
            />
          ))}
        </div>
        
        {/* Bottom CTA */}
        <div className="mt-16 text-center" data-aos="fade-up" data-aos-delay="700">
          <a 
            href="#contact" 
            className="inline-flex items-center px-8 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary-dark transition-colors shadow-lg hover:shadow-primary/30"
          >
            Demander un devis gratuit
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;