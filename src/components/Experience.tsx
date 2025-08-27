'use client';

import { motion } from 'framer-motion';
import { Briefcase, Calendar, ArrowRight } from 'lucide-react';
import { experienceData } from '@/data/portfolio';
import { containerVariants, itemVariants, fadeInLeft, fadeInRight } from '@/animations/variants';

export default function Experience() {
  return (
    <section id="experience" className="section-padding bg-white dark:bg-gray-900">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Work Experience
          </motion.h2>
          <motion.div variants={itemVariants} className="w-20 h-1 bg-primary-600 mx-auto rounded-full mb-4"></motion.div>
          <motion.p variants={itemVariants} className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My professional journey in technology and finance, from data science to systems administration.
          </motion.p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experienceData.map((experience, index) => (
            <motion.div
              key={experience.title}
              variants={index % 2 === 0 ? fadeInLeft : fadeInRight}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.2 }}
              className="relative mb-8"
            >
              {/* Experience Card */}
              <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
                
                {/* Header Section */}
                <div className="p-6 border-b border-gray-100 dark:border-gray-700">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                        {experience.title}
                      </h3>
                      <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400 text-sm">
                        <div className="flex items-center gap-2">
                          <Briefcase size={16} className="text-primary-600" />
                          <span className="font-medium">{experience.company}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar size={16} className="text-primary-600" />
                          <span>{experience.period}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Description */}
                <div className="p-6 pb-4">
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                    {experience.description}
                  </p>
                  
                  {/* Achievements Section */}
                  <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4 border border-gray-200 dark:border-gray-600">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3 text-sm uppercase tracking-wide">
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {experience.achievements.map((achievement, achievementIndex) => (
                        <motion.li
                          key={achievementIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: achievementIndex * 0.1 }}
                          className="flex items-start gap-3 text-gray-600 dark:text-gray-400"
                        >
                          <ArrowRight size={14} className="text-primary-600 mt-1 flex-shrink-0" />
                          <span className="text-sm leading-relaxed">{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 border border-gray-200 dark:border-gray-700 max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Ready for New Challenges
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6">
              I'm always looking for new opportunities to grow and contribute to innovative projects. 
              Let's discuss how we can work together!
            </p>
            
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary group"
            >
              Get In Touch
              <ArrowRight className="ml-2 inline-block group-hover:translate-x-1 transition-transform duration-200" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
