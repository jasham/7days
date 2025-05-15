"use client";
import FaqSection from "@/Components/Faq";
import HeroSection from "@/Components/Hero/Hero";
import HowWeRecruit from "@/Components/HowWeRecruit";
import Insights from "@/Components/Insights/index";
import OurNetworkSection from "@/Components/Network";
import ResultsSection from "@/Components/Results";
import SpecialistExpertise from "@/Components/SpecialExpertise";
import TestimonialSection from "@/Components/TeastimonialSection";
import WhatWeDo from "@/Components/WhatWeDo/index2";
import WhyPartnerSection from "@/Components/WhyPartnerSection";
// herosection interface
interface HeroProps {
  title: string;
  description: string;
  buttonText: string;
  imageUrl: string;
}

//hero section data
const heroDetails: HeroProps = {
  title: "Expert Property & Development Recruitment",
  description:
    "Specialist talent across the full property lifecycle",
  buttonText: "Begin your success story",
  imageUrl: "/Hero4.jpg",
};

interface CardData {
    title: string;
    description: string;
    icon: string;
  }
  interface CardList {
    myCards: CardData[];
  }

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

const listItems = [
  "Property developers (residential, commercial, mixed-use)",
  "Funds and institutional asset owners",
  "Real estate advisory and consultancy groups",
  "Government and private urban development bodies",
];

const ExpertList: CardList = {
    myCards: [
      {
        title:
          "We don’t send options, we send the one candidate who can do the job.",
        description: "",
        icon: "/marketing.svg",
      },
      {
        title: "We understand what’s commercially at stake in every hire.",
        description: "",
        icon: "/path/to/icon2.png",
      },
      {
        title: "We show up with honesty, urgency, and results.",
        description: "",
        icon: "/path/to/icon3.png",
      },
    ],
  };

export default function propertyRecruitmentPage() {
  return (
    <div>
      <HeroSection {...heroDetails} />
      <WhatWeDo
        title="Great developments don’t deliver themselves — it starts with who you hire."
        description1="We recruit high-performing professionals across the entire property development spectrum — from acquisitions and feasibility to delivery, leasing, and asset performance"
        description2="Whether you're scaling a national development pipeline or unlocking new investment potential, we deliver the right people at the right time."
        description3=""
        subHeading="We recruit for:"
        subDescription="The right partnership brings your project to life — and the right team keeps it moving. We partner with:"
        buttonText="Start the conversation"
        listItems={listItems}
      />
      <SpecialistExpertise
        title="Property-Focused Recruitment. Built for Delivery."
        description="Precision hiring across every phase of the development lifecycle — from vision to completion."
      />
      <OurNetworkSection
        propertyRecruitmentPage={true}
        mt={0}
        mb={5}
        heading="Deep expertise. Precise delivery."
        bottomText=""
        description="We don’t pull from static databases — we headhunt for impact. Our sector insight spans the entire property lifecycle:"
        image="/Network3.jpg"
      />
      <HowWeRecruit
        construction={true}
        title="How we recruit and/ why it works."
        subTitle="Great construction hiring is about more than experience, it’s
                about risk, trust and delivery under pressure."
        description="We don’t advertise and hope. We actively map the market, vet
                delivery history, and approach proven performers — even when
                they’re not actively looking. Every engagement includes."
        description2="We don’t just fill roles, we build teams. Our recruitment process is designed to deliver the right people for your project, every time."
      />
            <WhyPartnerSection
        cards={ExpertList.myCards}
        title="Why employers trust us."
        subTitle=""
        color="rgba(1, 66, 37, 0.8)"
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
