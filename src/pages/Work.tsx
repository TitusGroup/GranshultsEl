import Navigation from "@/components/Navigation";
import WorkCarousel from "@/components/WorkCarousel";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const WorkPage = () => (
  <div className="min-h-screen">
    <Navigation />
    <main className="pt-24">
      <header className="container mx-auto px-6 pt-12 pb-4">
        <p className="text-eyebrow text-brand mb-3">Vårt arbete</p>
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight max-w-3xl">
          Projekt vi är stolta över.
        </h1>
      </header>
      <WorkCarousel />
      <Contact />
    </main>
    <Footer />
  </div>
);

export default WorkPage;
