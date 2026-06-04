import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Gallery } from "@/components/Gallery";
import { Differentials } from "@/components/Differentials";
import { Testimonials } from "@/components/Testimonials";
import { CTA } from "@/components/CTA";
import { Location } from "@/components/Location";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-[100dvh] w-full overflow-x-hidden relative">
      <Navigation />
      
      <main className="flex-1 w-full">
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Differentials />
        <Testimonials />
        <CTA />
        <Location />
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
