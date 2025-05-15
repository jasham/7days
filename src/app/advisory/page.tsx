import HeroSection from "@/Components/Hero/Hero";
import React from "react";
import GenericProcessSection from "@/Components/TailoredRequirement";
import TestimonialSection from "@/Components/TeastimonialSection";
import FaqSection from "@/Components/Faq";
import Insights from "@/Components/Insights";
import SolutionsSection from "@/Components/Advisory/SolutionSection";
import TrustedClients from "@/Components/Advisory/TrustedClients";
import StrategicAdvice from "@/Components/Advisory/StrategicAdvice";
import { advisoryFaq, advisoryProcess, heroDetails, solutionsSectionData, strategicAdviceData, testimonialData, trustedClientsBottom, trustedClientsTop } from "@/data/advisoryData";

export default function HomePage() {
  return (
    <>
      <HeroSection {...heroDetails} />
      <StrategicAdvice {...strategicAdviceData} />
      <TrustedClients {...trustedClientsTop} />
      <SolutionsSection {...solutionsSectionData} />
      <GenericProcessSection {...advisoryProcess} />
      <TrustedClients {...trustedClientsBottom} />
      <TestimonialSection {...testimonialData} />
      <FaqSection faqData={advisoryFaq} />
      <Insights />
    </>
  );
}
