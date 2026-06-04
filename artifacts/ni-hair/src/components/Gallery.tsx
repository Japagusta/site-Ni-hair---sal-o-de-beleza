import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

// Images mapped from requirements
import img2478 from "@assets/2478_1780616667680.jpg";
import img2482 from "@assets/2482_1780616667680.jpg";
import img2492 from "@assets/2492_1780616667680.jpg";
import img2480 from "@assets/2480_1780616667680.jpg";
import img2486 from "@assets/2486_1780616667680.jpg";
import img2490 from "@assets/2490_1780616667680.jpg";
import img2494 from "@assets/2494_1780616667680.jpg";
import img2484 from "@assets/2484_1780616667680.jpg";
import img2488 from "@assets/2488_1780616667680.jpg";
import img2496 from "@assets/2496_1780616667680.jpg";

type Category = "Todos" | "Loiros" | "Mechas" | "Cortes" | "Unhas" | "Sobrancelhas";

interface Photo {
  id: string;
  src: string;
  categories: Category[];
}

const photos: Photo[] = [
  { id: "2478", src: img2478, categories: ["Todos", "Loiros", "Cortes"] },
  { id: "2482", src: img2482, categories: ["Todos", "Loiros"] },
  { id: "2492", src: img2492, categories: ["Todos", "Loiros"] },
  { id: "2480", src: img2480, categories: ["Todos", "Mechas", "Cortes"] },
  { id: "2486", src: img2486, categories: ["Todos", "Mechas"] },
  { id: "2490", src: img2490, categories: ["Todos", "Mechas"] },
  { id: "2494", src: img2494, categories: ["Todos", "Mechas"] },
  { id: "2484", src: img2484, categories: ["Todos", "Unhas"] },
  { id: "2488", src: img2488, categories: ["Todos", "Unhas"] },
  { id: "2496", src: img2496, categories: ["Todos", "Sobrancelhas"] },
];

const categories: Category[] = ["Todos", "Loiros", "Mechas", "Cortes", "Unhas", "Sobrancelhas"];

export function Gallery() {
  const [activeCategory, setActiveCategory] = useState<Category>("Todos");
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  const filteredPhotos = photos.filter(photo => photo.categories.includes(activeCategory));

  return (
    <section id="galeria" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">Portfólio</h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground">
            Nosso Trabalho
          </h3>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 text-sm font-medium transition-colors ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-transparent text-muted-foreground hover:text-foreground hover:bg-border/50"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div layout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <AnimatePresence>
            {filteredPhotos.map((photo) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={photo.id}
              >
                <Dialog>
                  <DialogTrigger asChild>
                    <div className="relative aspect-square cursor-pointer group overflow-hidden bg-muted">
                      <img
                        src={photo.src}
                        alt="Trabalho Ni Hair"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span className="text-white font-medium border border-white px-4 py-2">Ampliar</span>
                      </div>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="max-w-5xl w-full p-0 overflow-hidden bg-transparent border-none shadow-none">
                    <img
                      src={photo.src}
                      alt="Trabalho Ni Hair"
                      className="w-full h-auto max-h-[90vh] object-contain"
                    />
                  </DialogContent>
                </Dialog>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
