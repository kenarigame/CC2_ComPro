function Homepage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <NotarisProfile />
        <ServicesSection />
        <ProcessSection />
        <FeaturesSection />
        <ArticlesSection />
        <TestimonialsSection />
        <GallerySection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}

export default Homepage;
