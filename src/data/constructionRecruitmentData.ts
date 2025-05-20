// data/constructionRecruitmentData.ts
import { HeroProps, ResultSectionProps, TestimonialProps, WhyPartnerProps } from "@/types/homeInterfaces";
import { OurNetworkSectionProps, Section, SpecialistExpertiseProps } from "@/types/permanentRecruitmentInterfaces";
import { HowWeRecruitProps } from "@/types/propertyRecruitmentInterface";
import { FAQ, WhatWeDoProps } from "@/types/recruitmentInterfaces";

export const constructionHeroDetails: HeroProps = {
  title: "Construction Recruitment That Builds Certainty",
  description:
    "From boots-on-the-ground hires to strategic delivery roles,we find the people who get it built.",
  buttonText: "Begin your success story",
  imageUrl: "/hero/hero11.jpg",
};

export const constructionWhatWeDoData: WhatWeDoProps = {
    heading: "Great builds don’t stay on track by accident, it starts with who you hire.",
    introText:
      "We recruit across the full construction lifecycle — from early-stage planning and estimating through to site delivery, handover and asset performance.   \n\n" +
      "Whether you're managing a multi-site pipeline, resourcing for a live project, or replacing a critical delivery lead — we act fast to secure professionals who keep schedules, margins and safety on track.",
    whoSubHeading: "Trusted by Australia's Builders:",
    whoHeading: "We work with builders who can't afford delays — and developers who need certainty from day one. Our clients include:",
    listItems: [
        "Head Contractors, Subcontractors across keys sectors including Health, Education, Industrial",
        "Specialist subcontractors and client side consultancies",
        "Fitout and refurbishment firms",
        "Client-side project and development managers",
        "Government and private developers",
    ],
    buttonText: "Start the conversation",
  };

export const constructionSpecialistExpertiseData: SpecialistExpertiseProps = {
  title: "Built for Construction. Proven in Delivery.",
  description:
    "Permanent, contract and executive recruitment that reduces risk, unlocks productivity, and drives your projects forward.",
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

export const constructionRecruitmentSections: Section[] = [
  {
    complexItems:[
      {
        title: "Site Management",
        body: "Foremen and Site Managers who lead crews, control subcontractors, and keep timelines moving in high-pressure environments.",
      },
      {
        title: "Contract Administration & Estimating",
        body: "Professionals who scope risk, protect margins and keep costs under control across commercial and civil projects.",
      },
      {
        title: "Construction Directors & Delivery Leads",
        body: "Senior operators who oversee multi-site programs, manage client expectations and keep delivery teams aligned to outcomes.",
      },
      {
        title: "HSE & Quality Management",
        body: "Safety and compliance leads who protect lives, reputations and program continuity under regulatory scrutiny.",
      },
      {
        title: "Client-Side Project & Development Management",
        body: "Project Managers, owner’s reps and consultants who manage stakeholders, delivery risk and feasibility across complex construction programs.",
      },
      {
        title: "Commercial Management",
        body: "Contract, cost and commercial professionals who forecast, report and manage risk in alignment with delivery targets.",
      },
    ],
  },
];

export const constructionNetworkData: OurNetworkSectionProps = {
  header: "WORK WITH THE EXPERTS",
  heading: "Deep expertise. Built for site realities.",
  description:
    "We don’t chase resumes, we chase results. Our construction networks are built project by project, site by site, with live intel on who’s performing, where, and why it matters.",
  bottomText: "",
  image: "/expertImage.jpg",
  mt: -10,
  mb: 3,
  sections: constructionRecruitmentSections,
};

export const constructionHowWeRecruitData: HowWeRecruitProps = {
  heading: "construction recruitment",
  title: "How we recruit and why it works.",
  subTitle:
    "Great construction hiring is about more than experience; it’s about risk, trust and delivery under pressure.",
  description:
    "We don’t advertise and hope. We actively map the market, vet delivery history, and approach proven performers — even when they’re not actively looking. Every engagement includes:",
  description2:
    "We act quickly and decisively because delays cost money — and bad hires cost more",
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

export const constructionResultSectionData: ResultSectionProps = {
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
        score: "83%",
        title: "",
        description: "of roles are filled from the first candidate presented",
      },
    ],
  },
  backgroundImage: "/results-bg.jpg",
  topHeading: "Measurable outcomes",
  bottomHeading:
    "When expertise, trust, and speed come together, growth isn’t a goal — it’s the outcome.",
};

export const constructionTestimonialData: TestimonialProps = {
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

export const constructionFaqData: FAQ[] = [
  {
    question: "Do You Recruit For Both Site And Office-Based Construction Roles?",
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
