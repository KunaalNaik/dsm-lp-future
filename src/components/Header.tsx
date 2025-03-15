
import React from 'react';
import { Button } from "@/components/ui/button";

const Header: React.FC = () => {
  return (
    <header className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 px-4 md:px-8">
      {/* Background Animation */}
      <div className="absolute inset-0 cyber-grid opacity-50 z-0"></div>
      <div className="absolute inset-0 z-0">
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-cyber-dark-blue to-transparent"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-glow-radial animate-pulse opacity-30"></div>
      </div>
      
      {/* Animated digital waves */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <div 
            key={i}
            className="absolute w-full digital-wave"
            style={{ 
              height: `${2 + i * 0.5}px`, 
              background: `rgba(0, 243, 255, ${0.1 + i * 0.05})`,
              bottom: `${15 + i * 30}%`,
              left: 0,
              animationDelay: `${i * 0.5}s`
            }}
          ></div>
        ))}
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10 text-center">
        <div className="mb-8 animate-float">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 neon-text-large">
            Data Science Masterminds & <br className="hidden md:block" />AI Career Mastery
          </h1>
          <h2 className="text-xl md:text-2xl mb-2 text-cyber-blue/90">by Coach Kunaal</h2>
          <p className="text-lg md:text-xl mb-8 text-white/80">The Future of Careers: Adapt, Execute, Lead</p>
          <p className="text-sm text-white/60">Owned by nliveyourself</p>
        </div>
        
        <Button 
          className="neon-button animate-pulse-glow text-lg"
          onClick={() => document.getElementById('programs')?.scrollIntoView()}
        >
          Discover Your Future
        </Button>
      </div>
    </header>
  );
};

export default Header;
