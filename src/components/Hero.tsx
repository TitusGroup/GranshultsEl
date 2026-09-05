import { useCallback, useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Fade from "embla-carousel-fade";
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight, ArrowLeft, ShieldCheck, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { company } from "@/lib/company";

import villa1 from "@/assets/elinstallation-villa-1.jpg.asset.json";
import solar4 from "@/assets/solceller-4.jpg.asset.json";
import ev1 from "@/assets/laddbox-elbil-1.jpg.asset.json";
import auto1 from "@/assets/fastighetsautomation-1.jpg.asset.json";

type Cta = { label: string; to?: string; href?: string };

type Slide = {
  image: string;
  imagePosition?: string;
  alt: string;
  eyebrow: string;
  title: string;
  highlight?: string;
  description: string;
  primaryCta: Cta;
  secondaryCta?: Cta;
};

/** Ändra, lägg till eller ta bort slides här — inget annat behöver röras. */
const slides: Slide[] = [
  {
    image: villa1.url,
    alt: "Nyinstallation av el i villa i Bankeryd",
    eyebrow: "Elinstallation",
    title: "Trygga elinstallationer utförs av",
    highlight: "behöriga elektriker",
    description:
      "Från nyinstallation och ombyggnad till felsökning och service — för företag och privatpersoner i Bankeryd och hela Jönköpingsområdet.",
    primaryCta: { label: `Ring ${company.phone}`, href: company.phoneHref },
    secondaryCta: { label: "Begär offert", to: "/contact" },
  },
  {
    image: solar4.url,
    alt: "Solcellsanläggning på tak",
    eyebrow: "Solceller & batterilager",
    title: "Egen el från taket —",
    highlight: "med grönt bidrag",
    description:
      "Vi projekterar, monterar och driftsätter kompletta solcellsanläggningar med växelriktare och batterilager.",
    primaryCta: { label: "Läs om solceller", to: "/services" },
    secondaryCta: { label: "Begär offert", to: "/contact" },
  },
  {
    image: ev1.url,
    imagePosition: "center top",
    alt: "Laddbox för elbil monterad på fasad",
    eyebrow: "Laddbox för elbil",
    title: "Ladda hemma —",
    highlight: "säkert och smart",
    description:
      "Laddstation med egen säkring, jordfelsskydd och smart styrning. Installerad av behörig elektriker.",
    primaryCta: { label: "Boka installation", to: "/contact" },
    secondaryCta: { label: "Våra tjänster", to: "/services" },
  },
  {
    image: auto1.url,
    alt: "Styrskåp för fastighetsautomation",
    eyebrow: "Automation & fastighet",
    title: "Styrning som håller",
    highlight: "fastigheten i drift",
    description:
      "Styrskåp, automation, datanätverk och inbrottslarm — byggt, dokumenterat och driftsatt på plats.",
    primaryCta: { label: "Kontakta oss", to: "/contact" },
    secondaryCta: { label: "Se vårt arbete", to: "/work" },
  },
];

const usePrefersReducedMotion = () => {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);
  return reduced;
};

const CtaButton = ({
  cta,
  variant,
  icon,
}: {
  cta: Cta;
  variant: "primary" | "secondary";
  icon?: React.ReactNode;
}) => {
  const className =
    variant === "primary"
      ? "bg-brand text-brand-foreground hover:bg-brand/90 shadow-elegant"
      : "bg-white/10 text-white border-white/30 hover:bg-white/20 hover:text-white backdrop-blur";

  const content = (
    <>
      {variant === "primary" && icon}
      {cta.label}
      {variant === "secondary" && <ArrowRight className="h-4 w-4" />}
    </>
  );

  return (
    <Button
      asChild
      size="lg"
      variant={variant === "primary" ? "default" : "outline"}
      className={className}
    >
      {cta.href ? (
        <a href={cta.href}>{content}</a>
      ) : (
        <Link to={cta.to ?? "/contact"}>{content}</Link>
      )}
    </Button>
  );
};

