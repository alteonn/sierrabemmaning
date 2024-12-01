import React from 'react';
import { motion } from 'framer-motion';
import { Cookie } from 'lucide-react';
import Container from '../components/common/Container';
import SectionTitle from '../components/common/SectionTitle';
import SEO from '../components/common/SEO';

const Cookies = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const sections = [
    {
      title: "Vad är cookies?",
      content: "Cookies är små textfiler som lagras på din dator, telefon eller surfplatta när du besöker vår webbplats. De hjälper oss att förbättra din upplevelse och webbplatsens funktionalitet."
    },
    {
      title: "Hur använder vi cookies?",
      content: "Vi använder cookies för att:",
      list: [
        "Förbättra webbplatsens prestanda och användarupplevelse",
        "Analysera hur webbplatsen används",
        "Spara dina inställningar och preferenser",
        "Säkerställa webbplatsens funktionalitet"
      ]
    },
    {
      title: "Typer av cookies vi använder",
      subsections: [
        {
          title: "Nödvändiga cookies",
          content: "Dessa cookies är nödvändiga för att webbplatsen ska fungera och kan inte stängas av. De lagrar inga personligt identifierbara uppgifter."
        },
        {
          title: "Funktionella cookies",
          content: "Dessa cookies möjliggör förbättrad funktionalitet och personanpassning, som videospelare och chattfunktioner."
        },
        {
          title: "Analyscookies",
          content: "Dessa cookies hjälper oss att förstå hur besökare interagerar med webbplatsen genom att samla in och rapportera information anonymt."
        }
      ]
    },
    {
      title: "Hantera cookies",
      content: "Du kan själv välja om du vill acceptera cookies. De flesta webbläsare accepterar automatiskt cookies, men du kan ändra dina inställningar för att blockera cookies om du vill. Observera att vissa delar av webbplatsen kanske inte fungerar korrekt om du blockerar cookies."
    }
  ];

  return (
    <div className="pt-24 md:pt-32">
      <SEO 
        title="Cookies"
        description="Information om hur Sierra Bemanning använder cookies på vår webbplats."
        canonical="/cookies"
      />

      <section className="bg-white py-16 md:py-24">
        <Container>
          <div className="max-w-4xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              {...fadeInUp}
            >
              <div className="w-16 h-16 bg-sierra-orange rounded-full flex items-center justify-center mx-auto mb-6">
                <Cookie className="w-8 h-8 text-white" />
              </div>
              <SectionTitle 
                title="Cookies"
                subtitle="Sierra Bemanning AB (556917-7412)"
              />
            </motion.div>

            <motion.div 
              className="space-y-12"
              {...fadeInUp}
              transition={{ delay: 0.2 }}
            >
              {sections.map((section, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
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
                  {section.subsections && (
                    <div className="space-y-6 mt-6">
                      {section.subsections.map((subsection, i) => (
                        <div key={i}>
                          <h3 className="text-xl font-semibold text-sierra-dark mb-2">{subsection.title}</h3>
                          <p className="text-sierra-gray">{subsection.content}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: sections.length * 0.1 }}
                className="bg-sierra-light rounded-xl p-8"
              >
                <h2 className="text-2xl font-bold text-sierra-dark mb-4">Kontakta oss</h2>
                <p className="text-sierra-gray mb-4">
                  Om du har frågor om hur vi använder cookies, kontakta oss på:
                </p>
                <div className="text-sierra-gray">
                  <p>Sierra Bemanning AB</p>
                  <p>Albybergsringen 105 Lokal 10</p>
                  <p>137 69 Österhaninge</p>
                  <p className="mt-2">E-post: albert@sierrabemanning.se</p>
                  <p>Telefon: 070-778 88 47</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Cookies;