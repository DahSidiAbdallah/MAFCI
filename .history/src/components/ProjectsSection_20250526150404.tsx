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
    titleKey: "projects.tasiast.title",
    image: "https://images.pexels.com/photos/416942/pexels-photo-416942.jpeg?auto=compress&cs=tinysrgb&w=1600",
    categoryKey: "projects.category.industrial",
    locationKey: "projects.tasiast.location"
  },
  {
    id: 2,
    titleKey: "projects.hospital.title",
    image: "https://images.pexels.com/photos/668298/pexels-photo-668298.jpeg?auto=compress&cs=tinysrgb&w=1600",
    categoryKey: "projects.category.healthcare",
    locationKey: "projects.hospital.location"
  },
  {
    id: 3,
    titleKey: "projects.port.title",
    image: "https://images.pexels.com/photos/532079/pexels-photo-532079.jpeg?auto=compress&cs=tinysrgb&w=1600",
    categoryKey: "projects.category.infrastructure",
    locationKey: "projects.port.location"
  },
  {
    id: 4,
    titleKey: "projects.faculty.title",
    image: "https://images.pexels.com/photos/207691/pexels-photo-207691.jpeg?auto=compress&cs=tinysrgb&w=1600",
    categoryKey: "projects.category.education",
    locationKey: "projects.faculty.location"
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
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className={`max-w-3xl mx-auto text-gray-600 text-lg ${isRTL ? 'text-right' : 'text-left'}">
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
              <img 
                src={project.image} 
                alt={t(project.titleKey)} 
                className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div
                className={[
                  "absolute inset-0 bg-gradient-to-t from-secondary/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6",
                  isRTL ? "text-right" : "text-left"
                ].join(" ")}
              >
                <h3 className="text-xl font-bold text-white mb-2">{t(project.titleKey)}</h3>
                <p className="text-gray-200 mb-4">{t(project.locationKey)}</p>
                <div className={`flex items-center ${isRTL ? 'justify-end space-x-4 space-x-reverse' : 'justify-between'}`}>
                  <span className="bg-primary text-white text-xs px-3 py-1 rounded-full">
                    {t(project.categoryKey)}
                  </span>
                  <a 
                    href="#" 
                    className="text-white hover:text-primary transition-colors"
                    aria-label={`${t('projects.viewDetails', { project: t(project.titleKey) })}`}
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
              <div className={`absolute bottom-0 left-0 w-full bg-secondary text-white p-4 text-center transition-transform duration-300 ${activeProject === project.id ? 'transform translate-y-full' : ''}`}>
                <h3 className="font-medium">{t(project.titleKey)}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="#" 
            className={`inline-flex items-center border-2 border-secondary text-secondary px-6 py-3 rounded-md font-medium hover:bg-secondary hover:text-white transition-colors ${isRTL ? 'flex-row-reverse' : ''}`}
          >
            {t('projects.viewAll')}
            <svg className={`${isRTL ? 'mr-2' : 'ml-2'} w-4 h-4 ${isRTL ? 'transform rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;