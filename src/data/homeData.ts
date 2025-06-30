import {
  HeroProps,
  CardProps,
  CardData,
  CaseStudyHighlightProps,
  WhyPartnerProps,
  ResultSectionProps,
  JobSearchProps,
  TrustedByProps,
  ServicesSectionProps,
  StrategicPartnershipsProps,
  TestimonialProps,
  ExpertiseSectionProps,
} from "@/types/homeInterfaces";

// Hero section data
export const heroDetails: HeroProps = {
  title: "Where vision meets execution",
  description:
    "Propel your business forward with specialised recruitment and business consulting tailored to your industry needs.",
  buttonText: "Begin your success story",
  imageUrl: "/hero/hero1.jpg",
};

// Result section data
export const resultDetails: CardProps = {
  cardDetails: [
    {
      score: "20+",
      title: "Years of industry expertise",
      description:
        "Backed by over two decades of recruitment and consulting experience across property, construction, engineering, and corporate sectors.",
    },
    {
      score: "95%",
      title: "Client retention rate",
      description:
        "Our clients trust us to deliver , and 95% return to partner with Henton Consulting again for future recruitment and strategic needs.",
    },
    {
      score: "98%",
      title: "Of roles filled within 30 days",
      description:
        "Our efficient, targeted recruitment process ensures critical roles are placed faster , without compromising on quality.",
    },
  ],
};

// Why partner data
export const partnerCards: CardData[] = [
  {
    icon: "/Expert.svg",
    title: "Expertise that anticipates change",
    description:
      "Decades of real industry experience helping you stay ahead of shifting markets.",
  },
  {
    icon: "/StretegyIcon.svg",
    title: "Strategy that drives results",
    description: "Bespoke solutions that turn challenges into growth opportunities.",
  },
  {
    icon: "/PartnerShip.svg",
    title: "Partnerships that deliver",
    description:
      "95% of clients trust us again , because we deliver outcomes, not promises.",
  },
];

// Why Partner Section props
export const whyPartnerSectionData: WhyPartnerProps = {
  headingText: "Work with the experts",
  headingColor: "#132D46",
  dividerColor: "#132D46",
  dividerHeight: "1px",
  title: "Why partner with henton consulting?",
  subTitle:
    "Expertise. Strategy. Results. Helping you build stronger teams and lasting success.",
  cards: partnerCards,
  buttonText: "Ready to build what’s next?",
  buttonColor: "#132D46",
};

// Case study data
export const caseStudy1Data: CaseStudyHighlightProps = {
  imageSrc: "/home/homeTrusted.jpg",
  imageAlt: "Construction worker",
  title:
    "How strategic recruitment & consulting for a sydney head contractor led to 34% growth in 6 months.",
  description:
    "Our comprehensive approach that improved operational efficiency by 30% for a leading head contractor.",
  ctaText: "See how we deliver results",
  onClick: () => console.log("Clicked"),
  isReverse: false,
};

export const caseStudy2Data: CaseStudyHighlightProps = {
  heading: "Case studies",
  imageSrc: "/caseStudy2.jpg",
  imageAlt: "Construction worker",
  title: "Setting a new benchmark for talent acquisition",
  description:
    "When transdev nsw needed to fill critical roles, they chose henton consulting for our reputation in delivering exceptional candidates and a seamless recruitment process.",
  ctaText: "See how we deliver results",
  onClick: () => console.log("Clicked"),
  isReverse: true,
  isBackground: true,
};

// Result Section props
export const resultSectionData: ResultSectionProps = {
  backgroundColor: "#132D46",
  headingText: "Result",
  subheadingText: "",
  topHeading: "Measured by results. Chosen for impact.",
  footerText:
    "When expertise, trust, and speed come together, growth isn’t a goal , it’s the outcome.",
  buttonText: "Ready to build what’s next?",
  cardProps: resultDetails,
  onButtonClick: () => console.log("Redirect to ready to build what’s next?"),
};

export const jobSearchData: JobSearchProps = {
  title: "Search jobs. Build your future.",
  headline: "Built on expertise. Driven by results. Trusted by industry.",
  description: [
    "Henton consulting is a specialist recruitment and advisory firm helping businesses across property, construction, engineering, resources, corporate, government and not-for-profit sectors build stronger teams, smarter structures, and sustained growth.",
    "With over 20 years’ experience, we deliver permanent recruitment, executive search, strategic workforce consulting, and business development services tailored to your industry’s demands.",
    "Organisations trust us because we combine market expertise with a results-driven approach , finding the right people, designing the right strategies, and opening the right opportunities to move businesses forward.",
  ],
  buttonText: "Start the conversation",
};

