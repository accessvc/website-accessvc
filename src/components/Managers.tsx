import { useState } from "react";
import { Linkedin } from "lucide-react";

const managers = [
  {
    name: "Yoko Ivan",
    country: "Portfolio Manager // South Korea / Indonesia",
    bio: "Yoko is responsible for overall management of investment portfolios throughout the funds lifecycle. Prior to joining Access, he oversaw the management of over 200 investment portfolio companies in a Korean startup accelerator. Yoko built his career in the banking and finance industry in Singapore, including roles at UOB Kay Hian Securities and BNY Mellon. He graduated from Monash University and completed the CFA program. He has also earned the Microsoft Azure AI Engineer and Data Scientist certifications. ",
    image: "/profiles/yoko-profile.webp",
    linkedinUrl: "https://linkedin.com/in/yokoivan2707"
  },
  {
    name: "Khoi Tran (Max)",
    country: "Principal // Vietnam",
    bio: "Max is responsible for the origination and coverage of Vietnam and Philippines investments. Before joining Access Ventures, he was an equity fund manager at FPT Capital (Vietnam Japan Fund / 100M AUM).  Max holds a Bachelors of Science in Corporate Finance from Vietnam National Economics University and has passed the CFA Level I and II.",
    image: "/profiles/max-profile.webp",
    linkedinUrl: "https://linkedin.com/in/khoitm05"
  },
  {
    name: "Judy Goo",
    country: "Administrator // South Korea",
    bio: "Judy has been working in the venture capital industry in Korea for close to two decades. She managed the offices of DFJ Athena before joining in the early days of Access Ventures.",
    image: "/profiles/judy-profile.webp",
    linkedinUrl: ""
  }
];

const Managers = () => {
  const [expandedBios, setExpandedBios] = useState<boolean[]>([false, false, false]);

  return (
    <div className="mb-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {managers.map((manager, index) => {
          const [role, location] = manager.country.split(' // ');
          return (
          <div key={index} className="text-center">
            <img
              src={manager.image}
              alt={`${manager.name} profile`}
              className="w-50 h-50 object-cover mx-auto mb-3 cursor-pointer transition-transform duration-300 hover:scale-105 hover:shadow-lg"
              onClick={() => {
                const newExpanded = [...expandedBios];
                newExpanded[index] = !newExpanded[index];
                setExpandedBios(newExpanded);
              }}
            />
            <p className="font-semibold text-foreground mb-1">{manager.name}</p>
            <p className="text-sm font-medium text-accent mb-1">{role}</p>
            <p className="text-sm text-muted-foreground font-medium uppercase tracking-wide mb-2">{location}</p>
            {expandedBios[index] && (
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">{manager.bio}</p>
            )}
            {manager.linkedinUrl && (
              <a
                href={manager.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-primary hover:text-accent transition-colors duration-200"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            )}
          </div>
          );
        })}
      </div>
    </div>
  );
};

export default Managers;
