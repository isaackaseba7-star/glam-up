import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const reviews = [
  {
    text: "Very good experience. Fully professional barber. Highly recommend!",
    author: "Satisfied Client"
  },
  {
    text: "Perfect place for all hairstyles and beauty services. Luxurious vibe.",
    author: "Loyal Customer"
  },
  {
    text: "Excellent service and very skilled hairdresser. Best in Lusaka.",
    author: "Happy Guest"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-charcoal-800 text-center relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <span className="text-gold font-sans uppercase tracking-[0.2em] text-sm mb-4 block">Reviews</span>
        <h2 className="font-serif text-4xl md:text-5xl text-nude mb-16">Client Testimonials</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="p-8 border border-white/5 bg-charcoal-900/50"
            >
              <div className="flex justify-center gap-1 mb-6">
                {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-gold text-gold" />)}
              </div>
              <p className="font-serif text-lg text-nude/90 italic mb-6 leading-relaxed">
                "{review.text}"
              </p>
              <p className="font-sans uppercase text-xs tracking-widest text-gold">
                - {review.author}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
