import { useState } from "react";
import { z } from "zod";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { company } from "@/lib/company";

const schema = z.object({
  name: z.string().trim().min(2, "Ange ditt namn").max(100),
  email: z.string().trim().email("Ogiltig e-postadress").max(255),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  message: z.string().trim().min(5, "Skriv ett kort meddelande").max(2000),
});

const Contact = () => {
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const data = {
      name: String(form.get("name") || ""),
      email: String(form.get("email") || ""),
      phone: String(form.get("phone") || ""),
      message: String(form.get("message") || ""),
    };
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      toast({
        title: "Kontrollera formuläret",
        description: parsed.error.issues[0]?.message ?? "Något blev fel.",
        variant: "destructive",
      });
      return;
    }
    setSubmitting(true);
    const subject = encodeURIComponent(`Förfrågan från ${parsed.data.name}`);
    const body = encodeURIComponent(
      `Namn: ${parsed.data.name}\nE-post: ${parsed.data.email}\nTelefon: ${parsed.data.phone || "-"}\n\n${parsed.data.message}`
    );
    window.location.href = `mailto:${company.email}?subject=${subject}&body=${body}`;
    setTimeout(() => {
      setSubmitting(false);
      toast({ title: "Tack!", description: "Vi öppnar din e-postklient så du kan skicka meddelandet." });
      (e.target as HTMLFormElement).reset();
    }, 500);
  };

  const info = [
    { icon: Phone, label: "Telefon", value: company.phone, href: company.phoneHref },
    { icon: Mail, label: "E-post", value: company.email, href: company.emailHref },
    { icon: MapPin, label: "Område", value: company.area },
    { icon: Clock, label: "Öppettider", value: company.hours },
  ];

  return (
    <section id="contact" className="py-24 md:py-32 bg-muted/40">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <p className="text-eyebrow text-brand mb-4">Kontakt</p>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
              Få hjälp av en elektriker — idag.
            </h2>
            <p className="text-lg text-muted-foreground mb-10">
              Beskriv ditt projekt eller problem så återkommer vi med förslag och pris.
              Ring gärna direkt om det är akut.
            </p>

            <div className="space-y-5">
              {info.map((i) => (
                <div key={i.label} className="flex items-start gap-4">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-md bg-brand/10 text-brand shrink-0">
                    <i.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">{i.label}</div>
                    {i.href ? (
                      <a href={i.href} className="text-lg font-medium hover:text-brand transition-colors">
                        {i.value}
                      </a>
                    ) : (
                      <div className="text-lg font-medium">{i.value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="p-8 rounded-lg bg-card border border-border shadow-card space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name">Namn *</Label>
                <Input id="name" name="name" required maxLength={100} className="mt-1.5" />
              </div>
              <div>
                <Label htmlFor="phone">Telefon</Label>
                <Input id="phone" name="phone" type="tel" maxLength={40} className="mt-1.5" />
              </div>
            </div>
            <div>
              <Label htmlFor="email">E-post *</Label>
              <Input id="email" name="email" type="email" required maxLength={255} className="mt-1.5" />
            </div>
            <div>
              <Label htmlFor="message">Meddelande *</Label>
              <Textarea
                id="message"
                name="message"
                required
                rows={6}
                maxLength={2000}
                placeholder="Beskriv vad du behöver hjälp med, adress och eventuell tidsram."
                className="mt-1.5"
              />
            </div>
            <Button
              type="submit"
              disabled={submitting}
              className="w-full bg-brand text-brand-foreground hover:bg-brand/90"
              size="lg"
            >
              <Send className="h-4 w-4" />
              {submitting ? "Skickar..." : "Skicka förfrågan"}
            </Button>
            <p className="text-xs text-muted-foreground text-center">
              Vi svarar normalt inom 24 timmar på vardagar.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
