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
import { faqData, heroDetails, howWeDeliverRecruitmentData, networkData, resultSectionData, specialistExpertiseData, testimonialData, whatWeDoData, whyPartnerSectionData } from "@/data/propertyRecruitmentData";

export default function propertyRecruitmentPage() {
  return (
    <div>
      <HeroSection {...heroDetails} />
      <WhatWeDoSection {...whatWeDoData}/>
      <SpecialistExpertise {...specialistExpertiseData}/>
      <OurNetworkSection {...networkData}/>
      <HowWeRecruit {...howWeDeliverRecruitmentData} />
      <WhyPartnerSection {...whyPartnerSectionData}/>
      <ResultsSection {...resultSectionData}/>
      <TestimonialSection {...testimonialData}/>
      <FaqSection faqData={faqData} />
      <Insights />
    </div>
  );
}
