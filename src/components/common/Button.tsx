import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import IconWrapper from './IconWrapper';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  href?: string;
  icon?: LucideIcon;
  className?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  href, 
  icon,
  className = '',
  onClick 
}) => {
  const baseStyles = "inline-flex items-center px-6 py-3 font-semibold rounded-lg transition-all duration-300";
  
  const variants = {
    primary: "bg-sierra-orange text-white hover:bg-orange-600 shadow-sierra hover:shadow-lg",
    secondary: "bg-white text-sierra-orange hover:bg-gray-50 shadow-sierra hover:shadow-lg",
    outline: "border-2 border-white text-white hover:bg-white hover:text-sierra-orange"
  };

  const content = (
    <>
      {children}
      {icon && <IconWrapper icon={icon} size="small" className="ml-2 transition-transform group-hover:translate-x-1" />}
    </>
  );

  const motionProps = {
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.95 }
  };

  if (href) {
    return (
      <motion.a
        href={href}
        className={`${baseStyles} ${variants[variant]} ${className} group`}
        {...motionProps}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className} group`}
      {...motionProps}
    >
      {content}
    </motion.button>
  );
};

export default Button;