import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Users, TrendingUp, Lightbulb, Shield, Rocket } from "lucide-react";
import Footer from "@/components/Footer";

const principles = [
  {
    icon: Target,
    title: "Unique Deal Sourcing",
    description: "Our deal flow is driven by word of mouth through best-in-class founder networks, our ability to engage on core values, a proven track record, and the strength of the Google network as a key catalyst."
  },
  {
    icon: Users,
    title: "Founder-First Philosophy",
    description: "Our approach begins with a deep understanding of each founder’s background, experience, motivations, and operating style. We partner closely from day one, helping refine product rationale and align around long-term vision."
  },
  {
    icon: TrendingUp,
    title: "Thesis-Driven Investing",
    description: "Our evaluation framework focuses on founder-market fit, team composition, product clarity, competitive advantage, and the ability to leverage networks and resources for outsized growth. We concentrate on solutions rooted in strong rationale and addressing meaningful market opportunities."
  },
  {
    icon: Lightbulb,
    title: "Strategic Support",
    description: "We provide hands-on support for our founders by driving growth strategies and partnerships, structuring and negotiating complex transactions, engaging in key team recruitment, and offering coaching with attention to mental well-being and family."
  },
  {
    icon: Shield,
    title: "Risk-Aware Approach",
    description: "We conduct thorough due diligence while moving quickly. Our disciplined investment process balances conviction with prudent risk management."
  },
  {
    icon: Rocket,
    title: "Long-Term Partnership",
    description: "We stay with our founders through every stage, from seed to exit and beyond, acting as steady partners throughout the company’s evolution."
  }
];

const stages = [
  {
    stage: "Seed",
    description: "Target to invest 10% equity stake, key strength is robust diligence"
  },
  {
    stage: "Series A",
    description: "Target to invest between 5-10% stake, focus on product market fit and traction metrics"
  },
  {
    stage: "Series B",
    description: "Follow-on investment with preallocated investable funds"
  }
];

const Approach = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      <div style={{ backgroundColor: '#e0fefe' }}>

      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-3xl md:text-3xl font-bold text-foreground mb-6">
              Investment Approach
            </h1>
            <p className="text-base md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              We focus on creating a diversified portfolio <br></br>
              based on maturity stage, geography, and sector at early valuations
            </p>
          </div>

          {/* Investment Principles */}
          <div className="mb-20">
            <hr className="border-black mb-8" />
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Our Principles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {principles.map((principle, index) => {
                const Icon = principle.icon;
                return (
                  <Card
                    key={index}
                    className="border-border bg-transparent hover:shadow-[var(--card-hover-shadow)] transition-all duration-300"
                  >
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">
                        {principle.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {principle.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Investment Stages */}
          <div className="mb-20">
            <hr className="border-black mb-8" />
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Investment Stages</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {stages.map((item, index) => (
                <Card 
                  key={index}
                  className="border-border bg-card hover:shadow-[var(--card-hover-shadow)] transition-all duration-300"
                >
                  <CardContent className="p-8 text-center">
                    <h3 className="text-2xl font-bold text-accent mb-4">{item.stage}</h3>
                    <p className="text-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

        </div>
      </section>

      </div>

      <Footer />
    </div>
  );
};

export default Approach;
