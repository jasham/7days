// pages/corporateRecruitmentPage.tsx
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
  corporateHeroDetails,
  corporateWhatWeDoData,
  corporateSpecialistExpertiseData,
  corporateNetworkData,
  corporateHowWeRecruitData,
  corporateWhyPartnerSectionData,
  corporateResultSectionData,
  corporateTestimonialData,
  corporateFaqData,
} from "@/data/corporateRecruitmentData";

export default function CorporateRecruitmentPage() {
  return (
    <div>
      <HeroSection {...corporateHeroDetails} />
      <WhatWeDoSection {...corporateWhatWeDoData} />
      <SpecialistExpertise {...corporateSpecialistExpertiseData} />
      <OurNetworkSection {...corporateNetworkData} />
      <HowWeRecruit {...corporateHowWeRecruitData} />
      <WhyPartnerSection {...corporateWhyPartnerSectionData} />
      <ResultsSection {...corporateResultSectionData} />
      <TestimonialSection {...corporateTestimonialData} />
      <FaqSection faqData={corporateFaqData} />
      <Insights />
    </div>
  );
}
