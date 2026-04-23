import { motion } from 'motion/react';
import { Phone, MapPin, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-charcoal-800 text-white border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div>
            <span className="text-gold font-sans uppercase tracking-[0.2em] text-sm mb-4 block">Get In Touch</span>
            <h2 className="font-serif text-4xl md:text-5xl text-nude mb-8">Visit Glam Up</h2>
            
            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-4">
                <MapPin className="text-gold mt-1" />
                <div>
                  <h4 className="font-sans uppercase text-xs tracking-widest text-nude/60 mb-1">Address</h4>
                  <p className="font-serif text-xl">Vubu Rd, Lusaka 10101, Zambia</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="text-gold mt-1" />
                <div>
                  <h4 className="font-sans uppercase text-xs tracking-widest text-nude/60 mb-1">Phone / WhatsApp</h4>
                  <p className="font-serif text-xl">077 7440636</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="text-gold mt-1" />
                <div>
                  <h4 className="font-sans uppercase text-xs tracking-widest text-nude/60 mb-1">Hours</h4>
                  <p className="font-serif text-xl">Opens 9:00 AM Daily</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:0777440636" className="px-6 py-3 border border-gold text-gold hover:bg-gold hover:text-charcoal-900 transition-colors uppercase tracking-widest text-sm text-center">
                Call Us
              </a>
              <a href="https://wa.me/260777440636" target="_blank" rel="noreferrer" className="px-6 py-3 border border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-charcoal-900 transition-colors uppercase tracking-widest text-sm text-center flex items-center justify-center gap-2">
                WhatsApp Message
              </a>
            </div>
          </div>

          {/* Map Embed */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="h-[400px] lg:h-full min-h-[400px] w-full bg-charcoal-900 border border-white/10"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d123184.28825590393!2d28.204561050730623!3d-15.41662991030438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1940f37ed97bb411%3A0x67396a84d47bb839!2sLusaka%2C%20Zambia!5e0!3m2!1sen!2sus!4v1714493322123!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(1.1) grayscale(0.8)' }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
