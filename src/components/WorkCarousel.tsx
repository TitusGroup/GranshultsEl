import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import villa1 from "@/assets/elinstallation-villa-1.jpg.asset.json";
import villa2 from "@/assets/elinstallation-villa-2.jpg.asset.json";
import solar1 from "@/assets/solceller-1.jpg.asset.json";
import solar4 from "@/assets/solceller-4.jpg.asset.json";
import ev1 from "@/assets/laddbox-elbil-1.jpg.asset.json";
import auto1 from "@/assets/fastighetsautomation-1.jpg.asset.json";
import net1 from "@/assets/datanatverk-inbrottslarm-2.png.asset.json";
import alarm1 from "@/assets/datanatverk-inbrottslarm-1.jpg.asset.json";

const projects = [
  {
    image: villa1.url,
    title: "Nyinstallation, villa",
    location: "Bankeryd",
    description: "Komplett eldragning i nybyggd villa — kanalisation, dosor och gruppledningar på plats innan väggarna stängs.",
  },
  {
    image: villa2.url,
    title: "El service",
    location: "Jönköping",
    description: "Service, felsökning och akuta elarbeten i bostäder och företag — snabb hjälp när strömmen sviker.",
  },
  {
    image: solar1.url,
    title: "Solcellsanläggning på mark",
    location: "Jönköpingsområdet",
    description: "Markmonterade solpaneler på stadigt underlag, anslutna och klara för drift.",
  },
  {
    image: solar4.url,
    title: "Solcellsanläggning på tak",
    location: "Bankeryd",
    description: "Takmonterade solpaneler med säker infästning, växelriktare och komplett elanslutning.",
  },
  {
    image: ev1.url,
    title: "Laddbox för elbil",
    location: "Norrahammar",
    description: "Laddstation monterad på fasad med egen säkring, jordfelsskydd och smart styrning.",
  },
  {
    image: auto1.url,
    title: "Fastighetsautomation",
    location: "Jönköping",
    description: "Uppbyggnad av styrskåp för fastighetens ventilation, värme och belysning.",
  },
  {
    image: net1.url,
    title: "Datanätverk",
    location: "Huskvarna",
    description: "Strukturerad kabeldragning och inkoppling av patchpanel i nätverksrack.",
  },
  {
    image: alarm1.url,
    title: "Inbrottslarm",
    location: "Bankeryd",
    description: "Installation av larmsystem med manöverpanel, detektorer och driftsättning på plats.",
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
            Riktiga bilder från jobb vi utfört åt privatpersoner och företag i Jönköpingsområdet.
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