const Hero = () => {
  const reducedMotion = usePrefersReducedMotion();
  const autoplay = useRef(
    Autoplay({ delay: 6500, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  const [emblaRef, embla] = useEmblaCarousel(
    { loop: true, duration: 40 },
    reducedMotion ? [Fade()] : [Fade(), autoplay.current]
  );
  const [selected, setSelected] = useState(0);

  const onSelect = useCallback(() => {
    if (embla) setSelected(embla.selectedScrollSnap());
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    embla.on("select", onSelect);
    embla.on("reInit", onSelect);
  }, [embla, onSelect]);

  return (
    <section
      className="relative min-h-[92vh] flex items-center overflow-hidden bg-[hsl(222_60%_10%)]"
      aria-roledescription="carousel"
      aria-label="Utvalda tjänster"
    >
      {/* Bakgrundsbild per slide */}
      <div className="absolute inset-0" ref={emblaRef}>
        <div className="flex h-full">
          {slides.map((slide, i) => (
            <div className="relative min-w-0 flex-[0_0_100%] h-full" key={slide.title}>
              <img
                src={slide.image}
                alt={slide.alt}
                loading={i === 0 ? "eager" : "lazy"}
                decoding="async"
                fetchPriority={i === 0 ? "high" : "low"}
                className="absolute inset-0 h-full w-full object-cover"
                style={{ objectPosition: slide.imagePosition ?? "center" }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Läsbarhetslager */}
      <div className="absolute inset-0 bg-[hsl(222_60%_8%)]/70" />
      <div className="absolute inset-0 bg-gradient-to-r from-[hsl(222_60%_8%)] via-[hsl(222_60%_9%)]/85 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-[hsl(222_60%_8%)] via-transparent to-[hsl(222_60%_8%)]/50" />
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Innehåll */}
      <div className="relative z-10 container mx-auto px-6 pt-32 pb-24 md:pb-32">
        <div className="grid lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur px-4 py-1.5 text-white/90 text-xs font-medium border border-white/15 mb-6">
              <MapPin className="h-3.5 w-3.5" /> {company.area}
            </div>

            {slides.map((slide, i) => (
              <div
                key={slide.title}
                aria-hidden={i !== selected}
                className={`${i === selected ? "block" : "hidden"} ${
                  reducedMotion ? "" : "animate-fade-in-up"
                }`}
              >
                <p className="text-eyebrow text-brand-bright mb-4">{slide.eyebrow}</p>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-white leading-[1.05] mb-6">
                  {slide.title}{" "}
                  {slide.highlight && (
                    <span className="text-brand-bright">{slide.highlight}</span>
                  )}
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-2xl mb-10">
                  {slide.description}
                </p>
                <div className="flex flex-wrap gap-4">
                  <CtaButton
                    cta={slide.primaryCta}
                    variant="primary"
                    icon={<Phone className="h-4 w-4" />}
                  />
                  {slide.secondaryCta && (
                    <CtaButton cta={slide.secondaryCta} variant="secondary" />
                  )}
                </div>
              </div>
            ))}

            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-white/85 text-sm">
              <span className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4" /> Behörigt elinstallationsföretag
              </span>
              <span className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4" /> ROT-avdrag direkt på fakturan
              </span>
              <span className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4" /> Fast pris eller löpande
              </span>
            </div>
          </div>

          {/* Kontroller */}
          <div className="lg:col-span-5 flex items-center gap-6 lg:justify-end">
            <div className="flex items-center gap-3" role="tablist" aria-label="Välj slide">
              {slides.map((slide, i) => (
                <button
                  key={slide.title}
                  type="button"
                  role="tab"
                  aria-selected={i === selected}
                  aria-label={slide.eyebrow}
                  onClick={() => embla?.scrollTo(i)}
                  className={`h-1.5 rounded-full transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-bright focus-visible:ring-offset-2 focus-visible:ring-offset-[hsl(222_60%_10%)] ${
                    i === selected
                      ? "w-10 bg-brand-bright"
                      : "w-5 bg-white/30 hover:bg-white/60"
                  }`}
                />
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => embla?.scrollPrev()}
                aria-label="Föregående slide"
                className="h-11 w-11 rounded-full border border-white/25 bg-white/10 backdrop-blur text-white flex items-center justify-center transition-colors hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-bright"
              >
                <ArrowLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => embla?.scrollNext()}
                aria-label="Nästa slide"
                className="h-11 w-11 rounded-full border border-white/25 bg-white/10 backdrop-blur text-white flex items-center justify-center transition-colors hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-bright"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
