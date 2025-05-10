import HeroSection from "@/Components/Hero/Hero";
import HowWeRecruit from "@/Components/HowWeRecruit";
import Insights from "@/Components/Insights/index";
import OurNetworkSection from "@/Components/Network";
import ResultsSection from "@/Components/Results";
import SpecialistExpertise from "@/Components/SpecialExpertise";
import TestimonialSection from "@/Components/TeastimonialSection";
import WhatWeDo from "@/Components/WhatWeDo/Index";
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
const ExpertList: CardList = {
  myCards: [
    {
      title:
        "We don’t send options, we send the one candidate who can do the job.",
      description: "",
    },
    {
      title: "We understand what’s commercially at stake in every hire.",
      description: "",
    },
    {
      title: "We show up with honesty, urgency, and results.",
      description: "",
    },
  ],
};
export default function constructionRecruitmentPage() {
  return (
    <div>
      <HeroSection {...heroDetails} />
      <WhatWeDo
        cards={false}
        construction={true}
        heading="Great builds don’t stay on track by accident, it starts with who you hire."
        description="We recruit across the full construction lifecycle — from early-stage planning and estimating through to site delivery, handover and asset performance./ Whether you're managing a multi-site pipeline, resourcing for a live project, or replacing a critical delivery lead — we act fast to secure professionals who keep schedules, margins and safety on track."
        subHeading="Trusted by Australia's Builders:"
        subDescription="We work with builders who can't afford delays — and developers who need certainty from day one. Our clients include:"
      />
      <SpecialistExpertise />
      <OurNetworkSection
        image="/expertImage.jpg"
        construction={true}
        heading="Deep expertise./ Built for site realities."
        description="We don’t chase resumes, we chase results. Our construction networks are built project by project, site by site, with live intel on who’s performing, where, and why it matters."
      />
      <HowWeRecruit />
      <WhyPartnerSection
        CardList={ExpertList}
        title="Why employers trust us."
        subTitle=""
        color="rgba(1, 66, 37, 0.8)"
      />
      <ResultsSection
        CardProps={resultDetails}
        background="linear-gradient(rgba(1, 66, 37, 0.8), rgba(1, 66, 37, 0.8)), /* Overlay color */url('/results-bg.jpg')"
        topHeading="Where Strategy Demands Action"
        bottomHeading="When expertise, trust, and speed come together, growth isn’t a goal — it’s the outcome."
      />
      <TestimonialSection />
      <Insights />
    </div>
  );
}
