import Navigation from "@/components/Navigation";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import Achievements from "@/components/Achievements";
import { ArrowRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import Footer from "@/components/Footer";

const partners = [
  {
    name: "Charles Rim",
    role: "General Partner",
    bio: "I started my career as a lawyer and investment banker for the first 14 years of my career. Thereafter, I have had roles as a CFO, CSO, M&A APAC Head, entrepreneur and adtech APAC growth leader before focusing on early stage investing. We understand the various challenges faced by entrepreneurs and have the experience and network to help. One of our key networks that we leverage is Google, where I led APAC M&A for 5 years. Ex-Googlers are pervasive throughout the ecosystem, and we are fortunate to have many as our investors, advisors/ mentors and entrepreneurs.",
    image: "/profiles/cr-mainpage.webp"
  },
  {
    name: "John Chang",
    role: "General Partner",
    bio: "In my 25+ years in finance and investment banking, I have witnessed several cycles of booms and busts. Venture capital is no different in this regard. I’ve learnt what truly matters is having a long term perspective and focusing on the right fundamentals. Leveraging the network of key players I’ve made throughout my career, I believe Access can add true value to the visionary founders that are striving to change the world. Access Ventures does not merely mean access to capital; we are a connection to a rich and cooperative ecosystem.",
    image: "/profiles/jc-mainpage.webp"
  }
];

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Middle background */}
      <div style={{ backgroundColor: '#e0fefe' }}>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/sky-line.webp')] bg-cover bg-center"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl leading-[1.4] md:text-5xl md:leading-[1.4] lg:text-6xl lg:leading-[1.3] font-bold text-foreground mb-6">
              <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Early-stage VC
              </span>
              focused on bridging
              <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                South Korea & Southeast Asia
              </span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Access Ventures is a venture capital firm focusing primarily on <br></br><strong>South Korea, Indonesia, Vietnam, and Singapore</strong>.<br></br>
              We have played pivotal roles in fostering the growth and success of our portfolio companies.
            </p>
            <div className="flex gap-4 justify-center">
              <Link to="/portfolio">
                <Button size="lg" className="group">
                  View Portfolio
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline">
                  Get in Touch
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <Achievements />
        </div>
      </section>

      {/* Portfolio Testimonials */}
      <section className="py-2 px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-2xl font-bold text-foreground mb-4">
              Founders are the Key to our Success
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              We’ve created a valuable network that supports our unique deal flow and exit opportunities
            </p>
          </div>
          <TestimonialCarousel />
        </div>
      </section>

      {/* Partner Profiles */}
      <section className="py-10 md:py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          
          {/* Partner 1 - Image Left, Text Right */}
          <Card className="border-border bg-card mb-8 hover:shadow-[var(--card-hover-shadow)] transition-all duration-300">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                <div className="flex items-center justify-center p-6 md:p-12 bg-muted/30">
                  <img src={partners[0].image} alt={partners[0].name} className="w-85 h-85 object-cover shadow-sm" />
                </div>
                <div className="flex flex-col justify-center p-6 md:p-12">
                  <h3 className="text-3xl font-bold text-foreground mb-2">{partners[0].name}</h3>
                  <p className="text-lg font-medium text-accent mb-4">{partners[0].role}</p>
                  <p className="text-muted-foreground leading-relaxed">
                    <Quote size={20} className="inline-block mr-2 text-accent" />
                    {partners[0].bio}
                    <Quote size={20} className="inline-block ml-2 text-accent" style={{ transform: 'scaleX(-1)' }} />
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Partner 2 - Image Left, Text Right on md, Image Top Text Bottom on smaller screens */}
          <Card className="border-border bg-card hover:shadow-[var(--card-hover-shadow)] transition-all duration-300">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                <div className="flex items-center justify-center p-6 md:p-12 bg-muted/30 md:order-2">
                  <img src={partners[1].image} alt={partners[1].name} className="w-85 h-85 object-cover shadow-sm" />
                </div>
                <div className="flex flex-col justify-center p-6 md:p-12 md:order-1">
                  <h3 className="text-3xl font-bold text-foreground mb-2">{partners[1].name}</h3>
                  <p className="text-lg font-medium text-accent mb-4">{partners[1].role}</p>
                  <p className="text-muted-foreground leading-relaxed">
                    <Quote size={20} className="inline-block mr-2 text-accent" />
                    {partners[1].bio}
                    <Quote size={20} className="inline-block ml-2 text-accent" style={{ transform: 'scaleX(-1)' }} />
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      </div>

      <Footer />
    </div>
  );
};

export default Index;
