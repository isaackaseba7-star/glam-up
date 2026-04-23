export default function Footer() {
  return (
    <footer className="bg-charcoal-900 text-white border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="font-serif text-2xl tracking-widest text-gold uppercase">
          Glam Up
        </div>
        <div className="text-nude/50 font-sans text-sm text-center md:text-left">
          &copy; {new Date().getFullYear()} Glam Up Professional Unisex Salon Lusaka. All rights reserved.
        </div>
        <div className="flex gap-4 items-center">
           <a href="#home" className="text-nude/50 hover:text-gold uppercase tracking-widest text-xs transition-colors">Home</a>
           <a href="#services" className="text-nude/50 hover:text-gold uppercase tracking-widest text-xs transition-colors">Services</a>
           <a href="#gallery" className="text-nude/50 hover:text-gold uppercase tracking-widest text-xs transition-colors">Gallery</a>
        </div>
      </div>
    </footer>
  );
}
