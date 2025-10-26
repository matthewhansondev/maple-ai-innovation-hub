import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Calendar, MapPin, Users, Video } from "lucide-react";
import { Button } from "@/components/ui/button";

const Programs = () => {
  const upcomingEvents = [
    {
      title: "Global AI Innovation Summit 2025",
      date: "March 15-17, 2025",
      location: "Toronto, Canada",
      attendees: "500+ Expected",
      type: "Conference"
    },
    {
      title: "AI for Healthcare Workshop",
      date: "April 22, 2025",
      location: "Virtual Event",
      attendees: "200+ Registered",
      type: "Workshop"
    },
    {
      title: "Startup Pitch Competition",
      date: "May 10, 2025",
      location: "Vancouver, Canada",
      attendees: "50 Startups",
      type: "Competition"
    }
  ];

  const pastEvents = [
    {
      title: "International AI Research Symposium",
      date: "September 2024",
      location: "Montreal, Canada",
      description: "Showcased groundbreaking research from 30+ countries"
    },
    {
      title: "Innovation Bootcamp",
      date: "July 2024",
      location: "Ottawa, Canada",
      description: "Intensive training program for 40 AI entrepreneurs"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Programs & <span className="text-gradient">Events</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Join our global community through conferences, workshops, and innovation challenges
            </p>
          </div>

          {/* Upcoming Events */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-8">Upcoming Events</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {upcomingEvents.map((event, index) => (
                <div key={index} className="bg-card border border-border rounded-2xl p-6 hover-lift">
                  <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full mb-4">
                    {event.type}
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{event.title}</h3>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar size={16} className="mr-2" />
                      {event.date}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin size={16} className="mr-2" />
                      {event.location}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Users size={16} className="mr-2" />
                      {event.attendees}
                    </div>
                  </div>
                  <Button className="w-full bg-gradient-primary hover:opacity-90">
                    Register Now
                  </Button>
                </div>
              ))}
            </div>
          </section>

          {/* Past Events */}
          <section>
            <h2 className="text-3xl font-bold mb-8">Past Events</h2>
            <div className="space-y-6">
              {pastEvents.map((event, index) => (
                <div key={index} className="bg-card border border-border rounded-2xl p-8 hover-lift">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <h3 className="text-2xl font-semibold mb-2">{event.title}</h3>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                        <div className="flex items-center">
                          <Calendar size={16} className="mr-2" />
                          {event.date}
                        </div>
                        <div className="flex items-center">
                          <MapPin size={16} className="mr-2" />
                          {event.location}
                        </div>
                      </div>
                      <p className="text-muted-foreground">{event.description}</p>
                    </div>
                    <Button variant="outline" className="shrink-0">
                      <Video size={16} className="mr-2" />
                      View Highlights
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Programs;
