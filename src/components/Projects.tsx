'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projectsData } from '@/data/portfolio';
import ProjectCard from './ProjectCard';
import { containerVariants, itemVariants } from '@/animations/variants';
import { Filter, Search, X } from 'lucide-react';

export default function Projects() {
  const [selectedTechnologies, setSelectedTechnologies] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedProject, setExpandedProject] = useState<string | null>(null);

  // Get all unique technologies from projects
  const allTechnologies = useMemo(() => {
    const techs = new Set<string>();
    projectsData.forEach(project => {
      project.technologies.forEach(tech => techs.add(tech));
    });
    return Array.from(techs).sort();
  }, []);

  // Filter projects based on search and selected technologies
  const filteredProjects = useMemo(() => {
    return projectsData.filter(project => {
      const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          project.description.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesTechnologies = selectedTechnologies.length === 0 ||
                                 selectedTechnologies.some(tech => 
                                   project.technologies.includes(tech)
                                 );
      
      return matchesSearch && matchesTechnologies;
    });
  }, [searchQuery, selectedTechnologies]);

  const toggleTechnology = (tech: string) => {
    setSelectedTechnologies(prev => 
      prev.includes(tech) 
        ? prev.filter(t => t !== tech)
        : [...prev, tech]
    );
  };

  const clearFilters = () => {
    setSelectedTechnologies([]);
    setSearchQuery('');
  };

  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </motion.h2>
          <motion.div variants={itemVariants} className="w-24 h-1 bg-primary-600 mx-auto rounded-full mb-4"></motion.div>
          <motion.p variants={itemVariants} className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are some of the projects I've worked on. Each one represents a unique challenge and solution.
          </motion.p>
        </motion.div>

        {/* Interactive Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          {/* Search Bar */}
          <div className="relative max-w-md mx-auto mb-6">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
            />
          </div>

          {/* Technology Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            {allTechnologies.map((tech) => (
              <motion.button
                key={tech}
                onClick={() => toggleTechnology(tech)}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${
                  selectedTechnologies.includes(tech)
                    ? 'bg-primary-600 text-white shadow-lg shadow-primary-600/30'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-primary-100 dark:hover:bg-primary-900/30 hover:text-primary-700 dark:hover:text-primary-300'
                }`}
              >
                {tech}
              </motion.button>
            ))}
          </div>

          {/* Clear Filters */}
          {(selectedTechnologies.length > 0 || searchQuery) && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              onClick={clearFilters}
              className="flex items-center gap-2 mx-auto px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300"
            >
              <X size={16} />
              Clear Filters
            </motion.button>
          )}
        </motion.div>

        {/* Results Count */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center mb-8"
        >
          <span className="text-gray-600 dark:text-gray-400">
            Showing {filteredProjects.length} of {projectsData.length} projects
          </span>
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          {filteredProjects.length > 0 ? (
            <motion.div
              key={`${searchQuery}-${selectedTechnologies.join(',')}`}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project, index) => (
                <motion.div key={project.title} variants={itemVariants}>
                  <ProjectCard 
                    project={project} 
                    index={index}
                    isExpanded={expandedProject === project.title}
                    onToggleExpand={() => setExpandedProject(
                      expandedProject === project.title ? null : project.title
                    )}
                  />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-16"
            >
              <div className="text-gray-400 dark:text-gray-500 mb-4">
                <Filter size={64} className="mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-600 dark:text-gray-400 mb-2">
                No projects found
              </h3>
              <p className="text-gray-500 dark:text-gray-500">
                Try adjusting your search or filter criteria
              </p>
            </motion.div>
          )}
        </AnimatePresence>


      </div>
    </section>
  );
}
