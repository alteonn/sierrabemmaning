import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, X } from 'lucide-react';
import Button from './common/Button';

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasAcceptedCookies = localStorage.getItem('cookiesAccepted');
    if (!hasAcceptedCookies) {
      // Small delay before showing the banner
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookiesAccepted', 'true');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
        >
          <div className="max-w-7xl mx-auto">
            <div className="bg-white rounded-xl shadow-xl border border-gray-100 p-4 md:p-6">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6">
                <div className="flex items-center gap-3 text-sierra-orange">
                  <Cookie size={24} />
                  <span className="font-semibold">Cookies</span>
                </div>
                
                <p className="flex-1 text-sierra-gray text-sm md:text-base">
                  Vi använder cookies för att förbättra din upplevelse på vår webbplats. 
                  Genom att fortsätta använda webbplatsen godkänner du användningen av cookies.
                  <a 
                    href="/cookies" 
                    className="text-sierra-orange hover:text-orange-600 ml-1 underline"
                  >
                    Läs mer
                  </a>
                </p>

                <div className="flex items-center gap-3 w-full md:w-auto">
                  <Button
                    variant="primary"
                    onClick={handleAccept}
                    className="flex-1 md:flex-none justify-center"
                  >
                    Acceptera
                  </Button>
                  <button
                    onClick={() => setIsVisible(false)}
                    className="p-2 text-sierra-gray hover:text-sierra-orange transition-colors"
                  >
                    <X size={24} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieBanner;