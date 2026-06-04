import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logoImg from "@assets/2476_1780616667680.jpg";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Sobre", href: "#sobre" },
    { name: "Serviços", href: "#servicos" },
    { name: "Galeria", href: "#galeria" },
    { name: "Diferenciais", href: "#diferenciais" },
    { name: "Depoimentos", href: "#depoimentos" },
    { name: "Localização", href: "#localizacao" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-sm shadow-sm py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <a href="#" onClick={(e) => handleNavClick(e, "body")} className="flex items-center gap-3">
          <img
            src={logoImg}
            alt="Salão Ni Hair Logo"
            className="w-12 h-12 rounded-full object-cover border border-primary/20"
          />
          <span className={`font-serif font-bold text-xl transition-colors ${isScrolled ? "text-foreground" : "text-white"}`}>
            Ni Hair
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    isScrolled ? "text-foreground" : "text-white/90"
                  }`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="https://wa.me/5541999588082?text=Olá!%20Vim%20pelo%20site%20do%20Salão%20Ni%20Hair%20e%20gostaria%20de%20agendar%20um%20horário.%20Poderiam%20me%20informar%20os%20horários%20disponíveis%3F"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2.5 rounded-none font-medium transition-colors"
          >
            Agendar
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className={`lg:hidden p-2 ${isScrolled ? "text-foreground" : "text-white"}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-border shadow-lg py-4 px-4 flex flex-col gap-4">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="block text-foreground font-medium text-lg hover:text-primary"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="https://wa.me/5541999588082?text=Olá!%20Vim%20pelo%20site%20do%20Salão%20Ni%20Hair%20e%20gostaria%20de%20agendar%20um%20horário.%20Poderiam%20me%20informar%20os%20horários%20disponíveis%3F"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 text-center rounded-none font-medium mt-2"
          >
            Agendar pelo WhatsApp
          </a>
        </div>
      )}
    </header>
  );
}
