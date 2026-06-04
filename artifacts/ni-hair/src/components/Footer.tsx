import { Instagram, ArrowUp } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import logoImg from "@assets/2476_1780616667680.jpg";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-foreground text-background pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <img 
              src={logoImg} 
              alt="Salão Ni Hair Logo" 
              className="w-16 h-16 rounded-full object-cover border-2 border-background/20 mb-6"
            />
            <p className="text-background/80 max-w-sm mb-6">
              Mais de 20 anos despertando a melhor versão de cada mulher em Pontal do Paraná com técnicas exclusivas e atendimento humanizado.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://instagram.com/salaonihair" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://wa.me/5541999588082" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-[#25D366] hover:text-white transition-colors"
                aria-label="WhatsApp"
              >
                <SiWhatsapp className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6 font-serif">Contato</h4>
            <ul className="space-y-4 text-background/80">
              <li>Av. Edo Puhl, 9702</li>
              <li>Balneário Shangri-lá</li>
              <li>Pontal do Paraná - PR</li>
              <li><a href="https://wa.me/5541999588082" className="hover:text-primary transition-colors">(41) 99958-8082</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6 font-serif">Horários</h4>
            <ul className="space-y-2 text-background/80">
              <li>Terça a Sábado</li>
              <li>09:00 às 19:00</li>
              <li className="pt-2 text-background/50">Domingo e Segunda: Fechado</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/60 text-sm">
            © {new Date().getFullYear()} Salão Ni Hair. Todos os direitos reservados.
          </p>
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 text-background/80 hover:text-primary transition-colors text-sm font-medium uppercase tracking-wider"
          >
            Voltar ao topo
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
