import { motion } from 'motion/react';
import { ShieldCheck, MapPin, Award, Heart } from 'lucide-react';

const reasons = [
  {
    title: 'Professional Stylists',
    desc: 'Expertly trained team passionate about their craft.',
    icon: <Award className="w-6 h-6 text-gold" />
  },
  {
    title: 'Clean & Modern Salon',
    desc: 'Hygienic environment with high-end facilities.',
    icon: <MapPin className="w-6 h-6 text-gold" />
  },
  {
    title: 'High-Quality Products',
    desc: 'Premium brands ensuring perfectly healthy results.',
    icon: <ShieldCheck className="w-6 h-6 text-gold" />
  },
  {
    title: 'Customer Service',
    desc: 'Friendly, personalized attention for every client.',
    icon: <Heart className="w-6 h-6 text-gold" />
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-charcoal-800 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <img 
            src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
            alt="Salon Detail" 
            className="w-full aspect-[4/5] object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-gold font-sans uppercase tracking-[0.2em] text-sm mb-4 block">The Glam Up Standard</span>
          <h2 className="font-serif text-4xl md:text-5xl text-nude mb-8">Why Choose Us</h2>
          <p className="font-sans text-nude/70 mb-12 text-lg font-light leading-relaxed">
            We merge advanced techniques with the finest products to deliver an unparalleled grooming and styling experience right here in Lusaka.
          </p>

          <div className="space-y-8">
            {reasons.map((reason, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <div className="mt-1">{reason.icon}</div>
                <div>
                  <h4 className="font-serif text-xl mb-1 text-nude">{reason.title}</h4>
                  <p className="font-sans text-nude/60 text-sm">{reason.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
