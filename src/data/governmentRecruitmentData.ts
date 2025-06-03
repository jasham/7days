// data/governmentRecruitmentData.ts
import { HeroProps, ResultSectionProps, TestimonialProps, WhyPartnerProps } from "@/types/homeInterfaces";
import { OurNetworkSectionProps, Section, SpecialistExpertiseProps } from "@/types/permanentRecruitmentInterfaces";
import { HowWeRecruitProps } from "@/types/propertyRecruitmentInterface";
import { FAQ, WhatWeDoProps } from "@/types/recruitmentInterfaces";

export const governmentHeroDetails: HeroProps = {
  title: "Government & Public Sector Recruitment",
  description:
    "We help government departments deliver with the right people.",
  buttonText: "Begin your success story",
  imageUrl: "/hero/hero18.jpg",
};

export const governmentWhatWeDoData: WhatWeDoProps = {
    heading: "From short-term advisory roles to complex capital works programs, we recruit across government’s most critical delivery areas.",
    introText:
      "Our candidates understand stakeholder scrutiny, policy nuance, and the importance of visible results.Whether it’s a confidential appointment or a multi-year program, we help you make the hire that matters.",
    whoSubHeading: "Trusted by Public Sector Employers Across NSW",
    whoHeading: "We recruit skilled professionals and leaders for all tiers of government, local, state and federal, including:",
    listItems: [
        "Local councils and regional authorities",
        "State departments and statutory agencies",
        "Federal programs and infrastructure bodies",
        "Government-owned corporations",
        "Tier 1 consultancies delivering public sector projects"
    ],
    buttonText: "Start the conversation",
  };

export const governmentSpecialistExpertiseData: SpecialistExpertiseProps = {
  title: "Purpose-Led Recruitment. Public Sector Results.",
  description:
    "Deep government experience, policy-aligned delivery , built for long-term success in public service.",
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

export const governmentRecruitmentSections: Section[] = [
  {
    complexItems:[
      {
        title: "Policy, Strategy & Reform",
        body: "Advisors, regulatory specialists and program leads who translate government vision into action — with policy precision, compliance insight and stakeholder buy-in.",
      },
      {
        title: "Program, Project & Development Management",
        body: "Delivery leaders and project professionals who plan, manage and deliver major public initiatives across infrastructure, services and transformation.",
      },
      {
        title: "Finance, Risk & Procurement",
        body: "Officers and commercial managers who safeguard public funds, ensure probity and align procurement to policy and operational outcomes.",
      },
      {
        title: "Digital, Data & Transformation",
        body: "Specialists who lead digital delivery, unlock systems innovation and drive service modernisation at scale.",
      },
      {
        title: "People, Culture & Industrial RelationsHR",
        body: ", IR and ER professionals who manage change, align policy to workforce needs, and support performance across complex public structures.",
      },
      {
        title: "Executive & SES Appointments",
        body: "COOs, departmental leaders and board-facing executives who lead with strategic clarity, integrity and whole-of-government alignment.",
      },
    ],
  },
];

export const governmentNetworkData: OurNetworkSectionProps = {
  header: "WORK WITH THE EXPERTS",
  heading: "Deep expertise. Public impact talent.",
  description:
    "We don’t pull from panels and databases, we headhunt for public value. Our insight spans the entire machinery of government. We recruit across:",
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
    "Public sector hiring is different. Timelines are tight. Risk is high. Outcomes are public.",
  description:
    "We lead every search with strategy, compliance and discretion. No job boards. No guesswork. Every engagement includes:",
  description2:
    "We bring sharp judgement, transparent process, and urgency — because government can’t afford a misstep.",
  itemList: [
    {
      icon: "/WebNetwork.svg",
      text: "Deep scoping aligned to mandate, structure and probity",
    },
    {
      icon: "/Voice.svg",
      text: "Direct outreach to aligned public and private sector talent",
    },
    {
      icon: "/todoList.svg",
      text: "Screening based on regulatory knowledge, stakeholder fluency and delivery track record",
    },
    {
      icon: "/checkPeople.svg",
      text: "One qualified person, not a list, ready to lead in a public environment",
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
    "When expertise, trust, and speed come together, growth isn’t a goal — it’s the outcome.",
};

export const governmentTestimonialData: TestimonialProps = {
  heading: "What Our Clients Say",
  title: "Reviews",
  description:
    "Here’s what our clients have to say about working with us. Real experiences, real feedback.",
  quote:
    "“The calibre of candidates has always exceeded what others have put forward.”",
  detail:
    "Guy assesses the needs of the client and then carefully selects potential candidates that are the right fit. He is personally involved in every step of the process..",
  author: "Stephen Kerfoot, Director - ",
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
