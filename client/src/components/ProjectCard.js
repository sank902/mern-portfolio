import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

export default function ProjectCard({ project }) {
  return (
    <div className="h-full bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-56 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-gray-300 mb-4">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((tech, index) => (
            <span 
              key={index}
              className="px-3 py-1 bg-gray-700 rounded-full text-sm text-gray-200"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex space-x-4">
          <a 
            href={project.github} 
            className="flex items-center text-gray-400 hover:text-white transition-colors"
          >
            <FiGithub className="mr-2" /> Code
          </a>
          <a 
            href={project.live} 
            className="flex items-center text-gray-400 hover:text-white transition-colors"
          >
            <FiExternalLink className="mr-2" /> Live Demo
          </a>
        </div>
      </div>
    </div>
  );
}