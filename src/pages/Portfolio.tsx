import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { Filter } from "lucide-react";
import Footer from "@/components/Footer";

const companies = [
  {
    name: "Seoul Robotics",
    sectors: ["Mobility", "Logistics", "AI"],
    country: "South Korea",
    stage: "Series A",
    firstInvested: "2020",
    exit: "",
    description: "Perception engine with LiDAR for autonomous driving in logistics environments",
    logo: "/portfolios/seoulrobotics.webp",
    website: "https://seoulrobotics.tech/"
  },
  {
    name: "Coolmate",
    sectors: ["Ecommerce", "B2C/Platform"],
    country: "Vietnam",
    stage: "Series A",
    firstInvested: "2022",
    exit: "",
    description: "Digital-first D2C fashion brand",
    logo: "/portfolios/coolmate.webp",
    website: "https://www.coolmate.me/en"
  },
  {
    name: "Staffinc",
    sectors: ["HR", "SaaS"],
    country: "Indonesia",
    stage: "Series A",
    firstInvested: "2020",
    exit: "",
    description: "Indonesia's leading end-to-end workforce solution",
    logo: "/portfolios/staffinc.webp",
    website: "https://staffinc.co/"
  },
  {
    name: "Spoon Labs",
    sectors: ["Media", "B2C/Platform"],
    country: "South Korea",
    stage: "Series A",
    firstInvested: "2017",
    exit: "",
    description: "Operates audio live-streaming platform (Spoon) and a short-form video drama platform (Vigloo)",
    logo: "/portfolios/spoon.webp",
    website: "https://www.spoonlabs.com/kr/"
  },
  {
    name: "M Village",
    sectors: ["Hospitality", "B2C/Platform"],
    country: "Vietnam",
    stage: "Series A",
    firstInvested: "2022",
    exit: "",
    description: "Vietnamese hospitality company offering modern co-living and lifestyle hotels for young urban professional",
    logo: "/portfolios/mvillage.webp",
    website: "https://mvillage.vn/en/"
  },
  {
    name: "Kata.ai",
    sectors: ["AI", "SaaS"],
    country: "Indonesia",
    stage: "Series A",
    firstInvested: "2017",
    exit: "",
    description: "Enterprise chatbot platform specializing in Natural Language Processing and conversational commerce",
    logo: "/portfolios/kataai.webp",
    website: "https://kata.ai/"
  },
  {
    name: "CredoLab",
    sectors: ["Fintech", "AI", "Data Analytics"],
    country: "Singapore",
    stage: "Series A",
    firstInvested: "2020",
    exit: "",
    description: "Alternative credit scoring platform that provides AI-based insights and scores built on device",
    logo: "/portfolios/credolab.webp",
    website: "https://www.credolab.com/"
  },
  {
    name: "KooBits",
    sectors: ["Edutech", "B2C/Platform"],
    country: "Singapore",
    stage: "Series A",
    firstInvested: "2018",
    exit: "",
    description: "Personalised digital learning platform transforming how children master core subjects",
    logo: "/portfolios/koobits.webp",
    website: "https://www.koobits.com/"
  },
  {
    name: "Vexere",
    sectors: ["Mobility", "B2C/Platform"],
    country: "Vietnam",
    stage: "Pre Series B",
    firstInvested: "2017",
    exit: "",
    description: "The largest bus ticketing platform in Vietnam",
    logo: "/portfolios/vexere.webp",
    website: "https://vexere.com/en-US"
  },
  {
    name: "Zuzu Hospitality",
    sectors: ["Hospitality", "Data Analytics", "AI"],
    country: "Singapore",
    stage: "Series A",
    firstInvested: "2018",
    exit: "",
    description: "Revenue management and distribution platform for independent hotels",
    logo: "/portfolios/zuzu.webp",
    website: "https://zuzuhospitality.com/"
  },
  {
    name: "Pion Corporation",
    sectors: ["AI", "Media"],
    country: "South Korea",
    stage: "Pre Series A",
    firstInvested: "2021",
    exit: "",
    description: "Generative AI marketing tech platform for advertising campaign",
    logo: "/portfolios/pion.webp",
    website: "https://vcat.ai/"
  },
  {
    name: "Helicap",
    sectors: ["Fintech"],
    country: "Singapore",
    stage: "Series A",
    firstInvested: "2019",
    exit: "",
    description: "Private credit and alternative lending through innovative fintech solutions",
    logo: "/portfolios/helicap.webp",
    website: "https://helicap.com/"
  },
  {
    name: "Common Computer",
    sectors: ["Web3", "AI"],
    country: "South Korea",
    stage: "Seed",
    firstInvested: "2018",
    exit: "",
    description: "Building decentralized AI network leveraging Web3 technology",
    logo: "/portfolios/comcom.webp",
    website: "https://comcom.ai"
  },
  {
    name: "LOCAD",
    sectors: ["Logistics", "Data Analytics"],
    country: "Singapore",
    stage: "Series A",
    firstInvested: "2022",
    exit: "",
    description: "Localized fulfillment solutions enabling brands to optimize omnichannel distribution",
    logo: "/portfolios/locad.webp",
    website: "https://golocad.com/"
  },
  {
    name: "Palexy",
    sectors: ["AI", "Data Analytics"],
    country: "Vietnam",
    stage: "Seed",
    firstInvested: "2020",
    exit: "",
    description: "Leveraging computer vision in retail analytics to transform in-store video into actionable insights",
    logo: "/portfolios/palexy.webp",
    website: "https://palexy.com/"
  },
  {
    name: "Quotabook",
    sectors: ["Fintech", "SaaS"],
    country: "South Korea",
    stage: "Series A",
    firstInvested: "2022",
    exit: "",
    description: "Platform that simplifies equity and corporate governance management for startups and investors",
    logo: "/portfolios/quotabook.webp",
    website: "https://quotabook.com/"
  },
  {
    name: "Volantis",
    sectors: ["AI", "Data Analytics"],
    country: "Indonesia",
    stage: "Series A",
    firstInvested: "2018",
    exit: "",
    description: "Enterprise AI platform specializing in digital transformation, big data, and machine learning solutions",
    logo: "/portfolios/volantis.webp",
    website: "https://volantis.io/"
  },
  {
    name: "PFC Technologies",
    sectors: ["Fintech", "Data Analytics"],
    country: "South Korea",
    stage: "Series B",
    firstInvested: "2019",
    exit: "",
    description: "Lending tech that provides AI-powered credit risk management framework",
    logo: "/portfolios/pfct.webp",
    website: "https://pfct.co.kr/en"
  },
  {
    name: "ULIFT",
    sectors: ["Edutech", "B2C/Platform"],
    country: "South Korea",
    stage: "Pre Series A",
    firstInvested: "2023",
    exit: "",
    description: "Learning platform to help anyone easily master programming and AI concepts",
    logo: "/portfolios/ulift.webp",
    website: "https://codingvalley.com/"
  },
  {
    name: "Aitomatic",
    sectors: ["AI"],
    country: "Other",
    stage: "Seed",
    firstInvested: "2021",
    exit: "",
    description: "Domain-Expert Agents (DXAs) using neurosymbolic AI framework for complex industrial tasks",
    logo: "/portfolios/aitomatic.webp",
    website: "https://aitomatic.com/"
  },
  {
    name: "Volopay",
    sectors: ["Fintech"],
    country: "Singapore",
    stage: "Series A",
    firstInvested: "2021",
    exit: "",
    description: "Spend management platform for businesses",
    logo: "/portfolios/volopay.webp",
    website: "https://volopay.com/"
  },
  {
    name: "Plugo",
    sectors: ["SaaS", "Ecommerce"],
    country: "Indonesia",
    stage: "Series A",
    firstInvested: "2022",
    exit: "",
    description: "Helping brands in D2C operations and web commerce",
    logo: "/portfolios/plugo.webp",
    website: "https://plugo.co/"
  },
  {
    name: "SCAI Therapeutics",
    sectors: ["Other"],
    country: "South Korea",
    stage: "M&A",
    firstInvested: "2024",
    exit: "",
    description: "Proprietary drug delivery platform technology for pharmaceutical and cosmetic industries",
    logo: "/portfolios/scai.webp",
    website: "https://scaitrx.com/"
  },
  {
    name: "Viec.co",
    sectors: ["HR", "SaaS"],
    country: "Vietnam",
    stage: "Pre Seed",
    firstInvested: "2020",
    exit: "",
    description: "Connects businesses with short-term workers, providing automated attendance and payroll management",
    logo: "/portfolios/viecco.webp",
    website: "https://viec.co/"
  },
  {
    name: "Phlox",
    sectors: ["B2C/Platform"],
    country: "South Korea",
    stage: "Pre Series A",
    firstInvested: "2024",
    exit: "",
    description: "Building mobile commerce services",
    logo: "/portfolios/phlox.webp",
    website: "https://wishbucket.io/"
  },
  {
    name: "Perx Technologies",
    sectors: ["SaaS"],
    country: "Singapore",
    stage: "Series B",
    firstInvested: "2019",
    exit: "",
    description: "Autonomous loyalty and customer engagement solution",
    logo: "/portfolios/perx.webp",
    website: "https://perxtech.com/"
  },
  {
    name: "Akseleran",
    sectors: ["Fintech"],
    country: "Indonesia",
    stage: "Series A",
    firstInvested: "2019",
    exit: "",
    description: "Crowdfunding peer-to-peer lending platform",
    logo: "/portfolios/akseleran.webp",
    website: "https://akseleran.co.id/"
  },
  {
    name: "RevivalTV",
    sectors: ["Media"],
    country: "Indonesia",
    stage: "Seed",
    firstInvested: "2020",
    exit: "",
    description: "Esports agency and media platform",
    logo: "/portfolios/revivaltv.webp",
    website: "https://revivaltv.id/"
  },
  {
    name: "Abivin",
    sectors: ["Logistics"],
    country: "Vietnam",
    stage: "Seed",
    firstInvested: "2019",
    exit: "",
    description: "Supply chain optimization solutions for enterprises",
    logo: "/portfolios/abivin.webp",
    website: "https://www.abivin.com/"
  },
  {
    name: "Reality Reflection",
    sectors: ["Other"],
    country: "South Korea",
    stage: "Seed",
    firstInvested: "2017",
    exit: "",
    description: "Digital twin with VR / AR technology",
    logo: "/portfolios/realityreflection.webp",
    website: ""
  },
  {
    name: "Andalin",
    sectors: ["Logistics"],
    country: "Indonesia",
    stage: "Series A",
    firstInvested: "2020",
    exit: "",
    description: "One-stop digital platform for freight forwarding",
    logo: "/portfolios/andalin.webp",
    website: ""
  },
  {
    name: "Skelter Labs",
    sectors: ["AI"],
    country: "South Korea",
    stage: "Pre Series A",
    firstInvested: "2017",
    exit: "",
    description: "Enterprise conversational and speech AI",
    logo: "/portfolios/skelterlabs.webp",
    website: "https://skelterlabs.com/"
  },
  {
    name: "Homedy",
    sectors: ["B2C/Platform"],
    country: "Vietnam",
    stage: "Series A",
    firstInvested: "2018",
    exit: "",
    description: "Real estate platform for residential properties",
    logo: "/portfolios/homedy.webp",
    website: "https://homedy.com/"
  },
  {
    name: "Ecotruck",
    sectors: ["Logistics"],
    country: "Vietnam",
    stage: "Pre Series A",
    firstInvested: "2018",
    exit: "Exit/M&A",
    description: "B2B logistics platform to connect merchants and vendors",
    logo: "/portfolios/ecotruck.webp",
    website: "https://ecotruck.vn/"
  },
  {
    name: "MOCA",
    sectors: ["Fintech"],
    country: "Vietnam",
    stage: "Seed",
    firstInvested: "2017",
    exit: "Exit/M&A",
    description: "Mobile payment service and e-wallet technology",
    logo: "/portfolios/moca.webp",
    website: ""
  },
  {
    name: "Tokotalk",
    sectors: ["SaaS"],
    country: "Indonesia",
    stage: "Series A",
    firstInvested: "2020",
    exit: "Exit/M&A",
    description: "End-to-end e-commerce enabler",
    logo: "/portfolios/tokotalk.webp",
    website: ""
  },
  {
    name: "OhmniLabs",
    sectors: ["Other"],
    country: "Other",
    stage: "Seed",
    firstInvested: "2017",
    exit: "Exit/M&A",
    description: "Modular robots for healthcare industry",
    logo: "/portfolios/ohmnilabs.webp",
    website: "https://ohmnilabs.com/"
  },
  {
    name: "AWAIR",
    sectors: ["Other"],
    country: "Other",
    stage: "Series A",
    firstInvested: "2018",
    exit: "Exit/M&A",
    description: "Air quality monitoring technology",
    logo: "/portfolios/awair.webp",
    website: "https://www.getawair.com/"
  },
  {
    name: "Zen Rooms",
    sectors: ["Hospitality"],
    country: "Singapore",
    stage: "Series A",
    firstInvested: "2019",
    exit: "Exit/Put Exercise",
    description: "Hospitality technology provider and franchise operator.",
    logo: "/portfolios/zenrooms.webp",
    website: ""
  },
  {
    name: "OP.GG",
    sectors: ["Data Analytics"],
    country: "South Korea",
    stage: "Pre Series A",
    firstInvested: "2017",
    exit: "Exit/Secondary",
    description: "Gaming data platform providing real-time stats, analytics and tools",
    logo: "/portfolios/opgg.webp",
    website: "https://op.gg/"
  },
];

