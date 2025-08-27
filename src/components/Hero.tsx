'use client';

import { motion } from 'framer-motion';
import { ChevronDown, ArrowRight, Download } from 'lucide-react';
import { heroData } from '@/data/portfolio';
import { fadeInUp, slideInFromBottom, slideInFromTop } from '@/animations/variants';
import { usePageTransition } from '@/contexts/PageTransitionContext';

export default function Hero() {
  const { navigateToSection } = usePageTransition();

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%2060%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40 dark:opacity-20"></div>
        
        {/* Floating Elements */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-40 right-20 w-40 h-40 bg-gradient-to-r from-blue-400/10 to-cyan-400/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-40 left-1/4 w-24 h-24 bg-gradient-to-r from-blue-400/10 to-indigo-400/10 rounded-full blur-3xl"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center px-4 sm:px-6 lg:px-8">
        {/* Name - Large and Prominent */}
        <motion.div
          variants={slideInFromTop}
          initial="initial"
          animate="animate"
          className="mb-4"
        >
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
            <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
              {heroData.title}
            </span>
          </h1>
        </motion.div>

        {/* Professional Title */}
        <motion.div
          variants={slideInFromTop}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.1 }}
          className="mb-6"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl text-blue-200 dark:text-blue-300 font-medium mb-4">
            {heroData.subtitle}
          </h2>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <p className="text-lg sm:text-xl text-gray-200 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {heroData.description}
          </p>
        </motion.div>

        <motion.div
          variants={slideInFromBottom}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          {/* View My Projects Button - Vibrant Blue */}
          <motion.button
            whileHover={{ 
              scale: 1.05, 
              y: -4,
              transition: { 
                duration: 0.3, 
                ease: "easeOut"
              }
            }}
            whileTap={{ 
              scale: 0.98,
              y: -2,
              transition: { duration: 0.1 }
            }}
            onClick={() => navigateToSection('projects')}
            className="px-8 py-4 bg-sky-500 hover:bg-sky-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3 group"
          >
            <span>{heroData.ctaPrimary}</span>
            <motion.div
              className="inline-block"
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
            >
              <ArrowRight size={20} />
            </motion.div>
          </motion.button>
          
          {/* Get In Touch Button - Outlined Blue */}
          <motion.button
            whileHover={{ 
              scale: 1.05, 
              y: -4,
              transition: { 
                duration: 0.3, 
                ease: "easeOut"
              }
            }}
            whileTap={{ 
              scale: 0.98,
              y: -2,
              transition: { duration: 0.1 }
            }}
            onClick={() => navigateToSection('contact')}
            className="px-8 py-4 bg-transparent border-2 border-sky-400 text-sky-300 hover:bg-sky-400/10 font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3 group"
          >
            <span>{heroData.ctaSecondary}</span>
            <motion.div
              className="inline-block"
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
            >
              <ArrowRight size={20} />
            </motion.div>
          </motion.button>

          {/* Download CV Button - Vibrant Green */}
          <motion.a
            href="/Ahmed_Hossam_CV.pdf"
            download="Ahmed_Hossam_CV.pdf"
            whileHover={{ 
              scale: 1.05, 
              y: -4,
              transition: { 
                duration: 0.3, 
                ease: "easeOut"
              }
            }}
            whileTap={{ 
              scale: 0.98,
              y: -2,
              transition: { duration: 0.1 }
            }}
            className="px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-sky-100 font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3 group cursor-pointer"
          >
            <span>Download CV</span>
            <motion.div
              className="inline-block"
              whileHover={{ y: 2 }}
              transition={{ duration: 0.2 }}
            >
              <Download size={20} />
            </motion.div>
          </motion.a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-8"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{ 
              scale: 1.2, 
              y: 0,
              transition: { duration: 0.3, ease: "easeOut" }
            }}
            whileTap={{ scale: 0.9 }}
            className="text-blue-300 cursor-pointer p-2 rounded-full hover:bg-blue-900/30 transition-all duration-300 inline-block"
            onClick={() => navigateToSection('about')}
          >
            <ChevronDown size={24} />
          </motion.div>
        </motion.div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900 to-transparent"></div>
    </section>
  );
}
