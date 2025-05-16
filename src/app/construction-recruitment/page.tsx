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
interface CardData {
  title: string;
  description: string;
  icon: string;
}
interface CardList {
  myCards: CardData[];
}
//hero section data
const heroDetails: HeroProps = {
  title: "Construction Recruitment That Builds Certainty",
  description:
    "From boots-on-the-ground hires to strategic delivery roles,we find the people who get it built.",
  buttonText: "Begin your success story",
  imageUrl: "/ConstructionHero.jpg",
};
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

//faq data
const faqData = [
  {
    question:
      "Do You Recruit For Both Site And Office-Based Construction Roles?",
    answer:
      "Yes — From Site Managers And Engineers To Project Directors, Commercial Leads And HSE Professionals.",
  },
  {
    question: "Can You Help With Contract-Based Or Temporary Hires?",
    answer:
      "Absolutely. We Place Both Permanent And Contract Professionals Aligned To Project Scope, Stage And Delivery Risk.",
  },
  {
    question: "Do You Work Nationally?",
    answer:
      "Yes — We Recruit Across Australia Including Urban Infill, Regional Builds And Remote Infrastructure Projects.",
  },
  {
    question: "Can You Manage Sensitive Or Confidential Assignments?",
    answer:
      "Yes — We Handle Confidential Search Assignments With Discretion, Urgency And Total Alignment To Risk Controls.",
  },
  {
    question: "How Do You Test Delivery Competence, Not Just Qualifications?",
    answer:
      "We Interview Based On Real Project Performance, Safety Records, And Leadership Behaviours — Not Just CVs.",
  },
];

const listItems = [
  "Head Contractors, Subcontractors across keys sectors including Health, Education, Industrial",
  "Specialist subcontractors and client side consultancies",
  "Fitout and refurbishment firms",
  "Client-side project and development managers",
  "Government and private developers",
];

export default function constructionRecruitmentPage() {
  return (
    <div>
      <HeroSection {...heroDetails} />
      <WhatWeDo
        title="Great builds don’t stay on track by accident, it starts with who you hire."
        description1="We recruit across the full construction lifecycle — from early-stage planning and estimating through to site delivery, handover and asset performance."
        description2="Whether you're managing a multi-site pipeline, resourcing for a live project, or replacing a critical delivery lead — we act fast to secure professionals who keep schedules, margins and safety on track."
        description3=""
        subHeading="Trusted by Australia's Builders:"
        listItems={listItems}
        subDescription="We work with builders who can't afford delays — and developers who need certainty from day one. Our clients include:"
        buttonText="Start the conversation"
      />
      <SpecialistExpertise
        title="Built for Construction. Proven in Delivery."
        description="Permanent, contract and executive recruitment that reduces risk, unlocks productivity, and drives your projects forward."
      />
      <OurNetworkSection
        image="/expertImage.jpg"
        construction={true}
        mb={10}
        heading="Deep expertise./ Built for site realities."
        description="We don’t chase resumes, we chase results. Our construction networks are built project by project, site by site, with live intel on who’s performing, where, and why it matters."
      />
      <HowWeRecruit
        construction={true}
        heading="Construction recruitment"
        title="How we recruit and/ why it works."
        subTitle="Great construction hiring is about more than experience, it’s
                about risk, trust and delivery under pressure."
        description="We don’t advertise and hope. We actively map the market, vet
                delivery history, and approach proven performers — even when
                they’re not actively looking. Every engagement includes."
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
        backgroundImage="/constructionResult.jpg"
        background="linear-gradient(rgba(1, 66, 37, 0.8), rgba(1, 66, 37, 0.8)), /* Overlay color */url('/results-bg.jpg')"
        topHeading="Where Strategy Demands Action"
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
