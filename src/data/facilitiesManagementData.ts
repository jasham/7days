// data/facilitiesManagementRecruitmentData.ts
import { HeroProps, ResultSectionProps, TestimonialProps, WhyPartnerProps } from "@/types/homeInterfaces";
import { OurNetworkSectionProps, Section, SpecialistExpertiseProps } from "@/types/permanentRecruitmentInterfaces";
import { HowWeRecruitProps } from "@/types/propertyRecruitmentInterface";
import { FAQ, WhatWeDoProps } from "@/types/recruitmentInterfaces";

export const facilitiesManagementHeroDetails: HeroProps = {
  title: "Facilities Management Recruitment That Delivers",
  description:
    "From single assets to national portfolios, we place the professionals who keep buildings safe, compliant and running smoothly.",
  buttonText: "Begin your success story",
  imageUrl: "/hero/hero13.jpg",
};

export const facilitiesManagementWhatWeDoData: WhatWeDoProps = {
    heading: "Well-run facilities don’t manage themselves, it starts with who you hire.",
    introText:
      "We recruit across every layer of Facilities Management, from essential services compliance through to multi-site operational leadership. \n\n Whether you need a hands-on Facilities Manager, a compliance lead, or a national portfolio head, we find people who protect your asset value, reduce risk and improve tenant experience. \n\n Our candidates don’t just manage buildings. They manage pressure.",
    whoSubHeading: "Trusted by Facility Owners, Operators and Advisors",
    whoHeading: "We work with organisations where facilities performance directly affects reputation, cost and continuity. We recruit FM professionals for:",
    whoDescription:
      "Whether you're managing a flagship site, a compliance-heavy portfolio or a network of ageing assets, we’ll find the right fit, fast.",
    listItems: [
        "Commercial property owners and asset managers",
        "Government departments and infrastructure bodies",
        "Aged care, healthcare and education providers",
        "Transport hubs, airports and public precincts",
        "Private operators and corporate occupiers",
    ],
    buttonText: "Start the conversation",
  };

export const facilitiesManagementSpecialistExpertiseData: SpecialistExpertiseProps = {
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

export const facilitiesManagementRecruitmentSections: Section[] = [
  {
    complexItems:[
      {
        title: "Facilities & Property Management",
        body: "Facilities Managers, Property Managers, and Precinct Managers who oversee day-to-day building operations, tenant relations, budgets and compliance.",
      },
      {
        title: "Asset & Operations Management",
        body: "Asset Managers and Operations Managers with responsibility for lifecycle planning, service contracts, and operational performance across complex assets.",
      },
      {
        title: "Technical Services & Compliance",
        body: "Technical Services Managers and Compliance Leads specialising in HVAC, fire safety, lifts, BMS, and statutory essential services obligations.",
      },
      {
        title: "Maintenance & Trades Supervision",
        body: "Maintenance Supervisors and Trades Supervisors who manage onsite works, coordinate contractors, and ensure reactive and planned maintenance delivery.",
      },
      {
        title: "WHS, Risk & Governance",
        body: "WHS Managers, Risk and Compliance Officers who drive audit-readiness, mitigate operational risk and maintain safety across regulated environments.",
      },
      {
        title: "Multi-Site & National Operations",
        body: "Portfolio Facilities Managers, National Operations Managers and Regional FM Leads who deliver consistency, cost control and risk management across distributed asset bases.",
      },
    ],
  },
];

export const facilitiesManagementNetworkData: OurNetworkSectionProps = {
  header: "WORK WITH THE EXPERTS",
  heading: "Operational control. Compliance built in.",
  description:
    "We don’t source from job boards. We chase performance across real buildings, budgets and audit frameworks. We recruit across:",
  bottomText: "",
  image: "/expertImage.jpg",
  mt: -10,
  mb: 3,
  sections: facilitiesManagementRecruitmentSections,
};

export const facilitiesManagementHowWeRecruitData: HowWeRecruitProps = {
  heading: "facilitiesManagement recruitment",
  title: "How we recruit and why it works.",
  subTitle:
    "Great Facilities Management hires don’t just maintain standards, they hold everything together.",
  description:
    "We don’t advertise and hope. We actively map the market, vet delivery history, and approach proven performers — even when they’re not actively looking. Every engagement includes:",
  description3:"When tenant satisfaction, cost control and contractor risk are all in play, you don’t have time to onboard the wrong person.",
  itemList: [
    {
      icon: "/WebNetwork.svg",
      text: "Mapping of talent by asset class, contract structure and reporting lines",
    },
    {
      icon: "/Voice.svg",
      text: "Outreach to FM professionals delivering in aligned environments",
    },
    {
      icon: "/todoList.svg",
      text: "Role-specific assessment across compliance, stakeholder and service metrics",
    },
    {
      icon: "/checkPeople.svg",
      text: "One appointment, who can step in and deliver",
    },
  ],
};

export const facilitiesManagementWhyPartnerSectionData: WhyPartnerProps = {
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

export const facilitiesManagementResultSectionData: ResultSectionProps = {
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
    "Facilities don’t fall apart overnight, but they do without the right people holding it all together.",
};

export const facilitiesManagementTestimonialData: TestimonialProps = {
  heading: "What Our Clients Say",
  title: "Reviews",
  description:
    "Here’s what our clients have to say about working with us. Real experiences, real feedback.",
  quote:
    "“The process for us and the candidates presented were exceptionally strong across all our needs.”",
  detail:
    "Their screening process is thorough but always considerate. Their communication protocols, including feedback and de-briefing, are industry best-practice",
  author: "Emma Clements, GM People & Culture - ",
  company: "Transdev NSW",
};

export const facilitiesManagementFaqData: FAQ[] = [
  {
    question: "Do You Recruit For Both Site And Office-Based FacilitiesManagement Roles?",
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
