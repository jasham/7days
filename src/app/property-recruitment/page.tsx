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
  description: "Specialist talent across the full property lifecycle",
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
      score: "98%",
      title: "",
      description: "of hires are still with the business after 18 months",
    },
    {
      score: "100%",
      title: "",
      description: "of retained searches have been completed successfully",
    },
    {
      score: "85%",
      title: "",
      description: "of roles are filled from the first candidate presented",
    },
  ],
};

const faqData = [
  {
    question: "Do you recruit nationally or just in metro areas?",
    answer:
      "We recruit across Australia — from CBD-based head offices to remote regional developments. Our network covers every major city and emerging growth corridor, ensuring access to talent where and when you need it.",
  },
  {
    question: "Can you support multi-role hiring across different project stages?",
    answer:
      "Yes. We run coordinated search campaigns across acquisitions, planning, delivery and asset management — aligning our approach to your project timeline and board-level milestones.",
  },
  {
    question: "What if the role is confidential or politically sensitive?",
    answer:
      "Discretion is built into our process. We specialise in confidential executive search, particularly when changes affect investor confidence, stakeholder relations, or DA negotiations.",
  },
  {
    question: "Do you work with both in-house teams and external advisors?",
    answer:
      "Absolutely. Whether you’re building an internal development team or hiring through a consultancy model, we tailor our process to fit your structure and reporting lines.",
  },
  {
    question: "How do you assess cultural fit for leadership roles in property?",
    answer:
      "We spend time with your team upfront to understand leadership style, delivery pressure points, and stakeholder dynamics — then engage candidates through scenario-based interviews to test alignment beyond the CV.",
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
      icon: "/sortlist1.png",
    },
    {
      title: "We understand what’s commercially at stake in every hire.",
      description: "",
      icon: "/marketing1.png",
    },
    {
      title: "We show up with honesty, urgency, and results.",
      description: "",
      icon: "/confidence1.png",
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
        subHeading="Who we work with — from vision to delivery:"
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
        property={true}
        heading="Property Development recruitment"
        title="How we recruit and/ why it works."
        subTitle="We take your brief and turn it into action. Fast.
                    Our model combines proactive search with deep sector insight. "
        description="We don’t wait for candidates to apply, we identify hidden performers already delivering across major property portfolios, many of whom are quietly open to change. Every search includes:"
        description2="Because we understand risk, yield, feasibility, ROI, and timeline pressure, we ask sharper questions. That means we filter faster — and you interview only the right people."
        description3="The difference between a project that delivers and one that stalls often comes down to a single hire. And in this market, average hires cost more than vacancies."
      />
      <WhyPartnerSection
        cards={ExpertList.myCards}
        title="Why employers trust us."
        subTitle=""
        color="rgba(1, 66, 37, 0.8)"
        buttonText="Ready to Build What’s Next?"
      />
      <ResultsSection
        cardProps={resultDetails}
        backgroundImage="/propertyResult.jpg"
        background="linear-gradient(rgba(1, 66, 37, 0.8), rgba(1, 66, 37, 0.8)), /* Overlay color */url('/results-bg.jpg')"
        topHeading="Measurable outcomes"
        bottomHeading="When expertise, trust, and speed come together, growth isn’t a goal — it’s the outcome."
      />
      <TestimonialSection
        heading="What our clients say"
        title="Reviews"
        description="Here’s what our clients have to say about working with us. Real experiences, real feedback."
        quote="“The calibre of candidates has always exceeded what others have put forward.”"
        detail="Guy assesses the needs of the client and then carefully selects potential candidates that are the right fit. He is personally involved in every step of the process."
        author="Stephen Kerfoot, Director"
        company="Kerfoot Electrics"
      />
      <FaqSection faqData={faqData} />
      <Insights />
    </div>
  );
}
