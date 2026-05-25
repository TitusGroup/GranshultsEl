import Navigation from "@/components/Navigation";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const ContactPage = () => (
  <div className="min-h-screen">
    <Navigation />
    <main className="pt-24">
      <header className="container mx-auto px-6 pt-12 pb-4">
        <p className="text-eyebrow text-brand mb-3">Kontakt</p>
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight max-w-3xl">
          Hör av dig — vi hjälper dig vidare.
        </h1>
      </header>
      <Contact />
    </main>
    <Footer />
  </div>
);

export default ContactPage;
