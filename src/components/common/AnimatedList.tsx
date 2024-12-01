import React from 'react';

interface AnimatedListProps {
  children: React.ReactNode;
  className?: string;
  itemClassName?: string;
}

const AnimatedList: React.FC<AnimatedListProps> = ({ 
  children, 
  className = '',
  itemClassName = ''
}) => {
  return (
    <div className={className}>
      {React.Children.map(children, (child, index) => (
        <div key={index} className={itemClassName}>
          {child}
        </div>
      ))}
    </div>
  );
};

export default AnimatedList;