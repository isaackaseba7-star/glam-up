import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-charcoal-900/95 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <a href="#" className="font-serif text-2xl tracking-widest text-gold uppercase">Glam Up</a>
          </div>
          
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-sm font-medium text-white hover:text-gold transition-colors uppercase tracking-widest">
                {link.name}
              </a>
            ))}
            <a href="#booking" className="px-6 py-2 border border-gold text-gold hover:bg-gold hover:text-charcoal-900 transition-colors uppercase tracking-widest text-sm">
              Book Now
            </a>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white hover:text-gold">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 w-full bg-charcoal-900/95 backdrop-blur-md shadow-lg"
        >
          <div className="px-4 pt-2 pb-6 space-y-4 flex flex-col items-center">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsOpen(false)}
                className="block text-white hover:text-gold uppercase tracking-widest text-sm"
              >
                {link.name}
              </a>
            ))}
             <a href="#booking" onClick={() => setIsOpen(false)} className="px-8 py-3 border border-gold text-gold hover:bg-gold hover:text-charcoal-900 transition-colors uppercase tracking-widest text-sm w-full text-center mt-4">
              Book Now
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
