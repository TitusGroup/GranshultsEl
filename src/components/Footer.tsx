import { Link } from "react-router-dom";
import { Zap, Phone, Mail, MapPin } from "lucide-react";
import { company } from "@/lib/company";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 py-16 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-brand text-brand-foreground">
              <Zap className="h-5 w-5" strokeWidth={2.5} />
            </span>
            <span className="font-semibold text-lg">{company.shortName}</span>
          </div>
          <p className="text-primary-foreground/70 max-w-md">
            {company.tagline}. Behörigt elinstallationsföretag — el, solceller, laddboxar och service.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Sidor</h4>
          <ul className="space-y-2 text-primary-foreground/70">
            <li><Link to="/services" className="hover:text-brand">Tjänster</Link></li>
            <li><Link to="/work" className="hover:text-brand">Vårt arbete</Link></li>
            <li><Link to="/about" className="hover:text-brand">Om oss</Link></li>
            <li><Link to="/contact" className="hover:text-brand">Kontakt</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Kontakt</h4>
          <ul className="space-y-3 text-primary-foreground/70">
            <li className="flex items-start gap-2">
              <Phone className="h-4 w-4 mt-1 text-brand" />
              <a href={company.phoneHref} className="hover:text-brand">{company.phone}</a>
            </li>
            <li className="flex items-start gap-2">
              <Mail className="h-4 w-4 mt-1 text-brand" />
              <a href={company.emailHref} className="hover:text-brand break-all">{company.email}</a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="h-4 w-4 mt-1 text-brand" />
              <span>{company.area}</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-6 py-6 text-sm text-primary-foreground/60 flex flex-wrap items-center justify-between gap-2">
          <span>© {new Date().getFullYear()} {company.name}. Alla rättigheter förbehållna.</span>
          <span>Behörigt elinstallationsföretag · Reg. hos Elsäkerhetsverket</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
