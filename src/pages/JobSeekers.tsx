import React from 'react';
import { CheckCircle2, Phone, Mail, MapPin, ArrowRight } from 'lucide-react';
import Container from '../components/common/Container';
import SectionTitle from '../components/common/SectionTitle';
import Button from '../components/common/Button';

const JobSeekers = () => {
  const benefits = [
    {
      title: "Personlig utveckling",
      description: "Vi fokuserar på din tillväxt och karriärutveckling"
    },
    {
      title: "Flexibla uppdrag",
      description: "Varierande arbetsuppgifter och möjligheter"
    },
    {
      title: "Trygg anställning",
      description: "Vi följer kollektivavtal och erbjuder marknadsmässiga villkor"
    },
    {
      title: "Bred kundbas",
      description: "Samarbete med ledande företag i olika branscher"
    }
  ];

  return (
    <div className="pt-20">
      <section className="relative bg-white py-24">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-sierra-dark">
              Ta nästa steg i din karriär
            </h1>
            <p className="text-xl text-sierra-gray mb-8">
              Vi hjälper dig hitta spännande jobbmöjligheter hos våra samarbetspartners
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
            title="Fördelar med att jobba hos oss"
            subtitle="Vi värnar om våra medarbetare och erbjuder goda möjligheter till utveckling"
          />
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-sierra hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-sierra-orange rounded-lg text-white flex items-center justify-center mb-6">
                  <CheckCircle2 size={24} />
                </div>
                <h3 className="text-xl font-bold text-sierra-dark mb-4">{benefit.title}</h3>
                <p className="text-sierra-gray">{benefit.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section id="contact" className="bg-white py-24">
        <Container>
          <div className="max-w-3xl mx-auto">
            <SectionTitle 
              title="Kontakta oss"
              subtitle="Vi ser fram emot att höra från dig"
              className="mb-12"
            />
            
            <div className="bg-sierra-light rounded-xl shadow-sierra p-12">
              <div className="space-y-8">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-sierra-dark mb-2">Albert Zeka</h3>
                  <p className="text-sierra-gray text-lg">VD Sierra Bemanning AB</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <a
                    href="tel:0707788847"
                    className="flex items-center justify-center space-x-3 bg-white rounded-lg p-4 text-sierra-dark hover:text-sierra-orange transition-colors"
                  >
                    <Phone className="text-sierra-orange" size={24} />
                    <span>070-778 88 47</span>
                  </a>
                  
                  <a
                    href="mailto:albert@sierrabemanning.se"
                    className="flex items-center justify-center space-x-3 bg-white rounded-lg p-4 text-sierra-dark hover:text-sierra-orange transition-colors"
                  >
                    <Mail className="text-sierra-orange" size={24} />
                    <span>albert@sierrabemanning.se</span>
                  </a>
                </div>

                <div
                  className="flex items-center justify-center space-x-3 bg-white rounded-lg p-4 text-sierra-dark"
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

export default JobSeekers;
