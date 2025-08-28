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
    <section id="services" className="py-20 relative overflow-hidden">
      {/* Blue gradient background */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-900 opacity-90"
        style={{ 
          backgroundSize: '100% 100%',
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'100%25\' height=\'100%25\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cdefs%3E%3Cpattern id=\'grid\' width=\'50\' height=\'50\' patternUnits=\'userSpaceOnUse\'%3E%3Cpath d=\'M 50 0 L 0 0 0 50\' fill=\'none\' stroke=\'rgba(255, 255, 255, 0.05)\' stroke-width=\'1\'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width=\'100%25\' height=\'100%25\' fill=\'url(%23grid)\'/%3E%3C/svg%3E")',
          zIndex: -1
        }}
      ></div>
      
      {/* Construction pattern overlay */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{ 
          backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'80\' height=\'80\' viewBox=\'0 0 80 80\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.1\'%3E%3Cpath d=\'M0 0h40v40H0V0zm40 40h40v40H40V40zm0-40h2l-2 2V0zm0 4l4-4h2l-6 6V4zm0 4l8-8h2L40 10V8zm0 4L52 0h2L40 14v-2zm0 4L56 0h2L40 18v-2zm0 4L60 0h2L40 22v-2zm0 4L64 0h2L40 26v-2zm0 4L68 0h2L40 30v-2zm0 4L72 0h2L40 34v-2zm0 4L76 0h2L40 38v-2zm0 4L80 0v2L42 40h-2zm4 0L80 4v2L46 40h-2zm4 0L80 8v2L50 40h-2zm4 0l28-28v2L54 40h-2zm4 0l24-24v2L58 40h-2zm4 0l20-20v2L62 40h-2zm4 0l16-16v2L66 40h-2zm4 0l12-12v2L70 40h-2zm4 0l8-8v2l-6 6h-2zm4 0l4-4v2l-2 2h-2z\'/%3E%3C/g%3E%3C/svg%3E")'
        }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
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