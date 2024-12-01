import { LucideProps } from 'lucide-react';

export const ICON_SIZES = {
  small: 20,
  default: 24,
  medium: 28,
  large: 32,
  xlarge: 40
} as const;

export interface IconWrapperProps extends LucideProps {
  size?: keyof typeof ICON_SIZES;
}

export const getIconSize = (size: keyof typeof ICON_SIZES = 'default'): number => {
  return ICON_SIZES[size];
};