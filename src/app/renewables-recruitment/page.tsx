// pages/renewablesRecruitmentPage.tsx
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
  renewablesHeroDetails,
  renewablesWhatWeDoData,
  renewablesSpecialistExpertiseData,
  renewablesNetworkData,
  renewablesHowWeRecruitData,
  renewablesWhyPartnerSectionData,
  renewablesResultSectionData,
  renewablesTestimonialData,
  renewablesFaqData,
} from "@/data/renewablesRecruitmentData";

export default function RenewablesRecruitmentPage() {
  return (
    <div>
      <HeroSection {...renewablesHeroDetails} />
      <WhatWeDoSection {...renewablesWhatWeDoData} />
      <SpecialistExpertise {...renewablesSpecialistExpertiseData} />
      <OurNetworkSection {...renewablesNetworkData} />
      <HowWeRecruit {...renewablesHowWeRecruitData} />
      <WhyPartnerSection {...renewablesWhyPartnerSectionData} />
      <ResultsSection {...renewablesResultSectionData} />
      <TestimonialSection {...renewablesTestimonialData} />
      <FaqSection faqData={renewablesFaqData} />
      <Insights />
    </div>
  );
}
