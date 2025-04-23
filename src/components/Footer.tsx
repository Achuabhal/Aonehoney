import React from 'react';
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter, Beef as Bee } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-amber-900 text-amber-100 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-6">
              <Bee className="h-8 w-8 text-amber-300 mr-2" />
              <span className="text-2xl font-semibold text-amber-100">A one honey</span>
            </div>
            <p className="mb-6 text-amber-200">
              Bringing nature's golden sweetness from our apiaries to your table since 2021.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-amber-200 hover:text-amber-300 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-amber-200 hover:text-amber-300 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-amber-200 hover:text-amber-300 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-amber-100">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'Products', 'About Us', 'Benefits', 'Blog', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase().replace(' ', '')}`}
                    className="text-amber-200 hover:text-amber-300 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-amber-100">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-amber-300 mr-3 mt-1" />
                <span className="text-amber-200">
                  123 Honey Lane, <br/>
                  Blossom Valley, CA 95123
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-amber-300 mr-3" />
                <span className="text-amber-200">(+91) 9961 17 46 93</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-amber-300 mr-3" />
                <a href="mailto:info@mellowgold.com" className="text-amber-200 hover:text-amber-300 transition-colors">
                shijugeorgem6@gmail.com
                </a>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-amber-100">Stay Updated</h3>
            <p className="text-amber-200 mb-4">
              Subscribe to our newsletter for seasonal updates, recipes, and special offers.
            </p>
            <form className="space-y-3">
              <div>
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="w-full px-4 py-2 rounded-lg bg-amber-800 border border-amber-700 text-amber-100 placeholder-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>
              <button 
                type="submit"
                className="w-full px-4 py-2 bg-amber-600 hover:bg-amber-500 text-white rounded-lg transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="pt-8 border-t border-amber-800 text-center text-amber-300 text-sm">
          <p className="mb-2">© {new Date().getFullYear()} A one honey. All rights reserved.</p>
          <div className="flex justify-center space-x-4">
            <a href="#" className="hover:text-amber-200 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-amber-200 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;