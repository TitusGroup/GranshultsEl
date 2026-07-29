import { useState } from "react";
import {
  Sun,
  Plug,
  Lightbulb,
  Wrench,
  Home,
  Building2,
  Cpu,
  Cog,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import ServiceModal, { type ServiceDetail } from "./ServiceModal";
import villa1 from "@/assets/elinstallation-villa-1.jpg.asset.json";
import villa2 from "@/assets/elinstallation-villa-2.jpg.asset.json";
import solceller1 from "@/assets/solceller-1.jpg.asset.json";
import solceller2 from "@/assets/solceller-2.jpg.asset.json";
import solceller3 from "@/assets/solceller-3.jpg.asset.json";
import solceller4 from "@/assets/solceller-4.jpg.asset.json";

const services: ServiceDetail[] = [
  {
    icon: Home,
    title: "Elinstallation villa",
    description:
      "Ny- och ombyggnad, dragning av el, byte av central, jordfelsbrytare och uttag — utfört enligt gällande norm.",
    longDescription:
      "Vi hjälper villaägare i Bankeryd och Jönköpingsområdet med kompletta elinstallationer. Oavsett om du bygger nytt, renoverar eller bara behöver fler uttag så ser vi till att arbetet blir säkert, snyggt och godkänt.",
    features: [
      "Komplett el-dragning vid ny- och ombyggnad",
      "Byte av elcentral och säkringar",
      "Installation av jordfelsbrytare",
      "Uttag, strömbrytare och belysning",
      "Dokumentation och egenkontroll enligt norm",
    ],
    images: [villa1.url, villa2.url],
  },
  {
    icon: Sun,
    title: "Solceller",
    description:
      "Vi planerar och installerar solcellsanläggningar för villa och fastighet. Hjälp hela vägen från offert till driftsättning.",
    longDescription:
      "Med solceller sänker du dina elkostnader och ökar värdet på fastigheten. Vi guidar dig från första beräkning till färdiginstallerat system, inklusive ansökan om grönt avdrag.",
    features: [
      "Kostnadsfri solcellsberäkning",
      "Komplett installation på tak eller mark",
      "Växelriktare och optimering",
      "Ansökan om grönt avdrag",
      "Drift och övervakning av anläggningen",
    ],
    images: [solceller1.url, solceller2.url, solceller3.url, solceller4.url],
  },
  {
    icon: Plug,
    title: "Laddbox för elbil",
    description:
      "Säker laddning hemma. Vi installerar laddbox från ledande tillverkare och hjälper dig söka grönt avdrag.",
    longDescription:
      "Ladda bilen hemma på ett säkert och effektivt sätt. Vi installerar laddboxar för alla vanliga bilmodeller och ser till att din elcentral klarar belastningen.",
    features: [
      "Val av rätt laddbox för ditt behov",
      "Säker installation med korrekt säkring",
      "Lastbalansering mot fastighetens elanvändning",
      "Hjälp med grönt avdrag",
      "Support och garanti",
    ],
  },
  {
    icon: Lightbulb,
    title: "Belysning & smart hem",
    description:
      "Spotlights, utebelysning och smarta lösningar som gör hemmet trivsammare och mer energieffektivt.",
    longDescription:
      "Rätt belysning förändrar ett rum. Vi installerar allt från takspotlights och utebelysning till smarta hem-system som du styr med telefonen eller rösten.",
    features: [
      "Spotlights och infälld belysning",
      "Utebelysning och trädgårdsbelysning",
      "Smart belysning med dimmer och scener",
      "Integration med smarta hem-plattformar",
      "Energieffektiva LED-lösningar",
    ],
  },
  {
    icon: Wrench,
    title: "Service & felsökning",
    description:
      "Snabb hjälp när något krånglar — felsökning, reparation och underhåll med tydlig återrapportering.",
    longDescription:
      "När elen strular vill du ha hjälp snabbt. Vi felsöker, reparerar och återställer funktionen med tydlig information om vad som gjorts och vad det kostar.",
    features: [
      "Snabb felsökning av strömavbrott och jordfel",
      "Reparation av uttag, strömbrytare och central",
      "Underhåll och besiktning",
      "Tydlig offert och återrapportering",
      "Jour vid akuta fel",
    ],
  },
  {
    icon: Building2,
    title: "Företag & fastighet",
    description:
      "Service och elarbeten åt företag, butiker och bostadsrättsföreningar i Jönköpingsområdet.",
    longDescription:
      "Vi tar oss an elarbeten i kommersiella fastigheter, butiker, kontor och bostadsrättsföreningar. Vi planerar arbetet för att minimera störningar i din verksamhet.",
    features: [
      "El-service för företag och fastigheter",
      "Butiks- och kontorsinstallationer",
      "Belysningsprojekt i BRF och samfälligheter",
      "Underhållsavtal",
      "Dokumentation och besiktningsunderlag",
    ],
  },
  {
    icon: Cpu,
    title: "Fastighetsautomation",
    description:
      "Smart styrning av belysning, värme, ventilation och säkerhet — vi integrerar system som gör fastigheten mer effektiv och bekväm.",
    longDescription:
      "Med fastighetsautomation får du kontroll över belysning, värme, ventilation och säkerhet från en och samma plattform. Vi anpassar lösningen efter fastighetens behov.",
    features: [
      "Centraliserad styrning av fastighetssystem",
      "Integration av belysning, värme och ventilation",
      "Energiövervakning och optimering",
      "Larm och säkerhetsfunktioner",
      "Skräddarsydda lösningar för stora och små fastigheter",
    ],
  },
  {
    icon: Cog,
    title: "Automation",
    description:
      "Automatiserade lösningar för hem och industri. Vi programmerar och installerar styrsystem som förenklar vardagen och sparar energi.",
    longDescription:
      "Automation handlar om att få tekniken att arbeta för dig. Vi programmerar och installerar styrsystem för både privathem och industriella tillämpningar.",
    features: [
      "Programmering av PLC och styrsystem",
      "Automatiserade processer i industri och lager",
      "Smart styrning av pump, fläkt och motorer",
      "Fjärrövervakning och driftlarm",
      "Energibesparande reglering",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Datanätverk & inbrottslarm",
    description:
      "Nätverksinstallation, robusta datauttag och säkra inbrottslarm — vi ser till att både uppkoppling och trygghet fungerar felfritt.",
    longDescription:
      "En stabil uppkoppling och ett pålitligt larm är viktigt i varje modern fastighet. Vi installerar strukturerade datanätverk och inbrottslarm som skyddar hem och företag.",
    features: [
      "Installation av nätverkskablar och datauttag",
      "Router- och switch-konfiguration",
      "Trådlösa nätverk och täckningslösningar",
      "Montering av inbrottslarm och detektorer",
      "Koppling till larmcentral",
    ],
  },
];

const Services = () => {
  const [selectedService, setSelectedService] = useState<ServiceDetail | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const openService = (service: ServiceDetail) => {
    setSelectedService(service);
    setModalOpen(true);
  };

  return (
    <section id="services" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <p className="text-eyebrow text-brand mb-4">Tjänster</p>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
            Allt en elektriker ska göra — och lite till.
          </h2>
          <p className="text-lg text-muted-foreground mt-6">
            Vi tar hand om både små servicejobb och kompletta installationer. Klicka på ett kort
            för att läsa mer om varje tjänst.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <button
              key={s.title}
              onClick={() => openService(s)}
              className="group text-left p-8 rounded-xl bg-card border border-border hover:border-brand/60 hover:shadow-card hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand/50"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-md bg-brand/10 text-brand mb-5 group-hover:bg-brand group-hover:text-brand-foreground transition-colors">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-5">{s.description}</p>
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-brand group-hover:gap-3 transition-all">
                Läs mer <ArrowRight className="h-4 w-4" />
              </span>
            </button>
          ))}
        </div>
      </div>

      <ServiceModal
        service={selectedService}
        open={modalOpen}
        onOpenChange={setModalOpen}
      />
    </section>
  );
};

export default Services;
