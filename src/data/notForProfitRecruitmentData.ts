import { HeroProps, ResultSectionProps, TestimonialProps, WhyPartnerProps } from "@/types/homeInterfaces";
import { OurNetworkSectionProps, Section, SpecialistExpertiseProps } from "@/types/permanentRecruitmentInterfaces";
import { HowWeRecruitProps } from "@/types/propertyRecruitmentInterface";
import { FAQ, WhatWeDoProps } from "@/types/recruitmentInterfaces";

export const notForProfitHeroDetails: HeroProps = {
  title: "Not-for-profit recruitment that drives real impact",
  description:
    "We help purpose-led organisations find people who deliver, with care, capability and accountability.",
  buttonText: "Begin your success story",
  imageUrl: "/hero/hero16.jpg",
};

export const notForProfitWhatWeDoData: WhatWeDoProps = {
  heading: "We place the people driving Australia’s most important social outcomes",
  introText:
    "We recruit across executive, operational and front-line roles for not-for-profits, charities and social impact organisations. \n\n Whether you're scaling a national community program or replacing a senior executive, we help you find values-aligned talent with the experience to perform , even under resource pressure.",
  whoSubHeading: "Trusted by Australia’s for-purpose sector",
  whoHeading: "We work with organisations whose missions demand more than technical capability, they require values, resilience and real-world delivery. We partner with:",
  whoDescription: "We work nationally, supporting organisations in metro, regional and remote communities across every state.",
  listItems: [
    "Disability and NDIS service providers",
    "Community health, aged care and mental health organisations",
    "Education, employment and youth services",
    "Foundations, charities and philanthropic entities",
    "Social enterprises, advocacy groups and peak bodies",
    "Property, asset and precinct owners within the NFP sector",
  ],
  buttonText: "Start the conversation",
};

export const notForProfitSpecialistExpertiseData: SpecialistExpertiseProps = {
  title: "Purpose-built recruitment. Sector-aligned talent.",
  description:
    "Specialist hiring across frontline, operational and executive roles, aligned to compliance, complexity, and community expectations.",
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

export const notForProfitRecruitmentSections: Section[] = [
  {
    complexItems: [
      {
        title: "Executive & leadership appointments",
        body: "CEOs, COOs, CFOs, GMs and board members with governance, funding and social impact experience.",
      },
      {
        title: "Program & project delivery",
        body: "Operations managers, project leads and program directors who execute under pressure, navigate funding milestones and meet service KPIs.",
      },
      {
        title: "Disability, aged & community care",
        body: "NDIS coordinators, support leads, case managers and service managers who balance compassion with compliance",
      },
      {
        title: "Policy, advocacy & reform",
        body: "Policy advisors, advocacy leads and social researchers who influence at the intersection of government, community and sector need.",
      },
      {
        title: "Fundraising, philanthropy & engagement",
        body: "Campaign managers, donor leads and grant writers who grow revenue and deepen community trust.",
      },
      {
        title: "Property & facilities management",
        body: "Development managers, FM leads and asset officers managing aged care, education, precinct and supported accommodation portfolios.",
      },
    ],
  },
];

export const notForProfitNetworkData: OurNetworkSectionProps = {
  header: "Work with the experts",
  heading: "Purpose-driven talent. Ready to make a difference.",
  description:
    "We recruit for mission-critical roles across Australia’s for-purpose sector, from front-line services to board appointments, from advocacy to asset management.",
  bottomText: "",
  image: "/expertImage.jpg",
  mt: -10,
  mb: 3,
  sections: notForProfitRecruitmentSections,
};

export const notForProfitHowWeRecruitData: HowWeRecruitProps = {
  heading: "Not for profit recruitment",
  title: "How we recruit and why it works.",
  subTitle:
    "Mission matters, but so does delivery. We go beyond passion to find people with the resilience, clarity and operational credibility to deliver in constrained and complex environments.",
  description:
    "We profile mission-aligned leaders, map adjacent sectors for transferable expertise, and engage professionals ready to make a purposeful move. Every search includes:",
  description2:
    "We understand what it takes to lead with purpose, deliver under pressure, and stay accountable to the people and communities who matter most.",
  itemList: [
    {
      icon: "/WebNetwork.svg",
      text: "Sector-specific research and benchmarking",
    },
    {
      icon: "/Voice.svg",
      text: "Direct outreach to high-impact, values-led talent",
    },
    {
      icon: "/todoList.svg",
      text: "Evaluation of cultural alignment, stakeholder sensitivity and delivery track record",
    },
    {
      icon: "/checkPeople.svg",
      text: "One candidate - the right one, aligned by values and mission.",
    },
  ],
};

export const notForProfitWhyPartnerSectionData: WhyPartnerProps = {
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

export const notForProfitResultSectionData: ResultSectionProps = {
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
  topHeading: "Where strategy demands action",
  bottomHeading:
    "Mission is your foundation. We find you the right people make it sustainable.",
};

export const notForProfitTestimonialData: TestimonialProps = {
  heading: "What our clients say",
  title: "Reviews",
  description:
    "Here’s what our clients have to say about working with us. Real experiences, real feedback.",
  quote:
    "Henton Consulting’s unique network is of particular value when looking to fill a difficult role",
  detail:
    "They don’t just focus on the role requirements, or job description. They pay close attention to the individual leader. They care about our success and we value their advice and support.",
  author: "Nicola Stokes, CEO - ",
  company: "Sydney Children's Hospital Foundation",
};

export const notForProfitFaqData: FAQ[] = [
  {
    question: "Do you recruit for both site and office-based not for profit roles?",
    answer:
      "Yes , from site managers and engineers to project directors, commercial leads and HSE professionals.",
  },
  {
    question: "Can you help with contract-based or temporary hires?",
    answer:
      "Absolutely. We place both permanent and contract professionals aligned to project scope, stage and delivery risk.",
  },
  {
    question: "Do you work nationally?",
    answer:
      "Yes , we recruit across Australia including urban infill, regional builds and remote infrastructure projects.",
  },
  {
    question: "Can you manage sensitive or confidential assignments?",
    answer:
      "Yes , we handle confidential search assignments with discretion, urgency and total alignment to risk controls.",
  },
  {
    question: "How do you test delivery competence, not just qualifications?",
    answer:
      "We interview based on real project performance, safety records, and leadership behaviours , not just CVs.",
  },
];
