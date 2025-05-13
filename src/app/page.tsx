"use client";

import CaseStudyHighlight from "@/Components/CaseStudy";
import ExpertiseSection from "@/Components/Expertise/Index";
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
  icon: string;
}
interface CardList {
  myCards: CardData[];
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

const partnerCards: CardData[] = [
  {
    icon: "/Expert.svg",
    title: "Expertise that Delivers",
    description: "Our team brings industry-specific knowledge and hands-on experience.",
  },
  {
    icon: "/StretegyIcon.svg",
    title: "Strategy Meets Execution",
    description: "We align business goals with actionable recruitment plans.",
  },
  {
    icon: "/PartnerShip.svg",
    title: "True Partnership",
    description: "Long-term relationships built on trust, impact, and delivery.",
  },
];

export default function Home() {
  return (
    <div>
      <HeroSection {...heroDetails} />
      <JobSearch />
      <TrustedBySection />
      <CaseStudyHighlight
        imageSrc="/caseStudy.jpg"
        imageAlt="Construction worker"
        title="How Strategic Recruitment & Consulting led to 34% Growth in 6 months"
        description="Our approach improved operational efficiency by 30% for a leading head contractor."
        ctaText="See how we deliver results"
        onClick={() => console.log("Clicked")}
        isReverse={false}
      />

      <ServicesSection />
      <StrategicPartnerships />
      <WhyPartnerSection
      headingText="WORK WITH THE EXPERTS"
      headingColor="#132D46"
      dividerColor="#132D46"
      dividerHeight="1px"
      title="Why Partner With Henton Consulting?"
      subTitle="Expertise. Strategy. Results. Helping you build stronger teams and lasting success."
      cards={partnerCards}
      buttonText="Ready to Build What’s Next?"
      buttonColor="#132D46"
    />
      <TestimonialSection />
      <ResultsSection
        backgroundColor="#132D46" // fallback if image fails
        headingText="Result"
        subheadingText="Measured by Results. Chosen for Impact."
        footerText="When expertise, trust, and speed come together, growth isn’t a goal — it’s the outcome."
        buttonText="Read to Build What’s Next?"
        cardProps={resultDetails}
        onButtonClick={() => console.log("Redirect to Read to Build What’s Next?")}
      />
      <ExpertiseSection />
      <CaseStudyHighlight
        heading="Case Studies"
        imageSrc="/caseStudy2.jpg"
        imageAlt="Construction worker"
        title="Setting a New Benchmark for Talent Acquisition"
        description="When Transdev NSW needed to fill critical roles, they chose Henton Consulting for our reputation in delivering exceptional candidates and a seamless recruitment process."
        ctaText="See How We Deliver Results"
        onClick={() => console.log("Clicked")}
        isReverse={true}
        isBackground={true}
      />
      <Insights />
    </div>
  );
}
