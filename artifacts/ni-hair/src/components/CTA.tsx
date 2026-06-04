import { motion } from "framer-motion";
import { SiWhatsapp } from "react-icons/si";

export function CTA() {
  return (
    <section className="py-24 bg-accent relative overflow-hidden">
      {/* Decorative patterns */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/40 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-6 leading-tight">
            Pronta para transformar seu visual?
          </h2>
          <p className="text-lg md:text-xl text-foreground/80 mb-10">
            Nossa equipe está pronta para cuidar de você com excelência.
          </p>
          
          <a
            href="https://wa.me/5541999588082?text=Olá!%20Vim%20pelo%20site%20do%20Salão%20Ni%20Hair%20e%20gostaria%20de%20agendar%20um%20horário.%20Poderiam%20me%20informar%20os%20horários%20disponíveis%3F"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white px-8 py-4 text-lg font-bold transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            <SiWhatsapp className="w-6 h-6" />
            Agendar pelo WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}
