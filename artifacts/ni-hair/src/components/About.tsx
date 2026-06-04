import { motion } from "framer-motion";
import aboutImg from "@assets/2492_1780616667680.jpg";

export function About() {
  return (
    <section id="sobre" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="order-2 lg:order-1"
          >
            <div className="relative">
              <img 
                src={aboutImg} 
                alt="Salão Ni Hair ambiente e trabalho" 
                className="w-full h-auto object-cover aspect-[4/5] shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-accent -z-10 hidden md:block" />
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/20 -z-10 hidden md:block" />
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="order-1 lg:order-2 flex flex-col justify-center"
          >
            <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">Nossa História</h2>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
              Sobre o Salão Ni Hair
            </h3>
            
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>
                Com mais de 20 anos de história em Pontal do Paraná, o Salão Ni Hair nasceu do sonho de empoderar mulheres através da beleza. Liderado por mulheres, para mulheres, nosso atendimento é personalizado, humanizado e cheio de cuidado genuíno.
              </p>
              <p>
                Somos especialistas na arte de transformar cabelos — sejam loiros, mechas ou luzes — com técnicas atualizadas e muito amor pelo que fazemos. Aqui, cada cliente é única.
              </p>
            </div>
            
            <div className="mt-10 p-8 bg-accent/30 border-l-4 border-primary">
              <p className="font-serif text-2xl md:text-3xl italic text-foreground leading-snug">
                "Despertando sua melhor versão e elevando o poder das mulheres."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
