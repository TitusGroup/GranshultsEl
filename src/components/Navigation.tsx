import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Phone, Menu, X, Zap } from "lucide-react";
import { company } from "@/lib/company";

const links = [
  { to: "/", label: "Hem" },
  { to: "/services", label: "Tjänster" },
  { to: "/work", label: "Vårt arbete" },
  { to: "/about", label: "Om oss" },
  { to: "/contact", label: "Kontakt" },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/85 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 group">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-brand-gradient text-brand-foreground shadow-elegant font-bold text-lg leading-none select-none">
            G
          </span>
          <span className="font-semibold tracking-tight text-foreground text-lg">
            {company.shortName}
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`text-sm font-medium transition-colors ${
                pathname === l.to ? "text-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <Button asChild size="sm" className="bg-brand text-brand-foreground hover:bg-brand/90">
            <a href={company.phoneHref}>
              <Phone className="h-4 w-4" /> {company.phone}
            </a>
          </Button>
        </div>

        <button
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md hover:bg-muted"
          aria-label="Meny"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <div className="container mx-auto px-6 py-6 space-y-4">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setIsOpen(false)}
                className="block text-base font-medium text-muted-foreground hover:text-foreground"
              >
                {l.label}
              </Link>
            ))}
            <div className="flex items-center justify-between pt-4 border-t border-border">
              <ThemeToggle />
              <Button asChild size="sm" className="bg-brand text-brand-foreground hover:bg-brand/90">
                <a href={company.phoneHref}>
                  <Phone className="h-4 w-4" /> Ring oss
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
