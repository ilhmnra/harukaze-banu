import { Header } from './components/header';
import { HeroSection } from './components/hero-section';
import { AboutSection } from './components/about-section';
import { ServicesSection } from './components/services-section';
import { TeachersSection } from './components/teachers-section';
import { ContactSection } from './components/contact-section';
import { Footer } from './components/footer';
import { FloatingCTA } from './components/floating-cta';
import { Toaster } from './components/ui/sonner';

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <TeachersSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingCTA />
      <Toaster position="top-right" />
    </div>
  );
}