import React from 'react';
import { Building2, Monitor, Package, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionTitle from './common/SectionTitle';
import IconWrapper from './common/IconWrapper';

const Features = () => {
  const features = [
    {
      icon: Building2,
      title: "Bygg",
      description: "Erfaren personal inom byggbranschen"
    },
    {
      icon: Monitor,
      title: "IT",
      description: "Kompetent personal inom IT"
    },
    {
      icon: Package,
      title: "Lagertjänster",
      description: "Effektiv personal inom lager"
    },
    {
      icon: Users,
      title: "Tjänstemannasektorn",
      description: "Kvalificerad personal för kontor och administration"
    }
  ];

  return (
    <div className="py-16 md:py-24 bg-sierra-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-sierra-dark">
            Några branscher vi specialiserar oss inom
          </h2>
          <div className="mt-6 w-24 h-1 bg-sierra-orange mx-auto rounded-full"></div>
        </div>

        <div className="mt-12 md:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="group bg-white rounded-2xl p-6 md:p-8 shadow-sierra hover:shadow-lg transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  className="w-16 md:w-20 h-16 md:h-20 rounded-full bg-sierra-orange text-white flex items-center justify-center mb-6"
                >
                  <IconWrapper icon={feature.icon} size="large" />
                </motion.div>
                <h3 className="text-xl md:text-2xl font-bold text-sierra-dark mb-3">{feature.title}</h3>
                <p className="text-sierra-gray text-base md:text-lg">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;