const countries = ["South Korea", "Indonesia", "Vietnam", "Singapore", "Other"];
const sectors = ["AI", "B2C/Platform", "Data Analytics", "Ecommerce", "Edutech", "Fintech", "Hospitality",  "HR", "Logistics", "Media", "Mobility", "SaaS", "Web3", "Other"];

const FilterContent = ({
  selectedCountries,
  selectedSectors,
  toggleCountry,
  toggleSector
}: {
  selectedCountries: string[];
  selectedSectors: string[];
  toggleCountry: (country: string) => void;
  toggleSector: (sector: string) => void;
}) => (
  <div>
    <div className="mb-8">
      <h3 className="text-lg font-semibold text-foreground mb-4">Country</h3>
      <div className="space-y-3">
        {countries.map((country) => (
          <div key={country} className="flex items-center space-x-2">
            <Checkbox
              id={`country-${country}`}
              checked={selectedCountries.includes(country)}
              onCheckedChange={() => toggleCountry(country)}
            />
            <Label
              htmlFor={`country-${country}`}
              className="text-sm text-muted-foreground cursor-pointer"
            >
              {country}
            </Label>
          </div>
        ))}
      </div>
    </div>

    <div>
      <h3 className="text-lg font-semibold text-foreground mb-4">Sector</h3>
      <div className="space-y-3">
        {sectors.map((sector) => (
          <div key={sector} className="flex items-center space-x-2">
            <Checkbox
              id={`sector-${sector}`}
              checked={selectedSectors.includes(sector)}
              onCheckedChange={() => toggleSector(sector)}
            />
            <Label
              htmlFor={`sector-${sector}`}
              className="text-sm text-muted-foreground cursor-pointer"
            >
              {sector}
            </Label>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const Portfolio = () => {
  const [selectedCountries, setSelectedCountries] = useState<string[]>([]);
  const [selectedSectors, setSelectedSectors] = useState<string[]>([]);
  const [isFilterSheetOpen, setIsFilterSheetOpen] = useState(false);
  const isMobile = useIsMobile();

  const toggleCountry = (country: string) => {
    setSelectedCountries(prev =>
      prev.includes(country) ? prev.filter(c => c !== country) : [...prev, country]
    );
  };

  const toggleSector = (sector: string) => {
    setSelectedSectors(prev =>
      prev.includes(sector) ? prev.filter(s => s !== sector) : [...prev, sector]
    );
  };

  const filteredCompanies = companies.filter(company => {
    const matchesCountry = selectedCountries.length === 0 || selectedCountries.includes(company.country);
    const matchesSector = selectedSectors.length === 0 || company.sectors.some(sector => selectedSectors.includes(sector));
    return matchesCountry && matchesSector;
  });

  return (
    <div className="min-h-screen">
      <Navigation />

      <div style={{ backgroundColor: '#e0fefe' }}>

      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-8 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Portfolio of Companies
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We invest in exceptional companies across sectors
            </p>
          </div>

          {/* Mobile Filter Button and Sheet */}
          {isMobile && (
            <div className="mb-6">
              <Sheet open={isFilterSheetOpen} onOpenChange={setIsFilterSheetOpen}>
                <SheetTrigger asChild>
                  <Button variant="outline" className="flex items-center gap-2">
                    <Filter className="w-4 h-4" />
                    Filters
                    {(selectedCountries.length > 0 || selectedSectors.length > 0) && (
                      <Badge variant="secondary" className="ml-2">
                        {selectedCountries.length + selectedSectors.length}
                      </Badge>
                    )}
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-80">
                  <SheetHeader>
                    <SheetTitle>Filters</SheetTitle>
                  </SheetHeader>
                  <div className="mt-4">
                    <FilterContent
                      selectedCountries={selectedCountries}
                      selectedSectors={selectedSectors}
                      toggleCountry={toggleCountry}
                      toggleSector={toggleSector}
                    />
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          )}

          <div className={`flex ${isMobile ? 'flex-col' : 'gap-8'}`}>
            {/* Desktop Left Sidebar - Filters */}
            {!isMobile && (
              <div className="w-1/5 min-w-[200px] shrink-0">
                <div className="sticky top-32">
                  <FilterContent
                    selectedCountries={selectedCountries}
                    selectedSectors={selectedSectors}
                    toggleCountry={toggleCountry}
                    toggleSector={toggleSector}
                  />
                </div>
              </div>
            )}

            {/* Company Cards */}
            <div className={`${isMobile ? 'space-y-3' : 'flex-1 space-y-3'}`}>
              {filteredCompanies.map((company, index) => {
                const CompanyCard = company.website ? 'a' : 'div';
                const cardProps = company.website 
                  ? { href: company.website, target: "_blank", rel: "noopener noreferrer" }
                  : {};
                
                return (
                  <CompanyCard
                    key={index}
                    {...cardProps}
                    className={company.website ? "block" : ""}
                  >
                    <Card className={`border-border bg-card ${company.website ? 'hover:shadow-lg cursor-pointer' : ''} transition-all duration-300`}>
                      <CardContent className="p-6">
                        <div className="flex items-start gap-6">
                          <img
                            src={company.logo}
                            alt={`${company.name} logo`}
                            className="w-28 h-24 object-contain flex-shrink-0"
                          />
                          <div className="flex-1">
                            {/* Mobile Layout */}
                            <div className="block md:hidden mb-2">
                              <h3 className="text-2xl font-bold text-foreground mb-2">{company.name}</h3>
                              <div className="flex gap-2 mb-2">
                                <Badge variant="secondary">{company.country}</Badge>
                                {company.exit && <Badge className="bg-green-500 text-white">{company.exit}</Badge>}
                              </div>
                              <div className="flex flex-wrap gap-2">
                                {company.sectors.slice(0, 3).map((sector, idx) => (
                                  <Badge key={idx} variant="outline">{sector}</Badge>
                                ))}
                              </div>
                            </div>

                            {/* Desktop Layout */}
                            <div className="hidden md:flex flex-col items-start mb-2">
                              <h3 className="text-2xl font-bold text-foreground">{company.name}</h3>
                              <div className="flex flex-wrap gap-2 mt-2">
                                <Badge variant="secondary">{company.country}</Badge>
                                {company.sectors.slice(0, 3).map((sector, idx) => (
                                  <Badge key={idx} variant="outline">{sector}</Badge>
                                ))}
                                {company.exit && <Badge className="bg-green-500 text-white">{company.exit}</Badge>}
                              </div>
                            </div>
                            <p className="text-muted-foreground mb-4 leading-relaxed">
                              {company.description}
                            </p>
                            <div className="text-sm text-muted-foreground">
                              <span className="font-medium">First Invested:</span> {company.firstInvested} {company.stage}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </CompanyCard>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      </div>

      <Footer />
    </div>
  );
};

export default Portfolio;
