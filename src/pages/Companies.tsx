import React from 'react';
import { Building2, Users, Clock, Shield, Phone, Mail, MapPin, ArrowRight, CheckCircle2 } from 'lucide-react';
import Container from '../components/common/Container';
import SectionTitle from '../components/common/SectionTitle';
import Button from '../components/common/Button';
import SEO from '../components/common/SEO';

const Companies = () => {
  const benefits = [
    {
      icon: Users,
      title: "Kompetent personal",
      description: "Vi matchar rätt kompetens med era behov"
    },
    {
      icon: Clock,
      title: "Snabb process",
      description: "Effektiv rekrytering och bemanning"
    },
    {
      icon: Shield,
      title: "Kvalitetssäkring",
      description: "Noggrann utvärdering av kandidater"
    },
    {
      icon: Building2,
      title: "Flexibla lösningar",
      description: "Anpassade efter er verksamhet"
    }
  ];

  const services = [
    {
      title: "Bemanning",
      description: "Flexibel personaluthyrning för kortare eller längre uppdrag"
    },
    {
      title: "Rekrytering",
      description: "Vi hjälper er hitta rätt person för fast anställning"
    },
    {
      title: "Konsultuppdrag",
      description: "Specialistkompetens för specifika projekt"
    }
  ];

  return (
    <div className="pt-20">
      <SEO 
        title="För företag - Hitta rätt kompetens"
        description="Sierra Bemanning erbjuder professionella bemanningslösningar för företag. Vi hjälper er hitta rätt personal genom behovsanpassade lösningar."
        canonical="/for-foretag"
      />

      <section className="relative bg-white py-24">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-sierra-dark">
              Hitta rätt kompetens för ert företag
            </h1>
            <p className="text-xl text-sierra-gray mb-8">
              Vi erbjuder skräddarsydda bemanningslösningar för att möta era specifika behov
            </p>
            <Button 
              href="#contact"
              variant="primary"
              icon={ArrowRight}
              className="text-lg"
            >
              Kontakta oss idag
            </Button>
          </div>
        </Container>
      </section>

      <section className="bg-sierra-light py-24">
        <Container>
          <SectionTitle 
            title="Fördelar med Sierra Bemanning"
            subtitle="Vi är er partner för framgångsrik kompetensförsörjning"
          />
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-sierra hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-sierra-orange rounded-lg text-white flex items-center justify-center mb-6">
                  <benefit.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-sierra-dark mb-4">{benefit.title}</h3>
                <p className="text-sierra-gray">{benefit.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-24">
        <Container>
          <SectionTitle 
            title="Våra tjänster"
            subtitle="Skräddarsydda lösningar för er verksamhet"
          />
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-sierra-light rounded-xl p-8 shadow-sierra hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-sierra-orange rounded-lg text-white flex items-center justify-center mb-6">
                  <CheckCircle2 size={24} />
                </div>
                <h3 className="text-xl font-bold text-sierra-dark mb-4">{service.title}</h3>
                <p className="text-sierra-gray">{service.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section id="contact" className="bg-sierra-light py-24">
        <Container>
          <div className="max-w-3xl mx-auto">
            <SectionTitle 
              title="Kontakta oss"
              subtitle="Vi hjälper er hitta rätt personal"
              className="mb-12"
            />
            
            <div className="bg-white rounded-xl shadow-sierra p-12">
              <div className="space-y-8">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-sierra-dark mb-2">Albert Zeka</h3>
                  <p className="text-sierra-gray text-lg">VD Sierra Bemanning AB</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <a
                    href="tel:0707788847"
                    className="flex items-center justify-center space-x-3 bg-sierra-light rounded-lg p-4 text-sierra-dark hover:text-sierra-orange transition-colors"
                  >
                    <Phone className="text-sierra-orange" size={24} />
                    <span>070-778 88 47</span>
                  </a>
                  
                  <a
                    href="mailto:albert@sierrabemanning.se"
                    className="flex items-center justify-center space-x-3 bg-sierra-light rounded-lg p-4 text-sierra-dark hover:text-sierra-orange transition-colors"
                  >
                    <Mail className="text-sierra-orange" size={24} />
                    <span>albert@sierrabemanning.se</span>
                  </a>
                </div>

                <div
                  className="flex items-center justify-center space-x-3 bg-sierra-light rounded-lg p-4 text-sierra-dark"
                >
                  <MapPin className="text-sierra-orange flex-shrink-0" size={24} />
                  <span>Kronborgsgränd 11 , 164 46 Kista</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Companies;
