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
    imageUrl: "/hero/hero2.jpg",
    buttonText: "Begin your success story",
  };
  
    // Result section data
    export const resultDetails: CardProps = {
      cardDetails: [
        {
          score: "98%",
          title: "Consistent outcomes on retained roles",
          description:
            "",
        },
        {
          score: "500+",
          title: "Client Retention Rate",
          description:
            "",
        },
        {
          score: "98%",
          title: "Trusted by CEOs, COOs, GMs and operational leaders across Australia",
          description:
            "",
        },
      ],
    };

  // Result Section props
  export const resultSectionData: ResultSectionProps = {
    backgroundColor: "#014225",
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
    subTitle: "At Henton, our recruitment success is built on three core foundations:",
    cards: [
      {
        icon: "/Precision.svg",
        title: "Precision Systems",
        description:
          "Every recruitment campaign follows a structured, proven methodology. From role briefing to shortlist delivery, we align talent acquisition tightly to your business outcomes, timelines and team dynamics.",
      },
      {
        icon: "/Network.svg",
        title: "Deep Market Networks",
        description:
          "We actively maintain relationships across technical, operational and executive talent pools — not just databases. Our networks give you access to passive candidates and industry leaders who aren’t available on the open market.",
      },
      {
        icon: "/Speicific.svg",
        title: "Strategic Process",
        description:
          "Every assignment is led by a senior advisor who understands your industry and growth stage. We don’t just fill vacancies — we build capability aligned to your future plans.",
      },
    ],
    buttonText: "Ready to Build What’s Next?",
    buttonColor: "#132D46",
  };
  
  // --- GenericProcessSection
  export const genericProcessData: GenericProcessSectionProps = {
    mainHeading: "Our Process",
    backgroundImage: "/recruitmentAdvisory.jpg",
    heading: "Tailored Recruitment Processes",
    intro: [
      { description: "We combine search precision with business fluency." },
      { description: "Our process includes:" },
    ],
    steps: [
      {
        icon: "/Precision.svg",
        title: "Strategic Alignment",
        description: "Define role outcomes, leadership traits and team fit before search begins.",
      },
      {
        icon: "/Network.svg",
        title: "Direct Sourcing",
        description: "Activate passive candidates through targeted outreach and industry networks.",
      },
      {
        icon: "/Speicific.svg",
        title: "Rigorous Assessment",
        description: "Evaluate behavioural, leadership and technical capability through structured screening.",
      },
      {
        icon: "/Speicific.svg",
        title: "Cultural fit screening",
        description: "Align values, communication style and team dynamics via stakeholder-led referencing.",
      },
    ],
    itemsHeading: "We deliver:",
    items: [
      {
        description: "We deliver fast, focused recruitment through precision search, real-time market intelligence and deep industry alignment.",
      },
    ],
    isHeadingLeft: true,
    deliverables: [
      {
        icon: "/sortlist.svg",
        title: "Shortlists delivered with pace — never at the expense of quality",
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
      "Here’s what our clients have to say about working with us. Real experiences, real feedback.",
    quote:
      "I’ve had the pleasure of working with Guy Ingleby for 10 years.",
    detail:
      "I can confidently say they are one of the most effective and professional recruiters I’ve partnered with. Their deep understanding of our business, industry and commitment to finding the right cultural and technical fit have made a real impact on our team.",
    author: "Chris Elliott, Director - ",
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
    imageSrc: "/recruitmentService.jpg",
    imageAlt: "Planning Meeting",
    leftButtonText: "Build Your Team",
    services: [
      {
        title: "Permanent Recruitment",
        description:
        "Secure long-term employees who integrate into your culture, build capability, and drive business performance over time.\n\n" +
        "We focus on hiring professionals who don’t just fill a role — they strengthen your team.",
      },
      {
        title: "Contract Recruitment",
        description:
          "Access flexible, project-ready talent to manage fluctuations, support critical projects or cover peak periods.\n\n "+ "Our contract recruitment process ensures fast mobilisation without compromising quality.",
      },
      {
        title: "Executive Search",
        description:
          "Identify and secure the leaders who will define your organisation’s future. Our executive search process is discreet, data-led and aligned with your strategic direction.",
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

    export const whatWeDoData: WhatWeDoProps =   {
      heading:
        "We help businesses recruit with purpose — aligning people strategy to commercial outcomes.",
      whoSubHeading:
        "Who We Recruit",
      whoHeading: "At Henton, recruitment isn’t transactional. It’s strategic. Every hire should improve capability, deliver outcomes, and move your business forward.",
      whoDescription: "Our expertise covers a wide range of skill sets and leadership levels:",
      roleCards: [
        { title: "Technical Roles", description: "Engineering, construction management, project delivery" },
        { title: "Commercial and Leadership Roles", description: "Finance, strategy, operations, general management" },
        { title: "Business-Critical and Confidential Roles", description: "Executive search, senior appointments, succession placements" },
      ],
      buttonText: "Start the conversation",
    };