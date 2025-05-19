// data/engineeringRecruitmentData.ts
import { HeroProps, ResultSectionProps, TestimonialProps, WhyPartnerProps } from "@/types/homeInterfaces";
import { OurNetworkSectionProps, Section, SpecialistExpertiseProps } from "@/types/permanentRecruitmentInterfaces";
import { HowWeRecruitProps } from "@/types/propertyRecruitmentInterface";
import { FAQ, WhatWeDoProps } from "@/types/recruitmentInterfaces";

export const engineeringHeroDetails: HeroProps = {
  title: "Engineering Recruitment That Keeps Projects Moving",
  description:
    "From concept design to site delivery,we find engineers who make the work possible.",
  buttonText: "Begin your success story",
  imageUrl: "/hero/hero12.jpg",
};

export const engineeringWhatWeDoData: WhatWeDoProps = {
    heading: "Designs win tenders. Engineers deliver outcomes. It starts with who you hire.",
    introText:
      "We recruit high-performing engineering professionals across civil, structural, mechanical, electrical and building services disciplines. \n\n Whether you’re designing critical infrastructure, resourcing for a live build, or replacing a technical lead mid-project, we deliver people who know how to deliver under pressure. Our candidates don’t just meet specs. They solve problems others can’t.",
    whoSubHeading: "Trusted by Australia’s Engineering-Led Organisations:",
    whoHeading: "We work with engineering employers who can’t afford to get it wrong. From long-term team builds to urgent delivery hires, we recruit across:",
    listItems: [
        "National and multidisciplinary design consultancies",
        "Specialist civil, structural and MEP firms",
        "Tier 1 and mid-tier head contractors",
        "Client-side PM and commercial advisory groups",
        "Government and infrastructure delivery agencies",
        "Asset owners and operators in transport, utilities and energy",
    ],
    buttonText: "Start the conversation",
    // pending
  };

export const engineeringSpecialistExpertiseData: SpecialistExpertiseProps = {
  title: "Engineered for Results. Backed by Performance.",
  description:
    "Specialist recruitment across civil, structural, and services roles, aligned to project scope, stakeholder pressure, and delivery outcomes.",
  sectors: [
    "Property & Development",
    "Construction",
    "Engineering",
    "Facilities Management",
    "Resources",
    "Renewables",
    "Not For Profit",
    "Corporate",
    "Government",
  ],
};

export const engineeringRecruitmentSections: Section[] = [
  {
    complexItems:[
      {
        title: "Civil & Structural Engineering",
        body: "Engineers with a deep understanding of compliance, constructability and stakeholder alignment, from concept to certification.",
      },
      {
        title: "Mechanical, Electrical & Building Services",
        body: "MEP professionals who design, coordinate and troubleshoot integrated systems, in buildings, transport hubs and essential infrastructure.",
      },
      {
        title: "Infrastructure & Asset Engineering",
        body: "Experts in long-life asset planning and delivery across roads, rail, water and utilities, often within tiered government and multi-agency frameworks.",
      },
      {
        title: "Project Delivery & Engineering Leads",
        body: "Professionals who manage delivery across disciplines, aligning scope, consultants and cost plans to project expectations.",
      },
      {
        title: "Superintendents & Site Engineers",
        body: "Engineers who keep boots on the ground aligned to schedule, subcontractor performance, and quality benchmarks.",
      },
      {
        title: "Safety, Quality & Risk Engineering",
        body: "People who protect lives, reputations and long-term outcomes, from safety-in-design through to on-site delivery and asset transition.",
      },
    ],
  },
];

export const engineeringNetworkData: OurNetworkSectionProps = {
  header: "WORK WITH THE EXPERTS",
  heading: "Built for complexity. Hired for performance.",
  description:
    "We don’t source from job boards We find professionals trusted to deliver under pressure, on real projects, with real consequences.",
  bottomText: "",
  image: "/expertImage.jpg",
  mt: -10,
  mb: 4,
  sections: engineeringRecruitmentSections,
};

export const engineeringHowWeRecruitData: HowWeRecruitProps = {
  heading: "Engineering recruitment",
  title: "How we recruit and why it works.",
  subTitle:
    "Great engineering hires don’t just reduce workload — they reduce risk.",
  description:
    "We don’t wait for applications. We go straight to the engineers already solving technical problems under pressure, many of whom aren’t looking, but will move for the right opportunity. \n\n We map the market, trace delivery outcomes, and approach with purpose. Every search includes:",
  description3:"When delivery’s on the line, there’s no margin for guesswork — and no time for candidates who aren’t up to it.",
  itemList: [
    {
      icon: "/WebNetwork.svg",
      text: "Technical scoping aligned to program stage, risk and role accountability",
    },
    {
      icon: "/Voice.svg",
      text: "Market mapping and competitor intelligence — not just job board noise",
    },
    {
      icon: "/todoList.svg",
      text: "Direct outreach to passive, high-performing technical professionals",
    },
    {
      icon: "/checkPeople.svg",
      text:"Structured interviews focused on delivery, not just degrees"
    },
  ],
};

export const engineeringWhyPartnerSectionData: WhyPartnerProps = {
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

export const engineeringResultSectionData: ResultSectionProps = {
  cardProps: {
    cardDetails: [
      {
        score: "98%",
        title: "",
        description: "of hires are still with the business after 18 months",
      },
      {
        score: "100%",
        title: "",
        description: "of retained searches have been completed successfully",
      },
      {
        score: "85%",
        title: "",
        description: "of roles are filled from the first candidate presented",
      },
    ],
  },
  backgroundImage: "/results-bg.jpg",
  topHeading: "Measurable outcomes",
  bottomHeading:
    "Technical recruitment isn’t about filling a role,it’s about delivering a result. That’s what we do.",
};

export const engineeringTestimonialData: TestimonialProps = {
  heading: "What Our Clients Say",
  title: "Reviews",
  description:
    "Here is what our clients have to say about working with us. Real experiences, real feedback.",
  quote:
    "“The calibre of candidates has always exceeded what others have put forward.”",
  detail:
    "Guy assesses the needs of the client and then carefully selects potential candidates that are the right fit. He is personally involved in every step of the process.",
  author: "Stephen Kerfoot, Director - ",
  company: "Kerfoot Electrics",
};

export const engineeringFaqData: FAQ[] = [
  {
    question: "Do You Recruit For Both Site And Office-Based Engineering Roles?",
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
