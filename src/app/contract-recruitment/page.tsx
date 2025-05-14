
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
  title: "Flexible Contract Recruitment. Without the Compromise.",
  description:
    "Flexible recruitment that’s fast, reliable and built to perform.",
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
    question: "How do you approach contract roles that need to start quickly?",
    answer:
      "We maintain live networks of proven contract talent and prioritise alignment over speed. If we have someone ready, we’ll let you know — but we never compromise quality for pace.",
  },
  {
    question: "Do you manage onboarding, payroll and compliance?",
    answer:
      "Yes. We handle all core contractor administration — including contracts, payroll, insurances and super — so you can focus on delivery, not paperwork.",
  },
  {
    question: "What if a role requires specific software or project experience?",
    answer:
      "We assess candidate relevance based on your brief, including past exposure to systems like Procore or Aconex. We don’t verify licences or inductions — but we flag known experience early.",
  },
  {
    question: "How do you ensure the contractor turns up, performs, and stays?",
    answer:
      "We work with contractors we already know and trust. Our process focuses on job clarity, culture match and proactive support — so you’re not left chasing reliability on-site.",
  },
];

const contractFeatures = [
  {
    title: "Role Brief + Compliance Needs",
    description:
      "We clarify technical scope, system access, safety requirements, location coverage and WHS obligations.",
  },
  {
    title: "Talent Pool Activation",
    description:
      "We maintain live sector-specific contractor pools, segmented by trade, project phase, clearance and availability.",
  },
  {
    title: "Readiness Review & Role Matching",
    description:
      "We assess each contractor’s experience, project exposure, and availability, and flag relevant system or site experience (e.g. Procore, Aconex, SAP) where known.",
  },
  {
    title: "Reference + Performance Check",
    description:
      "We reference contractors with past clients, projects and supervisors, and prioritise proven high performers.",
  },
  {
    title: "Fast, Structured Delivery",
    description:
      "We deliver the right candidates based on availability, alignment and contractor readiness. Timelines are agreed upfront based on the role, location, and mobilisation needs, with clear communication at every step.",
  },
];

const listItems = [
  "Technical, operations and interim-management contractors",
  "Project-based professionals across white-collar functions",
  "Interim leaders and backfill for key personnel",
];

export default function permanentRecruitmentPage() {
  return (
    <div>
      <HeroSection {...heroDetails} />
      <WhatWeDo
        title="Contract recruitment keeps projects moving and teams performing when it matters most."
        description1="When you need skilled talent fast — for a project, an unplanned gap, or a critical deadline — Henton delivers contractors who are ready to perform from day one."
        description2="We recruit contract professionals who meet both the technical demands of the role and the compliance requirements of your site, system or project."
        description3="Whether it’s one interim manager or a full site mobilisation, our process is built to reduce risk, save time, and protect operational momentum."
        subHeading="We recruit for:"
        subDescription="Our expertise covers a wide range of skill sets and leadership levels:"
        buttonText="Start the conversation"
        listItems={listItems}
      />
      <SpecialistExpertise
        title="Specialist Contract Recruitment for Demanding Environments"
        description="Deep industry knowledge, precise candidate alignment - built for long-term success in your sector."
      />
      <OurNetworkSection
        contractRecruitment={true}
        mt={-8}
        mb={2}
        heading="Trusted teams. Mobilised when it counts"
        bottomText="We know who’s active, who’s proven, and who’s ready to hit the ground running."
        description="Henton supports construction, engineering, and infrastructure leaders with contract teams ready to perform — across metro, regional and remote Australia."
        image="/Network2.svg"
      />
      <HowWeDeliverRecruitment
        headingText="CONTRACT RECRUITMENT SERVICES"
        mainTitle="Our process for contract recruitment"
        subTitle="We deliver speed without cutting corners. Every contractor is vetted for readiness, reliability and fit — before they ever reach your team."
        image="/contractService.jpg"
        buttonText="Build Your Team"
        features={contractFeatures}
      />
      <ResultsSection
        cardProps={resultDetails}
        backgroundImage="/results.jpg"
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