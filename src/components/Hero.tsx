import React from 'react';
import { ArrowRight, Building2, Users, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import Button from './common/Button';

const Hero = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

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

  return (
    <div className="relative min-h-screen flex items-center">
      {/* Background with overlay */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920" 
          alt="" 
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-sierra-orange/90 to-orange-600/90" />
      </div>

      {/* Content */}
      <div className="relative w-full mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div {...fadeInUp}>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 tracking-tight">
                SIERRA BEMANNING
              </h1>
              <p className="text-xl md:text-2xl lg:text-3xl text-white/90 font-medium mb-8">
                Bemanningsföretag i Stockholm
              </p>
            </motion.div>

            <motion.p 
              {...fadeInUp}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-white/80 mb-16 max-w-2xl mx-auto"
            >
              Sierra bemanning hjälper företag med uthyrning av kompetent personal inom flera olika yrkeskategorier
            </motion.p>

            {/* Features */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 mb-16"
            >
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center justify-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg py-5 px-6 border border-white/20"
                >
                  <feature.icon className="text-white" size={24} />
                  <span className="text-white font-medium text-sm md:text-base">{feature.text}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6"
            >
              <Button 
                href="/for-jobbsokande" 
                variant="secondary"
                icon={ArrowRight}
                className="text-base md:text-lg px-8 md:px-12 py-4 md:py-5 w-full sm:w-auto hover:bg-white/90"
              >
                SÖKER DU JOBB
              </Button>
              <Button 
                href="/for-foretag" 
                variant="outline"
                icon={ArrowRight}
                className="text-base md:text-lg px-8 md:px-12 py-4 md:py-5 w-full sm:w-auto"
              >
                SÖKER DU PERSONAL
              </Button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;