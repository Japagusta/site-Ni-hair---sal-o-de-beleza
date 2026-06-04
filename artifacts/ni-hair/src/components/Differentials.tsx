import { motion } from "framer-motion";
import { Award, Sparkles, Heart, Wifi, Accessibility, Home, TrendingUp, Calendar } from "lucide-react";

const differentials = [
  { title: "20+ Anos de Experiência", icon: Award },
  { title: "Especialistas em Loiros", icon: Sparkles },
  { title: "Atendimento Personalizado", icon: Heart },
  { title: "Wi-Fi Gratuito", icon: Wifi },
  { title: "Ambiente Acessível", icon: Accessibility },
  { title: "Ambiente Acolhedor", icon: Home },
  { title: "Técnicas Atualizadas", icon: TrendingUp },
  { title: "Hora Marcada", icon: Calendar },
];

export function Differentials() {
  return (
    <section id="diferenciais" className="py-24 bg-white border-y border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
            Por que escolher o Ni Hair?
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {differentials.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-16 h-16 bg-accent rounded-none flex items-center justify-center mb-4 transition-transform duration-300 group-hover:-translate-y-2">
                  <Icon className="w-8 h-8 text-primary" strokeWidth={1.5} />
                </div>
                <h4 className="font-serif font-bold text-foreground text-lg">{item.title}</h4>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
