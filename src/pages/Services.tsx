import Navigation from "@/components/Navigation";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const ServicesPage = () => (
  <div className="min-h-screen">
    <Navigation />
    <main className="pt-24">
      <header className="container mx-auto px-6 pt-12 pb-4">
        <p className="text-eyebrow text-brand mb-3">Tjänster</p>
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight max-w-3xl">
          Elinstallation, solceller, laddboxar & service.
        </h1>
      </header>
      <Services />
      <Contact />
    </main>
    <Footer />
  </div>
);

export default ServicesPage;
