const advisors = [
  // First row - 5 advisors
  {
    name: "Chester Roh",
    country: "South Korea",
    bio: "5 startups & 3 exits (Reality Reﬂection, Five Rocks, Tatter, Inzen), Korea Startup Guru; KAIST graduate",
    image: "/profiles/Chester-Roh.webp"
  },
  {
    name: "James Mi",
    country: "China",
    bio: "Founding partner at Lightspeed China Partners (Shanghai & Beijing), ex-head of M&A Google Greater China; Google PM",
    image: "/profiles/James-Mi.webp"
  },
  {
    name: "Perry Ha",
    country: "USA",
    bio: "Managing partner at DFJ Athena Korea 15+ years in Venture Capital, MIT graduate",
    image: "/profiles/Perry-Ha.webp"
  },
  {
    name: "Salman Ullah",
    country: "USA",
    bio: "Headed Microsoft M&A, Founding Director at Google M&A team, Founding Partner at Merus Capital",
    image: "/profiles/Salman-Ullah.webp"
  },
  {
    name: "Widjaja Tannady",
    country: "Indonesia",
    bio: "Investor and entrepreneur, Founding Partner at Mahanusa Capital, ex-Commercial Banker, Investor and entrepreneur, Founding Partner at Mahanusa Capital, ex-Commercial Banker",
    image: "/profiles/Widjaja-Tannady.webp"
  },
  // Second row - 4 advisors
  {
    name: "Henry Nguyen",
    country: "Vietnam",
    bio: "Investor and entrepreneur. Founding Partner at IDG Vietnam (10+ years experience). Owner/Operator (McDonalds, 7-Eleven Vietnam). CEO Timo Digital Bank",
    image: "/profiles/Henry-Nguyen.webp"
  },
  {
    name: "Ted Cho",
    country: "South Korea",
    bio: "Founder of Skelter Labs, founder of Serome Tech(Dialpad), KAIST AI Lab graduate / network",
    image: "/profiles/Ted-Cho.webp"
  },
  {
    name: "Joo Man Park",
    country: "Singapore",
    bio: "Senior Vice President of APAC at eBay Inc., Ex-President & CEO of eBay Korea, led eBay Australia; Wharton MBA, Korea University BS",
    image: "/profiles/jooman-park.webp"
  },
  {
    name: "Christopher Nguyen",
    country: "Vietnam",
    bio: "Serial Entrepreneur and angel investor in VN, Serial Entrepreneur (3 exits, including ARIMO acquired by Panasonic), Engineering Director at Google, Professor at HKUST, Stanford Ph.D",
    image: "/profiles/Christopher-Nguyen.webp"
  }
];

const Advisors = () => {
  return (
    <div>
      <div className="flex flex-col items-start">
        <h2 className="text-3xl font-bold text-foreground mb-4">Advisors</h2>
        <hr className="w-full border-t-2 border-foreground mt-0 mb-8" style={{ maxWidth: '100%' }} />
      </div>
      
      {/* First row - 5 advisors */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-6">
        {advisors.slice(0, 5).map((advisor, index) => (
          <div key={index} className="text-center">
            <img src={advisor.image} alt={advisor.name} className="w-26 h-26 mx-auto mb-3 object-cover transition-transform duration-300 hover:rotate-1 hover:shadow-md" />
            <p className="font-semibold text-foreground mb-1">{advisor.name}</p>
            <p className="text-sm text-muted-foreground font-medium uppercase tracking-wide mb-2">{advisor.country}</p>
            <p className="text-xs text-muted-foreground leading-relaxed">{advisor.bio}</p>
          </div>
        ))}
      </div>
      
      {/* Second row - 4 advisors */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {advisors.slice(5, 9).map((advisor, index) => (
          <div key={index} className="text-center">
            <img src={advisor.image} alt={advisor.name} className="w-26 h-26 mx-auto mb-3 object-cover transition-transform duration-300 hover:rotate-1 hover:shadow-md" />
            <p className="font-semibold text-foreground mb-1">{advisor.name}</p>
            <p className="text-sm text-muted-foreground font-medium uppercase tracking-wide mb-2">{advisor.country}</p>
            <p className="text-xs text-muted-foreground leading-relaxed">{advisor.bio}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Advisors;
