import { MapPin, Clock } from "lucide-react";

export function Location() {
  return (
    <section id="localizacao" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">Visite-nos</h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground">
            Onde nos encontrar
          </h3>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-10">
            <div className="flex gap-4">
              <div className="mt-1 flex-shrink-0">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-bold text-xl mb-2 text-foreground">Endereço</h4>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Av. Edo Puhl, 9702<br />
                  Balneário Shangri-lá<br />
                  Pontal do Paraná - PR<br />
                  CEP 83255-000
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="mt-1 flex-shrink-0">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <div className="w-full">
                <h4 className="font-bold text-xl mb-4 text-foreground">Horário de Funcionamento</h4>
                <ul className="space-y-2 text-muted-foreground w-full max-w-xs">
                  <li className="flex justify-between border-b border-border pb-2">
                    <span>Segunda-feira</span>
                    <span className="font-medium text-foreground">Fechado</span>
                  </li>
                  <li className="flex justify-between border-b border-border pb-2">
                    <span>Terça a Sexta</span>
                    <span className="font-medium text-foreground">09:00 às 19:00</span>
                  </li>
                  <li className="flex justify-between border-b border-border pb-2">
                    <span>Sábado</span>
                    <span className="font-medium text-foreground">09:00 às 19:00</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Domingo</span>
                    <span className="font-medium text-foreground">Fechado</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="https://maps.google.com/?q=Av.+Edo+Puhl,+9702,+Balneário+Shangri-lá,+Pontal+do+Paraná+-+PR"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-foreground hover:bg-foreground/90 text-background px-6 py-3 font-medium text-center transition-colors"
              >
                Como chegar
              </a>
              <a
                href="https://wa.me/5541999588082?text=Olá!%20Vim%20pelo%20site%20do%20Salão%20Ni%20Hair%20e%20gostaria%20de%20agendar%20um%20horário."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-transparent border border-primary text-primary hover:bg-primary hover:text-primary-foreground px-6 py-3 font-medium text-center transition-colors"
              >
                Agendar pelo WhatsApp
              </a>
            </div>
          </div>

          <div className="h-[400px] lg:h-full min-h-[400px] w-full bg-muted relative">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.6661413813337!2d-48.4419992!3d-25.5827778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dbc3c3c3c3c3c3%3A0x3c3c3c3c3c3c3c3c!2sAv.%20Edo%20Puhl%2C%209702%20-%20Balne%C3%A1rio%20Shangri-l%C3%A1%2C%20Pontal%20do%20Paran%C3%A1%20-%20PR%2C%2083255-000!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
              title="Mapa de Localização Salão Ni Hair"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
