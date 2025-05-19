// data/notForProfitRecruitmentData.ts
import { HeroProps, ResultSectionProps, TestimonialProps, WhyPartnerProps } from "@/types/homeInterfaces";
import { OurNetworkSectionProps, Section, SpecialistExpertiseProps } from "@/types/permanentRecruitmentInterfaces";
import { HowWeRecruitProps } from "@/types/propertyRecruitmentInterface";
import { FAQ, WhatWeDoProps } from "@/types/recruitmentInterfaces";

export const notForProfitHeroDetails: HeroProps = {
  title: "Not-for-Profit Recruitment That Drives Real Impact",
  description:
    "We help purpose-led organisations find people who deliver,with care, capability and accountability.",
  buttonText: "Begin your success story",
  imageUrl: "/hero/hero16.jpg",
};

export const notForProfitWhatWeDoData: WhatWeDoProps = {
    heading: "We place the people driving Australia’s most important social outcomes",
    introText:
      "We recruit across executive, operational and front-line roles for not-for-profits, charities and social impact organisations. \n\n Whether you're scaling a national community program or replacing a senior executive, we help you find values-aligned talent with the experience to perform — even under resource pressure.",
    whoSubHeading: "Trusted by Australia’s For-Purpose Sector",
    whoHeading: "We work with organisations whose missions demand more than technical capability, they require values, resilience and real-world delivery. We partner with:",
    whoDescription:"We work nationally, supporting organisations in metro, regional and remote communities across every state.",
    listItems: [
        "Disability and NDIS service providers",
        "Community health, aged care and mental health organisations",
        "Education, employment and youth services",
        "Foundations, charities and philanthropic entities",
        "Social enterprises, advocacy groups and peak bodies",
        "Property, asset and precinct owners within the NFP sector"
    ],
    buttonText: "Start the conversation",
  };

export const notForProfitSpecialistExpertiseData: SpecialistExpertiseProps = {
  title: "Purpose-Built Recruitment. Sector-Aligned Talent.",
  description:
    "Specialist hiring across frontline, operational and executive roles, aligned to compliance, complexity, and community expectations.",
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

export const notForProfitRecruitmentSections: Section[] = [
  {
    complexItems:[
      {
        title: "Executive & Leadership Appointments",
        body: "CEOs, COOs, CFOs, GMs and Board Members with governance, funding and social impact experience.",
      },
      {
        title: "Program & Project Delivery",
        body: "Operations Managers, Project Leads and Program Directors who execute under pressure, navigate funding milestones and meet service KPIs.",
      },
      {
        title: "Disability, Aged & Community Care",
        body: "NDIS Coordinators, Support Leads, Case Managers and Service Managers who balance compassion with compliance",
      },
      {
        title: "Policy, Advocacy & Reform",
        body: "Policy Advisors, Advocacy Leads and Social Researchers who influence at the intersection of government, community and sector need.",
      },
      {
        title: "Fundraising, Philanthropy & Engagement",
        body: "Campaign Managers, Donor Leads and Grant Writers who grow revenue and deepen community trust.",
      },
      {
        title: "Property & Facilities Management",
        body: "Development Managers, FM Leads and Asset Officers managing aged care, education, precinct and supported accommodation portfolios.",
      },
    ],
  },
];

export const notForProfitNetworkData: OurNetworkSectionProps = {
  header: "WORK WITH THE EXPERTS",
  heading: "Purpose-Driven Talent. Ready to Make a Difference.",
  description:
    "We recruit for mission-critical roles across Australia’s for-purpose sector, from front-line services to board appointments, from advocacy to asset management.",
  bottomText: "",
  image: "/expertImage.jpg",
  mt: -10,
  mb: 3,
  sections: notForProfitRecruitmentSections,
};

export const notForProfitHowWeRecruitData: HowWeRecruitProps = {
  heading: "notForProfit recruitment",
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

export const notForProfitResultSectionData: ResultSectionProps = {
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
  topHeading: "Where Strategy Demands Action",
  bottomHeading:
    "Mission is your foundation. We find you the right people make it sustainable.",
};

export const notForProfitTestimonialData: TestimonialProps = {
  heading: "What Our Clients Say",
  title: "Reviews",
  description:
    "Here’s what our clients have to say about working with us. Real experiences, real feedback.",
  quote:
    "“Henton’s unique network is of particular value when looking to fill a difficult role”",
  detail:
    "They don’t just focus on the role requirements, or job description. They pay close attention to the individual leader. They care about our success and we value their advice and support.",
  author: "Nicola Stokes, CEO - ",
  company: "Sydney Children's Hospital Foundation",
};

export const notForProfitFaqData: FAQ[] = [
  {
    question: "Do You Recruit For Both Site And Office-Based NotForProfit Roles?",
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
