import Navigation from "@/components/Navigation";
import PartnerProfiles from "@/components/PartnerProfiles";
import Managers from "@/components/Managers";
import Advisors from "@/components/Advisors";
import Footer from "@/components/Footer";

const Team = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      <div style={{ backgroundColor: '#e0fefe' }}>

      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Decades of extensive experience <br></br> in APAC and global markets
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
              Our team brings diverse backgrounds and extensive experience across the world from Silicon Valley to the Asia Pacific, with specific focus on Southeast Asia and South Korea 
            </p>
          </div>

          <PartnerProfiles />

          <Managers />

          <div className="flex flex-wrap justify-center gap-8 md:gap-20 mb-16">
            <img src="/logos/bnymellon.webp" alt="BNY" className="h-14 w-auto" />
            <img src="/logos/uobkayhian.webp" alt="UOBKH" className="h-14 w-auto" />
            <img src="/logos/fpt.webp" alt="FPT" className="h-14 w-auto" />
            <img src="/logos/draperathena.webp" alt="Draper Athena" className="h-14 w-auto" />
          </div>
          
          <Advisors />
        </div>
      </section>

      </div>

      <Footer />
    </div>
  );
};

export default Team;
