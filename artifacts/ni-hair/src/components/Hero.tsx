import { motion } from "framer-motion";
import heroImg from "@assets/2478_1780616667680.jpg";

export function Hero() {
  return (
    <section className="relative h-[100dvh] w-full flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0 bg-cover"
        style={{ 
          backgroundImage: `url(${heroImg})`,
          backgroundPosition: 'top center'
        }}
      />
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
      
      <div className="container mx-auto px-4 relative z-20 flex flex-col items-center text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight">
            Especialistas em Loiros, Mechas e Transformação Capilar
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto font-medium leading-relaxed">
            Mais de 20 anos despertando a melhor versão de cada mulher em Pontal do Paraná.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="https://wa.me/5541999588082?text=Olá!%20Vim%20pelo%20site%20do%20Salão%20Ni%20Hair%20e%20gostaria%20de%20agendar%20um%20horário.%20Poderiam%20me%20informar%20os%20horários%20disponíveis%3F"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-medium w-full sm:w-auto transition-colors"
            >
              Agendar pelo WhatsApp
            </a>
            <a 
              href="#servicos"
              className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-4 text-lg font-medium w-full sm:w-auto transition-colors"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#servicos')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Conhecer Serviços
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
