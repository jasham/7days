// pages/notForProfitRecruitmentPage.tsx
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
  notForProfitHeroDetails,
  notForProfitWhatWeDoData,
  notForProfitSpecialistExpertiseData,
  notForProfitNetworkData,
  notForProfitHowWeRecruitData,
  notForProfitWhyPartnerSectionData,
  notForProfitResultSectionData,
  notForProfitTestimonialData,
  notForProfitFaqData,
} from "@/data/notForProfitRecruitmentData";

export default function NotForProfitRecruitmentPage() {
  return (
    <div>
      <HeroSection {...notForProfitHeroDetails} />
      <WhatWeDoSection {...notForProfitWhatWeDoData} />
      <SpecialistExpertise {...notForProfitSpecialistExpertiseData} />
      <OurNetworkSection {...notForProfitNetworkData} />
      <HowWeRecruit {...notForProfitHowWeRecruitData} />
      <WhyPartnerSection {...notForProfitWhyPartnerSectionData} />
      <ResultsSection {...notForProfitResultSectionData} />
      <TestimonialSection {...notForProfitTestimonialData} />
      <FaqSection faqData={notForProfitFaqData} />
      <Insights />
    </div>
  );
}
