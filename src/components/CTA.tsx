import { motion } from 'motion/react';

export default function CTA() {
  return (
    <section className="py-32 bg-gold text-charcoal-900 text-center relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, black 1px, transparent 0)', backgroundSize: '30px 30px' }}></div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-5xl md:text-6xl mb-6">Ready for a New Look?</h2>
          <p className="font-sans text-xl mb-12 font-medium">Book Your Appointment Today. Limited Slots Available.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#booking" className="px-8 py-4 bg-charcoal-900 text-white hover:bg-black transition-colors uppercase tracking-widest text-sm font-semibold">
              Book Now
            </a>
            <a href="tel:0777440636" className="px-8 py-4 border-2 border-charcoal-900 text-charcoal-900 hover:bg-charcoal-900 hover:text-white transition-colors uppercase tracking-widest text-sm font-semibold">
              Call Now
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
