// data/governmentRecruitmentData.ts
import { HeroProps, ResultSectionProps, TestimonialProps, WhyPartnerProps } from "@/types/homeInterfaces";
import { OurNetworkSectionProps, Section, SpecialistExpertiseProps } from "@/types/permanentRecruitmentInterfaces";
import { HowWeRecruitProps } from "@/types/propertyRecruitmentInterface";
import { FAQ, WhatWeDoProps } from "@/types/recruitmentInterfaces";

export const governmentHeroDetails: HeroProps = {
  title: "Government Recruitment That Builds Certainty",
  description:
    "From boots-on-the-ground hires to strategic delivery roles, we find the people who get it built.",
  buttonText: "Begin your success story",
  imageUrl: "/GovernmentHero.jpg",
};

export const governmentWhatWeDoData: WhatWeDoProps = {
    heading: "Great developments don’t deliver themselves — it starts with who you hire.",
    introText:
      "We recruit high-performing professionals across the entire property development spectrum — from acquisitions and feasibility to delivery, leasing, and asset performance   \n\n" +
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

export const governmentSpecialistExpertiseData: SpecialistExpertiseProps = {
  title: "Built for Government. Proven in Delivery.",
  description:
    "Permanent, contract and executive recruitment that reduces risk, unlocks productivity, and drives your projects forward.",
  sectors: [
    "Site Management",
    "Project Engineering",
    "Safety & Compliance",
    "Commercial Leads",
    "HSE Professionals",
  ],
};

export const governmentRecruitmentSections: Section[] = [
  {
    items: [
      "Government Project Directors and Managers",
      "Property Development Executives",
      "Engineering Specialists (Civil, Mechanical, Electrical)",
      "Facilities and Asset Managers",
      "Resources Industry Leadership",
      "Renewable Energy Project Teams",
      "NFP and Public Sector Operations Executives",
    ],
  },
];

export const governmentNetworkData: OurNetworkSectionProps = {
  header: "WORK WITH THE EXPERTS",
  heading: "Deep expertise. Built for site realities.",
  description:
    "We don’t chase resumes, we chase results. Our government networks are built project by project, site by site, with live intel on who’s performing, where, and why it matters.",
  bottomText: "",
  image: "/expertImage.jpg",
  mt: -10,
  mb: 20,
  sections: governmentRecruitmentSections,
};

export const governmentHowWeRecruitData: HowWeRecruitProps = {
  heading: "government recruitment",
  title: "How we recruit and why it works.",
  subTitle:
    "Great government hiring is about more than experience; it’s about risk, trust and delivery under pressure.",
  description:
    "We don’t advertise and hope. We actively map the market, vet delivery history, and approach proven performers — even when they’re not actively looking. Every engagement includes:",
  description2:
    "We don’t just fill roles, we build teams. Our recruitment process is designed to deliver the right people for your project, every time.",
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

export const governmentWhyPartnerSectionData: WhyPartnerProps = {
  headingText: "WORK WITH THE EXPERTS",
  headingColor: "#132D46",
  dividerColor: "#132D46",
  dividerHeight: "1px",
  title: "Why employers trust us.",
  subTitle: "",
  cards: [
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
  ],
  buttonText: "Ready to Build What’s Next?",
  buttonColor: "#132D46",
  isCentered: true,
};

export const governmentResultSectionData: ResultSectionProps = {
  cardProps: {
    cardDetails: [
      {
        score: "91%",
        title: "",
        description: "of permanent placements retained 12+ months",
      },
      {
        score: "100%",
        title: "",
        description: "of retained assignments completed within timeframe",
      },
      {
        score: "83%",
        title: "",
        description: "of roles filled from the first candidate presented",
      },
    ],
  },
  backgroundImage: "/results-bg.jpg",
  topHeading: "Where Strategy Demands Action",
  bottomHeading:
    "When expertise, trust, and speed come together, growth isn’t a goal — it’s the outcome.",
};

export const governmentTestimonialData: TestimonialProps = {
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

export const governmentFaqData: FAQ[] = [
  {
    question: "Do You Recruit For Both Site And Office-Based Government Roles?",
    answer:
      "Yes — From Site Managers And Engineers To Project Directors, Commercial Leads And HSE Professionals.",
  },
  {
    question: "Can You Help With Contract-Based Or Temporary Hires?",
    answer:
      "Absolutely. We place both permanent and contract professionals aligned to project scope, stage and delivery risk.",
  },
  {
    question: "Do You Work Nationally?",
    answer:
      "Yes — We recruit across Australia including urban infill, regional builds and remote infrastructure projects.",
  },
  {
    question: "Can You Manage Sensitive Or Confidential Assignments?",
    answer:
      "Yes — We handle confidential search assignments with discretion, urgency and total alignment to risk controls.",
  },
  {
    question: "How Do You Test Delivery Competence, Not Just Qualifications?",
    answer:
      "We interview based on real project performance, safety records, and leadership behaviours — not just CVs.",
  },
];
