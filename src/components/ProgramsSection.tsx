
import React from 'react';
import { Button } from "@/components/ui/button";
import { Search, TrendingUp, Network } from 'lucide-react';

const ProgramsSection: React.FC = () => {
  const programs = [
    {
      icon: <Search className="w-12 h-12 text-cyber-blue" />,
      title: "Unconventional Job Search Masterclass",
      price: "₹51",
      description: "AI-powered job search techniques that get you noticed by top employers",
      btnText: "Join for ₹51"
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-cyber-blue" />,
      title: "Unconventional Career Hike Framework",
      price: "₹6,000",
      description: "Increase your salary & accelerate career growth with proven strategies",
      btnText: "Enroll Now"
    },
    {
      icon: <Network className="w-12 h-12 text-cyber-blue" />,
      title: "Inner Leadership & AI/Data Leadership Practitioner's Program",
      price: "₹1,00,000",
      description: "Become a leader in AI & Data with hands-on execution and industry recognition",
      btnText: "Apply Now"
    }
  ];

  return (
    <section id="programs" className="py-20 px-4 md:px-8 relative">
      <div className="absolute inset-0 cyber-grid opacity-30 z-0"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 neon-text">Programs</h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-white/80">
            Transform your career with our execution-focused AI and data science programs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div 
              key={index} 
              className="cyber-card p-6 flex flex-col h-full group transition-all duration-500"
            >
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-cyber-blue/20 rounded-full blur-md transform scale-90 group-hover:scale-110 transition-all duration-500"></div>
                  <div className="relative">{program.icon}</div>
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-2 neon-text text-center">{program.title}</h3>
              <div className="text-center mb-4">
                <span className="text-2xl font-bold text-white">{program.price}</span>
              </div>
              <p className="text-white/70 mb-6 text-center flex-grow">{program.description}</p>
              
              <Button className="neon-button w-full mt-auto group-hover:animate-pulse-glow">
                {program.btnText}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
