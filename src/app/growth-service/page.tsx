"use client";
import HeroSection from "@/Components/Hero/Hero";
import React from "react";
import TestimonialSection from "@/Components/TeastimonialSection";
import FaqSection from "@/Components/Faq";
import Insights from "@/Components/Insights";;
import TrustedClients from "@/Components/Advisory/TrustedClients";
import StrategicAdvice from "@/Components/Advisory/StrategicAdvice";
import GrowthService from "@/Components/Advisory/GrowthService";
import {
  advisoryFaq,
  growthServiceData,
  heroDetails,
  solutionsSectionData,
  strategicAdviceData,
  testimonialData,
  trustedClientsBottom,
  trustedClientsTop,
} from "@/data/growthServiceData";
import SolutionsSection from "@/Components/Advisory/SolutionSection";

export default function HomePage() {
  return (
    <>
      <HeroSection {...heroDetails} />
      <StrategicAdvice {...strategicAdviceData} />
      <TrustedClients {...trustedClientsTop} />
      <SolutionsSection {...solutionsSectionData} />
      <GrowthService {...growthServiceData} />
      <TrustedClients {...trustedClientsBottom} />
      <TestimonialSection {...testimonialData} />
      <FaqSection faqData={advisoryFaq} />
      <Insights />
    </>
  );
}
