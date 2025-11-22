import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Award, CheckCircle, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const Licensing = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Application Submitted!",
      description: "Thank you for your interest in obtaining a Maple License. Your application has been sent to info@maple-ai.ca and our team will review it shortly.",
    });
  };

  const benefits = [
    "Official recognition from Maple AI Innovation Foundation",
    "Credibility boost for your institution or organization",
    "Access to our global network and resources",
    "Co-branding opportunities on joint initiatives",
    "Priority invitations to exclusive events",
    "Technical support and consultation"
  ];

  const steps = [
    { title: "Submit Application", description: "Complete the licensing application form with details about your organization" },
    { title: "Review Process", description: "Our team evaluates your application based on innovation standards" },
    { title: "Approval & Agreement", description: "Upon approval, sign the licensing agreement" },
    { title: "Certification", description: "Receive your official Maple License certificate" }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Maple AI <span className="text-gradient">Licensing</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Obtain official recognition and certification from Maple AI Innovation Foundation
            </p>
          </div>

          {/* Benefits Section */}
          <section className="mb-16">
            <div className="max-w-4xl mx-auto">
              <div className="bg-card border border-border rounded-2xl p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <Award className="text-primary" size={32} />
                  <h2 className="text-3xl font-bold">Benefits of Maple License</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="text-primary flex-shrink-0 mt-1" size={20} />
                      <p className="text-muted-foreground">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Process Steps */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Licensing Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {steps.map((step, index) => (
                <div key={index} className="relative">
                  <div className="bg-card border border-border rounded-2xl p-6 hover-lift h-full">
                    <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mb-4 text-white font-bold text-lg">
                      {index + 1}
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-border" />
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Application Form */}
          <section className="max-w-2xl mx-auto">
            <div className="bg-card border border-border rounded-2xl p-8">
              <div className="flex items-center space-x-3 mb-6">
                <FileText className="text-primary" size={32} />
                <h2 className="text-3xl font-bold">Apply for Maple License</h2>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="orgName">Organization Name</Label>
                  <Input id="orgName" required className="mt-2" />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="contactName">Contact Person Name</Label>
                    <Input id="contactName" required className="mt-2" />
                  </div>
                  <div>
                    <Label htmlFor="position">Position</Label>
                    <Input id="position" required className="mt-2" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" required className="mt-2" />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" required className="mt-2" />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="country">Country</Label>
                  <Input id="country" required className="mt-2" />
                </div>
                
                <div>
                  <Label htmlFor="website">Organization Website</Label>
                  <Input id="website" type="url" className="mt-2" />
                </div>
                
                <div>
                  <Label htmlFor="description">Organization Description</Label>
                  <Textarea id="description" required className="mt-2" rows={4} />
                </div>
                
                <div>
                  <Label htmlFor="reason">Why do you want a Maple License?</Label>
                  <Textarea id="reason" required className="mt-2" rows={4} />
                </div>
                
                <Button type="submit" className="w-full bg-gradient-primary hover:opacity-90">
                  Submit Application
                </Button>
              </form>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Licensing;
