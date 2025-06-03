"use client";
import StrategicAdvice from "@/Components/Advisory/StrategicAdvice";
import FaqSection from "@/Components/Faq";
import HeroSection from "@/Components/Hero/Hero";
import ImpactSection from "@/Components/Impact/ImpactSection";
import Insights from "@/Components/Insights/index";
import TestimonialSection from "@/Components/TeastimonialSection";
import {
  caseStudyFaq,
  heroDetails,
  impactSectionData,
  strategicAdviceData,
  testimonialData,
} from "@/data/caseStudiesData";

export default function caseStudiesPage() {
  return (
    <div>
      <HeroSection {...heroDetails} />
      <StrategicAdvice {...strategicAdviceData} />
      <ImpactSection {...impactSectionData} />
      <TestimonialSection {...testimonialData} />
      <FaqSection faqData={caseStudyFaq} />
      <Insights />
    </div>
  );
}
