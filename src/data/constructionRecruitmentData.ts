import { HeroProps, ResultSectionProps, TestimonialProps, WhyPartnerProps } from "@/types/homeInterfaces";
import { OurNetworkSectionProps, Section, SpecialistExpertiseProps } from "@/types/permanentRecruitmentInterfaces";
import { HowWeRecruitProps } from "@/types/propertyRecruitmentInterface";
import { FAQ, WhatWeDoProps } from "@/types/recruitmentInterfaces";

export const constructionHeroDetails: HeroProps = {
  title: "Construction recruitment that builds certainty",
  description: "From boots-on-the-ground hires to strategic delivery roles, we find the people who get it built.",
  buttonText: "Begin your success story",
  imageUrl: "/hero/hero11.jpg",
};

export const constructionWhatWeDoData: WhatWeDoProps = {
  heading: "Great builds don’t stay on track by accident, it starts with who you hire.",
  introText: "We recruit across the full construction lifecycle — from early-stage planning and estimating through to site delivery, handover and asset performance. \n\n whether you're managing a multi-site pipeline, resourcing for a live project, or replacing a critical delivery lead — we act fast to secure professionals who keep schedules, margins and safety on track.",
  whoSubHeading: "Trusted by australia's builders:",
  whoHeading: "We work with builders who can't afford delays — and developers who need certainty from day one. our clients include:",
  listItems: [
    "Head contractors, subcontractors across keys sectors including health, education, industrial",
    "Specialist subcontractors and client side consultancies",
    "Fitout and refurbishment firms",
    "Client-side project and development managers",
    "Government and private developers",
  ],
  buttonText: "Start the conversation",
};

export const constructionSpecialistExpertiseData: SpecialistExpertiseProps = {
  title: "Built for construction. proven in delivery.",
  description: "Permanent, contract and executive recruitment that reduces risk, unlocks productivity, and drives your projects forward.",
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

export const constructionRecruitmentSections: Section[] = [
  {
    complexItems: [
      {
        title: "Site management",
        body: "Foremen and site managers who lead crews, control subcontractors, and keep timelines moving in high-pressure environments.",
      },
      {
        title: "Contract administration & estimating",
        body: "Professionals who scope risk, protect margins and keep costs under control across commercial and civil projects.",
      },
      {
        title: "Construction directors & delivery leads",
        body: "Senior operators who oversee multi-site programs, manage client expectations and keep delivery teams aligned to outcomes.",
      },
      {
        title: "Hse & quality management",
        body: "Safety and compliance leads who protect lives, reputations and program continuity under regulatory scrutiny.",
      },
      {
        title: "Client-side project & development management",
        body: "Project managers, owner’s reps and consultants who manage stakeholders, delivery risk and feasibility across complex construction programs.",
      },
      {
        title: "Commercial management",
        body: "Contract, cost and commercial professionals who forecast, report and manage risk in alignment with delivery targets.",
      },
    ],
  },
];

export const constructionNetworkData: OurNetworkSectionProps = {
  header: "Work with the experts",
  heading: "Deep expertise. built for site realities.",
  description: "We don’t chase resumes, we chase results. our construction networks are built project by project, site by site, with live intel on who’s performing, where, and why it matters.",
  bottomText: "",
  image: "/expertImage.jpg",
  mt: -10,
  mb: 3,
  sections: constructionRecruitmentSections,
};

export const constructionHowWeRecruitData: HowWeRecruitProps = {
  heading: "Construction recruitment",
  title: "How we recruit and why it works.",
  subTitle: "Great construction hiring is about more than experience; it’s about risk, trust and delivery under pressure.",
  description: "We don’t advertise and hope. we actively map the market, vet delivery history, and approach proven performers — even when they’re not actively looking. every engagement includes:",
  description2: "We act quickly and decisively because delays cost money — and bad hires cost more",
  itemList: [
    {
      icon: "/WebNetwork.svg",
      text: "Role scoping aligned to delivery timeline and project complexity",
    },
    {
      icon: "/Voice.svg",
      text: "Direct outreach to high-performing site and commercial talent",
    },
    {
      icon: "/todoList.svg",
      text: "Screening based on verified project outcomes, team leadership, safety and commercial acumen",
    },
    {
      icon: "/checkPeople.svg",
      text: "One appointment, not a shortlist, ready to deliver now",
    },
  ],
};

export const constructionWhyPartnerSectionData: WhyPartnerProps = {
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

export const constructionResultSectionData: ResultSectionProps = {
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
        score: "83%",
        title: "",
        description: "Of roles are filled from the first candidate presented",
      },
    ],
  },
  backgroundImage: "/results-bg.jpg",
  topHeading: "Measurable outcomes",
  bottomHeading: "When expertise, trust, and speed come together, growth isn’t a goal — it’s the outcome.",
};

export const constructionTestimonialData: TestimonialProps = {
  heading: "What our clients say",
  title: "Reviews",
  description: "Here is what our clients have to say about working with us. real experiences, real feedback.",
  quote: "“The calibre of candidates has always exceeded what others have put forward.”",
  detail: "Guy assesses the needs of the client and then carefully selects potential candidates that are the right fit. he is personally involved in every step of the process.",
  author: "Stephen kerfoot, director - ",
  company: "Kerfoot electrics",
};

export const constructionFaqData: FAQ[] = [
  {
    question: "Do you recruit for both site and office-based construction roles?",
    answer: "Yes — from site managers and engineers to project directors, commercial leads and hse professionals.",
  },
  {
    question: "Can you help with contract-based or temporary hires?",
    answer: "Absolutely. we place both permanent and contract professionals aligned to project scope, stage and delivery risk.",
  },
  {
    question: "Do you work nationally?",
    answer: "Yes — we recruit across australia including urban infill, regional builds and remote infrastructure projects.",
  },
  {
    question: "Can you manage sensitive or confidential assignments?",
    answer: "Yes — we handle confidential search assignments with discretion, urgency and total alignment to risk controls.",
  },
  {
    question: "How do you test delivery competence, not just qualifications?",
    answer: "We interview based on real project performance, safety records, and leadership behaviours — not just cvs.",
  },
];
