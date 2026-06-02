import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WorkCarousel from "@/components/WorkCarousel";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="landing-theme min-h-screen bg-background text-foreground">
      <Navigation />
      <main>
        <Hero />
        <Services />
        <WorkCarousel />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
