// data/resourceRecruitmentData.ts
import { HeroProps, ResultSectionProps, TestimonialProps, WhyPartnerProps } from "@/types/homeInterfaces";
import { OurNetworkSectionProps, Section, SpecialistExpertiseProps } from "@/types/permanentRecruitmentInterfaces";
import { HowWeRecruitProps } from "@/types/propertyRecruitmentInterface";
import { FAQ, WhatWeDoProps } from "@/types/recruitmentInterfaces";

export const resourceHeroDetails: HeroProps = {
  title: "Resources Recruitment That Powers Futures",
  description:
    "We place infrastructure professionals who turn remote sites into high-performance assets.",
  buttonText: "Begin your success story",
  imageUrl: "/hero/hero14.jpg",
};

export const resourceWhatWeDoData: WhatWeDoProps = {
    heading: "Well-run facilities don’t manage themselves, it starts with who you hire.",
    introText:
      "We recruit construction and project delivery talent for the resources sector, with a focus on building, not operating. \n\n From greenfield mine sites to major processing facilities, pipelines and oil and gas installations, we help EPCM contractors deliver the people who get critical infrastructure built safely and to spec.",
    whoSubHeading: "We work with EPCM contractors and delivery partners",
    whoHeading: "We support the contractors, consultancies and project partners who turn resource investments into built outcomes. We recruit for:",
    whoDescription:"Whether you're managing a flagship site, a compliance-heavy portfolio or a network of ageing assets, we’ll find the right fit, fast.",
    listItems: [
        "EPCM contractors delivering large-scale mining and oil and gas infrastructure",
        "Mid-tier builders and civil contractors supporting remote and high-risk projects",
        "Engineering and project management consultancies aligned to delivery scopes",
        "SMP, electrical and mechanical subcontractors",
        "Shutdown and commissioning specialists",
        "Workforce and camp services providers supporting remote delivery"
    ],
    buttonText: "Start the conversation",
  };

export const resourceSpecialistExpertiseData: SpecialistExpertiseProps = {
  title: "Built for Resources. Proven on Site.",
  description:
    "Specialist recruitment across mining and oil and gas project roles, aligned to delivery scope, contractor interface and remote execution risk.",
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

export const resourceRecruitmentSections: Section[] = [
  {
    complexItems:[
      {
        title: "Project & Construction Management",
        body: "Project Managers, Construction Managers and Site Engineers who lead large scopes under remote and high-risk conditions.",
      },
      {
        title: "Shutdowns, Upgrades & Commissioning",
        body: "Supervisors, Commissioning Engineers and Project Engineers experienced in brownfield upgrades, shutdown programs and staged handovers.",
      },
      {
        title: "HSE, Risk & Compliance",
        body: "HSE Advisors and Managers who embed safe systems of work, lead incident response, and protect compliance on complex builds.",
      },
      {
        title: "Civil, Mechanical & Structural Engineering",
        body: "Engineers with hands-on understanding of terrain risk, sequencing, modular builds and structural coordination.",
      },
      {
        title: "Contract & Commercial Management",
        body: "Contract Administrators and Commercial Managers who manage scope creep, variation risk and subcontractor performance.",
      },
      {
        title: "Workforce, IR & Mobilisation",
        body: "Site Administrators, Mobilisation Coordinators and IR Leads who keep your workforce compliant, engaged and on schedule.",
      },
    ],
  },
];

export const resourceNetworkData: OurNetworkSectionProps = {
  header: "WORK WITH THE EXPERTS",
  heading: "Built for site. Proven in delivery.",
  description:
    "We don’t source from databases. We recruit from real projects, providing infrastructure professionals who understand what it takes to build mine and gas assets,  from pre-start to handover. We recruit across:",
  bottomText: "",
  image: "/expertImage.jpg",
  mt: -10,
  mb: 20,
  sections: resourceRecruitmentSections,
};

export const resourceHowWeRecruitData: HowWeRecruitProps = {
  heading: "resource recruitment",
  title: "How we recruit and why it works.",
  subTitle:
    "Every major resources project hinges on one thing - who’s on the ground when it counts.",
  description:
    "Every search starts with the site, the scope and the risk. We align our approach to your workfront pressure, contractor mix, and compliance environmen, not just the job title.",
  description2:
    "We act quickly and with purpose. Because the wrong hire on a live site costs more than time.",
  itemList: [
    {
      icon: "/WebNetwork.svg",
      text: "Market mapping based on location, project type and competitor activity",
    },
    {
      icon: "/Voice.svg",
      text: "Direct engagement with proven performers in aligned conditions",
    },
    {
      icon: "/todoList.svg",
      text: "Screening based on site-readiness, constructability insight and delivery outcomes",
    },
    {
      icon: "/checkPeople.svg",
      text: "The best candidate with the capability to lead or lift the project",
    },
  ],
};

export const resourceWhyPartnerSectionData: WhyPartnerProps = {
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

export const resourceResultSectionData: ResultSectionProps = {
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
    "Blueprints don’t build infrastructure. People do. We help you find the ones who get it done.",
};

export const resourceTestimonialData: TestimonialProps = {
  heading: "What Our Clients Say",
  title: "Reviews",
  description:
    "Here is what our clients have to say about working with us. Real experiences, real feedback.",
  quote:
    "“I have worked with Guy since 2008, across infrastructure & resource-based enterprises.”",
  detail:
    "Guy is without question, one of the finest talent acquisition professionals I have had the pleasure of engaging with and I have no hesitation in recommending him to any party.",
  author: "Matt Ingoe - ",
  company: "HR Manager",
};

export const resourceFaqData: FAQ[] = [
  {
    question: "Do You Recruit For Both Site And Office-Based Resource Roles?",
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
