import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Shield, Target, Eye, Heart } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About <span className="text-gradient">Maple AI</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              A leading innovation foundation operating under the supervision of the Government of Canada
            </p>
          </div>

          {/* Government Badge */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 border border-primary/20 rounded-2xl p-8 text-center">
              <Shield className="mx-auto mb-4 text-primary" size={48} />
              <h3 className="text-2xl font-semibold mb-3">
                Officially Supervised by the Government of Canada
              </h3>
              <p className="text-muted-foreground">
                As an organization operating under Canadian government oversight, we maintain the highest 
                standards of scientific integrity, ethical AI development, and international collaboration.
              </p>
            </div>
          </div>

          {/* Mission, Vision, Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            <div className="bg-card border border-border rounded-2xl p-8 hover-lift">
              <Target className="text-primary mb-4" size={40} />
              <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
              <p className="text-muted-foreground">
                To advance artificial intelligence through global collaboration, scientific research, 
                and innovation, connecting brilliant minds across continents to solve humanity's greatest challenges.
              </p>
            </div>

            <div className="bg-card border border-border rounded-2xl p-8 hover-lift">
              <Eye className="text-secondary mb-4" size={40} />
              <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
              <p className="text-muted-foreground">
                A world where AI innovation drives sustainable progress, empowers communities globally, 
                and creates opportunities for entrepreneurs, researchers, and visionaries.
              </p>
            </div>

            <div className="bg-card border border-border rounded-2xl p-8 hover-lift">
              <Heart className="text-accent mb-4" size={40} />
              <h3 className="text-2xl font-semibold mb-4">Our Values</h3>
              <p className="text-muted-foreground">
                Scientific excellence, ethical innovation, global collaboration, transparency, 
                and commitment to advancing AI for the benefit of all humanity.
              </p>
            </div>
          </div>

          {/* Story Section */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-card border border-border rounded-2xl p-12">
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  The Maple AI Innovation Foundation was established to bridge the gap between 
                  cutting-edge AI research and real-world applications. With the support and oversight 
                  of the Government of Canada, we have built a thriving ecosystem that nurtures innovation.
                </p>
                <p>
                  Today, we proudly support 2 subsidiary companies and 3 AI-based startups, while 
                  providing opportunities for over 50 talented interns and researchers from around the world. 
                  Our foundation has earned international recognition through multiple gold and silver medals 
                  at prestigious invention competitions across Europe, Asia, and the Middle East.
                </p>
                <p>
                  We continue to expand our global network, partnering with leading academic institutions, 
                  research centers, and technology companies to push the boundaries of what's possible 
                  in artificial intelligence and innovation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
