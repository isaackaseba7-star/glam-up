import { motion } from 'motion/react';
import { Scissors, Palette, Sparkles, Smile } from 'lucide-react';

const services = [
  {
    title: 'Haircuts',
    description: 'Precision cuts for men and women by expert stylists.',
    icon: <Scissors className="w-8 h-8 text-gold" />,
  },
  {
    title: 'Hair Styling',
    description: 'Elegant blowouts, updos, and modern styling techniques.',
    icon: <Sparkles className="w-8 h-8 text-gold" />,
  },
  {
    title: 'Hair Coloring',
    description: 'Highlights, balayage, and full tints using premium products.',
    icon: <Palette className="w-8 h-8 text-gold" />,
  },
  {
    title: 'Barber Services',
    description: 'Classic barber cuts, beard trims, and grooming.',
    icon: <Scissors className="w-8 h-8 text-gold" />,
  },
  {
    title: 'Beauty Treatments',
    description: 'Facials, waxing, and flawless makeup application.',
    icon: <Smile className="w-8 h-8 text-gold" />,
  },
  {
    title: 'Nails & Grooming',
    description: 'Detail-oriented manicures and pedicures.',
    icon: <Sparkles className="w-8 h-8 text-gold" />,
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-charcoal-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-gold font-sans uppercase tracking-[0.2em] text-sm mb-4 block">Our Offerings</span>
          <h2 className="font-serif text-4xl md:text-5xl text-nude">Exceptional Services</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group border border-white/10 p-8 hover:border-gold/50 hover:bg-charcoal-800 transition-all duration-300 cursor-pointer"
            >
              <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-serif mb-3 text-nude">{service.title}</h3>
              <p className="font-sans text-nude/60 text-sm leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
