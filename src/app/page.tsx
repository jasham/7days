import CaseStudyHighlight from "@/Components/CaseStudy";
import ExpertiseSection from "@/Components/Expertise/Index";
import Footer from "@/Components/Footer/Footer";
import HeroSection from "@/Components/Hero/Hero";
import JobSearch from "@/Components/JobSearch";
import StrategicPartnerships from "@/Components/Partnership";
import ResultsSection from "@/Components/Results";
import ServicesSection from "@/Components/ServicesSection/Index";
import TestimonialSection from "@/Components/TeastimonialSection";
import TrustedBySection from "@/Components/TrustedBySection";
import WhyPartnerSection from "@/Components/WhyPartnerSection";
import Insights from "../Components/Insights";
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
  title: "Where Vision Meets Execution",
  description:
    "Propel your business forward with specialised recruitment and business consulting tailored to your industry needs.",
  buttonText: "Begin your success story",
  imageUrl: "/Hero.jpg",
};
//result section data
const resultDetails: CardProps = {
  cardDetails: [
    {
      score: "20+",
      title: "Years of Industry Expertise",
      description:
        "Backed by over two decades of recruitment and consulting experience across Property, Construction, Engineering, and Corporate sectors.",
    },
    {
      score: "95%",
      title: "Client Retention Rate",
      description:
        "Our clients trust us to deliver — and 95% return to partner with Henton again for future recruitment and strategic needs.",
    },
    {
      score: "98%",
      title: "of Roles Filled Within 30 Days",
      description:
        "Our efficient, targeted recruitment process ensures critical roles are placed faster — without compromising on quality.",
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
      <JobSearch />
      <TrustedBySection />
      <CaseStudyHighlight />
      <ServicesSection />
      <StrategicPartnerships />
      <WhyPartnerSection
        CardList={ExpertList}
        title="How Henton Consulting Delivers Results"
        subTitle="At Henton, our recruitment success is built on three core foundations:"
      />
      <TestimonialSection />
      <ResultsSection CardProps={resultDetails} background=" #132D46" />
      <ExpertiseSection />
      <Insights />
      <Footer />
    </div>
  );
}
