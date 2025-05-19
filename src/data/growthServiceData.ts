import {
  SolutionsSectionProps,
  StrategicAdviceProps,
  TrustedClientsProps,
} from "@/types/advisoryInterfaces";
import { HeroProps, TestimonialProps } from "@/types/homeInterfaces";
import { FAQ, GrowthServiceProps } from "@/types/recruitmentInterfaces";

// Hero section data
export const heroDetails: HeroProps = {
  title: "Growth Strategy Services That Drive Results",
  description:
    " We help businesses move from opportunity to execution, with strategies built for market traction, not whiteboards.",
    imageUrl: "/hero/hero4.jpg",
  buttonText: "Begin your success story",
};

export const strategicAdviceData: StrategicAdviceProps = {
  text: "What we do",
  heading: "We Turn Opportunity into Strategy, and Strategy into Action",
  paragraphs: [
    "We work with founders, CEOs and leadership teams to shape growth plans that match market realities, commercial capability and internal resources. Whether you’re entering a new sector, reworking your sales approach, or repositioning for scale, we help you define a strategy that performs — then support you through implementation.",
    
  ],
  buttonText: "Start the conversation",
  buttonColor: "#132D46",
  buttonBgColor: "transparent",
  buttonBorderColor: "#132D46",
};

export const solutionsSectionData: SolutionsSectionProps = {
  heading: "How we work",
  headingColor: "#132D46",
  dividerColor: "#132D46",
  dividerHeight: "1px",
  title: "How We Grow Businesses",
  subtitle:
    "We work with businesses at critical points where structure, leadership and commercial direction must evolve to meet the next stage of growth. We help leaders answer questions like:",
  questions: [
    "Is our current team structure aligned to where we're going?",
    "Do we have the right leadership layers — or too many?",
    "Are roles defined by outcomes, or just inherited job titles?",
    "How do we navigate a restructure without losing momentum?",
    "Where are our capability gaps, and how do we close them fast?",
    "What's stopping our teams from delivering more with less?",
  ],
  description:
    "These are strategic problems — not HR issues. We help you unpack them, refocus your structure, and make decisions that hold up under investor scrutiny, board pressure and business complexity.",
  buttonText: "Build your Team",
  buttonColor: "#132D46",
  buttonBgColor: "transparent",
  buttonBorderColor: "#132D46",
  imageUrl: "/whatwesolve.jpg",
  imageOverlay: "linear-gradient(to right, #132D46CC, #132D46CC)",
  imageBorderRadius: 8,
};

export const testimonialData: TestimonialProps= {
  heading: "What Our Clients Say",
  title: "Reviews",
  description:
    "Here is what our clients have to say about working with us. Real experiences, real feedback.",
  quote:
    "I’ve had the pleasure of working with Guy Ingleby for 10 years.",
  detail:
    "I can confidently say they are one of the most effective and professional recruiters I’ve partnered with. Their deep understanding of our business, industry and commitment to finding the right cultural and technical fit have made a real impact on our team.",
  author: "Stephen Kerfoot, Director",
  company: "Kerfoot Electrics",
};

  export const advisoryFaq: FAQ[] = [
    {
      question: "What industries do you work with?",
      answer:
        "We work across sectors including infrastructure, services, for-purpose, and growth-stage companies.",
    },
    {
      question: "What makes your advisory different?",
      answer:
        "Every engagement is led by a senior advisor with real-world leadership experience, focusing on practical change.",
    },
    {
      question: "How fast can you begin?",
      answer:
        "We can typically begin within a few days depending on the engagement scope.",
    },
  ];

  export const growthServiceData: GrowthServiceProps = {
    heading1: "GROWTH SERVICES",
    heading: "Strategic Growth. Commercial Focus.",
    subheading: "Specialist services tailored to your sector, size and stage — with execution built in.",
    paragraph: "We deliver:",
    imageSrc: "/womenPresenting.jpg",
    imageAlt: "Planning Meeting",
    leftButtonText: "Build Your Team",
    services: [
      {
        title: "Market Entry & Expansion Planning",
        description: "Support for entering new geographies, sectors or buyer segments with detailed market intelligence and structured go-to-market plans.",
      },
      {
        title: "Customer Segmentation & Targeting",
        description: "Analysis of your current client base and market opportunity to focus your resources on segments that convert and scale.",
      },
      {
        title: "Sales & Distribution Optimisation",
        description: "Assessment and improvement of your sales structure, channel strategy and partner relationships to improve margins and conversion.",
      },
      {
        title: "Strategic Partnerships & Alliances",
        description: "Identification and negotiation of external partnerships that extend your reach, unlock capability, or accelerate distribution.",
      },
      {
        title: "Product & Service Positioning",
        description: "Refinement of your offer, value proposition and brand messaging to ensure cut-through and customer fit in competitive markets..",
      },
    ],
    ctaColor: "#132D46",
    isBackground: false,
    isButton: false
  };

  export const trustedClientsTop: TrustedClientsProps = {
    layoutVariant: "imageLeft",
    sectionBg: "#ffffff",
    headingText: "Work with the experts",
    headingColor: "#132D46",
    headingDividerColor: "#132D46",
    dividerHeight: "1px",
    titleText: "Trusted by Businesses Ready to Expand",
    titleColor: "#132D46",
    imageSrc: "/explaningProjectPoint.jpg",
    imageAlt: "Business meeting",
    imageBorderRadius: 8,
    borderColor: "#132D46",
    descriptionText:
      "We work with organisations that need growth strategies grounded in commercial reality, not generic playbooks.:",
    listItems: [
      "Civil, engineering and infrastructure firms scaling into new geographies or delivery models",
      "Construction and property businesses preparing for growth, M&A or market repositioning",
      "Resources and renewables companies entering new project phases or transitioning to direct delivery",
      "Government-aligned and service organisations expanding into new regions or funded programs",
      "Corporate services and operational businesses needing tighter sales and market alignment",
    ],
    closingText: "From targeted expansion to full commercial repositioning — we help sector-specific businesses grow with strategy, structure and speed.",
    ctaText: "Ready to Build What’s Next?",
    ctaColor: "#132D46",
  };

  export const trustedClientsBottom: TrustedClientsProps = {
    layoutVariant: "imageCenter",
    sectionBg: "#D4E1EF66",
    bgImage: "/strategy.jpg",
    headingText: "RESULTS",
    headingColor: "#132D46",
    headingDividerColor: "#132D46",
    dividerHeight: "1px",
    titleText: "Why Businesses Choose Henton",
    titleColor: "#ffffff",
    imageSrc: "/explaningProjectPoint.jpg",
    imageAlt: "Business Discussion",
    imageBorderRadius: 8,
    descriptionText: "",
    listItems: [
      "We combine strategic thinking with real-world commercial execution",
      "We align market potential with internal capability and operational pressure",
      "We work fast, stay focused, and get results that move the needle",
      "We integrate with recruitment and advisory to turn strategy into delivery",
    ],
    closingText: "Growth shouldn’t be abstract. It should be measurable, sustainable and commercially justified.",
    ctaText: "Ready to Build What’s Next?",
    ctaColor: "#ffffff",
  };