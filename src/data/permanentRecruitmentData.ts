import { HeroProps, ResultSectionProps, TestimonialProps } from "@/types/homeInterfaces";
import {
    HowWeDeliverRecruitmentProps,
  OurNetworkSectionProps,
  Section,
  SpecialistExpertiseProps,
} from "@/types/permanentRecruitmentInterfaces";
import { FAQ, WhatWeDoProps } from "@/types/recruitmentInterfaces";

export const heroDetails: HeroProps = {
  title: "Permanent Recruitment Built for Long-Term Success",
  description:
    "Hire talent who strengthen your team, align to your strategy, and stay the course.",
  buttonText: "Begin your success story",
  imageUrl: "/hero/hero6.jpg",
};

// 3️⃣ SpecialistExpertise
export const specialistExpertiseData: SpecialistExpertiseProps = {
  title: "Sector-Specific Recruitment. Permanent Impact.",
  description:
    "Deep industry knowledge, precise candidate alignment , built for long-term success in your sector.",
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
export const permanentRecruitmentSections: Section[] = [
  {
    items: [
      "Construction Project Directors and Managers",
      "Property Development Executives",
      "Engineering Specialists (Civil, Mechanical, Electrical)",
      "Facilities and Asset Managers",
      "Resources Industry Leadership",
      "Renewable Energy Project Teams",
      "NFP and Public Sector Operations Executives"
    ],
  },
];

export const networkData: OurNetworkSectionProps = {
  header:"WORK WITH THE EXPERTS",
  heading: "Our Network Advantage",
  description:
    "Unlike generalist recruiters, Henton operates inside industry ecosystems. We maintain deep sector connections across:",
  bottomText:
    "Our ability to activate trusted networks gives you an edge, bringing candidates to the table who would never respond to traditional ads.",
  image: "/Network2.svg",
  mt: -5,
  mb: 5,
  sections: permanentRecruitmentSections,
};

// 5️⃣ HowWeDeliverRecruitment
export const howWeDeliverData: HowWeDeliverRecruitmentProps = {
  headingText: "Permanent Recruitment Services",
  mainTitle: "How we deliver permanent recruitment",
  subTitle: "Permanent hiring demands precision and our system delivers it.",
  image: "/womenPresenting.jpg",
  buttonText: "Build Your Team",
  features: [
    {
      title: "Strategic Role Alignment",
      description:
        "We lead detailed calibration sessions with hiring managers and operational leaders to align the role to your growth strategy, not just a position description.",
    },
    {
      title: "Market Mapping and Talent Intelligence",
      description:
        "We map the active and passive market, leveraging proprietary databases, headhunting techniques, and industry networks across Australia’s major and regional markets.",
    },
    {
      title: "Direct Search and Talent Activation",
      description:
        "We target high-performing passive candidates and present opportunities that align to their personal growth and professional goals.",
    },
    {
      title: "Values-Based Assessment",
      description:
        "We assess candidates against behavioural, cultural and leadership alignment metrics — not just skills and experience.",
    },
    {
      title: "Focused Delivery",
      description:
        "We don’t create shortlists, we present only the best candidate in 7,10 business days, complete with summary profile, capability analysis and leadership fit scoring.",
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
      "“Henton Consultiung always provide quality candidates”",
    detail:
      "They are extremely efficient with communication. I would highly recommend their services.",
    author: "Alicia Lawrence, HR Business Partner",
    company: "-Pomeroy Pacific",
  }

  export const resultSectionData: ResultSectionProps = {
    cardProps: {
      cardDetails: [
        {
            score: "91%", description: "of permanent placements retained 12+ months",
        },
        {
          score: "100%",
          description: "of retained assignments completed within timeframe",
        },
        {
          score: "83%",
          description: "of roles filled from the first candidate presented",
        },
      ],
    },
    backgroundImage:"/results-bg.jpg",
    topHeading: "Results that matter",
    bottomHeading:
      "When expertise, trust, and speed come together, growth isn’t a goal — it’s the outcome.",
  };

  export const whatWeDoData : WhatWeDoProps =   {
    heading: "Permanent recruitment isn’t about CVs — it’s about capability.",
    introText:
      "At Henton Consulting, permanent recruitment is about more than filling vacancies. It’s about building capability — securing the professionals and leaders who will shape your organisation’s future.\n\n" +
      "Our approach ensures every permanent hire strengthens your team, culture, and competitive position.",
    whoSubHeading: "We recruit for:",
    whoHeading: "Our expertise covers a wide range of skill sets and leadership levels:",
    listItems: [
      "Specialist technical roles",
      "Commercial and operational leadership",
      "Middle management to C-suite executives",
      "Confidential and strategic appointments",
    ],
    buttonText: "Start the conversation",
  }