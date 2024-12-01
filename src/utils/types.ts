import { LucideIcon } from 'lucide-react';

export interface NavItem {
  name: string;
  href: string;
}

export interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface ContactInfo {
  icon: LucideIcon;
  label: string;
  value: string;
  href?: string;
}