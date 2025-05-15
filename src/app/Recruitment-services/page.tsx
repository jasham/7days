'use client';

import HeroSection from "@/Components/Hero/Hero";
import WhatWeDo from "@/Components/WhatWeDo/Index";
import ExpertiseSection from "@/Components/Expertise/Index";
import GrowthService from "@/Components/Advisory/GrowthService";
import WhyPartnerSection from "@/Components/WhyPartnerSection";
import GenericProcessSection from "@/Components/TailoredRequirement";
import ResultsSection from "@/Components/Results";
import TestimonialSection from "@/Components/TeastimonialSection";
import FaqSection from "@/Components/Faq";
import Insights from "@/Components/Insights";

import {
  heroDetails,
  growthServiceData,
  whyPartnerData,
  genericProcessData,
  resultsSectionData,
  testimonialData,
  faqData,
  expertiseData,
} from "@/data/recruitmentData";

export default function Recruitment() {
  return (
    <div>
      <HeroSection {...heroDetails} />
      <WhatWeDo />
      <ExpertiseSection {...expertiseData}/>
      <GrowthService {...growthServiceData} />
      <WhyPartnerSection {...whyPartnerData} />
      <GenericProcessSection {...genericProcessData} />
      <ResultsSection {...resultsSectionData} />
      <TestimonialSection {...testimonialData} />
      <FaqSection faqData={faqData} />
      <Insights />
    </div>
  );
}
