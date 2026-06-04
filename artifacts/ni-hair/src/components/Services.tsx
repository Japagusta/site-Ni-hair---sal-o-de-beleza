import { motion } from "framer-motion";
import imgLoiros from "@assets/2482_1780616667680.jpg";
import imgColoracao from "@assets/2490_1780616667680.jpg";
import imgMechas from "@assets/2494_1780616667680.jpg";
import imgSelagem from "@assets/2486_1780616667680.jpg";
import imgTratamentos from "@assets/2480_1780616667680.jpg";
import imgCortes from "@assets/2478_1780616667680.jpg";
import imgSobrancelhas from "@assets/2496_1780616667680.jpg";
import imgManicure from "@assets/2484_1780616667680.jpg";

const services = [
  {
    title: "Loiros e Mechas",
    description: "Nossa especialidade. Técnicas personalizadas para realçar sua beleza com naturalidade e luminosidade.",
    image: imgLoiros
  },
  {
    title: "Coloração",
    description: "Colorações vibrantes e duradouras, aplicadas com técnica e cuidado para um resultado perfeito.",
    image: imgColoracao
  },
  {
    title: "Mechas e Luzes",
    description: "Mechas e luzes personalizadas que trazem profundidade e movimento para o cabelo.",
    image: imgMechas
  },
  {
    title: "Selagem Capilar",
    description: "Tratamento que sela os fios, proporcionando brilho intenso, maciez e alinhamento duradouros.",
    image: imgSelagem
  },
  {
    title: "Tratamentos Reconstrutores",
    description: "Recupere a saúde e vitalidade dos fios com nossos tratamentos especializados.",
    image: imgTratamentos
  },
  {
    title: "Cortes Femininos",
    description: "Cortes modernos e clássicos que valorizam o rosto e o estilo de cada mulher.",
    image: imgCortes
  },
  {
    title: "Design de Sobrancelhas",
    description: "Design e henna de sobrancelhas para um olhar marcante e natural.",
    image: imgSobrancelhas
  },
  {
    title: "Manicure e Pedicure",
    description: "Cuidados completos para suas unhas com produtos de qualidade e esmero.",
    image: imgManicure
  }
];

const waLink = "https://wa.me/5541999588082?text=Olá!%20Vim%20pelo%20site%20do%20Salão%20Ni%20Hair%20e%20gostaria%20de%20agendar%20um%20horário.%20Poderiam%20me%20informar%20os%20horários%20disponíveis%3F";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export function Services() {
  return (
    <section id="servicos" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">O que fazemos</h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground">
            Nossos Serviços
          </h3>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="group flex flex-col h-full bg-background border border-border transition-all duration-300 hover:shadow-lg"
            >
              <div className="relative aspect-square overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h4 className="font-serif text-xl font-bold text-foreground mb-3">{service.title}</h4>
                <p className="text-muted-foreground text-sm flex-grow mb-6">{service.description}</p>
                <a 
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-center w-full bg-transparent border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors py-2.5 px-4 font-medium text-sm"
                >
                  Agendar
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
