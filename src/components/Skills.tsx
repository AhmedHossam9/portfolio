'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { skillsData } from '@/data/portfolio';
import { containerVariants, itemVariants } from '@/animations/variants';

const categories = [
  { id: 'all', name: 'All Skills', color: 'from-blue-500 to-purple-500' },
  ...skillsData.categories.map((cat, index) => ({
    id: cat.name.toLowerCase().replace(/\s+/g, '-'),
    name: cat.name,
    color: [
      'from-blue-500 to-cyan-500',
      'from-green-500 to-emerald-500',
      'from-orange-500 to-red-500',
      'from-purple-500 to-pink-500',
      'from-gray-500 to-slate-500'
    ][index % 5]
  }))
];

const getSkillIcon = (iconName: string) => {
  // Placeholder icons - in a real app, you'd import actual icons
  const iconMap: { [key: string]: string } = {
    react: '⚛️',
    vue: '💚',
    typescript: '🔷',
    tailwind: '🎨',
    nextjs: '⚡',
    nodejs: '🟢',
    python: '🐍',
    express: '🚀',
    fastapi: '⚡',
    mongodb: '🍃',
    postgresql: '🐘',
    redis: '🔴',
    docker: '🐳',
    aws: '☁️',
    git: '📝',
    figma: '🎨',
    jest: '',
    webpack: '📦',
    flask: '🔥',
    laravel: '🔴',
    tensorflow: '🤖',
    keras: '🧠',
    flutter: '🦋',
    dart: '💙',
    cpp: '🔵',
    sql: '🗄️',
    html: '🌐',
    css: '🎨',
    javascript: '🟡',
    firebase: '🔥',
    'android studio': '🤖',
    unix: '🐧',
    'visual studio code': '💻',
    'iso 8583': '💳',
    'sql scripting': '📝',
    'financial transaction switching': '💱',
    leadership: '👑',
    teamwork: '🤝',
    communication: '💬',
    'problem-solving': '🧩',
    'time management': '⏰'
  };
  
  return iconMap[iconName.toLowerCase()] || '💻';
};

const getLevelColor = (level: string) => {
  const colors = {
    beginner: 'from-yellow-400 to-orange-400',
    intermediate: 'from-blue-400 to-cyan-400',
    advanced: 'from-purple-400 to-pink-400',
    expert: 'from-green-400 to-emerald-400'
  };
  return colors[level as keyof typeof colors] || colors.beginner;
};

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const allSkills = skillsData.categories.flatMap(cat => 
    cat.skills.map(skillName => ({ 
      name: skillName, 
      category: cat.name.toLowerCase().replace(/\s+/g, '-') 
    }))
  );
  
  const filteredSkills = selectedCategory === 'all' 
    ? allSkills 
    : allSkills.filter(skill => skill.category === selectedCategory);

  return (
    <section id="skills" className="section-padding bg-gray-50 dark:bg-gray-800/50">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Technologies
          </motion.h2>
          <motion.div variants={itemVariants} className="w-24 h-1 bg-primary-600 mx-auto rounded-full mb-4"></motion.div>
          <motion.p variants={itemVariants} className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and expertise levels.
          </motion.p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              variants={itemVariants}
              onClick={() => setSelectedCategory(category.id)}
              whileHover={{ 
                scale: 1.08, 
                y: -4,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              whileTap={{ 
                scale: 0.95,
                y: -2,
                transition: { duration: 0.1 }
              }}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-500 ease-out ${
                selectedCategory === category.id
                  ? `bg-gradient-to-r ${category.color} text-white shadow-xl transform scale-105`
                  : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600 border border-gray-200 dark:border-gray-600 hover:shadow-lg hover:-translate-y-1'
              }`}
            >
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
        >
          <AnimatePresence mode="wait">
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={`${skill.category}-${skill.name}`}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                transition={{ delay: index * 0.05 }}
                whileHover={{ 
                  scale: 1.15, 
                  y: -8,
                  transition: { duration: 0.4, ease: "easeOut" }
                }}
                whileTap={{ 
                  scale: 0.95,
                  y: -4,
                  transition: { duration: 0.1 }
                }}
                className="group text-center cursor-pointer"
              >
                <div className="relative">
                  {/* Skill Icon */}
                  <motion.div 
                    className="w-20 h-20 mx-auto mb-3 bg-white dark:bg-gray-700 rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-500 ease-out flex items-center justify-center text-3xl border border-gray-200 dark:border-gray-600"
                    whileHover={{ 
                      rotate: 360,
                      transition: { duration: 0.6, ease: "easeOut" }
                    }}
                  >
                    {getSkillIcon(skill.name)}
                  </motion.div>
                </div>
                
                {/* Skill Name */}
                <motion.h3 
                  className="text-sm font-medium text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  {skill.name}
                </motion.h3>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-600 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Always Learning & Growing
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              Technology evolves rapidly, and I'm committed to staying current with the latest trends and best practices. 
              I regularly explore new frameworks, tools, and methodologies to enhance my development capabilities.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
