import { useState, useCallback } from 'react';

export const usePageTransition = () => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [currentSection, setCurrentSection] = useState('home');

  const navigateToSection = useCallback((sectionId: string) => {
    if (isTransitioning || sectionId === currentSection) return;
    
    setIsTransitioning(true);
    
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
        
        // Reset transition state after animation
        setTimeout(() => {
          setIsTransitioning(false);
        }, 500);
      } else {
        setIsTransitioning(false);
      }
    }, 200);
  }, [isTransitioning, currentSection]);

  return {
    isTransitioning,
    currentSection,
    navigateToSection
  };
};
