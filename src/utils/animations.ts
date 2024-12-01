import { Variants } from 'framer-motion';

// Default animation configuration with no animations
export const defaultAnimationConfig = {
  initial: "visible",
  animate: "visible"
};

// Base transition settings
const baseTransition = {
  duration: 0
};

// Simple fade in animation (instant)
export const fadeIn: Variants = {
  visible: { 
    opacity: 1
  }
};

// No animation fade up
export const fadeInUp: Variants = {
  visible: { 
    opacity: 1,
    y: 0
  }
};

// No animation container
export const staggerContainer: Variants = {
  visible: {
    opacity: 1
  }
};

// No animation item
export const staggerItem: Variants = {
  visible: {
    opacity: 1,
    y: 0
  }
};

// No scale animation
export const scaleUp: Variants = {
  visible: { 
    opacity: 1,
    scale: 1
  }
};

// Hover animations only
export const hoverScale = {
  whileHover: { 
    scale: 1.02,
    transition: { duration: 0.2 }
  },
  whileTap: { 
    scale: 0.98 
  }
};

// No scroll reveal animation
export const scrollReveal: Variants = {
  visible: {
    opacity: 1,
    y: 0
  }
};

// Create animation with no delay
export const withDelay = (animation: Variants): Variants => ({
  ...animation,
  visible: {
    ...animation.visible,
    transition: baseTransition
  }
});

// Utility to check if reduced motion is preferred
export const prefersReducedMotion = true;

// Get animation settings with no animations
export const getAnimationSettings = (variants: Variants): Variants => ({
  visible: { 
    opacity: 1,
    transition: { duration: 0 }
  }
});