import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import { Project } from '../types';

interface ProjectsProps {
  projects: Project[];
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  const [filter, setFilter] = useState<string>('all');
  const [showAll, setShowAll] = useState<boolean>(false);
  
  const allTechnologies = Array.from(
    new Set(projects.flatMap(project => project.technologies))
  );
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.technologies.includes(filter));

  const displayedProjects = showAll 
    ? filteredProjects 
    : filteredProjects.slice(0, 3);

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">My Projects</h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
          A showcase of my recent work, personal projects, and explorations. Click on a project to learn more about it.
        </p>
        
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          <button 
            className={`px-4 py-2 rounded-full text-sm ${
              filter === 'all' 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
            onClick={() => setFilter('all')}
          >
            All
          </button>
          
          {allTechnologies.map((tech, index) => (
            <button 
              key={index}
              className={`px-4 py-2 rounded-full text-sm ${
                filter === tech 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
              onClick={() => setFilter(tech)}
            >
              {tech}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        
        {filteredProjects.length === 0 ? (
          <p className="text-center text-gray-500 dark:text-gray-400 mt-8">
            No projects found with the selected technology.
          </p>
        ) : filteredProjects.length > 3 && (
          <div className="flex justify-center mt-12">
            <button 
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? 'Show Less' : `Show More (${filteredProjects.length - 3} more)`}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;