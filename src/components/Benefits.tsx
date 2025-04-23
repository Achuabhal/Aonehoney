import React from 'react';
import { Zap, Shield, Award, Battery, Clock, Heart } from 'lucide-react';

const Benefits: React.FC = () => {
  const benefits = [
    {
      icon: <Zap className="h-10 w-10 text-amber-500" />,
      title: "Natural Energy Boost",
      description: "Honey provides a quick, sustained energy boost without the crash, perfect for athletes and active individuals."
    },
    {
      icon: <Shield className="h-10 w-10 text-amber-600" />,
      title: "Immune Support",
      description: "Rich in antioxidants and natural antibacterial properties to help strengthen your immune system."
    },
    {
      icon: <Award className="h-10 w-10 text-amber-700" />,
      title: "Premium Quality",
      description: "Our honey is never pasteurized, preserving all the natural enzymes, vitamins and beneficial properties."
    },
    {
      icon: <Heart className="h-10 w-10 text-amber-800" />,
      title: "Heart Healthy",
      description: "Studies suggest honey may help reduce risk factors for heart disease including improving cholesterol levels."
    },
    {
      icon: <Clock className="h-10 w-10 text-amber-700" />,
      title: "Anti-Aging Properties",
      description: "The antioxidants in honey combat oxidative stress, supporting skin health and overall cellular function."
    },
    {
      icon: <Battery className="h-10 w-10 text-amber-600" />,
      title: "Wound Healing",
      description: "Honey has been used for centuries for its natural healing properties, especially for minor wounds and burns."
    }
  ];

  return (
    <section id="benefits" className="py-24 bg-gradient-to-br from-amber-50 to-amber-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="text-4xl font-serif font-bold text-amber-900 mb-4">The Benefits of Pure Honey</h2>
          <p className="text-lg text-amber-800 max-w-2xl mx-auto">
            Beyond its delicious taste, honey offers a range of natural health benefits that have been valued for centuries
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow animate-fadeIn"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4 bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold text-amber-900 mb-3">{benefit.title}</h3>
              <p className="text-amber-800">{benefit.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto animate-fadeIn" style={{ animationDelay: '0.6s' }}>
          <div className="flex flex-col md:flex-row items-center">
            <div className="mb-6 md:mb-0 md:mr-8 max-w-xs">
              <img 
                src="https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg" 
                alt="Honey with spoon" 
                className="rounded-lg w-full h-auto"
              />
            </div>
            <div>
              <h3 className="text-2xl font-serif font-bold text-amber-900 mb-4">Daily Wellness Ritual</h3>
              <p className="text-amber-800 mb-4">
                Many of our customers incorporate a spoonful of our raw honey into their daily wellness routine. 
                Whether stirred into warm water with lemon in the morning or enjoyed before bedtime, this simple 
                ritual provides natural energy and supports overall wellbeing.
              </p>
              <button className="px-6 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-full transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;