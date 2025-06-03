import { SolutionsSectionProps, StrategicAdviceProps, TrustedClientsProps } from "@/types/advisoryInterfaces";
import { HeroProps, TestimonialProps } from "@/types/homeInterfaces";
import { FAQ, GenericProcessSectionProps } from "@/types/recruitmentInterfaces";

  // --- Hero
  export const heroDetails: HeroProps = {
    title: "Business Advisory for Growth, Change and Clarity",
    description:
      "Commercial, action-oriented consulting when the next move matters most.",
      imageUrl: "/hero/hero3.jpg",
    buttonText: "Begin your success story",
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
    closingText:
      "Our clients come to us when clarity matters — and theory isn’t enough",
    ctaText: "Ready to Build What’s Next?",
    ctaColor: "#132D46",
  };

  export const trustedClientsBottom: TrustedClientsProps = {
    layoutVariant: "imageCenter",
    sectionBg: "#D4E1EF66",
    bgImage: "/strategy.jpg",
    headingText: "RESULT",
    headingColor: "#132D46",
    headingDividerColor: "#132D46",
    dividerHeight: "1px",
    titleText: "Where Strategy Demands Action",
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
    closingText:
      "Our clients come to us when clarity matters — and theory isn’t enough.",
    ctaText: "Ready to Build What’s Next?",
    ctaColor: "#ffffff",
  };

  export const advisoryProcess: GenericProcessSectionProps = {
    backgroundImage: "/advisory.jpg",
    heading: "Our Approach",
    intro: [
      {
        description:
          "Every engagement is led by a senior advisor with real-world leadership experience — not just a toolkit.",
      },
      {
        description:
          "We move fast, ask sharper questions, and focus on practical change.",
      },
    ],
    steps: [
      {
        icon: "/Precision.svg",
        title: "Discovery",
        description:
          "We immerse in your business context, growth plans and known risks.",
      },
      {
        icon: "/Network.svg",
        title: "Diagnosis",
        description:
          "We assess your structure, leadership layers, roles, accountability and workforce alignment.",
      },
      {
        icon: "/Speicific.svg",
        title: "Advisory",
        description:
          "We provide clear, commercial guidance that addresses gaps, not just symptoms.",
      },
      {
        icon: "/Speicific.svg",
        title: "Delivery",
        description:
          "We help you act, via instant teams or seamless handover to Henton.",
      },
    ],
    itemsHeading: "Our work is:",
    items: [
      {
        title: "",
        description:
          "Built for leaders who need clarity, fast.",
      },
      {
        title: "",
        description:
          "Every engagement is structured to drive focus, alignment and forward momentum.",
      },
    ],
    isHeadingLeft: false,
    deliverables: [
      {
        title: "Evidence-based , Informed by data, diagnostics and what’s really happening in your business",
        icon: "/sortlist.svg",
      },
      {
        title: "Commercially grounded , Anchored to your revenue, cost, investment or scale priorities",
        icon: "/marketing.svg",
      },
      {
        title: "Actionable , Designed to turn into clear steps, not theoretical slides",
        icon: "/confidence.svg",
      },
    ],
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

    export const testimonialData: TestimonialProps = {
      heading: "What Our Clients Say",
      title: "Reviews",
      description:
        "Here’s what our clients have to say about working with us. Real experiences, real feedback.",
      quote:
        "I’ve had the pleasure of working with Guy Ingleby for 10 years.",
      detail:
        "I can confidently say they are one of the most effective and professional recruiters I’ve partnered with. Their deep understanding of our business, industry and commitment to finding the right cultural and technical fit have made a real impact on our team.",
      author: "Stephen Kerfoot, Director",
      company: "Kerfoot Electrics",
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
          "Is our current team structure aligned to where we’re going?",
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