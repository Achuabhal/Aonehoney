import React, { useState, useEffect } from 'react';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Tommy Johnson",
    role: "Culinary Expert",
    stars: 5,
    text: "As a professional chef, I'm extremely particular about ingredients. A one honey's wildflower honey has become an essential in my kitchen. The depth of flavor is outstanding and elevates everything from baked goods to glazes."
  },
  {
    id: 2,
    name: "Baby Thomas",
    role: "Wellness Coach",
    stars: 5,
    text: "I recommend A one honey to all my clients. The Manuka variety especially has been a game-changer for many of them. Pure, ethically sourced, and the health benefits are noticeable. It's in a class of its own."
  },
  {
    id: 3,
    name: "Ravi Kumar",
    role: "Food Blogger",
    stars: 5,
    text: "After trying dozens of honey brands for my blog, I keep coming back to Mellow Gold. The Alpine Blossom variety has such a unique flavor profile. My followers love whenever I feature these products!"
  }
];

const TestimonialCard: React.FC<{
  testimonial: typeof testimonials[0];
  isActive: boolean;
}> = ({ testimonial, isActive }) => {
  return (
    <div 
      className={`bg-white rounded-xl p-8 shadow-lg transition-all duration-500 h-full flex flex-col ${
        isActive ? 'opacity-100 scale-100' : 'opacity-50 scale-95'
      }`}
    >
      <div className="flex justify-between items-start mb-6">
        <Quote className="h-10 w-10 text-amber-300" />
        <div className="flex">
          {[...Array(testimonial.stars)].map((_, i) => (
            <Star key={i} className="h-5 w-5 text-amber-500 fill-amber-500" />
          ))}
        </div>
      </div>
      <p className="text-amber-800 mb-6 italic flex-grow">{testimonial.text}</p>
      <div className="flex items-center">
     
        <div>
          <h4 className="font-semibold text-amber-900">{testimonial.name}</h4>
          <p className="text-sm text-amber-700">{testimonial.role}</p>
        </div>
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };
  
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 6000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="py-24 bg-amber-800 relative overflow-hidden">
      {/* Decorative honeycomb patterns */}
      <div className="absolute inset-0 honeycomb-pattern opacity-5"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="text-4xl font-serif font-bold text-amber-100 mb-4">What Our Customers Say</h2>
          <p className="text-lg text-amber-200 max-w-2xl mx-auto">
            Join the thousands of happy customers who have made Mellow Gold honey part of their daily lives
          </p>
        </div>
        
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Desktop Version */}
          <div className="hidden md:grid grid-cols-3 gap-6 mb-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id}
                className="animate-fadeIn"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <TestimonialCard 
                  testimonial={testimonial} 
                  isActive={index === activeIndex}
                />
              </div>
            ))}
          </div>
          
          {/* Mobile Version (Carousel) */}
          <div className="md:hidden">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out" 
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                    <TestimonialCard testimonial={testimonial} isActive={true} />
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex justify-center space-x-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full ${
                    index === activeIndex ? 'bg-amber-400' : 'bg-amber-600'
                  }`}
                  onClick={() => setActiveIndex(index)}
                />
              ))}
            </div>
          </div>
          
          {/* Navigation Buttons */}
          <div className="flex justify-center mt-8 space-x-4">
            <button 
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-amber-700 hover:bg-amber-600 text-amber-100 transition-colors"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button 
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-amber-700 hover:bg-amber-600 text-amber-100 transition-colors"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;