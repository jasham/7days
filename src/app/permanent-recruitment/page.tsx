"use client";
import FaqSection from "@/Components/Faq";
import HeroSection from "@/Components/Hero/Hero";
import HowWeDeliverRecruitment from "@/Components/HowWeDeliver/Index";
import Insights from "@/Components/Insights/index";
import OurNetworkSection from "@/Components/Network";
import ResultsSection from "@/Components/Results";
import SpecialistExpertise from "@/Components/SpecialExpertise";
import TestimonialSection from "@/Components/TeastimonialSection";
import WhatWeDo from "@/Components/WhatWeDo/index2";
// herosection interface
interface HeroProps {
  title: string;
  description: string;
  buttonText: string;
  imageUrl: string;
}
//result section interface
interface CardItem {
  score: string;
  title: string;
  description?: string;
}
interface CardProps {
  cardDetails: CardItem[];
}
//why experts interface
// interface CardData {
//   title: string;
//   description: string;
// }
// interface CardList {
//   myCards: CardData[];
// }
//hero section data
const heroDetails: HeroProps = {
  title: "Permanent Recruitment Built for Long-Term Success",
  description:
    "Hire talent who strengthen your team, align to your strategy, and stay the course.",
  buttonText: "Begin your success story",
  imageUrl: "/Hero3.jpg",
};
//result section data
const resultDetails: CardProps = {
  cardDetails: [
    {
      score: "91%",
      title: "",
      description: "of permanent placements retained 12+ months",
    },
    {
      score: "100%",
      title: "",
      description: "of retained assignments completed within timeframe",
    },
    {
      score: "83%",
      title: "",
      description: "of roles filled from the first candidate presented",
    },
  ],
};

const faqData = [
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

const permanentFeatures = [
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
      "We don’t create shortlists, we present only the best candidate in 7–10 business days, complete with summary profile, capability analysis and leadership fit scoring.",
  },
];

const listItems = [
  "Specialist technical roles",
  "Commercial and operational leadership",
  "Middle management to C-suite executives",
  "Confidential and strategic appointments",
];

export default function permanentRecruitmentPage() {
  return (
    <div>
      <HeroSection {...heroDetails} />
      <WhatWeDo
        title="Permanent recruitment isn’t about CVs — it’s about capability."
        description1="At Henton Consulting, permanent recruitment is about more than filling vacancies. It’s about building capability — securing the professionals and leaders who will shape your organisation’s future."
        description2="Our approach ensures every permanent hire strengthens your team, culture, and competitive position."
        description3=""
        subHeading="We Recruit For"
        listItems={listItems}
        subDescription="Our expertise covers a wide range of skill sets and leadership levels:"
        buttonText="Start the conversation"
      />
      <SpecialistExpertise
        title="Sector-Specific Recruitment. Permanent Impact."
        description="Deep industry knowledge, precise candidate alignment - built for long-term success in your sector."
      />

      <OurNetworkSection
        permanentRecruitment={true}
        mt={-15}
        mb={20}
        heading="Our Network Advantage"
        bottomText="Our ability to activate trusted networks gives you an edge, bringing candidates to the table who would never respond to traditional ads."
        description="Unlike generalist recruiters, Henton operates inside industry ecosystems. We maintain deep sector connections across:"
        image="/Network2.svg"
      />
      <HowWeDeliverRecruitment
        headingText="Permanent Recruitment Services"
        mainTitle="How we deliver permanent recruitment"
        subTitle="Permanent hiring demands precision and our system delivers it."
        image="/womenPresenting.jpg"
        buttonText="Build Your Team"
        features={permanentFeatures}
      />
      <ResultsSection
        cardProps={resultDetails}
        background="linear-gradient(rgba(1, 66, 37, 0.8), rgba(1, 66, 37, 0.8)), /* Overlay color */url('/results-bg.jpg')"
        topHeading="Result that matter"
        bottomHeading="When expertise, trust, and speed come together, growth isn’t a goal — it’s the outcome."
        backgroundImage="/permanantResult.jpg"
      />
      <TestimonialSection
        heading="What our clients say"
        title="Reviews"
        description="Here’s what our clients have to say about working with us. Real experiences, real feedback."
        quote="“Henton Consulting always provide quality candidates”"
        detail="They are extremely efficient with communication. I would highly recommend their services."
        author="Alicia Lawrence, HR Business Partner"
        company="Pomeroy Pacific"
      />
      <FaqSection faqData={faqData} />
      <Insights />
    </div>
  );
}
