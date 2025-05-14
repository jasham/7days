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

//hero section data
const heroDetails: HeroProps = {
  title: "Executive Search That Shapes Your Future",
  description:
    "Appoint leadership that transforms outcomes, not just fills a seat.",
  buttonText: "Begin your success story",
  imageUrl: "/Hero3.jpg",
};

interface CardItem {
  score: string;
  title: string;
  description?: string;
}
interface CardProps {
  cardDetails: CardItem[];
}

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
    question: "How do you approach confidential executive searches?",
    answer:
      "We manage all outreach discreetly through secure channels and direct senior consultant contact — no public ads, no open-market chatter.",
  },
  {
    question: "What’s the typical timeframe for an executive search?",
    answer:
      "Most searches are completed in 3–6 weeks depending on complexity. We provide detailed timelines and weekly progress reports.",
  },
  {
    question: "Can you advise us on board structure or succession planning?",
    answer:
      "Yes. We provide consulting support around succession, board renewal, and executive team design through our Consulting & Advisory offering.",
  },
  {
    question: "How do you assess executive candidates beyond the CV?",
    answer:
      "We use structured interviews, reference triangulation, psychometric tools and behavioural assessment to evaluate decision-making, leadership style and alignment.",
  },
];

const executiveFeatures = [
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
      "We present only the best candidate within 3–6 weeks, with a detailed profile, leadership analysis, alignment insights, and red flag alerts. We support internal decision-making with ongoing stakeholder engagement and advisory.",
  },
];

const listItems = [
  "CEO, COO, CFO, CIO, CHRO, CMO and CDO roles",
  "Executive General Managers",
  "Strategy, Growth and Transformation leaders",
  "Commercial, Operational and Technical Executives",
  "Board Directors and Governance appointments",
];

export default function permanentRecruitmentPage() {
  return (
    <div>
      <HeroSection {...heroDetails} />
      <WhatWeDo
        title="Executive hiring is high-stakes — and the right appointment changes everything."
        description1="At Henton Consulting, we partner with boards, CEOs and senior leadership to deliver retained executive search for critical roles across Australia’s commercial, industrial, and government sectors."
        description2="We specialise in appointing leaders who don’t just meet the brief — they elevate the strategy, challenge thinking, and bring others with them."
        description3=""
        subHeading="We recruit for:"
        subDescription="Our expertise covers a wide range of skill sets and leadership levels:"
        buttonText="Start the conversation"
        listItems={listItems}
      />
      <SpecialistExpertise
        title="Sector-Specific Recruitment. Permanent Impact."
        description="Deep industry knowledge, precise candidate alignment - built for long-term success in your sector."
      />
      <OurNetworkSection
        executiveSearch={true}
        mt={-30}
        mb={20}
        heading="Strategic network advantage."
        bottomText=""
        description="We’re not drawing from databases — we’re drawing from relationships. We maintain live intelligence networks across:"
        image="/Network2.svg"
      />
      <HowWeDeliverRecruitment
        headingText="Retained Executive Search"
        mainTitle="How we deliver retained executive search"
        subTitle="Our model is built around precision, trust and market intelligence. Every search is built on five core pillars and includes:"
        image="/executiveSearch.jpg"
        buttonText="Build Your Team"
        features={executiveFeatures}
      />
      <ResultsSection
        cardProps={resultDetails}
        backgroundImage="/executiveResult.jpg"
        background="linear-gradient(rgba(1, 66, 37, 0.8), rgba(1, 66, 37, 0.8)), /* Overlay color */url('/results-bg.jpg')"
        topHeading="Results that matter"
        bottomHeading="When expertise, trust, and speed come together, growth isn’t a goal — it’s the outcome."
      />
      <TestimonialSection />
      <FaqSection faqData={faqData} />
      <Insights />
    </div>
  );
}
