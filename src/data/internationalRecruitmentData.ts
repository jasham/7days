import { HeroProps, ResultSectionProps, TestimonialProps } from "@/types/homeInterfaces";
import {
    HowWeDeliverRecruitmentProps,
  OurNetworkSectionProps,
  Section,
  SpecialistExpertiseProps,
} from "@/types/permanentRecruitmentInterfaces";
import { FAQ, WhatWeDoProps } from "@/types/recruitmentInterfaces";

export const heroDetails: HeroProps = {
    title: "International Recruitment That Meets Workforce Demand",
    description:
      "We help Australian organisations find skilled talent where local supply can’t keep up.",
    buttonText: "Begin your success story",
    imageUrl: "/hero/hero7.jpg",
};

// 3️⃣ SpecialistExpertise
export const specialistExpertiseData: SpecialistExpertiseProps = {
  title: "Global Reach. Local Results. Specialist Expertise.",
  description:
    "Targeted international recruitment aligned to workforce shortages, sector needs and long-term success in the Australian market.",
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
          title: "Aged Care & Community Services",
          body: "Personal Care Workers, Enrolled Nurses, Disability Support Workers and Care Coordinators — sourced at scale for residential, community and home care programs.",
        },
        {
          title: "Engineering & Construction Support",
          body: "Skilled Trades Assistants, Project Coordinators, Estimators, WHS Administrators and Document Controllers across infrastructure and built environment projects.",
        },
        {
          title: "Property & Facilities",
          body: "Facilities Coordinators, Asset Support Officers and Maintenance Administrators for aged care, precinct, commercial and government portfolios.",
        },
        {
          title: "Resources & Remote Operations",
          body: "FIFO Site Admins, Camp Services Staff, Mobilisation Officers and IR Assistants supporting project delivery in mining and oil & gas environments.",
        },
        {
          title: "Corporate & Business Support",
          body: "Executive Assistants, Payroll Officers, Finance Clerks, Schedulers and Customer Service Representatives placed into high-volume roles across corporate and government clients.",
        },
        {
          title: "Human Resources & Recruitment Support",
          body: "Talent Acquisition Assistants, Onboarding Coordinators and HR Officers experienced in high-compliance environments, especially health, care and infrastructure.",
        },
      ],
  },
];

export const networkData: OurNetworkSectionProps = {
  header:"WORK WITH THE EXPERTS",
  heading: "Our Global Network. Your Advantage.",
  description:
    "Unlike generalist recruiters, Henton operates inside industry ecosystems. We maintain deep sector connections across:",
  bottomText:
    "Our ability to activate trusted networks gives you an edge, bringing candidates to the table who would never respond to traditional ads.",
  image: "/InternationalNetwork.svg",
  mt: -5,
  mb: 5,
  sections: internationalRecruitmentSections,
};

// 5️⃣ HowWeDeliverRecruitment
export const howWeDeliverData: HowWeDeliverRecruitmentProps = {
  headingText: "Permanent Recruitment Services",
  mainTitle: "Borderless talent. Sharp results.",
  subTitle: "We build every campaign to match your workforce needs, project timelines and regulatory obligations, from candidate sourcing to onboarding. Every international search includes:",
  image: "/womenPresenting.jpg",
  buttonText: "Build Your Team",
  features: [
    {
      title: "Market mapping across eligible source countries",
      description:
        "We identify where talent exists, which visa pathways apply, and which markets offer the best supply for your roles.",
    },
    {
      title: "Advertising, headhunting and pre-screening",
      description:
        "We combine targeted outreach and strategic advertising with sector-specific screening to identify the right candidates early.",
    },
    {
      title: "Visa pathway planning and relocation coordination",
      description:
        "We support eligible visa stream selection and coordinate logistics including documentation, timelines and onboarding prep.",
    },
    {
      title: "Cultural alignment and role-readiness assessment",
      description:
        "Candidates are screened for adaptability, values alignment and delivery mindset, not just qualifications.",
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
    company: "- Pomeroy Pacific",
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
    topHeading: "Where Strategy Demands Action",
    bottomHeading:
      "When expertise, trust, and speed come together, growth isn’t a goal — it’s the outcome.",
  };

  export const whatWeDoData : WhatWeDoProps =   {
    heading: "When talent is global, your recruitment needs to be smarter.",
    introText:
      "Accessing top talent shouldn’t stop at the border. At Henton Consulting, we help organisations in Australia connect with exceptional international professionals, individuals who bring rare capabilities, global outlooks, and proven impact.   \n\n" +
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
  }