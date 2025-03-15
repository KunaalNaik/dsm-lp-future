
import React from 'react';
import { Scroll } from 'lucide-react';
import { Link } from 'react-router-dom';

const PolicySection: React.FC = () => {
  return (
    <section className="py-12 px-4 md:px-8 relative">
      <div className="absolute inset-0 cyber-grid opacity-30 z-0"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-center gap-6">
          <Link to="/privacy-policy" className="cyber-card p-4 flex items-center gap-3 group hover:translate-y-[-5px] transition-transform duration-300">
            <Scroll className="w-5 h-5 text-cyber-blue group-hover:animate-pulse" />
            <span className="text-white/90 group-hover:text-cyber-blue transition-colors duration-300">
              Privacy Policy
            </span>
          </Link>
          
          <Link to="#" className="cyber-card p-4 flex items-center gap-3 group hover:translate-y-[-5px] transition-transform duration-300">
            <Scroll className="w-5 h-5 text-cyber-blue group-hover:animate-pulse" />
            <span className="text-white/90 group-hover:text-cyber-blue transition-colors duration-300">
              Return & Refund Policy
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PolicySection;
