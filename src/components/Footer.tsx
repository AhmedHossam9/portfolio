'use client';

import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { containerVariants, itemVariants } from '@/animations/variants';
import { contactData } from '@/data/portfolio';

const footerLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' }
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      
      <div className="relative z-10 container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-8"
        >
          <motion.h3 variants={itemVariants} className="text-2xl font-bold mb-4">
            <span className="text-gradient">Ahmed Hossam</span>
          </motion.h3>
          <motion.p variants={itemVariants} className="text-gray-400 max-w-md mx-auto">
            AI & Software Engineer passionate about building intelligent and scalable solutions.
          </motion.p>
        </motion.div>

        {/* Navigation Links */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-wrap justify-center gap-6 mb-8"
        >
          {footerLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              variants={itemVariants}
              whileHover={{ y: -2, color: '#0ea5e9' }}
              className="text-gray-400 hover:text-primary-400 transition-colors duration-300"
            >
              {link.name}
            </motion.a>
          ))}
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="flex justify-center space-x-6 mb-8"
        >
          <motion.a
            href={contactData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            variants={itemVariants}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300"
            title="LinkedIn"
          >
            💼
          </motion.a>
          <motion.a
            href={`mailto:${contactData.email}`}
            variants={itemVariants}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300"
            title="Email"
          >
            ✉️
          </motion.a>
        </motion.div>

        {/* Copyright */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center text-gray-500 text-sm"
        >
          <motion.p variants={itemVariants} className="flex items-center justify-center gap-2">
            © 2024 Ahmed Hossam. All rights reserved.
          </motion.p>
        </motion.div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 w-12 h-12 bg-primary-600 hover:bg-primary-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center z-50"
      >
        <ArrowUp size={20} />
      </motion.button>
    </footer>
  );
}
