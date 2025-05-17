// pages/engineeringRecruitmentPage.tsx
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
  engineeringHeroDetails,
  engineeringWhatWeDoData,
  engineeringSpecialistExpertiseData,
  engineeringNetworkData,
  engineeringHowWeRecruitData,
  engineeringWhyPartnerSectionData,
  engineeringResultSectionData,
  engineeringFaqData,
  engineeringTestimonialData,
} from "@/data/engineeringRecruitmentData";

export default function EngineeringRecruitmentPage() {
  return (
    <div>
      <HeroSection {...engineeringHeroDetails} />
      <WhatWeDoSection {...engineeringWhatWeDoData} />
      <SpecialistExpertise {...engineeringSpecialistExpertiseData} />
      <OurNetworkSection {...engineeringNetworkData} />
      <HowWeRecruit {...engineeringHowWeRecruitData} />
      <WhyPartnerSection {...engineeringWhyPartnerSectionData} />
      <ResultsSection {...engineeringResultSectionData} />
      <TestimonialSection {...engineeringTestimonialData}/>
      <FaqSection faqData={engineeringFaqData} />
      <Insights />
    </div>
  );
}
