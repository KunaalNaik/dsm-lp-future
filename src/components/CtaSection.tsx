
import React from 'react';
import { Button } from "@/components/ui/button";

const CtaSection: React.FC = () => {
  return (
    <section className="py-16 px-4 relative">
      <div className="absolute inset-0 bg-cyber-dark-blue/80 z-0"></div>
      <div className="absolute inset-0 cyber-grid opacity-50 z-0"></div>
      
      {/* Animated digital waves */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {[...Array(3)].map((_, i) => (
          <div 
            key={i}
            className="absolute w-full digital-wave"
            style={{ 
              height: `${2 + i * 0.5}px`, 
              background: `rgba(0, 243, 255, ${0.1 + i * 0.05})`,
              bottom: `${20 + i * 30}%`,
              left: 0,
              animationDelay: `${i * 0.5}s`
            }}
          ></div>
        ))}
      </div>
      
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center cyber-card p-8 md:p-12 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-glow-radial animate-pulse opacity-20"></div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6 neon-text-large animate-pulse">
            🚀 Future-Proof Your Career Today! 🚀
          </h2>
          
          <p className="text-lg md:text-xl mb-8 text-white/80 max-w-2xl mx-auto">
            Join thousands of professionals who have transformed their careers with our AI-driven programs
          </p>
          
          <Button className="neon-button text-lg animate-pulse-glow">
            Join Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
