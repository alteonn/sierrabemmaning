import React from 'react';
import { motion } from 'framer-motion';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  light?: boolean;
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ 
  title, 
  subtitle, 
  light = false,
  className = '' 
}) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className={`text-center ${className}`}
    >
      <h2 className={`text-4xl font-bold ${light ? 'text-white' : 'text-sierra-dark'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-lg ${light ? 'text-white/90' : 'text-sierra-gray'}`}>
          {subtitle}
        </p>
      )}
      <div className={`mt-4 w-24 h-1 mx-auto rounded-full ${light ? 'bg-white/30' : 'bg-sierra-orange'}`}></div>
    </motion.div>
  );
};

export default SectionTitle;