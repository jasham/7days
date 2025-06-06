import { HeroProps, ResultSectionProps, TestimonialProps, WhyPartnerProps } from "@/types/homeInterfaces";
import { OurNetworkSectionProps, Section, SpecialistExpertiseProps } from "@/types/permanentRecruitmentInterfaces";
import { HowWeRecruitProps } from "@/types/propertyRecruitmentInterface";
import { FAQ, WhatWeDoProps } from "@/types/recruitmentInterfaces";

export const resourceHeroDetails: HeroProps = {
  title: "Resources recruitment that powers futures",
  description: "We place infrastructure professionals who turn remote sites into high-performance assets.",
  buttonText: "Begin your success story",
  imageUrl: "/hero/hero14.jpg",
};

export const resourceWhatWeDoData: WhatWeDoProps = {
  heading: "Well-run facilities don’t manage themselves, it starts with who you hire.",
  introText: "We recruit construction and project delivery talent for the resources sector, with a focus on building, not operating. \n\n from greenfield mine sites to major processing facilities, pipelines and oil and gas installations, we help epcm contractors deliver the people who get critical infrastructure built safely and to spec.",
  whoSubHeading: "We work with epcm contractors and delivery partners",
  whoHeading: "We support the contractors, consultancies and project partners who turn resource investments into built outcomes. we recruit for:",
  whoDescription: "Whether you're managing a flagship site, a compliance-heavy portfolio or a network of ageing assets, we’ll find the right fit, fast.",
  listItems: [
    "Epcm contractors delivering large-scale mining and oil and gas infrastructure",
    "Mid-tier builders and civil contractors supporting remote and high-risk projects",
    "Engineering and project management consultancies aligned to delivery scopes",
    "Smp, electrical and mechanical subcontractors",
    "Shutdown and commissioning specialists",
    "Workforce and camp services providers supporting remote delivery"
  ],
  buttonText: "Start the conversation",
};

export const resourceSpecialistExpertiseData: SpecialistExpertiseProps = {
  title: "Built for resources. proven on site.",
  description: "Specialist recruitment across mining and oil and gas project roles, aligned to delivery scope, contractor interface and remote execution risk.",
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

export const resourceRecruitmentSections: Section[] = [
  {
    complexItems: [
      {
        title: "Project & construction management",
        body: "Project managers, construction managers and site engineers who lead large scopes under remote and high-risk conditions.",
      },
      {
        title: "Shutdowns, upgrades & commissioning",
        body: "Supervisors, commissioning engineers and project engineers experienced in brownfield upgrades, shutdown programs and staged handovers.",
      },
      {
        title: "Hse, risk & compliance",
        body: "Hse advisors and managers who embed safe systems of work, lead incident response, and protect compliance on complex builds.",
      },
      {
        title: "Civil, mechanical & structural engineering",
        body: "Engineers with hands-on understanding of terrain risk, sequencing, modular builds and structural coordination.",
      },
      {
        title: "Contract & commercial management",
        body: "Contract administrators and commercial managers who manage scope creep, variation risk and subcontractor performance.",
      },
      {
        title: "Workforce, ir & mobilisation",
        body: "Site administrators, mobilisation coordinators and ir leads who keep your workforce compliant, engaged and on schedule.",
      },
    ],
  },
];

export const resourceNetworkData: OurNetworkSectionProps = {
  header: "Work with the experts",
  heading: "Built for site. proven in delivery.",
  description: "We don’t source from databases. we recruit from real projects, providing infrastructure professionals who understand what it takes to build mine and gas assets,  from pre-start to handover. we recruit across:",
  bottomText: "",
  image: "/expertImage.jpg",
  mt: -10,
  mb: 20,
  sections: resourceRecruitmentSections,
};

export const resourceHowWeRecruitData: HowWeRecruitProps = {
  heading: "Resource recruitment",
  title: "How we recruit and why it works.",
  subTitle: "Every major resources project hinges on one thing - who’s on the ground when it counts.",
  description: "Every search starts with the site, the scope and the risk. we align our approach to your workfront pressure, contractor mix, and compliance environmen, not just the job title.",
  description2: "We act quickly and with purpose. because the wrong hire on a live site costs more than time.",
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

export const resourceResultSectionData: ResultSectionProps = {
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
  bottomHeading: "Blueprints don’t build infrastructure. people do. we help you find the ones who get it done.",
};

export const resourceTestimonialData: TestimonialProps = {
  heading: "What our clients say",
  title: "Reviews",
  description: "Here is what our clients have to say about working with us. real experiences, real feedback.",
  quote: "“I have worked with guy since 2008, across infrastructure & resource-based enterprises.”",
  detail: "Guy is without question, one of the finest talent acquisition professionals i have had the pleasure of engaging with and i have no hesitation in recommending him to any party.",
  author: "Matt ingoe - ",
  company: "Hr manager",
};

export const resourceFaqData: FAQ[] = [
  {
    question: "Do you recruit for both site and office-based resource roles?",
    answer: "Yes — from site managers and engineers to project directors, commercial leads and hse professionals.",
  },
  {
    question: "Can you help with contract-based or temporary hires?",
    answer: "Absolutely. we place both permanent and contract professionals aligned to project scope, stage and delivery risk.",
  },
  {
    question: "Do you work nationally?",
    answer: "Yes — we recruit across australia including urban infill, regional builds and remote infrastructure projects.",
  },
  {
    question: "Can you manage sensitive or confidential assignments?",
    answer: "Yes — we handle confidential search assignments with discretion, urgency and total alignment to risk controls.",
  },
  {
    question: "How do you test delivery competence, not just qualifications?",
    answer: "We interview based on real project performance, safety records, and leadership behaviours — not just cvs.",
  },
];