// Trusted By Data
export const trustedByData: TrustedByProps = {
  title: "Trusted by industry leaders",
  description:
    "Henton consulting is the preferred partner for companies seeking unparalleled expertise in the property, construction, engineering, and resources sectors.",
  companyLogos: [
    { alt: "BMD", src: "/bmd.jpg" },
    { alt: "Mirvac", src: "/mirvac.png" },
    { alt: "Torodev", src: "/transdev.png" },
    { alt: "KBR", src: "/kbr.png" },
    { alt: "Norderock", src: "/norderock.png" },
    { alt: "KGroup", src: "/kgroup.png" },
    { alt: "FKG Group", src: "/fkg.png" },
    { alt: "ADCO", src: "/adco.png" },
    { alt: "Grocon", src: "/grocon.jpg" },
  ],
};

// Services Section Data
export const servicesSectionData: ServicesSectionProps = {
  headingText: "Solutions that build businesses",
  title: "Recruitment. Consulting. Growth.",
  subtitle:
    "From building your team to designing your strategy and driving growth, we deliver the expertise to take your business further , faster.",
  services: [
    {
      title: "Recruitment",
      description:
        "We connect you with the industry’s best , permanent hires and executive leaders who aren’t just qualified, but capable of moving your business forward.",
      action: "Hire talent",
      image: "/home/homeRec1.jpg",
    },
    {
      title: "Consulting & advisory",
      description:
        "We design smarter organisations. From workforce planning and organisational structure to talent attraction strategies, we help you build a foundation for growth.",
      action: "Drive performance",
      image: "/home/homeRec2.jpg",
    },
    {
      title: "Growth",
      description:
        "Beyond hiring and planning, we help you win. Our growth services open new markets, drive revenue opportunities, and strengthen your competitive position.",
      action: "Grow your business",
      image: "/home/homeRec3.jpg",
    },
  ],
  footerTitle: "Individually strong. Unstoppable together.",
  footerSubtitle: "When you combine all three, you don't just keep up , you lead.",
  buttonText: "Begin your success story",
};

// Strategic Partnerships Data
export const strategicPartnershipsData: StrategicPartnershipsProps = {
  title: "Strategic partnerships",
  partners: [
    { src: "/partners/partner1.jpg", alt: "Master builders australia" },
    { src: "/partners/partner2.jpg", alt: "Australian constructors association" },
    { src: "/partners/partner3.jpg", alt: "Housing industry association" },
    { src: "/partners/partner4.jpg", alt: "Rcsa" },
    { src: "/partners/partner5.png", alt: "Apsco australia" },
  ],
};

// Testimonial Data
export const testimonialData: TestimonialProps = {
  heading: "What our clients say",
  title: "Reviews",
  description:
    "Here is what our clients have to say about working with us. Real experiences, real feedback.",
  quote: "The calibre of candidates has always exceeded what others have put forward.",
  detail:
    "Guy assesses the needs of the client and then carefully selects potential candidates that are the right fit. He is also personally involved in every step of the process.",
  author: "Stephen kerfoot, director - ",
  company: "Kerfoot electrics",
};

// Expertise Section Data (Reusable for Insights)
export const expertiseData: ExpertiseSectionProps = {
  headingText: "Specialist expertise",
  title: "Broad expertise, targeted solutions",
  description:
    "See how we support your industry & find the expertise you need to build what's next.",
  expertiseList: [
    { title: "Property & development", action: "Explore our expertise", description: "", image: "/expertise/expertise1.jpg" },
    { title: "Construction", action: "Explore our expertise", description: "", image: "/expertise/expertise2.jpg" },
    { title: "Engineering", action: "Explore our expertise", description: "", image: "/expertise/expertise3.jpg" },
    { title: "Facilities management", action: "Explore our expertise", description: "", image: "/expertise/expertise4.jpg" },
    { title: "Resources", action: "Explore our expertise", description: "", image: "/expertise/expertise5.jpg" },
    { title: "Renewables", action: "Explore our expertise", description: "", image: "/expertise/expertise6.jpg" },
    { title: "Not-for-profit", action: "Explore our expertise", description: "", image: "/expertise/expertise7.jpg" },
    { title: "Corporate", action: "Explore our expertise", description: "", image: "/expertise/expertise8.jpg" },
    { title: "Government", action: "Explore our expertise", description: "", image: "/expertise/expertise9.jpg" },
  ],
};
