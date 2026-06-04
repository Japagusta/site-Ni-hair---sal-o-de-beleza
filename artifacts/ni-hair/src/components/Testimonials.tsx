import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    text: "O melhor salão de Pontal com boas profissionais, ótimo espaço e localização.",
    author: "Cliente Google",
    rating: 5
  },
  {
    text: "Maravilhoso! Um atendimento de primeira e o pessoal é muito atencioso, adorei o meu corte.",
    author: "Cliente Google",
    rating: 5
  },
  {
    text: "Salão aconchegante e as meninas são maravilhosas.",
    author: "Cliente Google",
    rating: 5
  }
];

export function Testimonials() {
  return (
    <section id="depoimentos" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">Avaliações</h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
            O que dizem nossas clientes
          </h3>
          <div className="inline-flex items-center gap-2 bg-white px-6 py-3 shadow-sm border border-border">
            <span className="font-bold text-lg">Nota 4.7</span>
            <div className="flex text-yellow-400">
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
            </div>
            <span className="text-muted-foreground ml-2 font-medium">no Google</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 border border-border shadow-sm flex flex-col"
            >
              <div className="flex text-yellow-400 mb-6">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-lg text-foreground italic mb-8 flex-grow">"{item.text}"</p>
              <div className="mt-auto">
                <span className="font-bold text-primary">{item.author}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
