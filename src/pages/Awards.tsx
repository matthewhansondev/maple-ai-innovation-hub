import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Trophy, Award, Star, Medal } from "lucide-react";

const Awards = () => {
  const awards = [
    {
      title: "Member",
      organization: "International Federation of Inventors' Associations (IFIA)",
      country: "Global",
      flag: "🌍",
      icon: Award,
      color: "from-yellow-500 to-yellow-600"
    },
    {
      title: "Gold Medal",
      organization: "European Inventors Federation",
      country: "Europe",
      flag: "🇪🇺",
      icon: Medal,
      color: "from-yellow-500 to-amber-600"
    },
    {
      title: "Gold Medal",
      organization: "Teknofest World Invention Championships",
      country: "Turkey",
      flag: "🇹🇷",
      icon: Trophy,
      color: "from-yellow-500 to-amber-600"
    },
    {
      title: "Silver Medal",
      organization: "Teknofest World Invention Championships",
      country: "Turkey",
      flag: "🇹🇷",
      icon: Medal,
      color: "from-gray-400 to-gray-500"
    },
    {
      title: "Gold Medal",
      organization: "Global Invention Competition",
      country: "Switzerland",
      flag: "🇨🇭",
      icon: Trophy,
      color: "from-yellow-500 to-amber-600"
    },
    {
      title: "Gold Medal",
      organization: "World Championships",
      country: "Turkey",
      flag: "🇹🇷",
      icon: Medal,
      color: "from-yellow-500 to-amber-600"
    },
    {
      title: "Silver Medal",
      organization: "World Championships",
      country: "Turkey",
      flag: "🇹🇷",
      icon: Medal,
      color: "from-gray-400 to-gray-500"
    },
    {
      title: "Silver Medal",
      organization: "World Championships",
      country: "United Arab Emirates",
      flag: "🇦🇪",
      icon: Medal,
      color: "from-gray-400 to-gray-500"
    },
    {
      title: "Special Award",
      organization: "England Invention Competition",
      country: "England",
      flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
      icon: Star,
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Special Award",
      organization: "World Invention Intellectual Property Associations (WIIPA)",
      country: "Global",
      flag: "🌍",
      icon: Award,
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Special Award",
      organization: "European Union of Inventors Association",
      country: "Europe",
      flag: "🇪🇺",
      icon: Star,
      color: "from-blue-500 to-indigo-600"
    },
    {
      title: "Special Award",
      organization: "France Innovation Competition",
      country: "France",
      flag: "🇫🇷",
      icon: Award,
      color: "from-indigo-500 to-indigo-600"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center max-w-4xl mx-auto mb-16">
            <Trophy className="mx-auto mb-6 text-primary" size={64} />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Awards & <span className="text-gradient">Achievements</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Recognized globally for innovation excellence and groundbreaking inventions
            </p>
          </div>

          {/* Awards Grid */}
          <section className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {awards.map((award, index) => (
                <div 
                  key={index} 
                  className="bg-card border border-border rounded-2xl p-6 hover-lift hover:border-primary/30 transition-all"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-16 h-16 bg-gradient-to-br ${award.color} rounded-xl flex items-center justify-center`}>
                      <award.icon className="text-white" size={32} />
                    </div>
                    <span className="text-4xl">{award.flag}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{award.title}</h3>
                  <p className="text-sm font-medium text-primary mb-2">{award.country}</p>
                  <p className="text-sm text-muted-foreground">{award.organization}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Footer Note */}
          <section className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-card via-card to-primary/5 border border-primary/20 rounded-2xl p-12 text-center">
              <h2 className="text-3xl font-bold mb-4">
                Excellence Through Innovation
              </h2>
              <p className="text-lg text-muted-foreground">
                The medals and awards we have earned represent our inventions and innovative products — 
                demonstrating our commitment to scientific excellence and our dedication to advancing 
                artificial intelligence for the benefit of humanity.
              </p>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Awards;
