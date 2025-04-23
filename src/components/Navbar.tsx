import React, { useState, useEffect } from 'react';
import { Menu, X,  Beef as Bee } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-amber-900/95 py-3 shadow-lg' : 'bg-amber-900/75 backdrop-blur-sm py-5'
    }`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Bee className="h-8 w-8 text-amber-100 mr-2" />
            <span className="text-2xl font-semibold text-amber-100 transition-colors duration-300">
              A one honey
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {['Home', 'Products', 'About', 'Benefits', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="relative font-medium text-amber-100 transition-colors duration-300 hover:text-amber-300 after:absolute after:w-0 after:h-0.5 after:bg-amber-300 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Cart Icon */}
          

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden ml-2 p-2"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X className="h-6 w-6 text-amber-100" />
              ) : (
                <Menu className="h-6 w-6 text-amber-100" />
              )}
            </button>
         
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
        }`}>
          <div className="flex flex-col space-y-4 py-4">
            {['Home', 'Products', 'About', 'Benefits', 'Contact'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`}
                className="px-4 py-2 text-lg text-center text-amber-100 hover:bg-amber-800/50 rounded-md transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;