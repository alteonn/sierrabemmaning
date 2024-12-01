import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import PartnerSection from './components/PartnerSection/index';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import Andningsskydd from './pages/Andningsskydd';
import Contact from './pages/Contact';
import JobSeekers from './pages/JobSeekers';
import Companies from './pages/Companies';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Cookies from './pages/Cookies';
import CookieBanner from './components/CookieBanner';

function App() {
  const currentPath = window.location.pathname;

  const renderPage = () => {
    switch (currentPath) {
      case '/andningsskydd':
        return <Andningsskydd />;
      case '/kontakt':
        return <Contact />;
      case '/for-jobbsokande':
        return <JobSeekers />;
      case '/for-foretag':
        return <Companies />;
      case '/integritetspolicy':
        return <PrivacyPolicy />;
      case '/cookies':
        return <Cookies />;
      default:
        return (
          <>
            <Hero />
            <Features />
            <PartnerSection />
            <CTASection />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      {renderPage()}
      <Footer />
      <CookieBanner />
    </div>
  );
}

export default App;