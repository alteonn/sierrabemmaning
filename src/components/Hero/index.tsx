import React from 'react';
import { motion } from 'framer-motion';
import Features from './Features';
import HeroContent from './HeroContent';
import CTAButtons from './CTAButtons';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center bg-gradient-to-br from-sierra-orange to-orange-600">
      <div className="relative w-full mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <HeroContent 
              title="SIERRA BEMANNING"
              subtitle="Bemanningsföretag i Stockholm"
              description="Sierra bemanning hjälper företag med uthyrning av kompetent personal inom flera olika yrkeskategorier"
            />
            <Features />
            <CTAButtons />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;