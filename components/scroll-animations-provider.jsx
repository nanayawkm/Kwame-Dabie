"use client";

import { useEffect } from 'react';
import { 
  setupRevealAnimations, 
  setupParallaxEffects, 
  setupSmoothScrolling,
  optimizeForMobile
} from '@/app/scroll-animations';

export default function ScrollAnimationsProvider({ children }) {
  useEffect(() => {
    // Set up all scroll-related animations and optimizations
    const cleanupReveal = setupRevealAnimations();
    const cleanupParallax = setupParallaxEffects();
    setupSmoothScrolling();
    optimizeForMobile();
    
    // Clean up event listeners on unmount
    return () => {
      cleanupReveal();
      cleanupParallax();
    };
  }, []);
  
  return children;
} 