import ArticlesSection from "@/components/sections/GridArtikel";
import FeaturesSection from "@/components/sections/Features";
import { FloatingButtons } from "@/components/sections/FloatingButton";
import NotarisProfile from "@/components/sections/NotarisProfile";
import ProcessSection from "@/components/sections/Process";
import TestimonialsSection from "@/components/sections/Testimonials";
import AboutSection from "../components/sections/About";
import Footer from "../components/sections/Footer";
import HeroSection from "../components/sections/Hero";
import Navbar from "../components/sections/Navbar";

function Homepage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <NotarisProfile />
        <ProcessSection />
        <FeaturesSection />
        <ArticlesSection />
        <TestimonialsSection />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}

export default Homepage;
