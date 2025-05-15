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
  resultSectionData,
  testimonialData,
  faqData,
  expertiseData,
  whatWeDoData,
} from "@/data/recruitmentData";

export default function Recruitment() {
  return (
    <div>
      <HeroSection {...heroDetails} />
      <WhatWeDo {...whatWeDoData} />
      <ExpertiseSection {...expertiseData}/>
      <GrowthService {...growthServiceData} />
      <WhyPartnerSection {...whyPartnerData} />
      <GenericProcessSection {...genericProcessData} />
      <ResultsSection {...resultSectionData} />
      <TestimonialSection {...testimonialData} />
      <FaqSection faqData={faqData} />
      <Insights />
    </div>
  );
}
