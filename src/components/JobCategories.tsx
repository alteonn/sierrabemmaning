import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Monitor, Package, Users } from 'lucide-react';
import Container from './common/Container';
import SectionTitle from './common/SectionTitle';

const categories = [
  {
    icon: Building2,
    title: 'Bygg',
    description: 'Erfaren personal inom byggbranschen med fokus på kvalitet och säkerhet.'
  },
  {
    icon: Monitor,
    title: 'IT',
    description: 'Kompetenta IT-specialister för moderna tekniska lösningar.'
  },
  {
    icon: Package,
    title: 'Lagertjänster',
    description: 'Effektiv logistikpersonal för optimerad lagerhantering.'
  },
  {
    icon: Users,
    title: 'Tjänstemannasektorn',
    description: 'Kvalificerad personal för administrativa och ledande positioner.'
  }
];

const JobCategories = () => {
  return (
    <section className="py-24 bg-sierra-light">
      <Container>
        <SectionTitle 
          title="Våra fokusområden"
          subtitle="Vi erbjuder kompetent personal inom flera olika yrkeskategorier"
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-sierra hover:shadow-lg transition-all duration-300"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-12 h-12 rounded-lg bg-sierra-orange text-white flex items-center justify-center mb-4"
                >
                  <Icon size={24} />
                </motion.div>
                <h3 className="text-xl font-bold text-sierra-dark mb-2">{category.title}</h3>
                <p className="text-sierra-gray">{category.description}</p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default JobCategories;