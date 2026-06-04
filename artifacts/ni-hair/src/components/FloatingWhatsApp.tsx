import { useState, useEffect } from "react";
import { SiWhatsapp } from "react-icons/si";

export function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <a
      href="https://wa.me/5541999588082?text=Olá!%20Vim%20pelo%20site%20do%20Salão%20Ni%20Hair%20e%20gostaria%20de%20mais%20informações%20sobre%20os%20serviços."
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center animate-pulse ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
      }`}
      style={{ animationDuration: '3s' }}
      aria-label="Fale conosco no WhatsApp"
    >
      <SiWhatsapp className="w-8 h-8" />
    </a>
  );
}
