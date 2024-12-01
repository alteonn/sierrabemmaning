import React from 'react';
import { LucideIcon } from 'lucide-react';
import { IconWrapperProps, getIconSize } from '../../utils/iconConfig';

interface Props extends IconWrapperProps {
  icon: LucideIcon;
}

const IconWrapper: React.FC<Props> = ({ 
  icon: Icon, 
  size = 'default',
  className = '',
  ...props 
}) => {
  return (
    <Icon 
      size={getIconSize(size)}
      className={className}
      {...props}
    />
  );
};

export default IconWrapper;