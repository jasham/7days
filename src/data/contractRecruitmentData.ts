import { HeroProps, ResultSectionProps, TestimonialProps } from "@/types/homeInterfaces";
import {
    HowWeDeliverRecruitmentProps,
  OurNetworkSectionProps,
  Section,
  SpecialistExpertiseProps,
} from "@/types/permanentRecruitmentInterfaces";
import { FAQ, WhatWeDoProps } from "@/types/recruitmentInterfaces";

export const heroDetails: HeroProps = {
    title: "Flexible Contract Recruitment. Without the Compromise.",
    description:
      "Flexible recruitment that’s fast, reliable and built to perform.",
    buttonText: "Begin your success story",
    imageUrl: "/hero/hero8.jpg",
};

// 3️⃣ SpecialistExpertise
export const specialistExpertiseData: SpecialistExpertiseProps = {
  title: "Specialist Contract Recruitment for Demanding Environments",
  description:
    "Deep industry knowledge, precise candidate alignment - built for long-term success in your sector.",
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

// 4️⃣ OurNetworkSection
export const internationalRecruitmentSections: Section[] = [
  {
    complexItems:[
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
            "Site Engineers, Forepersons and WHS Advisors",
            "Project Managers, Contract Administrators and Estimators",
            "Technical and specialist operators",
            "Commercial Managers and interim project leadership",
            "White-collar project teams mobilised for 3, 6 or 12-month engagements",
          ],
        },
      ],
  },
];

export const networkData: OurNetworkSectionProps = {
  header:"WORK WITH THE EXPERTS",
  heading: "Trusted teams. Mobilised when it counts",
  description:
    "Henton supports construction, engineering, and infrastructure leaders with contract teams ready to perform — across metro, regional and remote Australia.",
  bottomText:
    "We know who’s active, who’s proven, and who’s ready to hit the ground running.",
  image: "/Network2.svg",
  mt: -5,
  mb: 5,
  sections: internationalRecruitmentSections,
};

// 5️⃣ HowWeDeliverRecruitment
export const howWeDeliverData: HowWeDeliverRecruitmentProps = {
  headingText: "CONTRACT RECRUITMENT SERVICES",
  mainTitle: "Our process for contract recruitment",
  subTitle: "We deliver speed without cutting corners. Every contractor is vetted for readiness, reliability and fit — before they ever reach your team.",
  image: "/contractService.jpg",
  buttonText: "Build Your Team",
  features: [
    {
      title: "Role Brief + Compliance Needs",
      description:
        "We clarify technical scope, system access, safety requirements, location coverage and WHS obligations.",
    },
    {
      title: "Talent Pool Activation",
      description:
        "We maintain live sector-specific contractor pools, segmented by trade, project phase, clearance and availability.",
    },
    {
      title: "Readiness Review & Role Matching",
      description:
        "We assess each contractor’s experience, project exposure, and availability, and flag relevant system or site experience (e.g. Procore, Aconex, SAP) where known.",
    },
    {
      title: "Reference + Performance Check",
      description:
        "We reference contractors with past clients, projects and supervisors, and prioritise proven high performers.",
    },
    {
      title: "Fast, Structured Delivery",
      description:
        "We deliver the right candidates based on availability, alignment and contractor readiness. Timelines are agreed upfront based on the role, location, and mobilisation needs, with clear communication at every step.",
    },
  ],
};

// 7️⃣ FAQ
export const faqData: FAQ[] = [
  {
    question:
      "What Makes Your Permanent Recruitment Different From Other Agencies?",
    answer:
      "We Don’t Rely Just On Job Ads. We Use Direct Search, Tap Into Passive Candidate Networks, And Focus On Long-Term Value — Not Just Short-Term Placement. We Use A 360 Approach To Sourcing.",
  },
  {
    question: "How Do You Ensure The Candidate Is The Right Long-Term Fit?",
    answer:
      "We Take Time To Understand Your Team, Culture, Goals And Leadership Style. Our Shortlist Only Includes Candidates Who Match On Values, Capability And Growth Potential.",
  },
  {
    question: "Can You Help Us With Confidential Or Sensitive Roles?",
    answer:
      "Absolutely. We’ve Managed Hundreds Of Off-Market Searches For Middle And Senior Leadership, Restructure Scenarios And Board-Level Hires.",
  },
  {
    question: "We’ve Had Problems With Retention. How Can You Help?",
    answer:
      "We Design Every Brief To Focus On Fit, Expectations And Growth Alignment — And Support Post-Placement Success Through Regular Check-Ins. We Can Also Help Through Our Consulting And Advisory Services To Work Out Where The Retention Issues Are.",
  },
];


export const testimonialData: TestimonialProps = {
    heading: "What Our Clients Say",
    title: "Reviews",
    description:
      "Here’s what our clients have to say about working with us. Real experiences, real feedback.",
    quote:
      "“Henton Consultiung always provide quality candidates”",
    detail:
      "They are extremely efficient with communication. I would highly recommend their services.",
    author: "Stephen Kerfoot, Director",
    company: "Kerfoot Electrics",
  }

  export const resultSectionData: ResultSectionProps = {
    cardProps: {
      cardDetails: [
        {
            score: "89%", description: "of contractors are extended beyond their initial engagement",
        },
        {
          score: "100%",
          description: "audit pass rate across all managed contractor placements",
        },
        {
          score: "85%",
          description: "of contract clients return for additional placements",
        },
      ],
    },
    backgroundImage:"/results-bg.jpg",
    topHeading: "Where Strategy Demands Action",
    bottomHeading:
      "When expertise, trust, and speed come together, growth isn’t a goal — it’s the outcome.",
  };

  export const whatWeDoData : WhatWeDoProps =   {
    heading: "Contract recruitment keeps projects moving and teams performing when it matters most.",
    introText:
      "When you need skilled talent fast — for a project, an unplanned gap, or a critical deadline — Henton delivers contractors who are ready to perform from day one.   \n\n" +
      "We recruit contract professionals who meet both the technical demands of the role and the compliance requirements of your site, system or project. \n\n" +"Whether it’s one interim manager or a full site mobilisation, our process is built to reduce risk, save time, and protect operational momentum.",
    whoSubHeading: "We recruit for:",
    whoHeading: "Our expertise covers a wide range of skill sets and leadership levels:",
    listItems: [
        "Technical, operations and interim-management contractors",
        "Project-based professionals across white-collar functions",
        "Interim leaders and backfill for key personnel",
    ],
    buttonText: "Start the conversation",
  }