import Header from '@/components/Header';
import Hero from '@/components/Hero';
import MenuSection from '@/components/MenuSection';
import ProcessSection from '@/components/ProcessSection';
import Gallery from '@/components/Gallery';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-ink-950">
      <Header />
      <main>
        <Hero />
        <MenuSection />
        <ProcessSection />
        <Gallery />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
