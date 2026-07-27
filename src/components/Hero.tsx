import { Button } from "@/components/ui/button";
import { Phone, ArrowRight, ShieldCheck, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { company } from "@/lib/company";

const Hero = () => {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-[hsl(222_60%_10%)]">
      {/* Logo watermark background */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(222_60%_10%)] via-[hsl(222_55%_13%)] to-[hsl(212_50%_18%)]" />
        
        {/* Large subtle logo text */}
        <span 
          className="select-none whitespace-nowrap font-bold tracking-tighter text-[18vw] md:text-[16vw] lg:text-[14vw] text-white/[0.04]"
          aria-hidden="true"
        >
          {company.shortName}
        </span>

        {/* Decorative rings */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] rounded-full border border-white/[0.04]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[45vw] h-[45vw] rounded-full border border-white/[0.06]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30vw] h-[30vw] rounded-full border border-brand/10" />

        {/* Soft glow orbs */}
        <div className="absolute top-[20%] right-[15%] w-64 h-64 rounded-full bg-brand/10 blur-[100px]" />
        <div className="absolute bottom-[20%] left-[10%] w-80 h-80 rounded-full bg-[hsl(222_60%_25%)]/20 blur-[120px]" />
      </div>

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
            {" "}{company.name} hjälper företag och privatpersoner i Bankeryd och hela Jönköpingsområdet.
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
