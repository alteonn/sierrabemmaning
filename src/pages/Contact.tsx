import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import Container from '../components/common/Container';
import SectionTitle from '../components/common/SectionTitle';
import StockholmMap from '../components/contact/StockholmMap';

const Contact = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const contactInfo = [
    {
      icon: Phone,
      label: 'Telefon',
      value: '070-778 88 47',
      href: 'tel:0707788847'
    },
    {
      icon: Mail,
      label: 'E-post',
      value: 'albert@sierrabemanning.se',
      href: 'mailto:albert@sierrabemanning.se'
    },
    {
      icon: MapPin,
      label: 'Adress',
      value: 'Albybergsringen 105 Lokal 10, 137 69 Österhaninge'
    },
    {
      icon: Clock,
      label: 'Öppettider',
      value: 'Måndag - Fredag: 08:00 - 17:00'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-white py-24">
        <Container>
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            {...fadeInUp}
          >
            <SectionTitle 
              title="Kontakta oss"
              subtitle="Vi finns här för att hjälpa dig med dina frågor och behov"
            />
          </motion.div>
        </Container>
      </section>

      {/* Contact Information */}
      <section className="bg-sierra-light py-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Details */}
            <motion.div 
              className="space-y-8"
              {...fadeInUp}
            >
              <div className="bg-white rounded-xl shadow-sierra p-8">
                <h3 className="text-2xl font-bold text-sierra-dark mb-6">Albert Zeka</h3>
                <p className="text-sierra-gray text-lg mb-8">VVD Sierra Bemanning AB</p>
                
                <div className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start space-x-4"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="w-12 h-12 bg-sierra-orange rounded-lg text-white flex items-center justify-center flex-shrink-0">
                        <item.icon size={24} />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-sierra-dark">{item.label}</h4>
                        {item.href ? (
                          <a 
                            href={item.href}
                            className="text-sierra-gray hover:text-sierra-orange transition-colors"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-sierra-gray">{item.value}</p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Map */}
            <motion.div 
              className="bg-white rounded-xl shadow-sierra overflow-hidden"
              {...fadeInUp}
              transition={{ delay: 0.2 }}
            >
              <StockholmMap />
            </motion.div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Contact;