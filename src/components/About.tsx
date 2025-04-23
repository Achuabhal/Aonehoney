import React from 'react';
import { Leaf, Crop as Drop, Heart, FlowerIcon } from 'lucide-react';
import hello from "./WhatsApp Image 2025-04-23 at 11.33.14_112ad096.jpg"
import hello2 from "./ChatGPT Image Apr 23, 2025, 11_17_47 AM.png"

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-amber-100 rounded-full opacity-50"></div>
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-amber-100 rounded-full opacity-50"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 animate-fadeIn" style={{ animationDelay: '0.2s' }}>
            <h2 className="text-4xl font-serif font-bold text-amber-900 mb-6">Our Honey Story</h2>
            <p className="text-lg text-amber-800 mb-6">
              A one honey began with a simple passion: to bring the purest, most flavorful honey 
              directly from our family apiaries to your table. For three generations, we've maintained 
              the tradition of sustainable beekeeping.
            </p>
            <p className="text-lg text-amber-800 mb-8">
              Each jar of our honey represents a commitment to quality, sustainability, and the 
              preservation of nature's perfect sweetener. We carefully monitor our bee colonies, 
              ensuring they thrive in pesticide-free environments rich with diverse flora.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: <Leaf className="h-8 w-8 text-green-600" />, title: "Sustainable", description: "Eco-friendly beekeeping practices" },
                { icon: <Drop className="h-8 w-8 text-blue-600" />, title: "Pure", description: "No additives or artificial ingredients" },
                { icon: <Heart className="h-8 w-8 text-red-600" />, title: "Ethical", description: "Supporting bee conservation efforts" },
                { icon: <FlowerIcon className="h-8 w-8 text-purple-600" />, title: "Natural", description: "Harvested from pristine environments" }
              ].map((item, index) => (
                <div key={index} className="flex flex-col items-center text-center p-4 rounded-lg bg-amber-50 shadow-sm hover:shadow-md transition-shadow">
                  <div className="mb-3">{item.icon}</div>
                  <h3 className="font-semibold text-amber-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-amber-700">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="order-1 lg:order-2 animate-fadeIn" style={{ animationDelay: '0.4s' }}>
            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden rounded-2xl shadow-xl">
                <img 
                  src={hello} 
                  alt="Beekeeper checking beehives" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-5 shadow-lg max-w-xs animate-float">
                <img 
                  src={hello2}
                  alt="Honeycomb detail" 
                  className="w-full h-32 object-cover rounded-lg mb-3"
                />
                <p className="text-amber-800 text-sm">Our bees produce honey from carefully selected wildflower meadows, creating distinct seasonal flavors.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;