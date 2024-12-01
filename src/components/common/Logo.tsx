import React from 'react';
import { motion } from 'framer-motion';

interface LogoProps {
  className?: string;
  type?: 'header' | 'footer';
}

const Logo: React.FC<LogoProps> = ({ className = '', type = 'header' }) => {
  // Support both SVG and PNG formats
  const svgPath = '/assets/images/logos/sierra-logo.svg';
  const pngPath = '/assets/images/logos/sierra-logo.png';
  
  // Try to load PNG first, fallback to SVG
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const img = e.currentTarget;
    if (img.src.endsWith('.png')) {
      img.src = svgPath;
    }
  };

  const altText = type === 'header' ? 'Sierra Bemanning Header Logo' : 'Sierra Bemanning Footer Logo';
  
  return (
    <motion.div 
      whileHover={{ scale: 1.05 }}
      className={className}
    >
      <a href="/" className="flex items-center">
        <img 
          src={pngPath}
          onError={handleImageError}
          alt={altText}
          className="h-8 md:h-10 w-auto"
        />
      </a>
    </motion.div>
  );
};

export default Logo;