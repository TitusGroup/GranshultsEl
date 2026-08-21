import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X, ImageIcon, ArrowRight, Phone } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface ServiceDetail {
  icon: LucideIcon;
  title: string;
  description: string;
  longDescription: string;
  features: string[];
  images?: string[];
}

interface ServiceModalProps {
  service: ServiceDetail | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ServiceModal = ({ service, open, onOpenChange }: ServiceModalProps) => {
  if (!service) return null;

  const Icon = service.icon;

  const scrollToContact = () => {
    onOpenChange(false);
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl w-[calc(100%-2rem)] p-0 overflow-hidden border-border bg-card rounded-xl shadow-2xl max-h-[90vh] overflow-y-auto">
        {/* Image gallery / placeholder area */}
        <div className="relative w-full h-64 sm:h-80 bg-muted">
          {service.images && service.images.length > 0 ? (
            <div
              className={`grid h-full gap-1 ${
                service.images.length === 1
                  ? "grid-cols-1 grid-rows-1"
                  : service.images.length === 2
                  ? "grid-cols-2 grid-rows-1"
                  : service.images.length === 3
                  ? "grid-cols-3 grid-rows-1"
                  : "grid-cols-2 grid-rows-2"
              }`}
            >
              {service.images.slice(0, 4).map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`${service.title} ${i + 1}`}
                  className="w-full h-full object-cover"
                />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-full text-muted-foreground">
              <div className="grid grid-cols-2 gap-3 opacity-40">
                <ImageIcon className="h-10 w-10" />
                <ImageIcon className="h-10 w-10" />
                <ImageIcon className="h-10 w-10" />
                <ImageIcon className="h-10 w-10" />
              </div>
              <p className="mt-4 text-sm font-medium">Bilder kommer snart</p>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
          <button
            onClick={() => onOpenChange(false)}
            className="absolute top-4 right-4 p-2 rounded-full bg-background/80 backdrop-blur-sm text-foreground hover:bg-background transition-colors"
            aria-label="Stäng"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-10 -mt-12 relative z-10">
          <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-brand text-brand-foreground mb-5 shadow-lg">
            <Icon className="h-7 w-7" />
          </div>

          <DialogHeader className="text-left mb-6">
            <DialogTitle className="text-2xl sm:text-3xl font-semibold tracking-tight mb-3">
              {service.title}
            </DialogTitle>
            <DialogDescription className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              {service.longDescription}
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-3 mb-8">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground/80">
              Detta ingår
            </h4>
            <ul className="grid sm:grid-cols-2 gap-3">
              {service.features.map((feature, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 p-3 rounded-lg bg-background border border-border"
                >
                  <ArrowRight className="h-5 w-5 text-brand shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-foreground/90">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <Button
              onClick={scrollToContact}
              className="bg-brand hover:bg-brand/90 text-brand-foreground font-semibold px-6 py-6 text-base rounded-lg transition-colors"
            >
              Be om offert
            </Button>
            <Button
              variant="outline"
              onClick={() => onOpenChange(false)}
              className="font-medium px-6 py-6 text-base rounded-lg border-border hover:bg-muted transition-colors"
            >
              Stäng
            </Button>
          </div>

          <div className="mt-8 pt-6 border-t border-border flex items-center gap-3 text-muted-foreground">
            <Phone className="h-5 w-5 text-brand" />
            <span className="text-sm">
              Frågor? Ring oss på{" "}
              <a
                href="tel:0707200021"
                className="font-semibold text-foreground hover:text-brand transition-colors"
              >
                070-720 00 21
              </a>
            </span>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ServiceModal;
