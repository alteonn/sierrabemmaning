import React from 'react';
import { Shield } from 'lucide-react';
import Container from '../components/common/Container';
import SectionTitle from '../components/common/SectionTitle';
import SEO from '../components/common/SEO';

const PrivacyPolicy = () => {
  const sections = [
    {
      title: "Hantering av personuppgifter",
      content: "Sierra Bemanning värnar om din personliga integritet och eftersträvar alltid en hög nivå av dataskydd. Denna integritetspolicy förklarar hur vi samlar in och använder personuppgifter i vår verksamhet.",
    },
    {
      title: "Vilka personuppgifter samlar vi in?",
      content: "Vi samlar in personuppgifter som du själv lämnar till oss, till exempel när du:",
      list: [
        "Ansöker om jobb hos oss",
        "Registrerar dig som arbetssökande",
        "Kontaktar oss via e-post eller telefon",
        "Ingår ett anställningsavtal med oss"
      ]
    },
    {
      title: "Hur använder vi dina personuppgifter?",
      content: "Vi använder dina personuppgifter för att:",
      list: [
        "Administrera din ansökan och eventuell anställning",
        "Matcha dig mot lämpliga tjänster",
        "Kommunicera med dig om lediga tjänster",
        "Uppfylla våra rättsliga skyldigheter"
      ]
    },
    {
      title: "Laglig grund för behandling",
      content: "Vi behandlar dina personuppgifter med stöd av följande rättsliga grunder:",
      list: [
        "Fullgörande av avtal",
        "Rättslig förpliktelse",
        "Berättigat intresse",
        "Samtycke"
      ]
    },
    {
      title: "Hur länge sparar vi dina uppgifter?",
      content: "Vi sparar dina personuppgifter endast så länge som det är nödvändigt för de ändamål som uppgifterna samlades in för, eller så länge som krävs enligt lag."
    },
    {
      title: "Dina rättigheter",
      content: "Du har rätt att:",
      list: [
        "Få tillgång till dina personuppgifter",
        "Begära rättelse av felaktiga uppgifter",
        "Begära radering av uppgifter",
        "Begära begränsning av behandling",
        "Invända mot behandling",
        "Begära dataportabilitet"
      ]
    }
  ];

  return (
    <div className="pt-24 md:pt-32">
      <SEO 
        title="Integritetspolicy"
        description="Sierra Bemannings integritetspolicy beskriver hur vi hanterar och skyddar dina personuppgifter."
        canonical="/integritetspolicy"
      />

      <section className="bg-white py-16 md:py-24">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="w-16 h-16 bg-sierra-orange rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <SectionTitle 
                title="Integritetspolicy"
                subtitle="Sierra Bemanning AB (556917-7412)"
              />
            </div>

            <div className="space-y-12">
              {sections.map((section, index) => (
                <div
                  key={index}
                  className="bg-sierra-light rounded-xl p-8"
                >
                  <h2 className="text-2xl font-bold text-sierra-dark mb-4">{section.title}</h2>
                  <p className="text-sierra-gray mb-4">{section.content}</p>
                  {section.list && (
                    <ul className="list-disc list-inside space-y-2 text-sierra-gray">
                      {section.list.map((item, i) => (
                        <li key={i} className="ml-4">{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}

              <div className="bg-sierra-light rounded-xl p-8">
                <h2 className="text-2xl font-bold text-sierra-dark mb-4">Kontakta oss</h2>
                <p className="text-sierra-gray mb-4">
                  Om du har frågor om hur vi behandlar dina personuppgifter eller vill utöva dina rättigheter, 
                  kontakta oss på:
                </p>
                <div className="text-sierra-gray">
                  <p>Sierra Bemanning AB</p>
                  <p>Albybergsringen 105 Lokal 10</p>
                  <p>137 69 Österhaninge</p>
                  <p className="mt-2">E-post: albert@sierrabemanning.se</p>
                  <p>Telefon: 070-778 88 47</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default PrivacyPolicy;