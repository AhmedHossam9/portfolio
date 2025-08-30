'use client';

import { motion } from 'framer-motion';
import { User, Code, Lightbulb, Users, Download } from 'lucide-react';
import { aboutData } from '@/data/portfolio';
import { fadeInLeft, fadeInRight, containerVariants, itemVariants } from '@/animations/variants';

const features = [
  {
    icon: Code,
    title: 'Full-Stack Development',
    description: 'Building complete web applications from frontend to backend with modern technologies.'
  },
  {
    icon: Lightbulb,
    title: 'Problem Solving',
    description: 'Creative solutions to complex technical challenges with innovative approaches.'
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    description: 'Working effectively in agile teams and contributing to successful project delivery.'
  },
  {
    icon: User,
    title: 'User Experience',
    description: 'Creating intuitive and engaging user interfaces that enhance user satisfaction.'
  }
];

export default function About() {
  return (
    <section id="about" className="section-padding bg-gray-50 dark:bg-gray-800/50">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </motion.h2>
          <motion.div variants={itemVariants} className="w-24 h-1 bg-primary-600 mx-auto rounded-full"></motion.div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image & Skills */}
          <motion.div
            variants={fadeInLeft}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-8"
          >
            {/* Profile Image */}
            <div className="relative">
              <div className="w-80 h-80 mx-auto rounded-full overflow-hidden shadow-2xl border-4 border-white dark:border-gray-700">
                <img 
                  src="/profile-picture.jpg" 
                  alt="Ahmed Hossam" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback to placeholder if image fails to load
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const fallback = target.parentElement?.querySelector('.fallback') as HTMLElement;
                    if (fallback) fallback.style.display = 'flex';
                  }}
                />
                {/* Fallback placeholder */}
                <div className="fallback hidden w-full h-full bg-gradient-to-br from-primary-400 to-primary-600 items-center justify-center">
                  <User size={120} className="text-white" />
                </div>
              </div>
              
              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg"
              >
                <Code size={24} className="text-white" />
              </motion.div>
              
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-green-400 rounded-full flex items-center justify-center shadow-lg"
              >
                <Lightbulb size={24} className="text-white" />
              </motion.div>
            </div>

            {/* Language Skills */}
            <div className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-600">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 text-center">Languages</h4>
              <div className="space-y-3">
                {aboutData.languages?.map((language, index) => (
                  <motion.div
                    key={language.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex justify-between items-center"
                  >
                    <span className="text-gray-700 dark:text-gray-300 font-medium">{language.name}</span>
                    <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm rounded-full">
                      {language.level}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Quick Skills */}
            <div className="flex flex-wrap justify-center gap-3">
              {['React', 'Node.js', 'TypeScript', 'Python', 'MongoDB', 'AWS'].map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="px-4 py-2 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-600"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Text & Features */}
          <motion.div
            variants={fadeInRight}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-8"
          >
            {/* About Text */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                {aboutData.title}
              </h3>
              <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                <p className="text-lg">
                  {aboutData.description}
                </p>
                {aboutData.details.map((detail, index) => (
                  <p key={index} className="text-lg">
                    {detail}
                  </p>
                ))}
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="p-6 bg-white dark:bg-gray-700 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-600"
                >
                  <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon size={24} className="text-primary-600 dark:text-primary-400" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <a
                href="/Ahmed_Hossam_CV.pdf"
                download="Ahmed_Hossam_CV.pdf"
                className="btn-primary group inline-flex items-center"
              >
                Download Resume
                <motion.div
                  className="inline-block ml-2"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Download size={20} />
                </motion.div>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
