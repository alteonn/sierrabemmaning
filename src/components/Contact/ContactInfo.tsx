import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';
import IconWrapper from '../common/IconWrapper';

const ContactInfo = () => {
  const contactDetails = [
    {
      icon: Phone,
      href: 'tel:070-778-88-47',
      text: '070-778 88 47'
    },
    {
      icon: Mail,
      href: 'mailto:albert@sierrabemanning.se',
      text: 'albert@sierrabemanning.se'
    },
    {
      icon: MapPin,
      text: 'Albybergsringen 105 Lokal 10, 137 69 Österhaninge'
    }
  ];

  return (
    <div className="space-y-4">
      {contactDetails.map((detail, index) => (
        <motion.div
          key={index}
          className="flex items-center space-x-3"
          whileHover={detail.href ? { x: 5 } : undefined}
        >
          <IconWrapper 
            icon={detail.icon} 
            size="default"
            className="text-sierra-orange flex-shrink-0" 
          />
          {detail.href ? (
            <a 
              href={detail.href}
              className="text-sierra-gray hover:text-sierra-orange transition-colors"
            >
              {detail.text}
            </a>
          ) : (
            <span className="text-sierra-gray">{detail.text}</span>
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default ContactInfo;