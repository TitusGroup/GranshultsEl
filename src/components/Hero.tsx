import { Button } from "@/components/ui/button";
import { Phone, ArrowRight, ShieldCheck, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-electrician.jpg";
import { company } from "@/lib/company";

const Hero = () => {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden">
      <img
        src={heroImage}
        alt="Elektriker från Granshults el arbetar med elcentral"
        width={1920}
        height={1080}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-hero" />

      <div className="relative z-10 container mx-auto px-6 py-32">
        <div className="max-w-3xl reveal">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur px-4 py-1.5 text-white/90 text-xs font-medium border border-white/15 mb-6">
            <MapPin className="h-3.5 w-3.5" /> {company.area}
          </div>
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white leading-[1.05] mb-6">
            Trygg el utförd av <span className="text-brand">certifierade</span> elektriker.
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mb-10">
            Från elinstallation och solceller till laddboxar och felsökning —
            {" "}{company.name} hjälper privatpersoner och företag i Bankeryd och hela Jönköpingsområdet.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="bg-brand text-brand-foreground hover:bg-brand/90">
              <a href={company.phoneHref}>
                <Phone className="h-4 w-4" /> Ring {company.phone}
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-white/10 text-white border-white/30 hover:bg-white/20 hover:text-white">
              <Link to="/contact">
                Begär offert <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-white/85 text-sm reveal-delayed">
            <span className="flex items-center gap-2"><ShieldCheck className="h-4 w-4" /> Behörigt elinstallationsföretag</span>
            <span className="flex items-center gap-2"><ShieldCheck className="h-4 w-4" /> ROT-avdrag direkt på fakturan</span>
            <span className="flex items-center gap-2"><ShieldCheck className="h-4 w-4" /> Fast pris eller löpande</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
