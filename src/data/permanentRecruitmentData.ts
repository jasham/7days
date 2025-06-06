import { HeroProps, ResultSectionProps, TestimonialProps } from "@/types/homeInterfaces";
import {
    HowWeDeliverRecruitmentProps,
    OurNetworkSectionProps,
    Section,
    SpecialistExpertiseProps,
} from "@/types/permanentRecruitmentInterfaces";
import { FAQ, WhatWeDoProps } from "@/types/recruitmentInterfaces";

export const heroDetails: HeroProps = {
  title: "Permanent recruitment built for long-term success",
  description: "Hire talent who strengthen your team, align to your strategy, and stay the course.",
  buttonText: "Begin your success story",
  imageUrl: "/hero/hero6.jpg",
};

// 3️⃣ SpecialistExpertise
export const specialistExpertiseData: SpecialistExpertiseProps = {
  title: "Sector-specific recruitment. permanent impact.",
  description: "Deep industry knowledge, precise candidate alignment , built for long-term success in your sector.",
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
export const permanentRecruitmentSections: Section[] = [
  {
    items: [
      "Construction project directors and managers",
      "Property development executives",
      "Engineering specialists (civil, mechanical, electrical)",
      "Facilities and asset managers",
      "Resources industry leadership",
      "Renewable energy project teams",
      "Nfp and public sector operations executives"
    ],
  },
];

export const networkData: OurNetworkSectionProps = {
  header: "Work with the experts",
  heading: "Our network advantage",
  description: "Unlike generalist recruiters, henton operates inside industry ecosystems. we maintain deep sector connections across:",
  bottomText: "Our ability to activate trusted networks gives you an edge, bringing candidates to the table who would never respond to traditional ads.",
  image: "/Network2.svg",
  mt: -5,
  mb: 5,
  sections: permanentRecruitmentSections,
};

// 5️⃣ HowWeDeliverRecruitment
export const howWeDeliverData: HowWeDeliverRecruitmentProps = {
  headingText: "Permanent recruitment services",
  mainTitle: "How we deliver permanent recruitment",
  subTitle: "Permanent hiring demands precision and our system delivers it.",
  image: "/womenPresenting.jpg",
  buttonText: "Build your team",
  features: [
    {
      title: "Strategic role alignment",
      description: "We lead detailed calibration sessions with hiring managers and operational leaders to align the role to your growth strategy, not just a position description.",
    },
    {
      title: "Market mapping and talent intelligence",
      description: "We map the active and passive market, leveraging proprietary databases, headhunting techniques, and industry networks across australia’s major and regional markets.",
    },
    {
      title: "Direct search and talent activation",
      description: "We target high-performing passive candidates and present opportunities that align to their personal growth and professional goals.",
    },
    {
      title: "Values-based assessment",
      description: "We assess candidates against behavioural, cultural and leadership alignment metrics , not just skills and experience.",
    },
    {
      title: "Focused delivery",
      description: "We don’t create shortlists, we present only the best candidate in 7,10 business days, complete with summary profile, capability analysis and leadership fit scoring.",
    },
  ],
};

// 7️⃣ FAQ
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
  description: "Here is what our clients have to say about working with us. real experiences, real feedback.",
  quote: "“Henton consulting always provide quality candidates”",
  detail: "They are extremely efficient with communication. i would highly recommend their services.",
  author: "Alicia lawrence, hr business partner",
  company: "-pomeroy pacific",
};

export const resultSectionData: ResultSectionProps = {
  cardProps: {
    cardDetails: [
      {
        score: "91%", description: "Of permanent placements retained 12+ months",
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
  topHeading: "Results that matter",
  bottomHeading: "When expertise, trust, and speed come together, growth isn’t a goal , it’s the outcome.",
};

export const whatWeDoData: WhatWeDoProps = {
  heading: "Permanent recruitment isn’t about CVs , it’s about capability.",
  introText:
    "At henton consulting, permanent recruitment is about more than filling vacancies. it’s about building capability , securing the professionals and leaders who will shape your organisation’s future.\n\n" +
    "Our approach ensures every permanent hire strengthens your team, culture, and competitive position.",
  whoSubHeading: "We recruit for:",
  whoHeading: "Our expertise covers a wide range of skill sets and leadership levels:",
  listItems: [
    "Specialist technical roles",
    "Commercial and operational leadership",
    "Middle management to c-suite executives",
    "Confidential and strategic appointments",
  ],
  buttonText: "Start the conversation",
};
