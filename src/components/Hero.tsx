import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-charcoal-900/70 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
          alt="Professional Salon Interior" 
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <span className="text-gold font-sans uppercase tracking-[0.3em] text-sm md:text-md mb-6 block">Premium Unisex Salon</span>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white leading-[1.1] mb-6">
            Experience Luxury<br/>Hair & Beauty<br/>in Lusaka
          </h1>
          <p className="text-nude/80 font-sans text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light">
            Professional styling, modern techniques, and flawless results for men and women.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#booking" className="px-8 py-4 bg-gold text-charcoal-900 hover:bg-white transition-colors uppercase tracking-widest text-sm font-semibold w-full sm:w-auto">
              Book Appointment
            </a>
            <a href="tel:0777440636" className="px-8 py-4 border border-white text-white hover:border-gold hover:text-gold transition-colors uppercase tracking-widest text-sm font-semibold w-full sm:w-auto">
              Call Now
            </a>
          </div>

          <div className="mt-16 pt-10 border-t border-white/20 flex flex-wrap justify-center gap-8 text-nude/70">
            <div className="flex items-center gap-2">
              <span className="text-gold">★</span> 5-Star Rated
            </div>
            <div className="flex items-center gap-2">
              <span className="text-gold">★</span> Professional Stylists
            </div>
            <div className="flex items-center gap-2">
              <span className="text-gold">★</span> Premium Experience
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
