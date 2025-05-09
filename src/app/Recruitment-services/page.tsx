import ExpertiseSection from "@/Components/Expertise/Index";
import FaqSection from "@/Components/Faq";
import Footer from "@/Components/Footer/Footer";
import HeroSection from "@/Components/Hero/Hero";
import RecruitmentServices from "@/Components/RecruitmentServices";
import ResultsSection from "@/Components/Results";
import TailoredRecruitment from "@/Components/TailoredRequirement";
import TestimonialSection from "@/Components/TeastimonialSection";
import WhatWeDo from "@/Components/WhatWeDo/Index";
import WhyPartnerSection from "@/Components/WhyPartnerSection";
import Insights from "../../Components/Insights";
interface HeroProps {
  title: string;
  description: string;
  action: string;
  imageUrl: string;
  buttonText: string;
}
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
const heroDetails: HeroProps = {
  title: "Recruitment Services Built for Impact",
  description:
    "Find and secure the right talent with recruitment services built around your business goals.",
  action: "Begin your success story",
  imageUrl: "/Hero.jpg",
  buttonText: "Begin your success story",
};

const resultDetails: CardProps = {
  cardDetails: [
    {
      score: "98%",
      title: "Consistent outcomes on retained roles",
      description: "",
    },
    {
      score: "500+",
      title: "Client Retention Rate",
      description: "",
    },
    {
      score: "98%",
      title:
        "Trusted by CEOs, COOs, GMs and operational leaders across Australia",
      description: "",
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
export default function Home() {
  return (
    <div>
      <HeroSection {...heroDetails} />
      <WhatWeDo />
      <ExpertiseSection />
      <RecruitmentServices />
      <WhyPartnerSection
        CardList={ExpertList}
        title="How Henton Consulting Delivers Results"
        subTitle="At Henton, our recruitment success is built on three core foundations:"
      />
      <TailoredRecruitment />
      <ResultsSection CardProps={resultDetails} background=" #014225" />
      <TestimonialSection />
      <FaqSection />
      <Insights />
      <Footer />
    </div>
  );
}
