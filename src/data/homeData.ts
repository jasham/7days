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
    title: "Where Vision Meets Execution",
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
        title: "Years of Industry Expertise",
        description:
          "Backed by over two decades of recruitment and consulting experience across Property, Construction, Engineering, and Corporate sectors.",
      },
      {
        score: "95%",
        title: "Client Retention Rate",
        description:
          "Our clients trust us to deliver — and 95% return to partner with Henton again for future recruitment and strategic needs.",
      },
      {
        score: "98%",
        title: "of Roles Filled Within 30 Days",
        description:
          "Our efficient, targeted recruitment process ensures critical roles are placed faster — without compromising on quality.",
      },
    ],
  };
  
  // Why partner data
  export const partnerCards: CardData[] = [
    {
      icon: "/Expert.svg",
      title: "Expertise That Anticipates Change",
      description:
        "Decades of real industry experience helping you stay ahead of shifting markets.",
    },
    {
      icon: "/StretegyIcon.svg",
      title: "Strategy That Drives Results",
      description: "Bespoke solutions that turn challenges into growth opportunities.",
    },
    {
      icon: "/PartnerShip.svg",
      title: "Partnerships That Deliver",
      description:
        "95% of clients trust us again — because we deliver outcomes, not promises.",
    },
  ];
  
  // Why Partner Section props
  export const whyPartnerSectionData: WhyPartnerProps = {
    headingText: "WORK WITH THE EXPERTS",
    headingColor: "#132D46",
    dividerColor: "#132D46",
    dividerHeight: "1px",
    title: "Why Partner With Henton Consulting?",
    subTitle:
      "Expertise. Strategy. Results. Helping you build stronger teams and lasting success.",
    cards: partnerCards,
    buttonText: "Ready to Build What’s Next?",
    buttonColor: "#132D46",
  };
  
  // Case study data
  export const caseStudy1Data: CaseStudyHighlightProps = {
    imageSrc: "/home/homeTrusted.jpg",
    imageAlt: "Construction worker",
    title:
      "How Strategic Recruitment & Consulting for a Sydney Head Contractor led to 34% Growth in 6 months.",
    description:
      "Our comprehensive approach that improved operational efficiency by 30% for a leading head contractor.",
    ctaText: "See how we deliver results",
    onClick: () => console.log("Clicked"),
    isReverse: false,
  };
  
  export const caseStudy2Data: CaseStudyHighlightProps = {
    heading: "Case Studies",
    imageSrc: "/caseStudy2.jpg",
    imageAlt: "Construction worker",
    title: "Setting a New Benchmark for Talent Acquisition",
    description:
      "When Transdev NSW needed to fill critical roles, they chose Henton Consulting for our reputation in delivering exceptional candidates and a seamless recruitment process.",
    ctaText: "See How We Deliver Results",
    onClick: () => console.log("Clicked"),
    isReverse: true,
    isBackground: true,
  };
  
  // Result Section props
  export const resultSectionData: ResultSectionProps = {
    backgroundColor: "#132D46",
    headingText: "Result",
    subheadingText: "",
    topHeading: "Measured by Results. Chosen for Impact.",
    footerText:
      "When expertise, trust, and speed come together, growth isn’t a goal — it’s the outcome.",
    buttonText: "Ready to Build What’s Next?",
    cardProps: resultDetails,
    onButtonClick: () => console.log("Redirect to Ready to Build What’s Next?"),
  };
  
  export const jobSearchData: JobSearchProps = {
    title: "Search Jobs. Build Your Future.",
    headline: "Built on Expertise. Driven by Results. Trusted by Industry.",
    description: [
      "Henton Consulting is a specialist recruitment and advisory firm helping businesses across Property, Construction, Engineering, Resources, Corporate, Government and Not-for-Profit sectors build stronger teams, smarter structures, and sustained growth.",
      "With over 20 years’ experience, we deliver permanent recruitment, executive search, strategic workforce consulting, and business development services tailored to your industry’s demands.",
      "Organisations trust us because we combine market expertise with a results-driven approach — finding the right people, designing the right strategies, and opening the right opportunities to move businesses forward.",
    ],
    buttonText: "Start the Conversation",
  };
  
  // Trusted By Data
  export const trustedByData: TrustedByProps = {
    title: "Trusted by industry leaders",
    description:
      "Henton Consulting is the preferred partner for companies seeking unparalleled expertise in the Property, Construction, Engineering, and Resources sectors.",
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
    headingText: "Solutions That Build Businesses",
    title: "Recruitment. Consulting. Growth.",
    subtitle:
      "From building your team to designing your strategy and driving growth, we deliver the expertise to take your business further — faster.",
    services: [
      {
        title: "Recruitment",
        description:
          "We connect you with the industry’s best — permanent hires and executive leaders who aren’t just qualified, but capable of moving your business forward.",
        action: "Hire Talent",
        image: "/home/homeRec1.jpg",
      },
      {
        title: "Consulting & Advisory",
        description:
          "We design smarter organisations. From workforce planning and organisational structure to talent attraction strategies, we help you build a foundation for growth.",
        action: "Drive Performance",
        image: "/home/homeRec2.jpg",
      },
      {
        title: "Growth",
        description:
          "Beyond hiring and planning, we help you win. Our growth services open new markets, drive revenue opportunities, and strengthen your competitive position.",
        action: "Grow Your Business",
        image: "/home/homeRec3.jpg",
      },
    ],
    footerTitle: "Individually strong. Unstoppable together.",
    footerSubtitle: "When you combine all three, you don't just keep up — you lead.",
    buttonText: "Begin your success story",
  };
  
  // Strategic Partnerships Data
  export const strategicPartnershipsData: StrategicPartnershipsProps = {
    title: "Strategic Partnerships",
    partners: [
      { src: "/partners/partner1.jpg", alt: "Master Builders Australia" },
      { src: "/partners/partner2.jpg", alt: "Australian Constructors Association" },
      { src: "/partners/partner3.jpg", alt: "Housing Industry Association" },
      { src: "/partners/partner4.jpg", alt: "RCSA" },
      { src: "/partners/partner5.png", alt: "APSCo Australia" },
    ],
  };
  
  // Testimonial Data
  export const testimonialData: TestimonialProps = {
    heading: "What Our Clients Say",
    title: "Reviews",
    description:
      "Here is what our clients have to say about working with us. Real experiences, real feedback.",
    quote: "The calibre of candidates has always exceeded what others have put forward.",
    detail:
      "Guy assesses the needs of the client and then carefully selects potential candidates that are the right fit. He is also personally involved in every step of the process.",
    author: "Stephen Kerfoot, Director - ",
    company: "Kerfoot Electrics",
  };
  
  // Expertise Section Data (Reusable for Insights)
  export const expertiseData: ExpertiseSectionProps = {
    headingText: "Specialist Expertise",
    title: "Broad Expertise, Targeted Solutions",
    description:
      "See How We Support Your Industry & Find the Expertise You Need to Build What's Next.",
    expertiseList: [
      { title: "Property & Development", action: "Explore Our Expertise", description: "", image: "/expertise/expertise1.jpg" },
      { title: "Construction", action: "Explore Our Expertise", description: "", image: "/expertise/expertise2.jpg" },
      { title: "Engineering", action: "Explore Our Expertise", description: "", image: "/expertise/expertise3.jpg" },
      { title: "Facilities Management", action: "Explore Our Expertise", description: "", image: "/expertise/expertise4.jpg" },
      { title: "Resources", action: "Explore Our Expertise", description: "", image: "/expertise/expertise5.jpg" },
      { title: "Renewables", action: "Explore Our Expertise", description: "", image: "/expertise/expertise6.jpg" },
      { title: "Not-for-Profit", action: "Explore Our Expertise", description: "", image: "/expertise/expertise7.jpg" },
      { title: "Corporate", action: "Explore Our Expertise", description: "", image: "/expertise/expertise8.jpg" },
      { title: "Government", action: "Explore Our Expertise", description: "", image: "/expertise/expertise9.jpg" },
    ],
  };