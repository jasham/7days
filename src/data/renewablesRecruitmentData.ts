// data/renewablesRecruitmentData.ts
import { HeroProps, ResultSectionProps, TestimonialProps, WhyPartnerProps } from "@/types/homeInterfaces";
import { OurNetworkSectionProps, Section, SpecialistExpertiseProps } from "@/types/permanentRecruitmentInterfaces";
import { HowWeRecruitProps } from "@/types/propertyRecruitmentInterface";
import { FAQ, WhatWeDoProps } from "@/types/recruitmentInterfaces";

export const renewablesHeroDetails: HeroProps = {
  title: "Renewables Recruitment Fuelling a Cleaner Australia",
  description:
    "Australia’s energy future is being built now, and the right people will determine how fast we get there.",
  buttonText: "Begin your success story",
  imageUrl: "/hero/hero15.jpg",
};

export const renewablesWhatWeDoData: WhatWeDoProps = {
    heading: "We place the professionals behind Australia’s most complex renewable energy builds.",
    introText:
      "We recruit the professionals turning transition plans into operating assets. From feasibility to delivery and grid integration, we place project-ready people into roles that demand urgency, clarity, and real-world capability. \n\n Whether you're building a solar farm, delivering wind generation at scale, or accelerating battery and transmission projects — we find the people who keep momentum.",
    whoSubHeading: "Trusted by Australia’s Energy Transition Leaders",
    whoHeading: "We work with forward-leaning employers who don’t have time to hire twice. From scaling delivery teams to securing niche specialists, we recruit across:",
    whoDescription:"Whether you're delivering a flagship project or expanding into new markets, we help you hire with confidence, from metro to remote.",
    listItems: [
        "Renewable energy developers and asset owners",
        "EPC, EPCM and infrastructure delivery contractors",
        "Grid and battery storage operators",
        "Government agencies and energy regulators",
        "Hydrogen, transition fuels and transmission innovators",
    ],
    buttonText: "Start the conversation",
  };

export const renewablesSpecialistExpertiseData: SpecialistExpertiseProps = {
  title: "Built for transition. Proven in delivery.",
  description:
    "Specialist recruitment across renewable energy roles, aligned to project risk, program pressure and commercial performance.",
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

export const renewablesRecruitmentSections: Section[] = [
  {
    complexItems:[
      {
        title: "Project & Site Management",
        body: "Project Managers, Construction Managers, Superintendents  and Site Engineers with experience across wind, solar, hybrid and BESS developments, from greenfield builds to live-site expansions and remote delivery.",
      },
      {
        title: "Grid & Transmission Infrastructure",
        body: "High-voltage Engineers, Grid Connection Specialists and Compliance Leads who manage substations, switching, SCADA systems and NEM dispatch across high-stakes grid environments.",
      },
      {
        title: "Battery Storage, Hydrogen & Emerging Tech",
        body: "Commissioning Engineers, Project Leads and Integration Managers delivering next-gen energy assets with complex technical interfaces and evolving regulatory landscapes.",
      },
      {
        title: "Environmental, HSE & Regulatory Affairs",
        body: "WHS Leads, Stakeholder Managers and Environmental Advisors who protect safety, planning approvals and social licence to operate — especially in regional and sensitive contexts.",
      },
      {
        title: "Energy Asset Management & Commercial Operations",
        body: "Asset Managers, Performance Engineers and Commercial Analysts focused on uptime, lifecycle value, IRR targets and investment-grade reporting for operating assets.",
      },
      {
        title: "Renewables Engineering & Technical Consulting",
        body: "Systems Designers, Technical Advisors and EPCM specialists in solar, wind and hybrid systems — covering feasibility, modelling, design and owner’s engineering functions.",
      },
    ],
  },
];

export const renewablesNetworkData: OurNetworkSectionProps = {
  header: "WORK WITH THE EXPERTS",
  heading: "Where Net-Zero Ambition Meets Execution.",
  description:
    "Specialist recruitment for the people building our energy future, across project delivery, grid-scale integration, and transition technology. We recruit across:",
  bottomText: "",
  image: "/expertImage.jpg",
  mt: -10,
  mb: 3,
  sections: renewablesRecruitmentSections,
};

export const renewablesHowWeRecruitData: HowWeRecruitProps = {
  heading: "renewables recruitment",
  title: "How we recruit and why it works.",
  subTitle:
    "High-performing talent in renewables aren’t responding to job ads. They're delivering on live projects. ",
  description:
    "We map the market, profile transferable skillsets, and build trust with professionals open to the right next move. Every search includes:",
  description2:
    "We recruit for uptime, ESG outcomes and program certainty, because in renewables, every milestone counts.",
  itemList: [
    {
      icon: "/WebNetwork.svg",
      text: "Energy-sector competitor and capability mapping",
    },
    {
      icon: "/Voice.svg",
      text: "Direct engagement with professionals working on live infrastructure",
    },
    {
      icon: "/todoList.svg",
      text: "Assessment based on planning risk, grid readiness and stakeholder outcomes",
    },
    {
      icon: "/checkPeople.svg",
      text: "One best-fit candidate per role, selected for project fit and long-term alignment",
    },
  ],
};

export const renewablesWhyPartnerSectionData: WhyPartnerProps = {
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

export const renewablesResultSectionData: ResultSectionProps = {
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
    "Renewable energy transition doesn’t happen with policy. It happens with people. We help you hire the ones who can lead the shift.",
};

export const renewablesTestimonialData: TestimonialProps = {
  heading: "What Our Clients Say",
  title: "Reviews",
  description:
    "Here is what our clients have to say about working with us. Real experiences, real feedback.",
  quote:
    "“Exceptional results and has a great candidate pool where he maintains fantastic personal relationships.”",
  detail:
    "Guy is professional and efficient and always delivers a high calibre of candidates within reasonable timeframes. I wouldn’t hesitate to recommend him.",
  author: "Jessica Orifici, Senior Recruiter - ",
  company: "KBR",
};

export const renewablesFaqData: FAQ[] = [
  {
    question: "Do You Recruit For Both Site And Office-Based Renewables Roles?",
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
