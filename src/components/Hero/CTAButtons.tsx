import React from 'react';
import { ArrowRight } from 'lucide-react';
import AnimatedList from '../common/AnimatedList';
import Button from '../common/Button';

const CTAButtons = () => {
  return (
    <AnimatedList 
      className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6"
    >
      <Button 
        href="/for-jobbsokande" 
        variant="secondary"
        icon={ArrowRight}
        className="text-base md:text-lg px-8 md:px-12 py-4 md:py-5 w-full sm:w-auto hover:bg-white/90"
      >
        SÖKER DU JOBB
      </Button>
      <Button 
        href="/for-foretag" 
        variant="outline"
        icon={ArrowRight}
        className="text-base md:text-lg px-8 md:px-12 py-4 md:py-5 w-full sm:w-auto"
      >
        SÖKER DU PERSONAL
      </Button>
    </AnimatedList>
  );
};

export default CTAButtons;