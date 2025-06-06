import { HeroProps, ResultSectionProps, TestimonialProps, WhyPartnerProps } from "@/types/homeInterfaces";
import { OurNetworkSectionProps, Section, SpecialistExpertiseProps } from "@/types/permanentRecruitmentInterfaces";
import { HowWeRecruitProps } from "@/types/propertyRecruitmentInterface";
import { FAQ, WhatWeDoProps } from "@/types/recruitmentInterfaces";

export const facilitiesManagementHeroDetails: HeroProps = {
  title: "Facilities management recruitment that delivers",
  description: "From single assets to national portfolios, we place the professionals who keep buildings safe, compliant and running smoothly.",
  buttonText: "Begin your success story",
  imageUrl: "/hero/hero13.jpg",
};

export const facilitiesManagementWhatWeDoData: WhatWeDoProps = {
  heading: "Well-run facilities don’t manage themselves, it starts with who you hire.",
  introText: "We recruit across every layer of facilities management, from essential services compliance through to multi-site operational leadership. \n\n whether you need a hands-on facilities manager, a compliance lead, or a national portfolio head, we find people who protect your asset value, reduce risk and improve tenant experience. \n\n our candidates don’t just manage buildings. they manage pressure.",
  whoSubHeading: "Trusted by facility owners, operators and advisors",
  whoHeading: "We work with organisations where facilities performance directly affects reputation, cost and continuity. we recruit fm professionals for:",
  whoDescription: "Whether you're managing a flagship site, a compliance-heavy portfolio or a network of ageing assets, we’ll find the right fit, fast.",
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

export const facilitiesManagementRecruitmentSections: Section[] = [
  {
    complexItems: [
      {
        title: "Facilities & property management",
        body: "Facilities managers, property managers, and precinct managers who oversee day-to-day building operations, tenant relations, budgets and compliance.",
      },
      {
        title: "Asset & operations management",
        body: "Asset managers and operations managers with responsibility for lifecycle planning, service contracts, and operational performance across complex assets.",
      },
      {
        title: "Technical services & compliance",
        body: "Technical services managers and compliance leads specialising in hvac, fire safety, lifts, bms, and statutory essential services obligations.",
      },
      {
        title: "Maintenance & trades supervision",
        body: "Maintenance supervisors and trades supervisors who manage onsite works, coordinate contractors, and ensure reactive and planned maintenance delivery.",
      },
      {
        title: "Whs, risk & governance",
        body: "Whs managers, risk and compliance officers who drive audit-readiness, mitigate operational risk and maintain safety across regulated environments.",
      },
      {
        title: "Multi-site & national operations",
        body: "Portfolio facilities managers, national operations managers and regional fm leads who deliver consistency, cost control and risk management across distributed asset bases.",
      },
    ],
  },
];

export const facilitiesManagementNetworkData: OurNetworkSectionProps = {
  header: "Work with the experts",
  heading: "Operational control. compliance built in.",
  description: "We don’t source from job boards. we chase performance across real buildings, budgets and audit frameworks. we recruit across:",
  bottomText: "",
  image: "/expertImage.jpg",
  mt: -10,
  mb: 3,
  sections: facilitiesManagementRecruitmentSections,
};

export const facilitiesManagementHowWeRecruitData: HowWeRecruitProps = {
  heading: "Facilities management recruitment",
  title: "How we recruit and why it works.",
  subTitle: "Great facilities management hires don’t just maintain standards, they hold everything together.",
  description: "We don’t advertise and hope. we actively map the market, vet delivery history, and approach proven performers , even when they’re not actively looking. every engagement includes:",
  description3: "When tenant satisfaction, cost control and contractor risk are all in play, you don’t have time to onboard the wrong person.",
  itemList: [
    {
      icon: "/WebNetwork.svg",
      text: "Mapping of talent by asset class, contract structure and reporting lines",
    },
    {
      icon: "/Voice.svg",
      text: "Outreach to fm professionals delivering in aligned environments",
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

export const facilitiesManagementResultSectionData: ResultSectionProps = {
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
  bottomHeading: "Facilities don’t fall apart overnight, but they do without the right people holding it all together.",
};

export const facilitiesManagementTestimonialData: TestimonialProps = {
  heading: "What our clients say",
  title: "Reviews",
  description: "Here’s what our clients have to say about working with us. real experiences, real feedback.",
  quote: "“The process for us and the candidates presented were exceptionally strong across all our needs.”",
  detail: "Their screening process is thorough but always considerate. their communication protocols, including feedback and de-briefing, are industry best-practice",
  author: "Emma clements, gm people & culture - ",
  company: "Transdev nsw",
};

export const facilitiesManagementFaqData: FAQ[] = [
  {
    question: "Do you recruit for both site and office-based facilities management roles?",
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
