"use client";
import FaqSection from "@/Components/Faq";
import HeroSection from "@/Components/Hero/Hero";
import HowWeDeliverRecruitment from "@/Components/HowWeDeliver/Index";
import Insights from "@/Components/Insights/index";
import OurNetworkSection from "@/Components/Network";
import ResultsSection from "@/Components/Results";
import SpecialistExpertise from "@/Components/SpecialExpertise";
import TestimonialSection from "@/Components/TeastimonialSection";
import WhatWeDoSection from "@/Components/WhatWeDo/Index";
import { faqData, heroDetails, howWeDeliverData, networkData, resultSectionData, specialistExpertiseData, testimonialData, whatWeDoData } from "@/data/contractRecruitmentData";

export default function contractRecruitmentPage() {
  return (
    <div>
      <HeroSection {...heroDetails} />
      <WhatWeDoSection {...whatWeDoData}/>
      <SpecialistExpertise {...specialistExpertiseData}/>
      <OurNetworkSection {...networkData}/>
      <HowWeDeliverRecruitment {...howWeDeliverData}/>
      <ResultsSection {...resultSectionData}/>
      <TestimonialSection {...testimonialData}/>
      <FaqSection faqData={faqData} />
      <Insights />
    </div>
  );
}
