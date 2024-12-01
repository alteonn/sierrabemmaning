import React from 'react';
import { Building2, Users, Clock } from 'lucide-react';
import IconWrapper from '../common/IconWrapper';
import AnimatedList from '../common/AnimatedList';

const features = [
  {
    icon: Building2,
    text: "Ledande inom bemanning"
  },
  {
    icon: Users,
    text: "Kompetent personal"
  },
  {
    icon: Clock,
    text: "Snabb process"
  }
];

const Features = () => {
  return (
    <AnimatedList 
      className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 mb-16"
      itemClassName="flex items-center justify-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg py-5 px-6 border border-white/20 hover:scale-105 transition-transform duration-300"
    >
      {features.map((feature, index) => (
        <div key={index} className="flex items-center space-x-3">
          <IconWrapper icon={feature.icon} size="default" className="text-white" />
          <span className="text-white font-medium text-sm md:text-base">{feature.text}</span>
        </div>
      ))}
    </AnimatedList>
  );
};

export default Features;