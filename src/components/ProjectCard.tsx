'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Eye, ChevronDown, ChevronUp, Calendar, Clock, Star } from 'lucide-react';
import { scaleIn } from '@/animations/variants';

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    technologies: string[];
    image: string;
    github: string;
    live: string;
    featured: boolean;
    youtubeId?: string;
  };
  index: number;
  isExpanded: boolean;
  onToggleExpand: () => void;
}

export default function ProjectCard({ project, index, isExpanded, onToggleExpand }: ProjectCardProps) {
  return (
    <motion.div
      variants={scaleIn}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ 
        y: -8,
        scale: 1.02,
        transition: { duration: 0.4, ease: "easeOut" }
      }}
      whileTap={{ 
        scale: 0.98,
        y: -4,
        transition: { duration: 0.1 }
      }}
      className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 ease-out overflow-hidden border border-gray-200 dark:border-gray-700 relative"
    >
      {/* Featured Badge */}
      {project.featured && (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.1 + 0.3 }}
          className="absolute top-4 left-4 z-10 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg"
        >
          <Star size={12} className="inline mr-1" />
          Featured
        </motion.div>
      )}

      {/* Project Image with Enhanced Hover Effects */}
      <div className="relative overflow-hidden h-48 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600">
        {/* YouTube Thumbnail for X-Scanner */}
        {project.youtubeId ? (
          <img
            src={`https://img.youtube.com/vi/${project.youtubeId}/maxresdefault.jpg`}
            alt={`${project.title} preview`}
            className="w-full h-full object-cover"
            onError={(e) => {
              // Fallback to medium quality if maxresdefault fails
              const target = e.target as HTMLImageElement;
              target.src = `https://img.youtube.com/vi/${project.youtubeId}/hqdefault.jpg`;
            }}
          />
        ) : (
          /* Better Looking Placeholder for other projects */
          <div className="absolute inset-0 bg-gradient-to-br from-primary-400/10 to-purple-400/10 flex items-center justify-center">
            <div className="w-16 h-16 bg-gradient-to-br from-primary-400 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg">
              <div className="w-8 h-8 bg-white rounded-lg opacity-90"></div>
            </div>
          </div>
        )}
        
        {/* Enhanced Hover Overlay */}
        {(project.title === "Metro Digital Application" || project.title === "X-Scanner for Web Vulnerabilities") && (
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            className="absolute inset-0 bg-gradient-to-br from-black/70 to-primary-900/70 flex items-center justify-center"
          >
            <motion.a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-gray-800 hover:bg-primary-500 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <ExternalLink size={24} />
            </motion.a>
          </motion.div>
        )}

        {/* Floating Elements */}
        <motion.div
          animate={{ 
            y: [0, -10, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute top-4 right-4 w-2 h-2 bg-primary-400 rounded-full opacity-60"
        />
        <motion.div
          animate={{ 
            y: [0, 15, 0],
            rotate: [0, -5, 0]
          }}
          transition={{ 
            duration: 3, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-6 left-6 w-3 h-3 bg-purple-400 rounded-full opacity-60"
        />
      </div>

      {/* Project Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300 flex-1">
            {project.title}
          </h3>
          
          {/* Expand/Collapse Button */}
          <motion.button
            onClick={onToggleExpand}
            whileHover={{ scale: 1.1, rotate: 180 }}
            whileTap={{ scale: 0.9 }}
            className="ml-2 p-1 text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300"
          >
            {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </motion.button>
        </div>
        
        <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
          {project.description}
        </p>

        {/* Technologies with Enhanced Styling */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech, techIndex) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: techIndex * 0.05 }}
              whileHover={{ 
                scale: 1.1, 
                y: -2,
                transition: { duration: 0.2 }
              }}
              className="px-3 py-1 bg-gradient-to-r from-primary-100 to-primary-200 dark:from-primary-900/40 dark:to-primary-800/40 text-primary-700 dark:text-primary-300 text-xs font-medium rounded-full border border-primary-200 dark:border-primary-700/30 hover:shadow-md transition-all duration-300 cursor-default"
            >
              {tech}
            </motion.span>
          ))}
        </div>

        {/* Expandable Content */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                {/* Project Stats */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <Calendar size={16} />
                    <span>2024</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <Clock size={16} />
                    <span>3 months</span>
                  </div>
                </div>
                
                {/* Additional Details */}
                <div className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
                  <p>This project demonstrates advanced problem-solving skills and modern development practices.</p>
                  <p>Key achievements include performance optimization and user experience improvements.</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Action Button with Enhanced Interactions */}
        {(project.title === "Metro Digital Application" || project.title === "X-Scanner for Web Vulnerabilities") && (
          <div className="mt-6">
            <motion.a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ 
                scale: 1.05, 
                y: -3,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              whileTap={{ 
                scale: 0.95,
                y: -1,
                transition: { duration: 0.1 }
              }}
              className="w-full bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white text-center py-3 px-4 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:shadow-primary-600/25"
            >
              <motion.div
                whileHover={{ scale: 1.2, rotate: 5 }}
                transition={{ duration: 0.2 }}
              >
                <Eye size={16} />
              </motion.div>
              Watch Demo
            </motion.a>
          </div>
        )}
      </div>

      {/* Enhanced Decorative Elements */}
      <div className="absolute top-0 right-0 w-0 h-0 border-l-[60px] border-l-transparent border-t-[60px] border-t-primary-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Bottom Glow Effect */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        style={{ transformOrigin: 'left' }}
      />
    </motion.div>
  );
}
