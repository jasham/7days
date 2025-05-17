// pages/governmentRecruitmentPage.tsx
"use client";

import FaqSection from "@/Components/Faq";
import HeroSection from "@/Components/Hero/Hero";
import HowWeRecruit from "@/Components/HowWeRecruit";
import Insights from "@/Components/Insights/index";
import OurNetworkSection from "@/Components/Network";
import ResultsSection from "@/Components/Results";
import SpecialistExpertise from "@/Components/SpecialExpertise";
import TestimonialSection from "@/Components/TeastimonialSection";
import WhatWeDoSection from "@/Components/WhatWeDo/Index";
import WhyPartnerSection from "@/Components/WhyPartnerSection";

import {
  governmentHeroDetails,
  governmentWhatWeDoData,
  governmentSpecialistExpertiseData,
  governmentNetworkData,
  governmentHowWeRecruitData,
  governmentWhyPartnerSectionData,
  governmentResultSectionData,
  governmentTestimonialData,
  governmentFaqData,
} from "@/data/governmentRecruitmentData";

export default function GovernmentRecruitmentPage() {
  return (
    <div>
      <HeroSection {...governmentHeroDetails} />
      <WhatWeDoSection {...governmentWhatWeDoData} />
      <SpecialistExpertise {...governmentSpecialistExpertiseData} />
      <OurNetworkSection {...governmentNetworkData} />
      <HowWeRecruit {...governmentHowWeRecruitData} />
      <WhyPartnerSection {...governmentWhyPartnerSectionData} />
      <ResultsSection {...governmentResultSectionData} />
      <TestimonialSection {...governmentTestimonialData} />
      <FaqSection faqData={governmentFaqData} />
      <Insights />
    </div>
  );
}
