"use client";
import FaqSection from "@/Components/Faq";
import Footer from "@/Components/Footer/Footer";
import HeroSection from "@/Components/Hero/Hero";
import HowWeDeliverPermanentRecruitment from "@/Components/HowWeDeliver/Index";
import Insights from "@/Components/Insights/index";
import OurNetworkSection from "@/Components/Network";
import ResultsSection from "@/Components/Results";
import SpecialistExpertise from "@/Components/SpecialExpertise";
import TestimonialSection from "@/Components/TeastimonialSection";
import WhatWeDo from "@/Components/WhatWeDo/Index";
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
//why expert data
// const ExpertList: CardList = {
//   myCards: [
//     {
//       title: "Precision Systems",
//       description:
//         "Every recruitment campaign follows a structured, proven methodology. From role briefing to shortlist delivery, we align talent acquisition tightly to your business outcomes, timelines and team dynamics.",
//     },
//     {
//       title: "Deep Market Networks",
//       description:
//         "We actively maintain relationships across technical, operational and executive talent pools — not just databases. Our networks give you access to passive candidates and industry leaders who aren’t available on the open market.",
//     },
//     {
//       title: "Precision Systems",
//       description:
//         "Every assignment is led by a senior advisor who understands your industry and growth stage. We don’t just fill vacancies — we build capability aligned to your future plans.",
//     },
//   ],
// };
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
export default function permanentRecruitmentPage() {
  return (
    <div>
      <HeroSection {...heroDetails} />
      <WhatWeDo
        cards={false}
        heading="Permanent recruitment isn’t about CVs — it’s about capability."
        description="At Henton Consulting, permanent recruitment is about more than filling vacancies. It’s about building capability — securing the professionals and leaders who will shape your organisation’s future.Our approach ensures every permanent hire strengthens your team, culture, and competitive position."
        subHeading="We Recruit For"
        subDescription="Our expertise covers a wide range of skill sets and leadership levels:"
      />
      <SpecialistExpertise />
      <OurNetworkSection />
      <HowWeDeliverPermanentRecruitment />
      <ResultsSection
        CardProps={resultDetails}
        background="linear-gradient(rgba(1, 66, 37, 0.8), rgba(1, 66, 37, 0.8)), /* Overlay color */url('/results-bg.jpg')"
        topHeading="Where Strategy Demands Action"
        bottomHeading="When expertise, trust, and speed come together, growth isn’t a goal — it’s the outcome."
      />
      <TestimonialSection />
      <FaqSection faqData={faqData} />
      <Insights />
      <Footer />
    </div>
  );
}
