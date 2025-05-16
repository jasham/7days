// pages/facilitiesManagementRecruitmentPage.tsx
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
  facilitiesManagementHeroDetails,
  facilitiesManagementWhatWeDoData,
  facilitiesManagementSpecialistExpertiseData,
  facilitiesManagementNetworkData,
  facilitiesManagementHowWeRecruitData,
  facilitiesManagementWhyPartnerSectionData,
  facilitiesManagementResultSectionData,
  facilitiesManagementFaqData,
  facilitiesManagementTestimonialData,
} from "@/data/facilitiesManagementData";

export default function FacilitiesManagementRecruitmentPage() {
  return (
    <div>
      <HeroSection {...facilitiesManagementHeroDetails} />
      <WhatWeDoSection {...facilitiesManagementWhatWeDoData} />
      <SpecialistExpertise {...facilitiesManagementSpecialistExpertiseData} />
      <OurNetworkSection {...facilitiesManagementNetworkData} />
      <HowWeRecruit {...facilitiesManagementHowWeRecruitData} />
      <WhyPartnerSection {...facilitiesManagementWhyPartnerSectionData} />
      <ResultsSection {...facilitiesManagementResultSectionData} />
      <TestimonialSection {...facilitiesManagementTestimonialData}/>
      <FaqSection faqData={facilitiesManagementFaqData} />
      <Insights />
    </div>
  );
}
