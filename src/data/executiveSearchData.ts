import { HeroProps, ResultSectionProps, TestimonialProps } from "@/types/homeInterfaces";
import {
  HowWeDeliverRecruitmentProps,
  OurNetworkSectionProps,
  Section,
  SpecialistExpertiseProps,
} from "@/types/permanentRecruitmentInterfaces";
import { FAQ, WhatWeDoProps } from "@/types/recruitmentInterfaces";

export const heroDetails: HeroProps = {
  title: "Executive search that shapes your future",
  description: "Appoint leadership that transforms outcomes, not just fills a seat.",
  buttonText: "Begin your success story",
  imageUrl: "/hero/hero9.jpg",
};

export const specialistExpertiseData: SpecialistExpertiseProps = {
  title: "Sector-specific recruitment. permanent impact.",
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
    items: [
      "Board chairs and non-executive directors",
      "Industry-leading c-suite operators",
      "Regional transformation leaders and state-based functional executives",
      "Line-level managers and operational leaders",
      "Emerging successors identified through succession mapping",
    ],
  },
];

export const networkData: OurNetworkSectionProps = {
  header: "Work with the experts",
  heading: "Strategic network advantage.",
  description: "We’re not drawing from databases — we’re drawing from relationships. we maintain live intelligence networks across:",
  bottomText: "",
  image: "/Network2.svg",
  mt: -5,
  mb: 5,
  sections: internationalRecruitmentSections,
};

export const howWeDeliverData: HowWeDeliverRecruitmentProps = {
  headingText: "Contract recruitment services",
  mainTitle: "How we deliver retained executive search",
  subTitle: "Our model is built around precision, trust and market intelligence.",
  subTitle2: "Every search is built on five core pillars and includes:",
  image: "/contractService.jpg",
  buttonText: "Build your team",
  features: [
    {
      title: "Leadership strategy & role alignment",
      description: "We begin with a deep consultation with the ceo, board or executive leadership team to define the success profile — including commercial outcomes, leadership style, team context and cultural alignment.",
    },
    {
      title: "Market mapping & competitor intelligence",
      description: "We conduct in-depth research to identify competitor structures, adjacent leadership talent, succession candidates and emerging executives — across both industry and adjacent markets.",
    },
    {
      title: "Direct search & confidential engagement",
      description: "We approach pre-qualified, high-performing passive leaders through confidential, one-to-one outreach. every conversation is discreet and led directly by senior consultants — no ads, no noise.",
    },
    {
      title: "Executive assessment for impact",
      description: "We assess candidates using structured executive interviews, reference triangulation, optional psychometrics and behavioural profiling. we focus on adaptability, communication style, leadership maturity and stakeholder alignment.",
    },
    {
      title: "Focused delivery & stakeholder guidance",
      description: "We present only the best candidate within 3,6 weeks, with a detailed profile, leadership analysis, alignment insights, and red flag alerts. we support internal decision-making with ongoing stakeholder engagement and advisory.",
    },
  ],
};

export const faqData: FAQ[] = [
  {
    question: "What makes your permanent recruitment different from other agencies?",
    answer: "We don’t rely just on job ads. we use direct search, tap into passive candidate networks, and focus on long-term value — not just short-term placement. we use a 360 approach to sourcing.",
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
    answer: "We design every brief to focus on fit, expectations and growth alignment — and support post-placement success through regular check-ins. we can also help through our consulting and advisory services to work out where the retention issues are.",
  },
];

export const testimonialData: TestimonialProps = {
  heading: "What our clients say",
  title: "Reviews",
  description: "Here is what our clients have to say about working with us. real experiences, real feedback.",
  quote: "“Henton consulting are a very professional organisation”",
  detail: "They have provided us with quality staff. they take the time to understand your business needs and requirements.",
  author: "Craig dempsey, construction manager - ",
  company: "Maben group",
};

export const resultSectionData: ResultSectionProps = {
  cardProps: {
    cardDetails: [
      {
        score: "98%",
        description: "Of placed executives remain beyond 18 months",
      },
      {
        score: "100%",
        description: "Of retained searches delivered within agreed timeframes",
      },
      {
        score: "85%",
        description: "Of clients return for second or third retained assignments",
      },
    ],
  },
  backgroundImage: "/results-bg.jpg",
  topHeading: "Where strategy demands action",
  bottomHeading: "When expertise, trust, and speed come together, growth isn’t a goal — it’s the outcome.",
};

export const whatWeDoData: WhatWeDoProps = {
  heading: "Executive hiring is high-stakes — and the right appointment changes everything.",
  introText: "At henton consulting, we partner with boards, ceos and senior leadership to deliver retained executive search for critical roles across australia’s commercial, industrial, and government sectors. \n\n we specialise in appointing leaders who don’t just meet the brief — they elevate the strategy, challenge thinking, and bring others with them.",
  whoSubHeading: "We recruit for:",
  whoHeading: "Our expertise covers a wide range of skill sets and leadership levels:",
  listItems: [
    "Our expertise covers a wide range of skill sets and leadership levels:",
    "Executive general managers",
    "Strategy, growth and transformation leaders",
    "Commercial, operational and technical executives",
    "Board directors and governance appointments",
  ],
  buttonText: "Start the conversation",
};
