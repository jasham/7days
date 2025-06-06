import { HeroProps, ResultSectionProps, TestimonialProps, WhyPartnerProps } from "@/types/homeInterfaces";
import { OurNetworkSectionProps, Section, SpecialistExpertiseProps } from "@/types/permanentRecruitmentInterfaces";
import { HowWeRecruitProps } from "@/types/propertyRecruitmentInterface";
import { FAQ, WhatWeDoProps } from "@/types/recruitmentInterfaces";

export const engineeringHeroDetails: HeroProps = {
  title: "Engineering recruitment that keeps projects moving",
  description: "From concept design to site delivery, we find engineers who make the work possible.",
  buttonText: "Begin your success story",
  imageUrl: "/hero/hero12.jpg",
};

export const engineeringWhatWeDoData: WhatWeDoProps = {
  heading: "Designs win tenders. engineers deliver outcomes. it starts with who you hire.",
  introText: "We recruit high-performing engineering professionals across civil, structural, mechanical, electrical and building services disciplines. \n\n whether you’re designing critical infrastructure, resourcing for a live build, or replacing a technical lead mid-project, we deliver people who know how to deliver under pressure. our candidates don’t just meet specs. they solve problems others can’t.",
  whoSubHeading: "Trusted by australia’s engineering-led organisations:",
  whoHeading: "We work with engineering employers who can’t afford to get it wrong. from long-term team builds to urgent delivery hires, we recruit across:",
  listItems: [
    "National and multidisciplinary design consultancies",
    "Specialist civil, structural and mep firms",
    "Tier 1 and mid-tier head contractors",
    "Client-side pm and commercial advisory groups",
    "Government and infrastructure delivery agencies",
    "Asset owners and operators in transport, utilities and energy",
  ],
  buttonText: "Start the conversation",
};

export const engineeringSpecialistExpertiseData: SpecialistExpertiseProps = {
  title: "Engineered for results. backed by performance.",
  description: "Specialist recruitment across civil, structural, and services roles, aligned to project scope, stakeholder pressure, and delivery outcomes.",
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

export const engineeringRecruitmentSections: Section[] = [
  {
    complexItems: [
      {
        title: "Civil & structural engineering",
        body: "Engineers with a deep understanding of compliance, constructability and stakeholder alignment, from concept to certification.",
      },
      {
        title: "Mechanical, electrical & building services",
        body: "Mep professionals who design, coordinate and troubleshoot integrated systems, in buildings, transport hubs and essential infrastructure.",
      },
      {
        title: "Infrastructure & asset engineering",
        body: "Experts in long-life asset planning and delivery across roads, rail, water and utilities, often within tiered government and multi-agency frameworks.",
      },
      {
        title: "Project delivery & engineering leads",
        body: "Professionals who manage delivery across disciplines, aligning scope, consultants and cost plans to project expectations.",
      },
      {
        title: "Superintendents & site engineers",
        body: "Engineers who keep boots on the ground aligned to schedule, subcontractor performance, and quality benchmarks.",
      },
      {
        title: "Safety, quality & risk engineering",
        body: "People who protect lives, reputations and long-term outcomes, from safety-in-design through to on-site delivery and asset transition.",
      },
    ],
  },
];

export const engineeringNetworkData: OurNetworkSectionProps = {
  header: "Work with the experts",
  heading: "Built for complexity. hired for performance.",
  description: "We don’t source from job boards we find professionals trusted to deliver under pressure, on real projects, with real consequences.",
  bottomText: "",
  image: "/expertImage.jpg",
  mt: -10,
  mb: 4,
  sections: engineeringRecruitmentSections,
};

export const engineeringHowWeRecruitData: HowWeRecruitProps = {
  heading: "Engineering recruitment",
  title: "How we recruit and why it works.",
  subTitle: "Great engineering hires don’t just reduce workload , they reduce risk.",
  description: "We don’t wait for applications. we go straight to the engineers already solving technical problems under pressure, many of whom aren’t looking, but will move for the right opportunity. \n\n we map the market, trace delivery outcomes, and approach with purpose. every search includes:",
  description3: "When delivery’s on the line, there’s no margin for guesswork , and no time for candidates who aren’t up to it.",
  itemList: [
    {
      icon: "/WebNetwork.svg",
      text: "Technical scoping aligned to program stage, risk and role accountability",
    },
    {
      icon: "/Voice.svg",
      text: "Market mapping and competitor intelligence , not just job board noise",
    },
    {
      icon: "/todoList.svg",
      text: "Direct outreach to passive, high-performing technical professionals",
    },
    {
      icon: "/checkPeople.svg",
      text: "Structured interviews focused on delivery, not just degrees",
    },
  ],
};

export const engineeringWhyPartnerSectionData: WhyPartnerProps = {
  headingText: "Work with the experts",
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
  buttonText: "Ready to build what’s next?",
  buttonColor: "#132D46",
  isCentered: true,
};

export const engineeringResultSectionData: ResultSectionProps = {
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
  bottomHeading: "Technical recruitment isn’t about filling a role, it’s about delivering a result. that’s what we do.",
};

export const engineeringTestimonialData: TestimonialProps = {
  heading: "What our clients say",
  title: "Reviews",
  description: "Here is what our clients have to say about working with us. real experiences, real feedback.",
  quote: "“The calibre of candidates has always exceeded what others have put forward.”",
  detail: "Guy assesses the needs of the client and then carefully selects potential candidates that are the right fit. he is personally involved in every step of the process.",
  author: "Stephen kerfoot, director - ",
  company: "Kerfoot electrics",
};

export const engineeringFaqData: FAQ[] = [
  {
    question: "Do you recruit for both site and office-based engineering roles?",
    answer: "Yes , from site managers and engineers to project directors, commercial leads and hse professionals.",
  },
  {
    question: "Can you help with contract-based or temporary hires?",
    answer: "Absolutely. we place both permanent and contract professionals aligned to project scope, stage and delivery risk.",
  },
  {
    question: "Do you work nationally?",
    answer: "Yes , we recruit across australia including urban infill, regional builds and remote infrastructure projects.",
  },
  {
    question: "Can you manage sensitive or confidential assignments?",
    answer: "Yes , we handle confidential search assignments with discretion, urgency and total alignment to risk controls.",
  },
  {
    question: "How do you test delivery competence, not just qualifications?",
    answer: "We interview based on real project performance, safety records, and leadership behaviours , not just cvs.",
  },
];
