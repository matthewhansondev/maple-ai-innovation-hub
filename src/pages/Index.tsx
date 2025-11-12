import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import MissionSection from "@/components/MissionSection";
import AboutSection from "@/components/AboutSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <MissionSection />
      <AboutSection />
      <Footer />
    </div>
  );
};

export default Index;
