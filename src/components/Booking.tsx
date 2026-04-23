import { motion } from 'motion/react';

export default function Booking() {
  return (
    <section id="booking" className="py-24 bg-charcoal-900 text-white relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-gold font-sans uppercase tracking-[0.2em] text-sm mb-4 block">Reservations</span>
          <h2 className="font-serif text-4xl md:text-5xl text-nude mb-4">Book Your Appointment</h2>
          <p className="font-sans text-nude/60 font-light">Secure your spot online and we'll confirm shortly.</p>
        </div>

        <motion.form 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs uppercase tracking-widest text-nude/70 mb-2">Name</label>
              <input type="text" className="w-full bg-transparent border-b border-white/20 pb-3 focus:outline-none focus:border-gold transition-colors text-white font-sans" placeholder="Your full name" required />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-widest text-nude/70 mb-2">Phone</label>
              <input type="tel" className="w-full bg-transparent border-b border-white/20 pb-3 focus:outline-none focus:border-gold transition-colors text-white font-sans" placeholder="Your phone number" required />
            </div>
          </div>
          
          <div>
            <label className="block text-xs uppercase tracking-widest text-nude/70 mb-2">Service</label>
            <select className="w-full bg-transparent border-b border-white/20 pb-3 focus:outline-none focus:border-gold transition-colors text-nude font-sans appearance-none rounded-none" required>
              <option value="" className="bg-charcoal-900 text-white">Select a service</option>
              <option value="haircut-men" className="bg-charcoal-900 text-white">Haircut (Men)</option>
              <option value="haircut-women" className="bg-charcoal-900 text-white">Haircut (Women)</option>
              <option value="styling" className="bg-charcoal-900 text-white">Hair Styling</option>
              <option value="coloring" className="bg-charcoal-900 text-white">Hair Coloring</option>
              <option value="barber" className="bg-charcoal-900 text-white">Barber Services</option>
              <option value="beauty" className="bg-charcoal-900 text-white">Beauty Treatments</option>
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs uppercase tracking-widest text-nude/70 mb-2">Date</label>
              <input type="date" className="w-full bg-transparent border-b border-white/20 pb-3 focus:outline-none focus:border-gold transition-colors text-white font-sans [color-scheme:dark]" required />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-widest text-nude/70 mb-2">Time</label>
              <input type="time" className="w-full bg-transparent border-b border-white/20 pb-3 focus:outline-none focus:border-gold transition-colors text-white font-sans [color-scheme:dark]" required />
            </div>
          </div>

          <div className="pt-6">
            <button type="submit" className="w-full bg-gold text-charcoal-900 hover:bg-white transition-colors py-4 uppercase tracking-widest text-sm font-semibold">
              Confirm Booking
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
