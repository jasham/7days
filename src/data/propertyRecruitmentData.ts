import { CardData, HeroProps, ResultSectionProps, TestimonialProps, WhyPartnerProps } from "@/types/homeInterfaces";
import { OurNetworkSectionProps, Section, SpecialistExpertiseProps } from "@/types/permanentRecruitmentInterfaces";
import { HowWeRecruitProps } from "@/types/propertyRecruitmentInterface";
import { FAQ, WhatWeDoProps } from "@/types/recruitmentInterfaces";

export const heroDetails: HeroProps = {
  title: "Expert property & development recruitment",
  description: "Specialist talent across the full property lifecycle",
  buttonText: "Begin your success story",
  imageUrl: "/hero/hero10.jpg",
};

export const testimonialData: TestimonialProps = {
  heading: "What our clients say",
  title: "Reviews",
  description: "Here is what our clients have to say about working with us. Real experiences, real feedback.",
  quote: "The calibre of candidates has always exceeded what others have put forward.",
  detail: "Guy assesses the needs of the client and then carefully selects potential candidates that are the right fit. He is personally involved in every step of the process.",
  author: "Stephen Kerfoot, Director - ",
  company: "Kerfoot Electrics",
};

export const resultSectionData: ResultSectionProps = {
  cardProps: {
    cardDetails: [
      {
        score: "98%",
        title: "",
        description: "Of hires are still with the business after 18 months",
      },
      {
        score: "100%",
        title: "",
        description: "Of retained searches have been completed successfully",
      },
      {
        score: "85%",
        title: "",
        description: "Of roles are filled from the first candidate presented",
      },
    ],
  },
  backgroundImage: "/results-bg.jpg",
  topHeading: "Measurable outcomes",
  bottomHeading: "When expertise, trust, and speed come together, growth isn’t a goal — it’s the outcome.",
};

export const whatWeDoData: WhatWeDoProps = {
  heading: "Great developments don’t deliver themselves — it starts with who you hire.",
  introText:
    "We recruit high-performing professionals across the entire property development spectrum — from acquisitions and feasibility to delivery, leasing, and asset performance. \n\n" +
    "Whether you're scaling a national development pipeline or unlocking new investment potential, we deliver the right people at the right time.",
  whoSubHeading: "We recruit for:",
  whoHeading: "The right partnership brings your project to life — and the right team keeps it moving. We partner with:",
  listItems: [
    "Property developers (residential, commercial, mixed-use)",
    "Funds and institutional asset owners",
    "Real estate advisory and consultancy groups",
    "Government and private urban development bodies",
  ],
  buttonText: "Start the conversation",
};

export const specialistExpertiseData: SpecialistExpertiseProps = {
  title: "Property-focused recruitment. Built for delivery.",
  description: "Precision hiring across every phase of the development lifecycle — from vision to completion.",
  sectors: [
    "Property & development",
    "Construction",
    "Engineering",
    "Facilities management",
    "Resources",
    "Renewables",
    "Not for profit",
    "Corporate",
    "Government",
  ],
};

export const propertyRecruitmentSections: Section[] = [
  {
    complexItems: [
      {
        title: "Acquisitions & development management",
        body: "Commercially minded talent who unlock value, shape feasibility, and align with investor goals.",
      },
      {
        title: "Project & construction management",
        body: "Proven operators who keep delivery on track — managing timeline pressure and contractor risk.",
      },
      {
        title: "Asset management",
        body: "Specialists focused on NOI, tenant performance, and asset yield.",
      },
      {
        title: "Town planning & urban design",
        body: "Strategic thinkers who balance community needs with commercial realities.",
      },
      {
        title: "Leasing, property & facilities management",
        body: "From leasing leads to FM experts, we place those who protect asset value and drive retention.",
      },
      {
        title: "Real estate investment & funds management",
        body: "Analysts, asset managers, and fund executives aligned to IRR targets and investor mandates.",
      },
    ],
  },
];

export const networkData: OurNetworkSectionProps = {
  header: "Work with the experts",
  heading: "Deep expertise. Precise delivery.",
  description: "We don’t pull from static databases — we headhunt for impact. Our sector insight spans the entire property lifecycle:",
  bottomText: "",
  image: "/Network3.jpg",
  mt: -5,
  mb: 5,
  sections: propertyRecruitmentSections,
};

export const faqData: FAQ[] = [
  {
    question: "What makes your permanent recruitment different from other agencies?",
    answer: "We don’t rely just on job ads. We use direct search, tap into passive candidate networks, and focus on long-term value — not just short-term placement. We use a 360 approach to sourcing.",
  },
  {
    question: "How do you ensure the candidate is the right long-term fit?",
    answer: "We take time to understand your team, culture, goals and leadership style. Our shortlist only includes candidates who match on values, capability and growth potential.",
  },
  {
    question: "Can you help us with confidential or sensitive roles?",
    answer: "Absolutely. We’ve managed hundreds of off-market searches for middle and senior leadership, restructure scenarios and board-level hires.",
  },
  {
    question: "We’ve had problems with retention. How can you help?",
    answer: "We design every brief to focus on fit, expectations and growth alignment — and support post-placement success through regular check-ins. We can also help through our consulting and advisory services to work out where the retention issues are.",
  },
];

export const partnerCards: CardData[] = [
  {
    title: "We don’t send options, we send the one candidate who can do the job.",
    description: "",
    icon: "/Focus.svg",
  },
  {
    title: "We understand what’s commercially at stake in every hire.",
    description: "",
    icon: "/DollarSuitCase.svg",
  },
  {
    title: "We show up with honesty, urgency, and results.",
    description: "",
    icon: "/Thunder.svg",
  },
];

export const whyPartnerSectionData: WhyPartnerProps = {
  headingText: "Work with the experts",
  headingColor: "#132D46",
  dividerColor: "#132D46",
  dividerHeight: "1px",
  title: "Why employers trust us.",
  cards: partnerCards,
  buttonText: "Ready to build what’s next?",
  buttonColor: "#132D46",
  isCentered: true,
};

export const howWeDeliverRecruitmentData: HowWeRecruitProps = {
  heading: "Work with the experts",
  title: "How we recruit and why it works.",
  subTitle: "We take your brief and turn it into action. Fast. Our model combines proactive search with deep sector insight.",
  description: "We don’t wait for candidates to apply, we identify hidden performers already delivering across major property portfolios, many of whom are quietly open to change. Every search includes:",
  description2: "Because we understand risk, yield, feasibility, ROI, and timeline pressure, we ask sharper questions. That means we filter faster — and you interview only the right people.",
  description3: "The difference between a project that delivers and one that stalls often comes down to a single hire. And in this market, average hires cost more than vacancies.",
  itemList: [
    {
      icon: "/WebNetwork.svg",
      text: "Dedicated research & market mapping",
    },
    {
      icon: "/Voice.svg",
      text: "Direct outreach to passive talent",
    },
    {
      icon: "/todoList.svg",
      text: "Structured assessments focused on cultural and technical alignment",
    },
    {
      icon: "/checkPeople.svg",
      text: "No shortlists. Just the right person, first time.",
    },
  ],
};
