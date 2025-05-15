import {
  SolutionsSectionProps,
  StrategicAdviceProps,
  TrustedClientsProps,
} from "@/types/advisoryInterfaces";
import { HeroProps, TestimonialProps } from "@/types/homeInterfaces";
import { FAQ, GrowthServiceProps } from "@/types/recruitmentInterfaces";

// Hero section data
export const heroDetails: HeroProps = {
  title: "Business Advisory for Growth, Change and Clarity",
  description:
    "Commercial, action-oriented consulting when the next move matters most.",
  imageUrl: "/Hero.jpg",
  buttonText: "Begin your success story",
};

export const strategicAdviceData: StrategicAdviceProps = {
  text: "What we do",
  heading: "We Deliver Strategic Advice That Unlocks Business Performance",
  paragraphs: [
    "We help organisations solve complex business problems — not with theory, but with sharp, commercially grounded advice. Our consulting work is built for businesses facing moments of pressure or transformation: scaling fast, entering new markets, restructuring, or preparing for investment.",
    "We don’t talk in frameworks. We get to the point — quickly — and help you move forward with confidence.",
  ],
  buttonText: "Start the conversation",
  buttonColor: "#132D46",
  buttonBgColor: "transparent",
  buttonBorderColor: "#132D46",
};

export const solutionsSectionData: SolutionsSectionProps = {
  heading: "Advisory & Consulting Services",
  headingColor: "#132D46",
  dividerColor: "#132D46",
  dividerHeight: "1px",
  title: "What We Solve",
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
    "The calibre of candidates has always exceeded what others have put forward.",
  detail:
    "Guy assesses the needs of the client and then carefully selects potential candidates that are the right fit. He is also personally involved in every step of the process.",
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
        description: "Refinement of your offer, value proposition and brand messaging to ensure cut-through and customer fit in competitive markets.",
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
    titleText: "Trusted by Australia’s Mid-Market Leaders",
    titleColor: "#132D46",
    imageSrc: "/explaningProjectPoint.jpg",
    imageAlt: "Business meeting",
    imageBorderRadius: 8,
    borderColor: "#132D46",
    descriptionText:
      "We advise executive teams, Boards, operational heads and people leaders across:",
    listItems: [
      "High-growth, founder-led and PE-backed companies",
      "National and multi-site service organisations",
      "Built environment, infrastructure and industrial businesses",
      "For-purpose and government-adjacent organisations",
      "Firms preparing for scale, transition or acquisition",
    ],
    closingText: "Our clients come to us when clarity matters — and theory isn’t enough.",
    ctaText: "Ready to Build What’s Next?",
    ctaColor: "#132D46",
  };

  export const trustedClientsBottom: TrustedClientsProps = {
    layoutVariant: "imageCenter",
    sectionBg: "#D4E1EF66",
    bgImage: "/strategy.jpg",
    headingText: "Where Strategy Demands Action",
    headingColor: "#132D46",
    headingDividerColor: "#132D46",
    dividerHeight: "1px",
    titleText: "We’re typically engaged when:",
    titleColor: "#ffffff",
    imageSrc: "/explaningProjectPoint.jpg",
    imageAlt: "Business Discussion",
    imageBorderRadius: 8,
    descriptionText: "We’re typically engaged when:",
    listItems: [
      "A business is growing fast but structure hasn’t kept pace",
      "A founder or executive is stepping back, and a new leadership model is needed",
      "Headcount has grown without clarity on role definition or accountability",
      "M&A or investment activity is on the horizon and capability gaps must be addressed",
      "A restructure or realignment is necessary, but internal teams are too close to see clearly",
      "A project is failing — and no one is sure whether it’s a people, process or leadership issue",
    ],
    closingText: "Our clients come to us when clarity matters — and theory isn’t enough.",
    ctaText: "Ready to Build What’s Next?",
    ctaColor: "#ffffff",
  };