import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import MissionSection from "@/components/MissionSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <MissionSection />
      <Footer />
    </div>
  );
};

export default Index;
