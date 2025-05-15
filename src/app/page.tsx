"use client";

import HeroSection from "@/Components/Hero/Hero";
import JobSearch from "@/Components/JobSearch";
import TrustedBySection from "@/Components/TrustedBySection";
import CaseStudyHighlight from "@/Components/CaseStudy";
import ServicesSection from "@/Components/ServicesSection/Index";
import StrategicPartnerships from "@/Components/Partnership";
import WhyPartnerSection from "@/Components/WhyPartnerSection";
import TestimonialSection from "@/Components/TeastimonialSection";
import ResultsSection from "@/Components/Results";
import ExpertiseSection from "@/Components/Expertise/Index";
import Insights from "@/Components/Insights";

// importing data
import {
  heroDetails,
  caseStudy1Data,
  caseStudy2Data,
  whyPartnerSectionData,
  resultSectionData,
  jobSearchData,
  trustedByData,
  servicesSectionData,
  strategicPartnershipsData,
  testimonialData,
  expertiseData,
} from "@/data/homeData";

export default function Home() {
  return (
    <div>
      <HeroSection {...heroDetails} />
      <JobSearch {...jobSearchData} />
      <TrustedBySection {...trustedByData} />
      <CaseStudyHighlight {...caseStudy1Data} />
      <ServicesSection {...servicesSectionData} />
      <StrategicPartnerships {...strategicPartnershipsData} />
      <WhyPartnerSection {...whyPartnerSectionData} />
      <TestimonialSection {...testimonialData} />
      <ResultsSection {...resultSectionData} />
      <ExpertiseSection {...expertiseData} />
      <CaseStudyHighlight {...caseStudy2Data} />
      <Insights />
    </div>
  );
}
