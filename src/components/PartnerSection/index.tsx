import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Clock, Users, ArrowRight } from 'lucide-react';
import FeatureCard from './FeatureCard';

const features = [
  {
    icon: Shield,
    title: "Trygg arbetsgivare",
    description: "Vi värnar om våra medarbetare"
  },
  {
    icon: Clock,
    title: "10+ års erfarenhet",
    description: "Lång erfarenhet inom bemanning"
  },
  {
    icon: Users,
    title: "Starka referenser",
    description: "Samarbete med ledande företag"
  }
];

const PartnerSection = () => {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="text-center">
          <div className="inline-block">
            <h2 className="text-3xl font-bold text-sierra-orange mb-2">SIERRA</h2>
            <div className="w-full h-1 bg-sierra-orange/30 rounded-full" />
          </div>

          <h3 className="text-5xl md:text-6xl font-bold text-sierra-dark mt-6 mb-8">
            Din trygga partner
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-sierra-light rounded-2xl p-8 shadow-sierra hover:shadow-lg transition-all duration-300"
              >
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="w-16 h-16 mx-auto mb-6 bg-sierra-orange rounded-full flex items-center justify-center"
                >
                  <feature.icon size={32} className="text-white" />
                </motion.div>
                <h4 className="text-xl font-bold text-sierra-dark mb-3">{feature.title}</h4>
                <p className="text-sierra-gray">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          <p className="text-lg max-w-3xl mx-auto mb-12 text-sierra-gray leading-relaxed">
            Vi samarbetar med Sveriges ledande företag inom olika branscher och har över 10 års erfarenhet av bemanning. Tack vare detta har vi mycket goda referenser och är en trygg arbetsgivare där vi specialiserat oss på att locka fram den inneboende potentialen hos våra arbetstagare
          </p>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/jobba-med-oss"
            className="inline-flex items-center px-8 py-4 bg-sierra-orange text-white font-bold rounded-lg hover:bg-orange-600 transition-colors shadow-lg group"
          >
            JOBBA MED OSS
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default PartnerSection;