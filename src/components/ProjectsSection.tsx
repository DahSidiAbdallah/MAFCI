import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface Project {
  id: number;
  titleKey: string;
  image: string;
  categoryKey: string;
  locationKey: string;
}

const projectsData: Project[] = [
  {
    id: 1,
    titleKey: "projects.sheraton.title",
    image: "./assets/Sheraton.jpg",
    categoryKey: "projects.category.hospitality",
    locationKey: "projects.sheraton.location"
  },
  {
    id: 2,
    titleKey: "projects.arafat.title",
    image: "./assets/Arafat.png",
    categoryKey: "projects.category.healthcare",
    locationKey: "projects.arafat.location"
  },
  {
    id: 3,
    titleKey: "projects.saheli.title",
    image: "./assets/Saheli.png",
    categoryKey: "projects.category.industrial",
    locationKey: "projects.saheli.location"
  },
  {
    id: 4,
    titleKey: "projects.mauricentre.title",
    image: "./assets/Mauricentre.png",
    categoryKey: "projects.category.hospitality",
    locationKey: "projects.mauricentre.location"
  },
  {
    id: 5,
    titleKey: "projects.port.title",
    image: "./assets/Port.png",
    categoryKey: "projects.category.infrastructure",
    locationKey: "projects.port.location"
  },
  {
    id: 6,
    titleKey: "projects.arafatMarket.title",
    image: "./assets/MARCHE ARAFAT DID.jpg",
    categoryKey: "projects.category.market",
    locationKey: "projects.arafatMarket.location"
  },
  {
    id: 7,
    titleKey: "projects.villageArtisanal.title",
    image: "./assets/Village artisanal SMCR.jpg",
    categoryKey: "projects.category.artisan",
    locationKey: "projects.villageArtisanal.location"
  },
  {
    id: 8,
    titleKey: "projects.qualificationCenter.title",
    image: "./assets/CENTRE DE QUALIFICATION ET FORMATION AUX METIERS DE LA PECHE. IWATACHIZAKI.jpg",
    categoryKey: "projects.category.education",
    locationKey: "projects.qualificationCenter.location"
  },
  {
    id: 9,
    titleKey: "projects.enaHeadquarters.title",
    image: "./assets/SIEGE ENA (COTRAM).jpg",
    categoryKey: "projects.category.headquarters",
    locationKey: "projects.enaHeadquarters.location"
  }
];

const ProjectsSection: React.FC = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.dir() === 'rtl';
  const [activeProject, setActiveProject] = useState<number | null>(null);

  const handleProjectHover = (id: number | null) => {
    setActiveProject(id);
  };

  return (
    <section id="realisations" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
            {t('projects.title')} <span className="text-primary">{t('projects.titleHighlight')}</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8" />
          <p className={`max-w-3xl mx-auto text-gray-600 text-lg ${isRTL ? 'text-right' : 'text-left'}`}>
            {t('projects.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projectsData.map((project) => (
            <div 
              key={project.id} 
              className="relative overflow-hidden rounded-lg shadow-md group"
              data-aos="fade-up"
              data-aos-delay={(project.id * 100).toString()}
              onMouseEnter={() => handleProjectHover(project.id)}
              onMouseLeave={() => handleProjectHover(null)}
            >
              <div className="relative w-full pt-[75%] overflow-hidden">
                <img 
                  src={project.image} 
                  alt={t(project.titleKey)}
                  className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div
                className={`absolute inset-0 bg-gradient-to-t from-secondary/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 ${isRTL ? "text-right" : "text-left"}`}
              >
                <h3 className="text-xl font-bold text-white mb-2">{t(project.titleKey)}</h3>
                <p className="text-gray-200 mb-4">{t(project.locationKey)}</p>
                <div className={`flex items-center ${isRTL ? 'justify-end space-x-4 space-x-reverse' : 'justify-between'}`}>
                  <span className="bg-primary text-white text-xs px-3 py-1 rounded-full">
                    {t(project.categoryKey)}
                  </span>
                  
                </div>
              </div>
              <div className={`absolute bottom-0 left-0 w-full bg-secondary text-white p-4 text-center transition-transform duration-300 ${activeProject === project.id ? 'transform translate-y-full' : ''}`}>
                <h3 className="font-medium">{t(project.titleKey)}</h3>
              </div>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
};

export default ProjectsSection;