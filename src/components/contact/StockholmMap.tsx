import React from 'react';
import { motion } from 'framer-motion';

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
    { name: 'Kista', position: { top: '20%', left: '45%' }, isMain: true },
{ name: 'Sollentuna', position: { top: '25%', left: '48%' } },
{ name: 'Solna', position: { top: '30%', left: '50%' } },
{ name: 'Sundbyberg', position: { top: '28%', left: '48%' } },
{ name: 'Täby', position: { top: '20%', left: '55%' } },
{ name: 'Danderyd', position: { top: '22%', left: '52%' } },
{ name: 'Vallentuna', position: { top: '15%', left: '58%' } },
{ name: 'Upplands Väsby', position: { top: '10%', left: '45%' } },
{ name: 'Bromma', position: { top: '32%', left: '45%' } },
{ name: 'Spånga', position: { top: '25%', left: '43%' } },
{ name: 'Hässelby', position: { top: '28%', left: '40%' } },
{ name: 'Rinkeby', position: { top: '27%', left: '46%' } },
  ];

  return (
    <div className="relative h-[600px] w-full bg-[#FFF5F2] rounded-xl overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-white to-sierra-orange/5" />

        <div className="relative w-full h-full">
          {locations.map((location, index) => (
            <div
              key={index}
              className="absolute transform -translate-x-1/2 -translate-y-1/2"
              style={{
                top: location.position.top,
                left: location.position.left,
                zIndex: location.isMain ? 20 : 10
              }}
            >
              {location.isMain ? (
                <div className="relative">
                  <div className="relative">
                    <div className="w-6 h-6 bg-sierra-orange rounded-full border-4 border-white shadow-lg" />
                    <div className="absolute top-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                      <div className="bg-white px-4 py-2 rounded-lg shadow-lg">
                        <p className="text-sm font-medium text-sierra-dark">
                          {location.name}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="relative group">
                  <div className="w-2 h-2 bg-sierra-orange/30 rounded-full" />
                  <div className="absolute top-4 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                    <p className="text-xs text-sierra-gray opacity-70 group-hover:opacity-100 transition-opacity bg-white/80 px-2 py-1 rounded">
                      {location.name}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}

          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            <g className="opacity-10">
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
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default StockholmMap;
