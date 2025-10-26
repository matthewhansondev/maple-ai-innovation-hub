import { Globe, Users, Lightbulb, Award } from "lucide-react";

const MissionSection = () => {
  const features = [
    {
      icon: Globe,
      title: "Global Collaboration",
      description: "Connecting innovators, researchers, and institutions across continents to advance AI technology."
    },
    {
      icon: Users,
      title: "Scientific Excellence",
      description: "Bringing together the brightest minds to push the boundaries of artificial intelligence research."
    },
    {
      icon: Lightbulb,
      title: "Innovation First",
      description: "Fostering groundbreaking ideas and transforming them into real-world solutions."
    },
    {
      icon: Award,
      title: "Recognized Impact",
      description: "Award-winning achievements in international invention competitions and AI innovation."
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-gradient">Mission</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            The Maple AI Innovation Foundation connects science, innovation, and entrepreneurship 
            on a global scale. We are dedicated to advancing artificial intelligence through 
            collaborative research, nurturing startups, and fostering international partnerships.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group bg-card border border-border rounded-2xl p-6 hover-lift hover:border-primary/50 transition-all"
            >
              <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <feature.icon className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
