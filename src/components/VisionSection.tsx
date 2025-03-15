
import React from 'react';
import { LightbulbIcon, Brain, Rocket } from 'lucide-react';

const VisionSection: React.FC = () => {
  const visionItems = [
    {
      icon: <Brain className="w-12 h-12 mb-4 text-cyber-blue" />,
      title: "Inner Leadership",
      description: "Master self-leadership for career clarity and purpose-driven growth"
    },
    {
      icon: <LightbulbIcon className="w-12 h-12 mb-4 text-cyber-blue" />,
      title: "AI & Data Leadership",
      description: "Lead with AI-driven decision-making and cutting-edge data science"
    },
    {
      icon: <Rocket className="w-12 h-12 mb-4 text-cyber-blue" />,
      title: "Execution Mastery",
      description: "Implement strategies that drive real-world impact and tangible results"
    }
  ];

  return (
    <section className="py-20 px-4 relative">
      <div className="absolute inset-0 cyber-grid opacity-30 z-0"></div>
      
      <div className="container relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 neon-text">2025: The Job Market is Changing</h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-white/80">
            Theory alone isn't enough. Execution, real-world impact, and AI-driven skills matter more than ever.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {visionItems.map((item, index) => (
            <div 
              key={index} 
              className="cyber-card p-6 text-center group transition-all duration-500 hover:translate-y-[-10px]"
            >
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-cyber-blue/20 rounded-full blur-md transform scale-90 group-hover:scale-110 transition-all duration-500"></div>
                <div className="relative">
                  {item.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 neon-text">{item.title}</h3>
              <p className="text-white/70">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
