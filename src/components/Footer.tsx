import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import Logo from './common/Logo';
import IconWrapper from './common/IconWrapper';

const Footer = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <footer className="bg-sierra-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Company Info */}
          <motion.div {...fadeInUp} className="space-y-6">
            <Logo type="footer" />
            <p className="text-gray-400 leading-relaxed">
              Din trygga partner inom bemanning. Vi erbjuder kompetent personal inom flera olika yrkeskategorier.
            </p>
          </motion.div>

          {/* Contact Info */}
          <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="space-y-4">
            <h3 className="text-white text-lg font-bold mb-6">Kontakta oss</h3>
            <div className="space-y-4">
              <a href="tel:070-778-88-47" className="flex items-center text-gray-400 hover:text-sierra-orange transition-colors duration-300">
                <IconWrapper icon={Phone} size="default" className="mr-3 text-sierra-orange" />
                070 77 88 847
              </a>
              <a href="mailto:albert@sierrabemanning.se" className="flex items-center text-gray-400 hover:text-sierra-orange transition-colors duration-300">
                <IconWrapper icon={Mail} size="default" className="mr-3 text-sierra-orange" />
                albert@sierrabemanning.se
              </a>
              <div className="flex items-start text-gray-400">
                <IconWrapper icon={MapPin} size="default" className="mr-3 mt-1 text-sierra-orange flex-shrink-0" />
                <p>Albybergsringen 105 Lokal 10,<br />137 69 Österhaninge</p>
              </div>
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div {...fadeInUp} transition={{ delay: 0.4 }} className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/5 p-4 rounded-lg flex items-center justify-center">
                <img 
                  src="/assets/images/certifications/gasell-2024.png" 
                  alt="Gasell 2024" 
                  className="w-auto h-16 object-contain"
                />
              </div>
              <div className="bg-white/5 p-4 rounded-lg flex items-center justify-center">
                <img 
                  src="/assets/images/certifications/aaa-cert.png" 
                  alt="AAA Certification" 
                  className="w-auto h-16 object-contain"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          {...fadeInUp} 
          transition={{ delay: 0.6 }}
          className="mt-16 pt-8 border-t border-white/10"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Sierra Bemanning AB. Alla rättigheter förbehållna.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="/integritetspolicy" className="text-gray-400 hover:text-sierra-orange text-sm transition-colors duration-300">
                Integritetspolicy
              </a>
              <a href="/cookies" className="text-gray-400 hover:text-sierra-orange text-sm transition-colors duration-300">
                Cookies
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;