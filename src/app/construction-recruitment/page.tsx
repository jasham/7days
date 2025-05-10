import HeroSection from "@/Components/Hero/Hero";
import Insights from "@/Components/Insights/index";
import OurNetworkSection from "@/Components/Network";
import ResultsSection from "@/Components/Results";
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
interface CardData {
  title: string;
  description: string;
}
interface CardList {
  myCards: CardData[];
}
interface Experts {
  CardList: CardList;
  title: string;
  subTitle: string;
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
const ExpertList: CardList = {
  myCards: [
    {
      title: "Precision Systems",
      description:
        "Every recruitment campaign follows a structured, proven methodology. From role briefing to shortlist delivery, we align talent acquisition tightly to your business outcomes, timelines and team dynamics.",
    },
    {
      title: "Deep Market Networks",
      description:
        "We actively maintain relationships across technical, operational and executive talent pools — not just databases. Our networks give you access to passive candidates and industry leaders who aren’t available on the open market.",
    },
    {
      title: "Precision Systems",
      description:
        "Every assignment is led by a senior advisor who understands your industry and growth stage. We don’t just fill vacancies — we build capability aligned to your future plans.",
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
      {/* <SpecialistExpertise /> */}
      <OurNetworkSection image="/expertImage.jpg" />
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
