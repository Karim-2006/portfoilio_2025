import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../../data/content';
import SectionHeader from '../common/SectionHeader';
import Card from '../ui/Card';
import { FaGithub, FaExternalLinkAlt, FaTimes } from 'react-icons/fa';

const ProjectModal = ({ project, isOpen, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-primary/90 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-4xl glass-card overflow-hidden"
          >
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 text-white/50 hover:text-white z-10 p-2 glass-card"
            >
              <FaTimes size={24} />
            </button>
            
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="aspect-video lg:aspect-auto">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 lg:p-12">
                <h3 className="text-3xl font-bold mb-4 gradient-text">{project.title}</h3>
                <p className="text-white/70 text-lg mb-8 leading-relaxed">
                  {project.description}
                  {" "}This project demonstrates advanced implementation of modern web technologies, 
                  focusing on performance, accessibility, and exceptional user experience.
                </p>
                <div className="flex flex-wrap gap-3 mb-10">
                  {project.tech.map(tag => (
                    <span key={tag} className="px-4 py-1 bg-white/5 border border-white/10 rounded-full text-accent-cyan text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-6">
                  <a href={project.github} className="btn-primary flex items-center gap-2">
                    <FaGithub /> Source Code
                  </a>
                  <a href={project.demo} className="btn-secondary flex items-center gap-2">
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

const ProjectCard = ({ project, index, onClick }) => {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const box = card.getBoundingClientRect();
    const x = e.clientX - box.left;
    const y = e.clientY - box.top;
    const centerX = box.width / 2;
    const centerY = box.height / 2;
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;
    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
      style={{
        perspective: 1000,
      }}
    >
      <motion.div
        animate={{ rotateX: rotate.x, rotateY: rotate.y }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={() => onClick(project)}
        className="cursor-pointer"
      >
        <Card className="p-0 overflow-hidden group">
          <div className="relative aspect-video overflow-hidden">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="px-6 py-2 glass-card text-white font-medium">View Project</span>
            </div>
          </div>
          <div className="p-6">
            <h3 className="text-2xl font-bold mb-3 group-hover:text-accent-cyan transition-colors">
              {project.title}
            </h3>
            <p className="text-white/60 mb-6 line-clamp-3">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tag) => (
                <span key={tag} className="text-xs font-mono px-3 py-1 bg-white/5 border border-white/10 rounded-full text-accent-blue">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </Card>
      </motion.div>
    </motion.div>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects">
      <SectionHeader 
        title="Featured Projects" 
        subtitle="A selection of my recent work, ranging from complex web applications to experimental UI experiments."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard 
            key={project.id} 
            project={project} 
            index={index} 
            onClick={setSelectedProject}
          />
        ))}
      </div>

      <ProjectModal 
        project={selectedProject} 
        isOpen={!!selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </section>
  );
};

export default Projects;
