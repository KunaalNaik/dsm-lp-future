
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Play } from 'lucide-react';

const PLACEHOLDER_IMAGES = [
  '/placeholder.svg',
  '/placeholder.svg',
  '/placeholder.svg',
  '/placeholder.svg',
  '/placeholder.svg',
  '/placeholder.svg',
];

const testimonials = [
  {
    name: "Amit Verma",
    position: "Senior Data Analyst",
    company: "Google",
    review: "The Unconventional Career Hike Framework helped me land a 40% salary hike within 2 months! The execution-based approach is a game-changer!",
    stars: 5,
    image: '/placeholder.svg'
  },
  {
    name: "Priya Sharma",
    position: "AI Team Lead",
    company: "Microsoft",
    review: "Coach Kunaal's Inner Leadership program transformed not just my career but my entire approach to decision-making. Worth every penny!",
    stars: 5,
    image: '/placeholder.svg'
  },
  {
    name: "Rajesh Kumar",
    position: "Data Science Manager",
    company: "Amazon",
    review: "I went from struggling to find interviews to receiving multiple offers after applying the techniques from the Job Search Masterclass.",
    stars: 5,
    image: '/placeholder.svg'
  }
];

const TestimonialsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 px-4 relative">
      <div className="absolute inset-0 cyber-grid opacity-30 z-0"></div>
      
      <div className="container relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 neon-text">Hear From Our Students & Professionals</h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-white/80">
            Real success stories from those who transformed their careers with Data Science Masterminds
          </p>
        </div>
        
        {/* Image Grid */}
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4 mb-16">
          {PLACEHOLDER_IMAGES.map((image, index) => (
            <div key={index} className="cyber-card p-1 aspect-square overflow-hidden group">
              <img 
                src={image} 
                alt={`Student ${index+1}`} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
        
        {/* Video Testimonial Feature */}
        <div className="cyber-card p-4 mb-16 overflow-hidden group">
          <div className="relative aspect-video bg-cyber-dark-blue flex items-center justify-center cursor-pointer group">
            <div className="absolute inset-0 bg-cyber-blue/5 group-hover:bg-cyber-blue/10 transition-all duration-300"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-cyber-blue/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Play className="w-8 h-8 text-cyber-blue ml-1" />
              </div>
            </div>
            <p className="absolute bottom-4 left-4 text-cyber-blue font-semibold">Watch Video Testimonials</p>
          </div>
        </div>
        
        {/* Testimonial Cards Carousel */}
        <div className="relative">
          <div className="cyber-card p-8 md:p-12 mb-4">
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <div className="flex-shrink-0">
                <div className="w-24 h-24 rounded-full overflow-hidden cyber-border p-1 mx-auto md:mx-0">
                  <img 
                    src={testimonials[activeIndex].image} 
                    alt={testimonials[activeIndex].name}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
              
              <div className="flex-grow">
                <div className="flex items-center mb-2 justify-center md:justify-start">
                  {[...Array(testimonials[activeIndex].stars)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-cyber-blue text-cyber-blue" />
                  ))}
                </div>
                
                <p className="text-lg mb-4 text-white/90 italic text-center md:text-left">
                  "{testimonials[activeIndex].review}"
                </p>
                
                <div className="text-center md:text-left">
                  <h4 className="text-xl font-semibold neon-text">
                    {testimonials[activeIndex].name}
                  </h4>
                  <p className="text-white/70">
                    {testimonials[activeIndex].position} at {testimonials[activeIndex].company}
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center gap-4">
            <button 
              onClick={prevTestimonial} 
              className="neon-button !p-2 rounded-full"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={nextTestimonial} 
              className="neon-button !p-2 rounded-full"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
