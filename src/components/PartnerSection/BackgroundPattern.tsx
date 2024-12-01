import React from 'react';

const BackgroundPattern = () => {
  return (
    <div className="absolute inset-0">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-sierra-orange to-orange-600" />
      
      {/* Background image */}
      <div 
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
        className="absolute inset-0 opacity-10 mix-blend-overlay"
      />
      
      {/* Pattern overlay */}
      <div 
        style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.05' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E\")",
          backgroundRepeat: 'repeat'
        }}
        className="absolute inset-0 opacity-30"
      />
    </div>
  );
};

export default BackgroundPattern;