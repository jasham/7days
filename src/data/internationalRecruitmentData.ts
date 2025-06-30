import { HeroProps, ResultSectionProps, TestimonialProps } from "@/types/homeInterfaces";
import {
  HowWeDeliverRecruitmentProps,
  OurNetworkSectionProps,
  Section,
  SpecialistExpertiseProps,
} from "@/types/permanentRecruitmentInterfaces";
import { FAQ, WhatWeDoProps } from "@/types/recruitmentInterfaces";

export const heroDetails: HeroProps = {
  title: "International recruitment that meets workforce demand",
  description: "We help australian organisations find skilled talent where local supply can’t keep up.",
  buttonText: "Begin your success story",
  imageUrl: "/hero/hero7.jpg",
};

// 3️⃣ SpecialistExpertise
export const specialistExpertiseData: SpecialistExpertiseProps = {
  title: "Global reach. Local results. Specialist expertise.",
  description: "Targeted international recruitment aligned to workforce shortages, sector needs and long-term success in the australian market.",
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

// 4️⃣ OurNetworkSection
export const internationalRecruitmentSections: Section[] = [
  {
    complexItems: [
      {
        title: "Aged care & community services",
        body: "Personal care workers, enrolled nurses, disability support workers and care coordinators , sourced at scale for residential, community and home care programs.",
      },
      {
        title: "Engineering & construction support",
        body: "Skilled trades assistants, project coordinators, estimators, whs administrators and document controllers across infrastructure and built environment projects.",
      },
      {
        title: "Property & facilities",
        body: "Facilities coordinators, asset support officers and maintenance administrators for aged care, precinct, commercial and government portfolios.",
      },
      {
        title: "Resources & remote operations",
        body: "Fifo site admins, camp services staff, mobilisation officers and ir assistants supporting project delivery in mining and oil & gas environments.",
      },
      {
        title: "Corporate & business support",
        body: "Executive assistants, payroll officers, finance clerks, schedulers and customer service representatives placed into high-volume roles across corporate and government clients.",
      },
      {
        title: "Human resources & recruitment support",
        body: "Talent acquisition assistants, onboarding coordinators and hr officers experienced in high-compliance environments, especially health, care and infrastructure.",
      },
    ],
  },
];

export const networkData: OurNetworkSectionProps = {
  header: "Work with the experts",
  heading: "Our global network. Your advantage.",
  description: "Unlike generalist recruiters, Henton Consulting operates inside industry ecosystems. We maintain deep sector connections across:",
  bottomText: "Our ability to activate trusted networks gives you an edge, bringing candidates to the table who would never respond to traditional ads.",
  image: "/InternationalNetwork.svg",
  mt: -5,
  mb: 5,
  sections: internationalRecruitmentSections,
};

// 5️⃣ HowWeDeliverRecruitment
export const howWeDeliverData: HowWeDeliverRecruitmentProps = {
  headingText: "Permanent recruitment services",
  mainTitle: "Borderless talent. Sharp results.",
  subTitle: "We build every campaign to match your workforce needs, project timelines and regulatory obligations, from candidate sourcing to onboarding. Every international search includes:",
  image: "/womenPresenting.jpg",
  buttonText: "Build your team",
  features: [
    {
      title: "Market mapping across eligible source countries",
      description: "We identify where talent exists, which visa pathways apply, and which markets offer the best supply for your roles.",
    },
    {
      title: "Advertising, headhunting and pre-screening",
      description: "We combine targeted outreach and strategic advertising with sector-specific screening to identify the right candidates early.",
    },
    {
      title: "Visa pathway planning and relocation coordination",
      description: "We support eligible visa stream selection and coordinate logistics including documentation, timelines and onboarding prep.",
    },
    {
      title: "Cultural alignment and role-readiness assessment",
      description: "Candidates are screened for adaptability, values alignment and delivery mindset, not just qualifications.",
    },
  ],
};

// 7️⃣ FAQ
export const faqData: FAQ[] = [
  {
    question: "What makes your permanent recruitment different from other agencies?",
    answer: "We don’t rely just on job ads. We use direct search, tap into passive candidate networks, and focus on long-term value , not just short-term placement. We use a 360 approach to sourcing.",
  },
  {
    question: "How do you ensure the candidate is the right long-term fit?",
    answer: "We take time to understand your team, culture, goals and leadership style. Our shortlist only includes candidates who match on values, capability and growth potential.",
  },
  {
    question: "Can you help us with confidential or sensitive roles?",
    answer: "Absolutely. We’ve managed hundreds of off-market searches for middle and senior leadership, restructure scenarios and board-level hires.",
  },
  {
    question: "We’ve had problems with retention. How can you help?",
    answer: "We design every brief to focus on fit, expectations and growth alignment , and support post-placement success through regular check-ins. We can also help through our consulting and advisory services to work out where the retention issues are.",
  },
];

export const testimonialData: TestimonialProps = {
  heading: "What our clients say",
  title: "Reviews",
  description: "Here is what our clients have to say about working with us. Real experiences, real feedback.",
  quote: "Henton Consultiung always provide quality candidates",
  detail: "They are extremely efficient with communication. I would highly recommend their services.",
  author: "Alicia Lawrence, hr business partner",
  company: "Pomeroy pacific",
};

export const resultSectionData: ResultSectionProps = {
  cardProps: {
    cardDetails: [
      {
        score: "91%",
        description: "Of permanent placements retained 12+ months",
      },
      {
        score: "100%",
        description: "Of retained assignments completed within timeframe",
      },
      {
        score: "83%",
        description: "Of roles filled from the first candidate presented",
      },
    ],
  },
  backgroundImage: "/results-bg.jpg",
  topHeading: "Where strategy demands action",
  bottomHeading: "When expertise, trust, and speed come together, growth isn’t a goal , it’s the outcome.",
};

export const whatWeDoData: WhatWeDoProps = {
  heading: "When talent is global, your recruitment needs to be smarter.",
  introText:
    "Accessing top talent shouldn’t stop at the border. At Henton Consulting, we help organisations in australia connect with exceptional international professionals, individuals who bring rare capabilities, global outlooks, and proven impact.\n\n" +
    "We deliver hard-to-source candidates from key global markets, with a focus on leadership, transformation, technical, and specialist roles across sectors.",
  whoSubHeading: "Who we work with:",
  whoHeading: "The world’s best don’t always live next door. We work with:",
  listItems: [
    "Employers facing local workforce shortages",
    "National and regional businesses seeking skilled international talent",
    "Organisations expanding into new markets or locations",
    "Recruitment teams needing campaign support or relocation guidance",
    "Project-based or volume hiring initiatives requiring overseas search",
  ],
  buttonText: "Start the conversation",
};
