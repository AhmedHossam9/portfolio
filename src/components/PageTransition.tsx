'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { usePageTransition } from '@/contexts/PageTransitionContext';

export default function PageTransition() {
  const { isTransitioning } = usePageTransition();

  return (
    <AnimatePresence>
      {isTransitioning && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed inset-0 z-[9999] pointer-events-none"
        >
          {/* Simple fade overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-primary-600"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
