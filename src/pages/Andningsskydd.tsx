import React from 'react';
import { Shield, Calendar, FileCheck, Clock, AlertCircle, CheckCircle2, Phone, Mail, MapPin } from 'lucide-react';
import Container from '../components/common/Container';
import SectionTitle from '../components/common/SectionTitle';

const Andningsskydd = () => {
  const requirements = [
    {
      icon: Shield,
      title: "Individuell anpassning",
      description: "Arbetsgivaren måste säkerställa att varje medarbetare har ett tätsittande andningsskydd anpassat efter individuella behov."
    },
    {
      icon: FileCheck,
      title: "Täthetsprovning",
      description: "Genomföra tester med en godkänd metod (antingen kvantitativ eller kvalitativ)."
    },
    {
      icon: Calendar,
      title: "Dokumentation",
      description: "Befintliga andningsskydd ska testas och dokumenteras individuellt före den 1 januari 2025."
    }
  ];

  const testingOccasions = [
    {
      icon: Calendar,
      title: "Före 1 januari 2025",
      description: "Testa och dokumentera alla befintliga andningsskydd."
    },
    {
      icon: AlertCircle,
      title: "Vid förändringar",
      description: "Tester vid byte av storlek, modell eller varumärke, vid betydande förändringar i kroppsvikt eller ansiktsform."
    },
    {
      icon: Clock,
      title: "Regelbunden kontroll",
      description: "Rekommendationen är att förnya tillpassningstest vartannat år."
    }
  ];

  const services = [
    {
      icon: CheckCircle2,
      title: "Individuella tillpassningstester",
      description: "Genomföra individuella tillpassningstester med certifierad testledare."
    },
    {
      icon: Shield,
      title: "Produktrådgivning",
      description: "Hjälpa till att hitta rätt typ, modell och storlek av mask för optimal säkerhet."
    },
    {
      icon: FileCheck,
      title: "Regelbundna kontroller",
      description: "Utföra regelbundna kontroller och inspektioner av befintliga andningsskydd enligt ISO-standard."
    }
  ];

  return (
    <div className="pt-20">
      <section className="relative bg-white py-24">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-sierra-dark">
              Nya krav på tillpassningstest för andningsskydd
            </h1>
            <p className="text-xl text-sierra-gray mb-8">
              Arbetsmiljöverket inför nya krav på tillpassningstest för tätsittande andningsskydd från och med den 1 januari 2025. För att säkerställa att dessa krav efterlevs, är det viktigt för arbetsgivare att agera proaktivt.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-sierra-orange py-16">
        <Container>
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="inline-block border-4 border-white/20 rounded-xl p-8 backdrop-blur-sm">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">              Uppfyll det nya lagkravet om tillpassningstest med våra ISO 16975-3-godkända täthetstester för andningsmasker!
</h2>
              <p className="text-xl leading-relaxed">
Våra utbildade testledare genomför trycktest enligt CNP med en Quantifit 2-maskin.

QuantiFit2 är ett högspecialiserat instrument som använder OHD:s vetenskapligt bevisade och patenterade teknik med kontrollerat negativt tryck (CNP) för att direkt mäta läckage i andningsskyddet.

Denna innovativa teknik genomför det snabbaste, enklaste och mest precisa tillpassningstest för andningsskydd som finns tillgängligt, vilket garanterar bästa möjliga skydd och passform för dig och dina anställda.              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-24 bg-white">
        <Container>
          <SectionTitle 
            title="Vad innebär lagkravet?"
            subtitle="Viktiga punkter att känna till om de nya kraven"
          />
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {requirements.map((item, index) => (
              <div
                key={index}
                className="bg-sierra-light rounded-xl p-8 shadow-sierra hover:shadow-lg transition-all duration-300"
              >
                <div className="w-14 h-14 bg-sierra-orange rounded-lg text-white flex items-center justify-center mb-6">
                  <item.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-sierra-dark mb-4">{item.title}</h3>
                <p className="text-sierra-gray">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-24 bg-sierra-light">
        <Container>
          <SectionTitle 
            title="När ska tillpassningstest utföras?"
            subtitle="Viktiga tidpunkter för testning och kontroll"
          />
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {testingOccasions.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-sierra hover:shadow-lg transition-all duration-300"
              >
                <div className="w-14 h-14 bg-sierra-orange rounded-lg text-white flex items-center justify-center mb-6">
                  <item.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-sierra-dark mb-4">{item.title}</h3>
                <p className="text-sierra-gray">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 max-w-3xl mx-auto text-center">
            <p className="text-sierra-gray">
              <strong>Viktigt:</strong> Användaren får inte ha skägg eller skäggstubb under testet för att säkerställa korrekt passform och täthet.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-24 bg-white">
        <Container>
          <SectionTitle 
            title="Våra tjänster"
            subtitle="Vi erbjuder professionell hjälp med andningsskydd"
          />
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {services.map((item, index) => (
              <div
                key={index}
                className="bg-sierra-light rounded-xl p-8 shadow-sierra hover:shadow-lg transition-all duration-300"
              >
                <div className="w-14 h-14 bg-sierra-orange rounded-lg text-white flex items-center justify-center mb-6">
                  <item.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-sierra-dark mb-4">{item.title}</h3>
                <p className="text-sierra-gray">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-24 bg-sierra-light">
        <Container>
          <div className="max-w-3xl mx-auto">
            <SectionTitle 
              title="Kontakta oss"
              subtitle="Få mer information eller prisförslag"
              className="mb-12"
            />
            
            <div className="bg-white rounded-xl shadow-sierra p-12 text-center">
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-sierra-dark mb-2">Albert Zeka</h3>
                  <p className="text-sierra-gray text-lg">VVD Sierra Bemanning AB</p>
                </div>
                
                <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                  <a 
                    href="tel:0707788847" 
                    className="flex items-center text-sierra-orange hover:text-orange-600 transition-colors group"
                  >
                    <Phone className="mr-2 group-hover:scale-110 transition-transform" />
                    070-778 88 47
                  </a>
                  <a 
                    href="mailto:albert@sierrabemanning.se" 
                    className="flex items-center text-sierra-orange hover:text-orange-600 transition-colors group"
                  >
                    <Mail className="mr-2 group-hover:scale-110 transition-transform" />
                    albert@sierrabemanning.se
                  </a>
                </div>

                <div className="flex items-center justify-center text-sierra-gray">
                  <MapPin className="mr-2 flex-shrink-0" />
                  <p>Albybergsringen 105 Lokal 10, 137 69 Österhaninge</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Andningsskydd;