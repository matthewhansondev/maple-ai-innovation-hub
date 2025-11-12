import { Shield, Target, Eye, Heart } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Government Badge */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 border border-primary/20 rounded-2xl p-8 text-center hover-lift">
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
          <div className="bg-card border border-border rounded-2xl p-8 hover-lift group">
            <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Target className="text-white" size={28} />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
            <p className="text-muted-foreground">
              To advance artificial intelligence through global collaboration, scientific research, 
              and innovation, connecting brilliant minds across continents to solve humanity's greatest challenges.
            </p>
          </div>

          <div className="bg-card border border-border rounded-2xl p-8 hover-lift group">
            <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Eye className="text-white" size={28} />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
            <p className="text-muted-foreground">
              A world where AI innovation drives sustainable progress, empowers communities globally, 
              and creates opportunities for entrepreneurs, researchers, and visionaries.
            </p>
          </div>

          <div className="bg-card border border-border rounded-2xl p-8 hover-lift group">
            <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Heart className="text-white" size={28} />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Our Values</h3>
            <p className="text-muted-foreground">
              Scientific excellence, ethical innovation, global collaboration, transparency, 
              and commitment to advancing AI for the benefit of all humanity.
            </p>
          </div>
        </div>

        {/* Story Section */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-card border border-border rounded-2xl p-12 hover-lift">
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
    </section>
  );
};

export default AboutSection;
