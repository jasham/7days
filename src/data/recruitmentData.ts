import { CardProps, ExpertiseSectionProps, HeroProps, ResultSectionProps, TestimonialProps, WhyPartnerProps } from "@/types/homeInterfaces";
import {
    FAQ,
    GrowthServiceProps,
    GenericProcessSectionProps,
    WhatWeDoProps,
  } from "@/types/recruitmentInterfaces";
  
  // --- Hero
  export const heroDetails: HeroProps = {
    title: "Recruitment Services Built for Impact",
    description:
      "Find and secure the right talent with recruitment services built around your business goals.",
    imageUrl: "/Hero.jpg",
    buttonText: "Begin your success story",
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
  
  // --- WhyPartnerSection
  export const whyPartnerData: WhyPartnerProps = {
    headingText: "WORK WITH THE EXPERTS",
    headingColor: "#132D46",
    dividerColor: "#132D46",
    dividerHeight: "1px",
    title: "How Henton Consulting Delivers Results",
    subTitle: "Our recruitment success is built on three core foundations:",
    cards: [
      {
        icon: "/Precision.svg",
        title: "Precision Systems",
        description:
          "Every recruitment campaign follows a structured, proven methodology.",
      },
      {
        icon: "/Network.svg",
        title: "Deep Market Networks",
        description:
          "Access passive candidates and industry leaders unavailable on the open market.",
      },
      {
        icon: "/Speicific.svg",
        title: "Strategic Process",
        description:
          "Senior advisors lead every assignment, aligning roles with your growth plans.",
      },
    ],
    buttonText: "Ready to Build What’s Next?",
    buttonColor: "#132D46",
  };
  
  // --- GenericProcessSection
  export const genericProcessData: GenericProcessSectionProps = {
    backgroundImage: "/advisory.jpg",
    heading: "Tailored Recruitment Processes",
    intro: [
      { description: "We combine search precision with business fluency." },
      { description: "Our process includes:" },
    ],
    steps: [
      {
        icon: "/Precision.svg",
        title: "Strategic Alignment",
        description: "Define role outcomes clearly.",
      },
      {
        icon: "/Network.svg",
        title: "Direct Sourcing",
        description: "Targeted outreach to passive candidates.",
      },
      {
        icon: "/Speicific.svg",
        title: "Rigorous Assessment",
        description: "Structured screening of candidates.",
      },
      {
        icon: "/Speicific.svg",
        title: "Cultural fit screening",
        description: "Stakeholder-led referencing.",
      },
    ],
    itemsHeading: "Our work is:",
    items: [
      {
        title: "Shortlists delivered with pace -",
        description: "never at the expense of quality",
      },
      { title: "Market insights and real-time availability" },
      { title: "Confidence in every hire" },
    ],
    isHeadingLeft: true,
    deliverables: [
      {
        icon: "/sortlist.svg",
        title: "Shortlists delivered with pace – never at the expense of quality",
      },
      {
        icon: "/marketing.svg",
        title: "Market insights and real-time availability",
      },
      { icon: "/confidence.svg", title: "Confidence in every hire" },
    ],
  };
  
  // --- TestimonialSection
  export const testimonialData: TestimonialProps = {
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
  
  // --- FAQ (unchanged)
  export const faqData: FAQ[] = [
    {
      question:
        "What Makes Your Permanent Recruitment Different From Other Agencies?",
      answer:
        "We focus on long-term value, passive candidate networks, and a comprehensive sourcing approach.",
    },
    {
      question: "How Do You Ensure The Candidate Is The Right Long-Term Fit?",
      answer:
        "We match candidates with your culture, team dynamics, and strategic goals.",
    },
    {
      question: "Can You Help Us With Confidential Or Sensitive Roles?",
      answer:
        "Yes, we handle off-market searches and sensitive leadership roles discreetly.",
    },
    {
      question: "We’ve Had Problems With Retention. How Can You Help?",
      answer:
        "We ensure alignment in expectations, values, and provide ongoing support post-placement.",
    },
  ];
  
  // --- GrowthService (unchanged)
  export const growthServiceData: GrowthServiceProps = {
    heading1: "Recruitment Services",
    heading: "Tailored Recruitment Processes",
    subheading:
      "At Henton, we deliver three core recruitment solutions — each aligned to your operational needs, timelines and long-term growth.",
    paragraph: "We deliver:",
    imageSrc: "/womenPresenting.jpg",
    imageAlt: "Planning Meeting",
    leftButtonText: "Build Your Team",
    services: [
      {
        title: "Permanent Recruitment",
        description:
          "Secure long-term employees who integrate into your culture, build capability, and drive performance.",
      },
      {
        title: "Contract Recruitment",
        description:
          "Access flexible, project-ready talent to manage fluctuations or peak periods.",
      },
      {
        title: "Executive Search",
        description:
          "Identify and secure the leaders who will define your organisation’s future.",
      },
    ],
    ctaColor: "#132D46",
    isBackground: true,
    isButton: true,
  };

    // Expertise Section Data (Reusable for Insights)
    export const expertiseData: ExpertiseSectionProps = {
      headingText: "Specialist Expertise",
      title: "Broad Expertise, Targeted Solutions",
      description:
        "See how we support your industry & find the expertise you need to build what’s next.",
      expertiseList: [
        { title: "Property & Development", action: "Explore Our Expertise", description: "", image: "/expertise/expertise1.jpg" },
        { title: "Construction", action: "Explore Our Expertise", description: "", image: "/expertise/expertise2.jpg" },
        { title: "Engineering", action: "Explore Our Expertise", description: "", image: "/expertise/expertise3.jpg" },
        { title: "Facilities Management", action: "Explore Our Expertise", description: "", image: "/expertise/expertise4.jpg" },
        { title: "Resources", action: "Explore Our Expertise", description: "", image: "/expertise/expertise5.jpg" },
      ],
    };

    export const whatWeDoData: WhatWeDoProps =   {
      heading:
        "We help businesses recruit with purpose — aligning people strategy to commercial outcomes.",
      whoSubHeading:
        "At Henton, recruitment isn’t transactional. It’s strategic. Every hire should improve capability, deliver outcomes, and move your business forward.",
      whoHeading: "Who We Recruit",
      whoDescription: "Our expertise covers a wide range of skill sets and leadership levels:",
      roleCards: [
        { title: "Technical Roles", description: "Engineering, construction management, project delivery" },
        { title: "Commercial and Leadership Roles", description: "Finance, strategy, operations, general management" },
        { title: "Business-Critical and Confidential Roles", description: "Executive search, senior appointments, succession placements" },
      ],
      buttonText: "Start the conversation",
    };