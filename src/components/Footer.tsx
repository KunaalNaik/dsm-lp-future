
import React from 'react';
import { 
  Info, 
  PhoneCall, 
  BookOpen, 
  Award, 
  HelpCircle, 
  Briefcase, 
  FileText, 
  Shield, 
  Users,
  Linkedin,
  Youtube, 
  Instagram
} from 'lucide-react';

const Footer: React.FC = () => {
  const links = [
    { icon: <Info size={18} />, text: "About Us", url: "#" },
    { icon: <PhoneCall size={18} />, text: "Contact", url: "#" },
    { icon: <BookOpen size={18} />, text: "Blog", url: "#" },
    { icon: <Award size={18} />, text: "Success Stories", url: "#" },
    { icon: <HelpCircle size={18} />, text: "FAQs", url: "#" },
    { icon: <Briefcase size={18} />, text: "Career Opportunities", url: "#" },
    { icon: <FileText size={18} />, text: "Resources", url: "#" },
    { icon: <Shield size={18} />, text: "Terms & Conditions", url: "#" },
    { icon: <Users size={18} />, text: "Join the Community", url: "#" },
  ];

  const socialLinks = [
    { icon: <Linkedin size={20} />, text: "LinkedIn", url: "#" },
    { icon: <Youtube size={20} />, text: "YouTube", url: "#" },
    { icon: <Instagram size={20} />, text: "Instagram", url: "#" },
  ];

  return (
    <footer className="py-16 px-4 border-t border-cyber-blue/30 relative">
      <div className="absolute inset-0 cyber-grid opacity-30 z-0"></div>
      
      <div className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {[0, 1, 2].map((columnIndex) => (
            <div key={columnIndex} className="space-y-4">
              {links
                .slice(columnIndex * 3, columnIndex * 3 + 3)
                .map((link, index) => (
                  <a 
                    key={index} 
                    href={link.url}
                    className="cyber-card p-4 flex items-center gap-3 group hover:translate-y-[-5px] transition-all duration-300"
                  >
                    <span className="text-cyber-blue group-hover:animate-pulse">
                      {link.icon}
                    </span>
                    <span className="text-white/90 group-hover:text-cyber-blue transition-colors duration-300">
                      {link.text}
                    </span>
                  </a>
                ))}
            </div>
          ))}
        </div>
        
        <div className="flex flex-wrap justify-center gap-6 mb-8">
          {socialLinks.map((link, index) => (
            <a 
              key={index}
              href={link.url}
              className="cyber-card p-3 rounded-full group hover:scale-110 transition-transform duration-300"
            >
              <span className="text-cyber-blue group-hover:animate-pulse">
                {link.icon}
              </span>
            </a>
          ))}
        </div>
        
        <div className="text-center text-white/50 text-sm">
          <p>© 2023 Data Science Masterminds. All rights reserved.</p>
          <p className="mt-2">Designed for future-focused career transformation.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
