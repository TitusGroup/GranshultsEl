import { useRef, useState } from "react";
import { z } from "zod";
import { Phone, Mail, MapPin, Clock, Send, Upload, X, ImageIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { company } from "@/lib/company";
import { supabase } from "@/integrations/supabase/client";

const schema = z.object({
  name: z.string().trim().min(2, "Ange ditt namn").max(100),
  email: z.string().trim().email("Ogiltig e-postadress").max(255),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  message: z.string().trim().min(5, "Skriv ett kort meddelande").max(2000),
});

const MAX_FILES = 8;
const MAX_SIZE = 10 * 1024 * 1024; // 10 MB
const ACCEPTED = ["image/jpeg", "image/png", "image/webp", "image/heic", "image/heif"];

const Contact = () => {
  const [submitting, setSubmitting] = useState(false);
  const [files, setFiles] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const addFiles = (incoming: FileList | null) => {
    if (!incoming) return;
    const list = Array.from(incoming);
    const valid: File[] = [];
    for (const f of list) {
      if (!ACCEPTED.includes(f.type)) {
        toast({ title: "Filtyp stöds ej", description: `${f.name} är inte en bild.`, variant: "destructive" });
        continue;
      }
      if (f.size > MAX_SIZE) {
        toast({ title: "Filen är för stor", description: `${f.name} överstiger 10 MB.`, variant: "destructive" });
        continue;
      }
      valid.push(f);
    }
    setFiles((prev) => [...prev, ...valid].slice(0, MAX_FILES));
  };

  const removeFile = (idx: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== idx));
  };

  const uploadFiles = async (): Promise<string[]> => {
    if (files.length === 0) return [];
    const folder = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
    const urls: string[] = [];
    for (const file of files) {
      const safeName = file.name.replace(/[^a-zA-Z0-9._-]/g, "_");
      const path = `${folder}/${safeName}`;
      const { error } = await supabase.storage
        .from("quote-uploads")
        .upload(path, file, { cacheControl: "3600", upsert: false });
      if (error) throw error;
      const { data } = supabase.storage.from("quote-uploads").getPublicUrl(path);
      urls.push(data.publicUrl);
    }
    return urls;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formEl = e.currentTarget;
    const form = new FormData(formEl);
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
    try {
      let attachmentUrls: string[] = [];
      if (files.length > 0) {
        toast({ title: "Laddar upp bilder...", description: `${files.length} bild(er)` });
        attachmentUrls = await uploadFiles();
      }
      const subject = encodeURIComponent(`Förfrågan från ${parsed.data.name}`);
      const attachmentsText =
        attachmentUrls.length > 0
          ? `\n\nBifogade bilder (${attachmentUrls.length}):\n${attachmentUrls.map((u, i) => `${i + 1}. ${u}`).join("\n")}`
          : "";
      const body = encodeURIComponent(
        `Namn: ${parsed.data.name}\nE-post: ${parsed.data.email}\nTelefon: ${parsed.data.phone || "-"}\n\n${parsed.data.message}${attachmentsText}`
      );
      window.location.href = `mailto:${company.email}?subject=${subject}&body=${body}`;
      toast({
        title: "Tack!",
        description: attachmentUrls.length
          ? "Bilderna är uppladdade och länkarna ligger i mejlet."
          : "Vi öppnar din e-postklient så du kan skicka meddelandet.",
      });
      formEl.reset();
      setFiles([]);
    } catch (err) {
      console.error(err);
      toast({
        title: "Kunde inte ladda upp bilder",
        description: "Försök igen eller skicka utan bilder.",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
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

            {/* Bilduppladdning */}
            <div>
              <Label>Bilder (elcentral, rum m.m.)</Label>
              <p className="text-xs text-muted-foreground mt-1 mb-2">
                Max {MAX_FILES} bilder, 10 MB per bild. JPG, PNG eller WEBP.
              </p>

              <input
                ref={fileInputRef}
                type="file"
                accept={ACCEPTED.join(",")}
                multiple
                className="hidden"
                onChange={(e) => {
                  addFiles(e.target.files);
                  e.target.value = "";
                }}
              />

              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                disabled={files.length >= MAX_FILES}
                className="w-full flex flex-col items-center justify-center gap-2 py-6 rounded-md border-2 border-dashed border-border hover:border-brand hover:bg-brand/5 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Upload className="h-5 w-5 text-brand" />
                <span className="text-sm font-medium">
                  {files.length >= MAX_FILES ? "Max antal bilder valda" : "Klicka för att välja bilder"}
                </span>
                <span className="text-xs text-muted-foreground">eller dra och släpp</span>
              </button>

              {files.length > 0 && (
                <ul className="mt-3 space-y-2">
                  {files.map((file, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-3 p-2 rounded-md bg-muted/50 border border-border"
                    >
                      <ImageIcon className="h-4 w-4 text-brand shrink-0" />
                      <span className="text-sm truncate flex-1">{file.name}</span>
                      <span className="text-xs text-muted-foreground shrink-0">
                        {(file.size / 1024 / 1024).toFixed(1)} MB
                      </span>
                      <button
                        type="button"
                        onClick={() => removeFile(idx)}
                        className="p-1 rounded hover:bg-background text-muted-foreground hover:text-foreground"
                        aria-label="Ta bort"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </li>
                  ))}
                </ul>
              )}
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
