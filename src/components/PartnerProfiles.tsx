import { Linkedin } from "lucide-react";

const partners = [
  {
    name: "Charles Rim",
    role: "General Partner",
    bio: "Charles is the founding and General Partner at Access Ventures. Previous to Access, Charles launched Tapjoy in Asia as Managing Director APAC, a leading mobile advertising and monetization platform, and also venture partner for DFJ Athena, based in Seoul, Korea. Prior to Draper Athena and Tapjoy, he was the head of M&A APAC for Google, and led all deals by Google in the APAC region (ex-China) from 2006 to 2011. He also served as Director of Corporate Development for Yahoo APAC for 4 years after his role as CFO of Korea Thrunet (NASDAQ), Korea's first broadband network and enterprise solution provider. He started his career as an international lawyer, after graduating with a BA from the University of Pennsylvania, and a JD from the Emory University School of Law.",
    image: "/profiles/cr-mainpage.webp",
    pastCompanies: ["/logos/google.webp", "/logos/yahoo.webp", "/logos/draperathena.webp"],
    linkedinUrl: "https://linkedin.com/in/charles-rim-1258304"
  },
  {
    name: "John Chang",
    role: "General Partner",
    bio: "John is a General Partner and co-founder of Access Ventures. Aside from managing the fund's day-to-day operations, he serves on the investment committee and also focuses on marketing the fund's activities. Prior to co-founding Access Ventures in 2017, John was the  Co-Head of Equities and  Distribution APAC for Barclays Capital. In this role, he was responsible for the management and strategic development of the firm's sales and distribution divisions for the investment bank in the Asia Pacific region.  He also served on the Global Equities Executive Committee and was the Chairman for Barclays Capital Taiwan Limited. Before his role at Barclays, John was the CEO of Deutsche Securities Korea and also the head of their Korean Equities business. He received his Bachelor of Arts in Psychology from Duke University and is currently based in Hong Kong.",
    image: "/profiles/jc-mainpage.webp",
    pastCompanies: ["/logos/barclays.webp", "/logos/deutschebank.webp"],
    linkedinUrl: "https://linkedin.com/in/john-chang-93480664"
  },
  {
    name: "David Lee",
    role: "Venture Partner",
    bio: "David was one of the first 200 employees and the first executive for international business at Google where he launched Google's international businesses in Asia, Europe and LATAM. After Google. David co-founded XG Ventures, a Google alumni fund, and was a co-founding partner of SK Telecom Ventures. He is currently an active and integral part of the investment ecosystem in the US, and especially Silicon Valley. David has been a guest lecturer at Stanford, Harvard, MIT, TedX, Zurich Film Festival, and is on the advisory boards of ASES (Stanford Entrepreneurship Society) and HPAIR (Harvard Project for Asian & Intl. Relations) and member of Gold House.",
    image: "/profiles/dl-mainpage.webp",
    pastCompanies: ["/logos/google.webp", "/logos/skt.webp"],
    linkedinUrl: ""
  }
];

const PartnerProfiles = () => {
  return (
    <div className="space-y-12 mb-16">
      {partners.map((partner, index) => (
        <div key={index} className="flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-shrink-0">
            {partner.image.startsWith('/') ? (
              <img
                src={partner.image}
                alt={partner.name}
                className="w-64 h-72 object-cover rounded transition-all duration-300 hover:brightness-110 hover:shadow-md"
              />
            ) : (
              <div className="text-9xl">{partner.image}</div>
            )}
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-6 mb-1">
              <h3 className="text-2xl font-bold text-foreground">{partner.name}</h3>
              {partner.linkedinUrl && (
                <a
                  href={partner.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-accent transition-colors duration-200"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              )}
            </div>
            <p className="text-lg font-medium text-accent mb-2">{partner.role}</p>
            <p className="text-base text-muted-foreground leading-relaxed mb-4">
              {partner.bio}
            </p>
            <div className="flex flex-wrap gap-4 mb-4">
              {partner.pastCompanies.map((company, idx) => (
                <span key={idx} className={company.startsWith('/') ? "bg-transparent p-0" : "text-sm bg-secondary px-3 py-1 rounded-full text-secondary-foreground inline-flex items-center gap-1"}>
                  {company.startsWith('/') ? <img src={company} alt={(company.split('/').pop() || '').replace(/\.webp$/, '').replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())} className="w-20 h-20 object-contain" /> : company}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PartnerProfiles;
