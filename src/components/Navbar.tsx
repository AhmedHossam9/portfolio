'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '@/lib/theme-context';
import { cn } from '@/lib/utils';
import { usePageTransition } from '@/contexts/PageTransitionContext';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { navigateToSection, currentSection } = usePageTransition();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    const sectionId = href.replace('#', '');
    navigateToSection(sectionId);
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled 
          ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200/20 dark:border-gray-700/20" 
          : "bg-transparent"
      )}
    >
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ 
              scale: 1.05,
              transition: { duration: 0.3, ease: "easeOut" }
            }}
            whileTap={{ 
              scale: 0.95,
              transition: { duration: 0.1 }
            }}
            className="text-2xl font-bold text-gradient cursor-pointer"
            onClick={() => navigateToSection('home')}
          >
            
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const sectionId = item.href.replace('#', '');
              const isActive = currentSection === sectionId;
              
              return (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className={`text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300 relative group ${
                    isActive ? 'text-primary-600 dark:text-primary-400' : ''
                  }`}
                  whileHover={{ 
                    y: -3,
                    scale: 1.05,
                    transition: { duration: 0.3, ease: "easeOut" }
                  }}
                  whileTap={{ 
                    scale: 0.95,
                    y: -1,
                    transition: { duration: 0.1 }
                  }}
                >
                  {item.name}
                  <motion.span 
                    className="absolute -bottom-1 left-0 h-0.5 bg-primary-600"
                    initial={{ width: 0 }}
                    animate={{ width: isActive ? '100%' : 0 }}
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  />
                </motion.a>
              );
            })}
          </div>

          {/* Theme Toggle & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <motion.button
              onClick={toggleTheme}
              whileHover={{ 
                scale: 1.15, 
                rotate: 180,
                transition: { duration: 0.4, ease: "easeOut" }
              }}
              whileTap={{ 
                scale: 0.9,
                rotate: 90,
                transition: { duration: 0.1 }
              }}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </motion.button>

            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              whileHover={{ 
                scale: 1.1,
                rotate: isOpen ? 90 : 0,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              whileTap={{ 
                scale: 0.9,
                rotate: isOpen ? 45 : -45,
                transition: { duration: 0.1 }
              }}
              className="md:hidden p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden border-t border-gray-200/20 dark:border-gray-700/20"
            >
              <div className="py-4 space-y-2">
                {navItems.map((item) => {
                  const sectionId = item.href.replace('#', '');
                  const isActive = currentSection === sectionId;
                  
                  return (
                    <motion.a
                      key={item.name}
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(item.href);
                      }}
                      className={`block px-4 py-2 rounded-lg transition-colors duration-300 ${
                        isActive 
                          ? 'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20' 
                          : 'text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-50 dark:hover:bg-gray-800'
                      }`}
                      whileHover={{ 
                        x: 12,
                        scale: 1.02,
                        transition: { duration: 0.3, ease: "easeOut" }
                      }}
                      whileTap={{ 
                        scale: 0.98,
                        x: 6,
                        transition: { duration: 0.1 }
                      }}
                    >
                      {item.name}
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
