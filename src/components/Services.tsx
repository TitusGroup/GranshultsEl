import { Sun, Plug, Lightbulb, Wrench, Home, Building2, Cpu, Cog, ShieldCheck } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Elinstallation villa",
    description:
      "Ny- och ombyggnad, dragning av el, byte av central, jordfelsbrytare och uttag — utfört enligt gällande norm.",
  },
  {
    icon: Sun,
    title: "Solceller",
    description:
      "Vi planerar och installerar solcellsanläggningar för villa och fastighet. Hjälp hela vägen från offert till driftsättning.",
  },
  {
    icon: Plug,
    title: "Laddbox för elbil",
    description:
      "Säker laddning hemma. Vi installerar laddbox från ledande tillverkare och hjälper dig söka grönt avdrag.",
  },
  {
    icon: Lightbulb,
    title: "Belysning & smart hem",
    description:
      "Spotlights, utebelysning och smarta lösningar som gör hemmet trivsammare och mer energieffektivt.",
  },
  {
    icon: Wrench,
    title: "Service & felsökning",
    description:
      "Snabb hjälp när något krånglar — felsökning, reparation och underhåll med tydlig återrapportering.",
  },
  {
    icon: Building2,
    title: "Företag & fastighet",
    description:
      "Service och elarbeten åt företag, butiker och bostadsrättsföreningar i Jönköpingsområdet.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <p className="text-eyebrow text-brand mb-4">Tjänster</p>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
            Allt en elektriker ska göra — och lite till.
          </h2>
          <p className="text-lg text-muted-foreground mt-6">
            Vi tar hand om både små servicejobb och kompletta installationer. Hör av dig så
            återkommer vi snabbt med ett tydligt förslag.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="group p-8 rounded-lg bg-card border border-border hover:border-brand/60 hover:shadow-card transition-all"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-md bg-brand/10 text-brand mb-5 group-hover:bg-brand group-hover:text-brand-foreground transition-colors">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
