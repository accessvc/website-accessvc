import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import Footer from "@/components/Footer";
import { MapPin, Mail } from "lucide-react";
import ReactCountryFlag from "react-country-flag";

const Contact = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />

      <div className="flex-grow" style={{ backgroundColor: '#e0fefe' }}>

      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-8 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Building something extraordinary?
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We'd love to hear from you
            </p>
          </div>

          {/* Send us a message */}
          <div className="max-w-md mx-auto mb-16">
            <Card className="border-border bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-300">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-foreground mb-6">Send us a message</h2>
                <div className="text-center">
                  <a href="mailto:team@accessvc.co" className="inline-flex items-center gap-3 px-6 py-3 bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg font-medium transition-colors duration-200 shadow-lg hover:shadow-xl">
                    <Mail size={20} />
                    team@accessvc.co
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Office Locations */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-foreground mb-8 text-center">Our Offices</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <Card className="border-white/30 bg-white/10 backdrop-blur-sm hover:bg-white/20 hover:shadow-2xl transition-all duration-500 hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="mb-3">
                    <ReactCountryFlag countryCode="KR" svg style={{ width: '28px', height: '20px' }} />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">Seoul</h3>
                  <div className="mb-3">
                    <MapPin size={24} className="inline text-primary" />
                  </div>
                </CardContent>
              </Card>

              <Card className="border-white/30 bg-white/10 backdrop-blur-sm hover:bg-white/20 hover:shadow-2xl transition-all duration-500 hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="mb-3">
                    <ReactCountryFlag countryCode="HK" svg style={{ width: '28px', height: '20px' }} />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">Hong Kong</h3>
                    <div className="mb-3">
                    <MapPin size={24} className="inline text-primary" />
                    </div>
                </CardContent>
              </Card>

              <Card className="border-white/30 bg-white/10 backdrop-blur-sm hover:bg-white/20 hover:shadow-2xl transition-all duration-500 hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="mb-3">
                    <ReactCountryFlag countryCode="VN" svg style={{ width: '28px', height: '20px' }} />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">Ho Chi Minh</h3>
                  <div className="mb-3">
                    <MapPin size={24} className="inline text-primary" />
                  </div>
                </CardContent>
              </Card>

              <Card className="border-white/30 bg-white/10 backdrop-blur-sm hover:bg-white/20 hover:shadow-2xl transition-all duration-500 hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="mb-3">
                    <ReactCountryFlag countryCode="ID" svg style={{ width: '28px', height: '20px' }} />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">Jakarta</h3>
                  <div className="mb-3">
                    <MapPin size={24} className="inline text-primary" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      </div>

      <Footer />
    </div>
  );
};

export default Contact;
