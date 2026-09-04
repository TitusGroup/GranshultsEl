import { ShieldCheck, Award, Clock, Users } from "lucide-react";
import { company } from "@/lib/company";
import electricianImg from "@/assets/about-electrician.jpg.asset.json";

const stats = [
  { icon: Award, label: "Års erfarenhet", value: "15+" },
  { icon: Users, label: "Nöjda kunder", value: "500+" },
  { icon: ShieldCheck, label: "Behörig elinstallatör", value: "Ja" },
  { icon: Clock, label: "Svarstid", value: "< 24h" },
];

const About = () => {
  return (
    <section id="about" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background image of the electrician */}
      <img
        src={electricianImg.url}
        alt="Andreas, elektriker på Granshults el"
        className="absolute inset-0 w-full h-full object-cover object-top"
      />
      {/* Gradient overlays for readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30" />

      <div className="container relative z-10 mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="bg-background/75 backdrop-blur-md rounded-2xl p-8 md:p-10 border border-border/50 shadow-xl">
            <p className="text-eyebrow text-brand mb-4">Om {company.name}</p>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
              Lokal elektriker du kan lita på.
            </h2>
            <div className="space-y-5 text-lg text-muted-foreground leading-relaxed mb-10">
              <p>
                {company.name} drivs av Andreas och är baserad i Bankeryd. Vi arbetar med
                både privatpersoner och företag i Jönköping med omnejd — och vår filosofi är
                enkel: ärlig kommunikation, rent jobb och el som håller över tid.
              </p>
              <p>
                Som behörigt elinstallationsföretag är vi registrerade hos Elsäkerhetsverket.
                Du får tydliga prisuppgifter, ROT-avdrag direkt på fakturan och garanti på
                utfört arbete.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <div key={s.label} className="p-5 rounded-lg bg-muted/60 border border-border">
                  <s.icon className="h-6 w-6 text-brand mb-3" />
                  <div className="text-3xl font-semibold">{s.value}</div>
                  <div className="text-sm text-muted-foreground mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden lg:block" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
};

export default About;
