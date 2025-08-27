'use client';

import { motion } from 'framer-motion';
import { usePageTransition } from '@/contexts/PageTransitionContext';
import { ReactNode, useEffect, useState } from 'react';

interface SectionWrapperProps {
  children: ReactNode;
  sectionId: string;
  className?: string;
}

export default function SectionWrapper({ children, sectionId, className = '' }: SectionWrapperProps) {
  const { currentSection, isTransitioning, sectionOpacity } = usePageTransition();
  const [hasAnimated, setHasAnimated] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (currentSection === sectionId && !hasAnimated) {
      setHasAnimated(true);
      setIsVisible(true);
    } else if (currentSection === sectionId && hasAnimated) {
      // Re-trigger animation when navigating back to this section
      setIsVisible(false);
      setTimeout(() => setIsVisible(true), 100);
    }
  }, [currentSection, sectionId, hasAnimated]);

  const variants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.1
      }
    }
  };

  // Apply opacity effect during transitions
  const opacity = currentSection === sectionId ? sectionOpacity : 1;

  return (
    <motion.div
      id={sectionId}
      className={className}
      variants={variants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      exit="hidden"
      style={{ opacity }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
