import { Card, CardContent } from "@/components/ui/card";

const Achievements = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Large box on the left */}
      <Card className="md:col-span-1 md:row-span-2 border-border bg-card hover:shadow-[var(--card-hover-shadow)] transition-all duration-300">
        <CardContent className="p-8 h-full flex flex-col justify-center">
          <div className="text-5xl font-bold text-primary mb-4">5+ Exits</div>

          <p className="text-muted-foreground mb-4">
            In our short history,<br></br>Including strategic acquisitions by top companies
          </p>
          <img src="/exits.webp" alt="Exits" className="w-full h-auto rounded-lg" />
        </CardContent>
      </Card>

      {/* Smaller boxes on the right */}
      <div className="md:col-span-1 space-y-6">
        <Card className="border-border bg-card hover:shadow-[var(--card-hover-shadow)] transition-all duration-300">
          <CardContent className="p-6">
            <div className="text-3xl font-bold text-primary mb-2">50+</div>
            <h3 className="text-lg font-semibold text-foreground mb-1">Investments Deployed</h3>
            <p className="text-m text-muted-foreground">Across diverse sectors</p>
          </CardContent>
        </Card>
        <div className="grid grid-cols-2 gap-6">
          <Card className="relative overflow-hidden border-border bg-black hover:shadow-[var(--card-hover-shadow)] transition-all duration-300">
            <CardContent className="relative z-10 p-6">
              <div className="text-2xl font-bold text-white mb-2">Valued Advisors</div>
              <p className="text-sm text-white">Supported portfolio companies' acquisitions through our global partnership with key stategics and executive teams</p>
              <br />
              <br />
            </CardContent>
          </Card>
          <Card className="relative overflow-hidden border-border bg-transparent hover:shadow-[var(--card-hover-shadow)] transition-all duration-300">
            <video
              src="/earth.webm"
              autoPlay
              muted
              loop
              className="absolute inset-0 w-full h-full object-cover z-0"
            />
            <CardContent className="relative z-10 p-6">
              <div className="text-2xl font-bold text-white mb-2">Extensive Global Network</div>
              <p className="text-sm text-white">Decades of experience have created an extensive global network beyond our target market.</p>
              <br />
              <br />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
