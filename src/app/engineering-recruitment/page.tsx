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
}
interface CardList {
  myCards: CardData[];
}

//hero section data
const heroDetails: HeroProps = {
  title: "Engineering Recruitment That Keeps Projects Moving",
  description:
    "From concept design to site delivery,we find engineers who make the work possible.",
  buttonText: "Begin your success story",
  imageUrl: "/engineering-hero.jpg",
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
// faq data
const faqData = [
  {
    question: "Do you recruit across all engineering disciplines?",
    answer:
      "Yes. We cover civil, structural, mechanical, electrical and building services roles nationally.",
  },
  {
    question:
      "Can you fill multiple roles at once or support long-term programs?",
    answer:
      "Absolutely. We run parallel or phased searches aligned to your project timeline, budget and technical mix.",
  },
  {
    question: "Do you cover regional and remote projects?",
    answer:
      "Yes. We’ve delivered talent for infrastructure projects in regional hubs, remote sites and FIFO environments.",
  },
  {
    question: "Can you manage confidential or business-critical searches?",
    answer:
      "Yes — including replacements, backfills and restructuring-sensitive roles.",
  },
  {
    question: "Do you assess technical ability or just CVs?",
    answer:
      "We assess based on delivery outcomes, stakeholder feedback, and project performance — not just credentials.",
  },
];

const listItems = [
  "National and multidisciplinary design consultancies",
  "Specialist civil, structural and MEP firms",
  "Tier 1 and mid-tier head contractors",
  "Client-side PM and commercial advisory groups",
  "Government and infrastructure delivery agencies",
  "Asset owners and operators in transport, utilities and energy",
];

export default function constructionRecruitmentPage() {
  return (
    <div>
      <HeroSection {...heroDetails} />
      <WhatWeDo
        title="Designs win tenders. Engineers deliver outcomes. It starts with who you hire."
        description1="We recruit high-performing engineering professionals across civil, structural, mechanical, electrical and building services disciplines."
        description2="Whether you’re designing critical infrastructure, resourcing for a live build, or replacing a technical lead mid-project, we deliver people who know how to deliver under pressure. Our candidates don’t just meet specs. They solve problems others can’t."
        description3=""
        subHeading="Trusted by Australia’s Engineering-Led Organisations:"
        listItems={listItems}
        subDescription="We work with engineering employers who can’t afford to get it wrong. From long-term team builds to urgent delivery hires, we recruit across:"
        subListBottom="Whether your project is in a major city, regional hub or remote site, we find the technical talent to match."
        buttonText="Start the conversation"
      />
      <SpecialistExpertise
        title="Engineered for Results. Backed by Performance."
        description="Specialist recruitment across civil, structural, and services roles, aligned to project scope, stakeholder pressure, and delivery outcomes."
      />
      <OurNetworkSection
        image="/engineering.jpg"
        engineeringPage={true}
        heading="Built for complexity./ Hired for performance."
        description="We don’t source from job boards We find professionals trusted to deliver under pressure, on real projects, with real consequences."
      />
      <HowWeRecruit
        engineering={true}
        heading="Engineering recruitment"
        title="How we recruit and/ why it works."
        subTitle="Great engineering hires don’t just reduce workload — they reduce risk."
        description="We don’t wait for applications. We go straight to the engineers already solving technical problems under pressure, many of whom aren’t looking, but will move for the right opportunity./We map the market, trace delivery outcomes, and approach with purpose. Every search includes:"
        description2="We act quickly and decisively because delays cost money — and bad hires cost more"
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
        background="linear-gradient(rgba(1, 66, 37, 0.8), rgba(1, 66, 37, 0.8)), /* Overlay color */url('/engineering-results-bg.jpg')"
        topHeading="Measurable outcomes"
        footerText="Technical recruitment isn’t about filling a role,it’s about delivering a result. That’s what we do."
        backgroundImage="/engineeringResult.jpg"
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
