import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import Container from '../components/common/Container';
import SectionTitle from '../components/common/SectionTitle';
import StockholmMap from '../components/contact/StockholmMap';

const Contact = () => {
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
      value: 'Kronborgsgränd 11 , 164 46 Kista'
    },
    {
      icon: Clock,
      label: 'Öppettider',
      value: 'Måndag - Fredag: 08:00 - 17:00'
    }
  ];

  return (
    <div className="pt-20">
      <section className="bg-white py-24">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <SectionTitle 
              title="Kontakta oss"
              subtitle="Vi finns här för att hjälpa dig med dina frågor och behov"
            />
          </div>
        </Container>
      </section>

      <section className="bg-sierra-light py-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-white rounded-xl shadow-sierra p-8">
                <h3 className="text-2xl font-bold text-sierra-dark mb-6">Albert Zeka</h3>
                <p className="text-sierra-gray text-lg mb-8">VD Sierra Bemanning AB</p>
                
                <div className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-4"
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
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sierra overflow-hidden">
              <StockholmMap />
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Contact;
