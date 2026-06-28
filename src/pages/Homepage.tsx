import HeroSection from "../components/sections/Hero";
import AboutSection from "../components/sections/About";
import Footer from "../components/sections/Footer";
import Navbar from "../components/sections/Navbar";
import ArticlesSection from "@/components/sections/Articles";
import NotarisProfile from "@/components/sections/NotarisProfile";
import ProcessSection from "@/components/sections/Process";
import FeaturesSection from "@/components/sections/Features";
import { FloatingButtons } from "@/components/sections/FloatingButton";
import TestimonialsSection from "@/components/sections/Testimonials";

function Homepage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <NotarisProfile />
        {/* <ServicesSection /> */}
        <ProcessSection />
        <FeaturesSection />
        <ArticlesSection />
        <TestimonialsSection />
        {/* <GallerySection />
        <FAQSection />
        <ContactSection /> */}
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}

export default Homepage;
