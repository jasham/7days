import { HeroProps, ResultSectionProps, TestimonialProps } from "@/types/homeInterfaces";
import {
    HowWeDeliverRecruitmentProps,
  OurNetworkSectionProps,
  Section,
  SpecialistExpertiseProps,
} from "@/types/permanentRecruitmentInterfaces";
import { FAQ, WhatWeDoProps } from "@/types/recruitmentInterfaces";

export const heroDetails: HeroProps = {
    title: "Executive Search That Shapes Your Future",
    description:
      "Appoint leadership that transforms outcomes, not just fills a seat.",
    buttonText: "Begin your success story",
    imageUrl: "/hero/hero9.jpg",
};

// 3️⃣ SpecialistExpertise
export const specialistExpertiseData: SpecialistExpertiseProps = {
  title: "Sector-Specific Recruitment. Permanent Impact.",
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
    items:[
        "Board Chairs and Non-Executive Directors",
        "Industry-leading C-suite operators",
        "Regional transformation leaders and state-based functional executives",
        "Line-level managers and operational leaders",
        "Emerging successors identified through succession mapping"
      ],
  },
];

export const networkData: OurNetworkSectionProps = {
  header:"WORK WITH THE EXPERTS",
  heading: "Strategic network advantage.",
  description:
    "We’re not drawing from databases — we’re drawing from relationships. We maintain live intelligence networks across:",
  bottomText:
    "",
  image: "/Network2.svg",
  mt: -5,
  mb: 5,
  sections: internationalRecruitmentSections,
};

// 5️⃣ HowWeDeliverRecruitment
export const howWeDeliverData: HowWeDeliverRecruitmentProps = {
  headingText: "CONTRACT RECRUITMENT SERVICES",
  mainTitle: "How we deliver retained executive search",
  subTitle: "Our model is built around precision, trust and market intelligence.",
  subTitle2: "Every search is built on five core pillars and includes:",
  image: "/contractService.jpg",
  buttonText: "Build Your Team",
  features: [
    {
      title: "Leadership Strategy & Role Alignment",
      description:
        "We begin with a deep consultation with the CEO, board or executive leadership team to define the success profile — including commercial outcomes, leadership style, team context and cultural alignment.",
    },
    {
      title: "Market Mapping & Competitor Intelligence",
      description:
        "We conduct in-depth research to identify competitor structures, adjacent leadership talent, succession candidates and emerging executives — across both industry and adjacent markets.",
    },
    {
      title: "Direct Search & Confidential Engagement",
      description:
        "We approach pre-qualified, high-performing passive leaders through confidential, one-to-one outreach. Every conversation is discreet and led directly by senior consultants — no ads, no noise.",
    },
    {
      title: "Executive Assessment for Impact",
      description:
        "We assess candidates using structured executive interviews, reference triangulation, optional psychometrics and behavioural profiling. We focus on adaptability, communication style, leadership maturity and stakeholder alignment.",
    },
    {
      title: "Focused Delivery & Stakeholder Guidance",
      description:
        "We present only the best candidate within 3,6 weeks, with a detailed profile, leadership analysis, alignment insights, and red flag alerts. We support internal decision-making with ongoing stakeholder engagement and advisory.",
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
      "Here is what our clients have to say about working with us. Real experiences, real feedback.",
    quote:
      "“Henton Consultiung are a very professional organisation”",
    detail:
      "They have provided us with quality staff. They take the time to understand your business needs and requirements.",
    author: "Craig Dempsey, Construction Manager - ",
    company: "Maben Group",
  }

  export const resultSectionData: ResultSectionProps = {
    cardProps: {
      cardDetails: [
        {
            score: "98%", description: "of placed executives remain beyond 18 months",
        },
        {
          score: "100%",
          description: "of retained searches delivered within agreed timeframes",
        },
        {
          score: "85%",
          description: "of clients return for second or third retained assignments",
        },
      ],
    },
    backgroundImage:"/results-bg.jpg",
    topHeading: "Where Strategy Demands Action",
    bottomHeading:
      "When expertise, trust, and speed come together, growth isn’t a goal — it’s the outcome.",
  };

  export const whatWeDoData : WhatWeDoProps =   {
    heading: "Executive hiring is high-stakes — and the right appointment changes everything.",
    introText:
      "At Henton Consulting, we partner with boards, CEOs and senior leadership to deliver retained executive search for critical roles across Australia’s commercial, industrial, and government sectors.   \n\n" +
      "We specialise in appointing leaders who don’t just meet the brief — they elevate the strategy, challenge thinking, and bring others with them.",
    whoSubHeading: "We recruit for:",
    whoHeading: "Our expertise covers a wide range of skill sets and leadership levels:",
    listItems: [
        "Our expertise covers a wide range of skill sets and leadership levels:",
        "Executive General Managers",
        "Strategy, Growth and Transformation leaders",
        "Commercial, Operational and Technical Executives",
        "Board Directors and Governance appointments"
    ],
    buttonText: "Start the conversation",
  }