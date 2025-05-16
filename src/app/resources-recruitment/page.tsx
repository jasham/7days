// pages/resourceRecruitmentPage.tsx
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
  resourceHeroDetails,
  resourceWhatWeDoData,
  resourceSpecialistExpertiseData,
  resourceNetworkData,
  resourceHowWeRecruitData,
  resourceWhyPartnerSectionData,
  resourceResultSectionData,
  resourceTestimonialData,
  resourceFaqData,
} from "@/data/resourceRecruitmentData";

export default function ResourceRecruitmentPage() {
  return (
    <div>
      <HeroSection {...resourceHeroDetails} />
      <WhatWeDoSection {...resourceWhatWeDoData} />
      <SpecialistExpertise {...resourceSpecialistExpertiseData} />
      <OurNetworkSection {...resourceNetworkData} />
      <HowWeRecruit {...resourceHowWeRecruitData} />
      <WhyPartnerSection {...resourceWhyPartnerSectionData} />
      <ResultsSection {...resourceResultSectionData} />
      <TestimonialSection {...resourceTestimonialData} />
      <FaqSection faqData={resourceFaqData} />
      <Insights />
    </div>
  );
}