import { HeroProps, ResultSectionProps, TestimonialProps } from "@/types/homeInterfaces";
import {
  HowWeDeliverRecruitmentProps,
  OurNetworkSectionProps,
  Section,
  SpecialistExpertiseProps,
} from "@/types/permanentRecruitmentInterfaces";
import { FAQ, WhatWeDoProps } from "@/types/recruitmentInterfaces";

export const heroDetails: HeroProps = {
  title: "Flexible contract recruitment. without the compromise.",
  description: "Flexible recruitment that’s fast, reliable and built to perform.",
  buttonText: "Begin your success story",
  imageUrl: "/hero/hero8.jpg",
};

export const specialistExpertiseData: SpecialistExpertiseProps = {
  title: "Specialist contract recruitment for demanding environments",
  description: "Deep industry knowledge, precise candidate alignment - built for long-term success in your sector.",
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

export const internationalRecruitmentSections: Section[] = [
  {
    complexItems: [
      {
        title: "We help you scale with confidence during:",
        subItems: [
          "Major project ramp-ups",
          "Shutdowns, upgrades and expansions",
          "Unplanned resource gaps or leave coverage",
          "High-volume regional or time-sensitive mobilisations",
        ],
      },
      {
        title: "Our networks span:",
        subItems: [
          "Site engineers, forepersons and whs advisors",
          "Project managers, contract administrators and estimators",
          "Technical and specialist operators",
          "Commercial managers and interim project leadership",
          "White-collar project teams mobilised for 3, 6 or 12-month engagements",
        ],
      },
    ],
  },
];

export const networkData: OurNetworkSectionProps = {
  header: "Work with the experts",
  heading: "Trusted teams. mobilised when it counts",
  description: "Henton Consulting supports construction, engineering, and infrastructure leaders with contract teams ready to perform , across metro, regional and remote australia.",
  bottomText: "We know who’s active, who’s proven, and who’s ready to hit the ground running.",
  image: "/Network2.svg",
  mt: -5,
  mb: 5,
  sections: internationalRecruitmentSections,
};

export const howWeDeliverData: HowWeDeliverRecruitmentProps = {
  headingText: "Contract recruitment services",
  mainTitle: "Our process for contract recruitment",
  subTitle: "We deliver speed without cutting corners. every contractor is vetted for readiness, reliability and fit , before they ever reach your team.",
  image: "/contractService.jpg",
  buttonText: "Build your team",
  features: [
    {
      title: "Role brief + compliance needs",
      description: "We clarify technical scope, system access, safety requirements, location coverage and whs obligations.",
    },
    {
      title: "Talent pool activation",
      description: "We maintain live sector-specific contractor pools, segmented by trade, project phase, clearance and availability.",
    },
    {
      title: "Readiness review & role matching",
      description: "We assess each contractor’s experience, project exposure, and availability, and flag relevant system or site experience (e.g. procore, aconex, sap) where known.",
    },
    {
      title: "Reference + performance check",
      description: "We reference contractors with past clients, projects and supervisors, and prioritise proven high performers.",
    },
    {
      title: "Fast, structured delivery",
      description: "We deliver the right candidates based on availability, alignment and contractor readiness. timelines are agreed upfront based on the role, location, and mobilisation needs, with clear communication at every step.",
    },
  ],
};

export const faqData: FAQ[] = [
  {
    question: "What makes your permanent recruitment different from other agencies?",
    answer: "We don’t rely just on job ads. we use direct search, tap into passive candidate networks, and focus on long-term value , not just short-term placement. we use a 360 approach to sourcing.",
  },
  {
    question: "How do you ensure the candidate is the right long-term fit?",
    answer: "We take time to understand your team, culture, goals and leadership style. our shortlist only includes candidates who match on values, capability and growth potential.",
  },
  {
    question: "Can you help us with confidential or sensitive roles?",
    answer: "Absolutely. we’ve managed hundreds of off-market searches for middle and senior leadership, restructure scenarios and board-level hires.",
  },
  {
    question: "We’ve had problems with retention. how can you help?",
    answer: "We design every brief to focus on fit, expectations and growth alignment , and support post-placement success through regular check-ins. we can also help through our consulting and advisory services to work out where the retention issues are.",
  },
];

export const testimonialData: TestimonialProps = {
  heading: "What our clients say",
  title: "Reviews",
  description: "Here’s what our clients have to say about working with us. real experiences, real feedback.",
  quote: "“Henton Consulting always provide quality candidates”",
  detail: "They are extremely efficient with communication. i would highly recommend their services.",
  author: "Stephen kerfoot, director",
  company: "Kerfoot electrics",
};

export const resultSectionData: ResultSectionProps = {
  cardProps: {
    cardDetails: [
      {
        score: "89%",
        description: "Of contractors are extended beyond their initial engagement",
      },
      {
        score: "100%",
        description: "Audit pass rate across all managed contractor placements",
      },
      {
        score: "85%",
        description: "Of contract clients return for additional placements",
      },
    ],
  },
  backgroundImage: "/results-bg.jpg",
  topHeading: "Where strategy demands action",
  bottomHeading: "When expertise, trust, and speed come together, growth isn’t a goal , it’s the outcome.",
};

export const whatWeDoData: WhatWeDoProps = {
  heading: "Contract recruitment keeps projects moving and teams performing when it matters most.",
  introText: "When you need skilled talent fast , for a project, an unplanned gap, or a critical deadline , Henton Consulting delivers contractors who are ready to perform from day one. \n\n we recruit contract professionals who meet both the technical demands of the role and the compliance requirements of your site, system or project. \n\n whether it’s one interim manager or a full site mobilisation, our process is built to reduce risk, save time, and protect operational momentum.",
  whoSubHeading: "We recruit for:",
  whoHeading: "Our expertise covers a wide range of skill sets and leadership levels:",
  listItems: [
    "Technical, operations and interim-management contractors",
    "Project-based professionals across white-collar functions",
    "Interim leaders and backfill for key personnel",
  ],
  buttonText: "Start the conversation",
};
