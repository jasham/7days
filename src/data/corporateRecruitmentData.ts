// data/corporateRecruitmentData.ts
import { HeroProps, ResultSectionProps, TestimonialProps, WhyPartnerProps } from "@/types/homeInterfaces";
import { OurNetworkSectionProps, Section, SpecialistExpertiseProps } from "@/types/permanentRecruitmentInterfaces";
import { HowWeRecruitProps } from "@/types/propertyRecruitmentInterface";
import { FAQ, WhatWeDoProps } from "@/types/recruitmentInterfaces";

export const corporateHeroDetails: HeroProps = {
  title: "Corporate Sector Recruitment That Delivers",
  description:
    "When growth, change or risk is on the table,we help you hire with confidence.",
  buttonText: "Begin your success story",
  imageUrl: "/hero/hero17.jpg",
};

export const corporateWhatWeDoData: WhatWeDoProps = {
    heading: "We recruit across the core corporate functions that keep organisations moving.",
    introText:
      "Whether you’re strengthening governance, scaling teams or leading transformation, we help you find the people who drive clarity, confidence and results.",
    whoSubHeading: "Who we work with — from enterprise to scale-up:",
    whoHeading: "The right hire drives results — and protects reputation. We partner with:",
    listItems: [
        "ASX-listed and privately owned businesses",
        "PE-backed and growth-phase companies",
        "National and multinational corporates",
        "Not-for-profit and government-adjacent organisations",
        "Professional and business services firms"
    ],
    buttonText: "Start the conversation",
  };

export const corporateSpecialistExpertiseData: SpecialistExpertiseProps = {
  title: "Business-Critical Roles. Commercially Aligned Hires.",
  description:
    "Recruitment across finance, risk, people and operations — built for long-term value.",
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

export const corporateRecruitmentSections: Section[] = [
  {
    complexItems:[
      {
        title: "Finance, Risk & Compliance",
        body: "CFOs, finance leaders, analysts and governance specialists.",
      },
      {
        title: "Strategy, Transformation & Change",
        body: "Leaders who translate business priorities into action and accountability.",
      },
      {
        title: "Human Resources & People Advisory",
        body: "People leaders who drive culture, performance and workforce alignment.",
      },
      {
        title: "Operations & Commercial Management",
        body: "Managers who streamline systems, lift efficiency and reduce risk.",
      },
      {
        title: "Executive & Board Appointments",
        body: "High-impact leaders who shape direction and deliver outcomes.",
      },
    ],
  },
];

export const corporateNetworkData: OurNetworkSectionProps = {
  header: "WORK WITH THE EXPERTS",
  heading: "Deep expertise. Business-critical talent.",
  description:
    "We don’t pull from static databases — we headhunt for impact. Our sector insight spans the entire property lifecycle:",
  bottomText: "",
  image: "/expertImage.jpg",
  mt: -10,
  mb: 3,
  sections: corporateRecruitmentSections,
};

export const corporateHowWeRecruitData: HowWeRecruitProps = {
  heading: "corporate recruitment",
  title: "How we recruit and why it works.",
  subTitle:
    "We don’t just fill seats — we find people who shift performance. Our searches are proactive, targeted and outcomes-led.",
  description:
    "We understand the pressures driving corporate hiring — board scrutiny, margin pressure, restructuring, regulatory shifts. That’s why we move with focus and discretion. Every search includes:",
  description2:
    "The difference between a successful transformation and a failed initiative often comes down to one hire. We help you get that hire right.",
  itemList: [
    {
      icon: "/WebNetwork.svg",
      text: "Role definition and capability mapping",
    },
    {
      icon: "/Voice.svg",
      text: "Targeted outreach to corporate professionals with proven track records",
    },
    {
      icon: "/todoList.svg",
      text: "Structured evaluation across commercial, operational and cultural alignment",
    },
    {
      icon: "/checkPeople.svg",
      text: "One qualified candidate - the one who can deliver. Not a pile of profiles.",
    },
  ],
};

export const corporateWhyPartnerSectionData: WhyPartnerProps = {
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

export const corporateResultSectionData: ResultSectionProps = {
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

export const corporateTestimonialData: TestimonialProps = {
  heading: "What Our Clients Say",
  title: "Reviews",
  description:
    "Here’s what our clients have to say about working with us. Real experiences, real feedback.",
  quote:
    "“The calibre of candidates has always exceeded what others have put forward.”",
  detail:
    "Guy assesses the needs of the client and then carefully selects potential candidates that are the right fit. He is personally involved in every step of the process.",
  author: "Stephen Kerfoot, Director -",
  company: "Kerfoot Electrics",
};

export const corporateFaqData: FAQ[] = [
  {
    question: "Do You Recruit For Both Site And Office-Based Corporate Roles?",
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
