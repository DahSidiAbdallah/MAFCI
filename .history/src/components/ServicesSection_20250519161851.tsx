import React from 'react';
import { Truck, Building, Hammer, HardHat, Scale, ShieldCheck } from 'lucide-react';

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
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
            NOS SERVICES
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="max-w-3xl mx-auto text-gray-600 text-lg">
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