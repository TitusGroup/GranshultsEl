import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import solar from "@/assets/work-solar.jpg";
import panel from "@/assets/work-panel.jpg";
import lighting from "@/assets/work-lighting.jpg";
import ev from "@/assets/work-ev.jpg";

const projects = [
  {
    image: solar,
    title: "Solcellsanläggning, villa",
    location: "Bankeryd",
    description: "Komplett installation av takmonterade solpaneler med växelriktare och övervakning.",
  },
  {
    image: panel,
    title: "Nytt elskåp & jordfelsbrytare",
    location: "Jönköping",
    description: "Byte av gammal elcentral till modern lösning med personskydd på samtliga grupper.",
  },
  {
    image: lighting,
    title: "LED-belysning i kök",
    location: "Huskvarna",
    description: "Spotlights och bänkbelysning som lyfter köket och sänker elförbrukningen.",
  },
  {
    image: ev,
    title: "Laddbox för elbil",
    location: "Norrahammar",
    description: "Wallbox installerad på fasad med separat säkring och appstyrning.",
  },
];

const WorkCarousel = () => {
  const autoplay = useRef(Autoplay({ delay: 5000, stopOnInteraction: true }));

  return (
    <section id="work" className="py-24 md:py-32 bg-muted/40">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-12">
          <p className="text-eyebrow text-brand mb-4">Vårt arbete</p>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
            Utvalda projekt från trakten.
          </h2>
          <p className="text-lg text-muted-foreground mt-6">
            Ett axplock av jobb vi gjort åt privatpersoner och företag i Jönköpingsområdet.
          </p>
        </div>

        <Carousel
          opts={{ loop: true, align: "start" }}
          plugins={[autoplay.current]}
          className="relative"
        >
          <CarouselContent>
            {projects.map((p) => (
              <CarouselItem key={p.title} className="md:basis-2/3 lg:basis-1/2">
                <div className="overflow-hidden rounded-lg bg-card border border-border shadow-card">
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.title}
                      width={1600}
                      height={1000}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                  <div className="p-6 md:p-8">
                    <p className="text-eyebrow text-brand mb-2">{p.location}</p>
                    <h3 className="text-2xl font-semibold mb-2">{p.title}</h3>
                    <p className="text-muted-foreground">{p.description}</p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-4" />
          <CarouselNext className="hidden md:flex -right-4" />
        </Carousel>
      </div>
    </section>
  );
};

export default WorkCarousel;
