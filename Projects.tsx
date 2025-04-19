import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';

const projectCategories = ['All', 'Web Design', 'Mobile App', 'Branding'];

const projects = [
  {
    id: 1,
    title: 'E-commerce Redesign',
    category: 'Web Design',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Complete redesign of an e-commerce platform focusing on improved user experience and conversion rate optimization.',
    link: '#'
  },
  {
    id: 2,
    title: 'Banking Mobile App',
    category: 'Mobile App',
    image: 'https://images.pexels.com/photos/6173856/pexels-photo-6173856.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'User-friendly mobile banking application designed with a focus on security and ease of use.',
    link: '#'
  },
  {
    id: 3,
    title: 'Studio Rebrand',
    category: 'Branding',
    image: 'https://images.pexels.com/photos/4792733/pexels-photo-4792733.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Complete brand identity redesign for a creative studio, including logo, color palette, and style guide.',
    link: '#'
  },
  {
    id: 4,
    title: 'Travel Blog Platform',
    category: 'Web Design',
    image: 'https://images.pexels.com/photos/7936464/pexels-photo-7936464.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Responsive blog platform designed for travel enthusiasts, with a focus on visual storytelling.',
    link: '#'
  },
  {
    id: 5,
    title: 'Fitness Tracker App',
    category: 'Mobile App',
    image: 'https://images.pexels.com/photos/3912368/pexels-photo-3912368.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Health and fitness tracking application with intuitive data visualization and progress tracking.',
    link: '#'
  },
  {
    id: 6,
    title: 'Restaurant Identity',
    category: 'Branding',
    image: 'https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Brand identity design for an upscale restaurant, including menus, signage, and digital presence.',
    link: '#'
  }
];

const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">My Projects</h2>
          <div className="w-20 h-1 bg-purple-700 dark:bg-purple-500 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            A selection of my recent work in UI/UX design and development.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {projectCategories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full transition-colors duration-300 ${
                activeCategory === category
                  ? 'bg-purple-700 text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-purple-100 dark:hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <div 
              key={project.id}
              className="group bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2 animate-fadeIn"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative overflow-hidden" style={{ height: '240px' }}>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <a 
                    href={project.link} 
                    className="text-white flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project <ExternalLink size={16} />
                  </a>
                </div>
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 text-xs font-medium bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300 rounded-full mb-2">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="#" 
            className="inline-block px-6 py-3 border-2 border-purple-700 dark:border-purple-500 text-purple-700 dark:text-purple-400 hover:bg-purple-50 dark:hover:bg-gray-800 rounded-full font-medium transition-colors duration-300"
          >
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;