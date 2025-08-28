import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  image: string;
  category: string;
  location: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Tasiast - Akjoujt",
    image: "https://images.pexels.com/photos/416942/pexels-photo-416942.jpeg?auto=compress&cs=tinysrgb&w=1600",
    category: "Industrial",
    location: "Akjoujt, Mauritanie"
  },
  {
    id: 2,
    title: "Hôpital Arafat - NKTT",
    image: "https://images.pexels.com/photos/668298/pexels-photo-668298.jpeg?auto=compress&cs=tinysrgb&w=1600",
    category: "Healthcare",
    location: "Nouakchott, Mauritanie"
  },
  {
    id: 3,
    title: "Port Mineralier - NDB",
    image: "https://images.pexels.com/photos/532079/pexels-photo-532079.jpeg?auto=compress&cs=tinysrgb&w=1600",
    category: "Infrastructure",
    location: "Nouadhibou, Mauritanie"
  },
  {
    id: 4,
    title: "Faculté des Sciences",
    image: "https://images.pexels.com/photos/207691/pexels-photo-207691.jpeg?auto=compress&cs=tinysrgb&w=1600",
    category: "Education",
    location: "Nouakchott, Mauritanie"
  }
];

const ProjectsSection: React.FC = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null);

  const handleProjectHover = (id: number | null) => {
    setActiveProject(id);
  };

  return (
    <section id="realisations" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
            NOS RÉALISATIONS RÉCENTES
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="max-w-3xl mx-auto text-gray-600 text-lg">
            Découvrez quelques-uns de nos projets phares réalisés avec une qualité et une expertise inégalées.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="relative overflow-hidden rounded-lg shadow-md group"
              data-aos="fade-up"
              data-aos-delay={project.id * 100}
              onMouseEnter={() => handleProjectHover(project.id)}
              onMouseLeave={() => handleProjectHover(null)}
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-200 mb-4">{project.location}</p>
                <div className="flex justify-between items-center">
                  <span className="bg-primary text-white text-xs px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                  <a 
                    href="#" 
                    className="text-white hover:text-primary transition-colors"
                    aria-label={`View ${project.title} details`}
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
              <div className={`absolute bottom-0 left-0 w-full bg-secondary text-white p-4 text-center transition-transform duration-300 ${
                activeProject === project.id ? 'transform translate-y-full' : ''
              }`}>
                <h3 className="font-medium">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="#" 
            className="inline-flex items-center border-2 border-secondary text-secondary px-6 py-3 rounded-md font-medium hover:bg-secondary hover:text-white transition-colors"
          >
            Voir tous nos projets
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;