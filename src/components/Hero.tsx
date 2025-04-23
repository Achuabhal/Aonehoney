import React, { useEffect, useRef } from 'react';
import img from "./WhatsApp Image 2025-04-23 at 11.39.48_a11068d2.jpg"
const Hero: React.FC = () => {
  const honeycombRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!honeycombRef.current) return;
      
      const { clientX, clientY } = e;
      const { left, top, width, height } = honeycombRef.current.getBoundingClientRect();
      
      const x = (clientX - left) / width - 0.5;
      const y = (clientY - top) / height - 0.5;
      
      honeycombRef.current.style.transform = `perspective(1000px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg)`;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-amber-50 to-amber-100 z-0"></div>
      
      {/* Honeycomb Pattern Background */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="honeycomb-pattern absolute inset-0"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 z-10 pt-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 md:pr-12 animate-fadeIn" style={{ animationDelay: '0.3s' }}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-amber-900 leading-tight">
              <span className="block">Nature's Finest</span>
              <span className="block text-amber-700">Artisanal Honey</span>
            </h1>
            <p className="text-lg md:text-xl text-amber-800 max-w-lg">
              Discover the rich, natural sweetness of our premium honey varieties. 
              Sustainably harvested from happy bees in pristine environments.
            </p>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 pt-2">
              <button className="px-8 py-3 text-white bg-amber-600 hover:bg-amber-700 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl font-medium text-lg">
                Shop Now
              </button>
              <button className="px-8 py-3 text-amber-800 bg-transparent border-2 border-amber-600 hover:bg-amber-50 rounded-full transition-all duration-300 font-medium text-lg">
                Learn More
              </button>
            </div>
          </div>
          
          <div className="relative" ref={honeycombRef}>
            <div className="relative rounded-full w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 mx-auto overflow-hidden transition-all duration-500 shadow-2xl animate-float">
              <img 
                src={img}
                alt="Premium honey jar" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-amber-900/50 to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-full max-w-sm">
              <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg animate-fadeIn" style={{ animationDelay: '0.6s' }}>
                <p className="text-amber-900 font-medium text-center">Harvested with care. From hive to table.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;