import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.6 }}
      className="relative group"
    >
      <div className="absolute inset-0 bg-white/5 rounded-2xl transform group-hover:scale-105 transition-transform duration-300" />
      <div className="relative p-8">
        <motion.div 
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          className="w-16 h-16 mx-auto mb-6 bg-white/10 rounded-full flex items-center justify-center"
        >
          <Icon size={32} className="text-white" />
        </motion.div>
        <h4 className="text-xl font-bold text-white mb-3">{title}</h4>
        <p className="text-white/80">{description}</p>
      </div>
    </motion.div>
  );
};

export default FeatureCard;