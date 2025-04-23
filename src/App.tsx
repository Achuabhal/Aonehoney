import  { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import About from './components/About';
import Benefits from './components/Benefits';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import './styles/animations.css';

function App() {
  useEffect(() => {
    // Change page title
    document.title = "A ONE HONEY - Home";
    
    // Setup intersection observer for animation on scroll
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('appear');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    document.querySelectorAll('.animate-fadeIn').forEach((el) => {
      observer.observe(el);
    });
    
    return () => observer.disconnect();
  }, []);

  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <Products />
      <About />
      <Benefits />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;