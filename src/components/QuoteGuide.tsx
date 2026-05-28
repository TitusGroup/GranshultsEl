import { ClipboardList, Ruler, Camera, CalendarClock, Wrench, Receipt } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const steps = [
  {
    icon: ClipboardList,
    title: "1. Beskriv jobbet",
    text: "Berätta kort vad du vill ha gjort — t.ex. ny belysning, laddbox, solceller eller felsökning.",
  },
  {
    icon: Camera,
    title: "2. Skicka bilder",
    text: "Bilder på elcentral, rum eller plats hjälper oss att bedöma omfattning på distans.",
  },
  {
    icon: CalendarClock,
    title: "3. Vi återkommer",
    text: "Du får svar inom 24 timmar på vardagar med förslag, tidplan och prisindikation.",
  },
  {
    icon: Wrench,
    title: "4. Utförande",
    text: "Vi bokar tid som passar dig och utför arbetet enligt gällande regler och egenkontroll.",
  },
];

const checklist = [
  "Adress och typ av fastighet (villa, lägenhet, lokal)",
  "Vad som ska göras — så detaljerat du kan",
  "Bilder på elcentral och berörda utrymmen",
  "Önskad tidsram eller deadline",
  "Eventuellt ROT-avdrag och personnummer (vid privatperson)",
];

const priceFactors = [
  {
    icon: Ruler,
    title: "Omfattning & material",
    text: "Antal punkter, kabellängd och val av armaturer/komponenter påverkar både tid och materialkostnad.",
  },
  {
    icon: Wrench,
    title: "Befintlig installation",
    text: "Ålder och skick på elcentral och kablage kan kräva uppgradering innan nytt kopplas in.",
  },
  {
    icon: Receipt,
    title: "ROT-avdrag",
    text: "Privatpersoner kan dra av 30 % på arbetskostnaden (upp till gällande tak). Vi sköter ansökan.",
  },
];

const faqs = [
  {
    q: "Vad kostar en elektriker i timmen?",
    a: "Vi arbetar med transparent timpris och fast pris vid större jobb. Du får alltid en prisindikation innan vi börjar — inga överraskningar på fakturan.",
  },
  {
    q: "Gör ni ROT-avdraget åt mig?",
    a: "Ja. Som privatperson drar vi av ROT direkt på fakturan (30 % på arbetskostnaden upp till gällande tak) och ansöker hos Skatteverket åt dig.",
  },
  {
    q: "Hur snabbt kan ni komma ut?",
    a: "Akuta fel prioriterar vi samma eller nästa vardag. Planerade jobb bokas oftast inom 1–2 veckor beroende på säsong.",
  },
  {
    q: "Är ni behöriga och försäkrade?",
    a: "Ja, vi är registrerade hos Elsäkerhetsverket och har full ansvarsförsäkring. Allt arbete dokumenteras med egenkontroll.",
  },
  {
    q: "Installerar ni laddbox och solceller?",
    a: "Ja. Vi installerar laddboxar för elbil samt kompletta solcellsanläggningar inklusive växelriktare och anmälan till nätägare.",
  },
  {
    q: "Vilket område täcker ni?",
    a: "Vi utgår från Bankeryd och jobbar i hela Jönköpingsområdet. Hör av dig om du är osäker — vi löser det oftast.",
  },
];

const QuoteGuide = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        {/* Process */}
        <div className="max-w-3xl mb-14">
          <p className="text-eyebrow text-brand mb-3">Så funkar det</p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
            Från första kontakt till färdigt jobb.
          </h2>
          <p className="text-lg text-muted-foreground">
            En enkel process där du vet vad som händer i varje steg.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-20">
          {steps.map((s) => (
            <div
              key={s.title}
              className="p-6 rounded-lg bg-card border border-border shadow-card"
            >
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-md bg-brand/10 text-brand mb-4">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="font-semibold mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.text}</p>
            </div>
          ))}
        </div>

        {/* Checklist + price factors */}
        <div className="grid lg:grid-cols-2 gap-10 mb-20">
          <div className="p-8 rounded-lg bg-muted/40 border border-border">
            <p className="text-eyebrow text-brand mb-3">Inför offert</p>
            <h3 className="text-2xl font-semibold tracking-tight mb-5">
              Det här behöver jag av dig
            </h3>
            <ul className="space-y-3">
              {checklist.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand shrink-0" />
                  <span className="text-foreground/90">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-eyebrow text-brand mb-3">Prisfaktorer</p>
            <h3 className="text-2xl font-semibold tracking-tight mb-5">
              Vad påverkar priset?
            </h3>
            <div className="space-y-4">
              {priceFactors.map((f) => (
                <div key={f.title} className="flex items-start gap-4">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-md bg-brand/10 text-brand shrink-0">
                    <f.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{f.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{f.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-eyebrow text-brand mb-3">Vanliga frågor</p>
            <h3 className="text-3xl md:text-4xl font-semibold tracking-tight">
              FAQ
            </h3>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-left text-base font-semibold">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default QuoteGuide;
