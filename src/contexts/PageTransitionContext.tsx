'use client';

import React, { createContext, useContext, useState, useCallback, ReactNode, useEffect } from 'react';

interface PageTransitionContextType {
  isTransitioning: boolean;
  currentSection: string;
  navigateToSection: (sectionId: string) => void;
  previousSection: string;
  sectionOpacity: number;
}

const PageTransitionContext = createContext<PageTransitionContextType | undefined>(undefined);

export const usePageTransition = () => {
  const context = useContext(PageTransitionContext);
  if (context === undefined) {
    throw new Error('usePageTransition must be used within a PageTransitionProvider');
  }
  return context;
};

interface PageTransitionProviderProps {
  children: ReactNode;
}

export const PageTransitionProvider: React.FC<PageTransitionProviderProps> = ({ children }) => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [currentSection, setCurrentSection] = useState('home');
  const [previousSection, setPreviousSection] = useState('home');
  const [sectionOpacity, setSectionOpacity] = useState(1);

  // Track scroll position for smooth transitions
  useEffect(() => {
    const handleScroll = () => {
      // Update current section based on scroll position
      const sections = ['home', 'about', 'experience', 'projects', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 100; // Offset for navbar
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && element.offsetTop <= scrollPosition) {
          if (sections[i] !== currentSection) {
            setPreviousSection(currentSection);
            setCurrentSection(sections[i]);
          }
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentSection]);

  const navigateToSection = useCallback((sectionId: string) => {
    if (isTransitioning || sectionId === currentSection) return;
    
    setIsTransitioning(true);
    setPreviousSection(currentSection);
    
    // Fade out current section
    setSectionOpacity(0.3);
    
    // Add a small delay for the transition effect
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        // Smooth scroll to the section
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest'
        });
        
        // Update current section
        setCurrentSection(sectionId);
        
        // Fade in new section
        setTimeout(() => {
          setSectionOpacity(1);
        }, 200);
        
        // Reset transition state after animation
        setTimeout(() => {
          setIsTransitioning(false);
        }, 600); // Reduced duration for cleaner feel
      } else {
        setIsTransitioning(false);
        setSectionOpacity(1);
      }
    }, 100); // Reduced delay for more responsive feel
  }, [isTransitioning, currentSection]);

  const value = {
    isTransitioning,
    currentSection,
    navigateToSection,
    previousSection,
    sectionOpacity
  };

  return (
    <PageTransitionContext.Provider value={value}>
      {children}
    </PageTransitionContext.Provider>
  );
};
