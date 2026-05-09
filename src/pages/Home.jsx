import Navigation from "../components/portfolio/Navigation";
import HeroSection from "../components/portfolio/HeroSection";
import ProfileSection from "../components/portfolio/ProfileSection";
import ArtworksSection from "../components/portfolio/ArtworksSection";
import ExhibitionsSection from "../components/portfolio/ExhibitionsSection";
import ContactSection from "../components/portfolio/ContactSection";
import Footer from "../components/portfolio/Footer";

export default function Home() {
  return (
    <div className="font-sans bg-background text-foreground min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <ProfileSection />
        <ArtworksSection />
        <ExhibitionsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}