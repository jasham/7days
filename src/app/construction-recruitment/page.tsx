// pages/constructionRecruitmentPage.tsx
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
  constructionHeroDetails,
  constructionWhatWeDoData,
  constructionSpecialistExpertiseData,
  constructionNetworkData,
  constructionHowWeRecruitData,
  constructionWhyPartnerSectionData,
  constructionResultSectionData,
  constructionTestimonialData,
  constructionFaqData,
} from "@/data/constructionRecruitmentData";

export default function ConstructionRecruitmentPage() {
  return (
    <div>
      <HeroSection {...constructionHeroDetails} />
      <WhatWeDoSection {...constructionWhatWeDoData} />
      <SpecialistExpertise {...constructionSpecialistExpertiseData} />
      <OurNetworkSection {...constructionNetworkData} />
      <HowWeRecruit {...constructionHowWeRecruitData} />
      <WhyPartnerSection {...constructionWhyPartnerSectionData} />
      <ResultsSection {...constructionResultSectionData} />
      <TestimonialSection {...constructionTestimonialData} />
      <FaqSection faqData={constructionFaqData} />
      <Insights />
    </div>
  );
}
