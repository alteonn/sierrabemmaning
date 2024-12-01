import React from 'react';

interface AnimatedTextProps {
  children: React.ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ 
  children, 
  className = '',
  as: Component = 'div'
}) => {
  return (
    <Component className={className}>
      {children}
    </Component>
  );
};

export default AnimatedText;