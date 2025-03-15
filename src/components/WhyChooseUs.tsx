
import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const WhyChooseUs: React.FC = () => {
  const reasons = [
    {
      title: "Execution Over Theory",
      description: "Learn by doing, not just watching videos."
    },
    {
      title: "Proven Frameworks",
      description: "Structured, repeatable, and tested strategies."
    },
    {
      title: "AI-Powered Career Growth",
      description: "Use AI & data to get ahead in your career."
    },
    {
      title: "Self-Leadership First",
      description: "Inner transformation leads to outer success."
    }
  ];

  return (
    <section className="py-20 px-4 md:px-8 relative">
      <div className="absolute inset-0 cyber-grid opacity-30 z-0"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 neon-text">Why Choose Us?</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {reasons.map((reason, index) => (
            <div key={index} className="cyber-card p-6 group hover:translate-y-[-5px] transition-transform duration-300">
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 mt-1">
                  <CheckCircle2 className="w-6 h-6 text-cyber-blue group-hover:animate-pulse" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 neon-text">{reason.title}</h3>
                  <p className="text-white/70">{reason.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
