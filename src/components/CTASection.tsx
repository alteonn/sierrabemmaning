import React from 'react';
import { FileText, Building2 } from 'lucide-react';
import { motion } from 'framer-motion';

const CTASection = () => {
  return (
    <div className="bg-sierra-light py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-8 md:grid-cols-2"
        >
          {[
            {
              icon: FileText,
              title: "Söker du jobb?",
              description: "Registrera ditt CV hos oss!",
              buttonText: "Registrera CV",
              link: "/for-jobbsokande"
            },
            {
              icon: Building2,
              title: "Söker du personal?",
              description: "Rekrytering, bemanning, uthyrning – vi hjälper dig!",
              buttonText: "Kontakta oss",
              link: "/kontakt"
            }
          ].map((item, index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              className="group bg-white rounded-xl shadow-sierra overflow-hidden transform transition-all duration-300"
            >
              <div className="p-8">
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-center justify-center h-16 w-16 rounded-full bg-gradient-to-r from-sierra-orange to-orange-600 text-white mb-6"
                >
                  <item.icon size={32} />
                </motion.div>
                <h3 className="text-2xl font-bold text-sierra-dark mb-3">{item.title}</h3>
                <p className="text-sierra-gray mb-6">{item.description}</p>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={item.link}
                  className="inline-flex items-center px-8 py-4 bg-sierra-orange text-white font-bold rounded-lg hover:bg-orange-600 transition-colors shadow-lg"
                >
                  {item.buttonText}
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default CTASection;