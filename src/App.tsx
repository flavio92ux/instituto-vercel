import React, { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProgramsSection from './components/ProgramsSection';
import GallerySection from './components/GallerySection';
import TestimonialsSection from './components/TestimonialsSection';
// import NewsEventsSection from './components/NewsEventsSection';
import ContactSection from './components/ContactSection';
import './index.css';

function App() {
  useEffect(() => {
    document.title = 'Instituto Ser Feliz | Industrial - Contagem';
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ProgramsSection />
        <GallerySection />
        <TestimonialsSection />
        {/* <NewsEventsSection /> */}
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;