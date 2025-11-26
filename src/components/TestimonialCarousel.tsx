import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const testimonials = [
  {
    company: "Staffinc",
    founder: "Wisnu Nugrahadi",
    role: "Founder",
    testimony: "Charles and John have been true partners since our early days. <strong> They have gone above and beyond to help us build essential connections, brainstorm growth opportunities, and ensure our well-being as founders.</strong> We are truly grateful to have them by our side",
    logo: "/profiles/staffinc-carousel.webp"
  },
  {
    company: "Seoul Robotics",
    founder: "Hanbin Lee",
    role: "Founder",
    testimony: "Charles, GP of Access Ventures, is hands-down the most <strong>supportive and insightful VC</strong> I have ever worked with. His wealth of experience and direct engagement have been invaluable, as he consistently offers <strong>honest feeback that not only helps achieve immediate milestones</strong>, but also guides strategic, long-term growth. Charles' communication style is straightforward and encouraging, making him easy to collaborate with. He genuinely cares about your success beyond mere financial metrics. I highly recommend working with Charles and Access Ventures.",
    logo: "/profiles/seoulrobotics-carousel.webp"
  },
  {
    company: "M Village",
    founder: "Hai Ninh Nguyen",
    role: "Founder",
    testimony: "Access Ventures has been a crucial partner in helping us navigate the challenges of growing a startup. <strong>Their insights, strategic advice, and genuine willingness to support have been invaluable to our progress.</strong> We're grateful for their belief in our vision and the proactive role they've taken in helping us succeed.",
    logo: "/profiles/mvillage-carousel.webp"
  },
  {
    company: "Spoon Labs",
    founder: "Hyukjae Choi",
    role: "Founder",
    testimony: "Access Ventures is not just an investment firm that stops at funding; <strong>the team goes beyond to provide greater value.</strong> Access Ventures actively supports startups by granting them access to their extensive network.",
    logo: "/profiles/spoon-carousel.webp"
  },
  {
    company: "Tokotalk",
    founder: "Kyungmin Bang",
    role: "Founder",
    testimony: "Access Ventures has been a steadfast partner, leveraging their strong regional network to support the success of my earlier startup. <strong>Their commitment to long-term growth and a founder-first approach truly stands out.</strong> I'm excited to continue this partnership as they back my current startup, reinforcing their dedication to enterpreneurs at every stage.",
    logo: "/profiles/tokotalk-carousel.webp"
  }
];

const TestimonialCarousel = () => {
  return (
    <div className="w-full max-w-5xl mx-auto px-4">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 8000,
          }),
        ]}
        className="w-full"
      >
        <CarouselContent>
          {testimonials.map((item, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
              <div className="p-2">
                <Card className="border-border bg-card hover:shadow-[var(--card-hover-shadow)] transition-all duration-300 min-h-[500px]">
                  <CardContent className="p-8 flex flex-col h-full">
                    <div className="flex flex-row items-center gap-4 mb-6">
                      <div className="text-5xl">
                        {item.logo.startsWith('/') ? (
                          <img
                            src={item.logo}
                            alt={item.company}
                            className="h-48 w-48 object-contain"
                          />
                        ) : (
                          item.logo
                        )}
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-foreground">{item.founder}</p>
                        <p className="text-sm text-muted-foreground">{item.role}</p>
                        <p className="text-sm font-medium text-primary mt-1">{item.company}</p>
                      </div>
                    </div>
                    <p
                      className="text-muted-foreground mb-6 italic leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: `"${item.testimony}"` }}
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default TestimonialCarousel;
