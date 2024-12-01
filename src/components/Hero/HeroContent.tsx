import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, defaultAnimationConfig } from '../../utils/animations';
import AnimatedText from '../common/AnimatedText';

interface HeroContentProps {
  title: string;
  subtitle: string;
  description: string;
}

const HeroContent: React.FC<HeroContentProps> = ({ title, subtitle, description }) => {
  return (
    <>
      <AnimatedText as="h1" delay={0.2} className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 tracking-tight">
        {title}
      </AnimatedText>

      <AnimatedText delay={0.3} className="text-xl md:text-2xl lg:text-3xl text-white/90 font-medium mb-8">
        {subtitle}
      </AnimatedText>

      <AnimatedText delay={0.4} className="text-lg md:text-xl text-white/80 mb-16 max-w-2xl mx-auto">
        {description}
      </AnimatedText>
    </>
  );
};

export default HeroContent;