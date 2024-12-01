import React from 'react';
import { motion } from 'framer-motion';
import { defaultAnimationConfig } from '../../utils/animations';

interface Location {
  name: string;
  position: {
    top: string;
    left: string;
  };
  isMain?: boolean;
}

const StockholmMap = () => {
  const locations: Location[] = [
    { name: 'Stockholm', position: { top: '25%', left: '48%' } },
    { name: 'Södertälje', position: { top: '65%', left: '25%' } },
    { name: 'Nynäshamn', position: { top: '90%', left: '52%' } },
    { name: 'Nacka', position: { top: '35%', left: '65%' } },
    { name: 'Haninge', position: { top: '55%', left: '60%' } },
    { name: 'Tyresö', position: { top: '40%', left: '70%' } },
    { name: 'Huddinge', position: { top: '45%', left: '40%' } },
    { name: 'Botkyrka', position: { top: '50%', left: '30%' } },
    { name: 'Salem', position: { top: '55%', left: '20%' } },
    { name: 'Värmdö', position: { top: '30%', left: '75%' } },
    { name: 'Lidingö', position: { top: '20%', left: '55%' } },
    { name: 'Österhaninge', position: { top: '70%', left: '58%' }, isMain: true }
  ];

  return (
    <div className="relative h-[600px] w-full bg-[#FFF5F2] rounded-xl overflow-hidden">
      <div className="absolute inset-0">
        {/* Map Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-white to-sierra-orange/5" />

        {/* Locations */}
        <div className="relative w-full h-full">
          {locations.map((location, index) => (
            <motion.div
              key={index}
              {...defaultAnimationConfig}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="absolute transform -translate-x-1/2 -translate-y-1/2"
              style={{
                top: location.position.top,
                left: location.position.left,
                zIndex: location.isMain ? 20 : 10
              }}
            >
              {location.isMain ? (
                // Main Location (Österhaninge)
                <div className="relative">
                  {/* Pulse Animation */}
                  <motion.div
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <motion.div
                      className="absolute w-16 h-16 bg-sierra-orange/20 rounded-full"
                      animate={{
                        scale: [1, 2.5],
                        opacity: [0.6, 0]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeOut"
                      }}
                    />
                    <motion.div
                      className="absolute w-16 h-16 bg-sierra-orange/20 rounded-full"
                      animate={{
                        scale: [1, 2.5],
                        opacity: [0.6, 0]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeOut",
                        delay: 1
                      }}
                    />
                  </motion.div>

                  {/* Marker */}
                  <div className="relative">
                    <div className="w-6 h-6 bg-sierra-orange rounded-full border-4 border-white shadow-lg" />
                    {/* Label */}
                    <div className="absolute top-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1 }}
                        className="bg-white px-4 py-2 rounded-lg shadow-lg"
                      >
                        <p className="text-sm font-medium text-sierra-dark">
                          {location.name}
                        </p>
                      </motion.div>
                    </div>
                  </div>
                </div>
              ) : (
                // Other Locations
                <div className="relative group">
                  <div className="w-2 h-2 bg-sierra-orange/30 rounded-full" />
                  <div className="absolute top-4 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                    <motion.p 
                      className="text-xs text-sierra-gray opacity-70 group-hover:opacity-100 transition-opacity bg-white/80 px-2 py-1 rounded"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                    >
                      {location.name}
                    </motion.p>
                  </div>
                </div>
              )}
            </motion.div>
          ))}

          {/* Connecting Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            <motion.g
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.1 }}
              transition={{ delay: 0.5 }}
            >
              {locations.map((location, index) => (
                <line
                  key={index}
                  x1="58%"
                  y1="70%"
                  x2={location.position.left}
                  y2={location.position.top}
                  stroke="#e85414"
                  strokeWidth="1"
                  strokeDasharray="4 4"
                  className="opacity-20"
                />
              ))}
            </motion.g>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default StockholmMap;