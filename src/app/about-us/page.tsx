"use client";

import CaseStudyHighlight from "@/Components/CaseStudy";
import FaqSection from "@/Components/Faq";
import HeroSection from "@/Components/Hero/Hero";
import Insights from "@/Components/Insights";
import OurFuture from "@/Components/OurFuture";
import OurJourney from "@/Components/OurJourney";
import TestimonialSection from "@/Components/TeastimonialSection";
import TimelinePage from "@/Components/TimelinePage";
import {
  heroDetails,
  aboutUsCaseStudyData,
  ourJourneyData,
  ourFutureData,
  testimonialData,
  aboutUsFaq,
  timelineData,
  introContent,
} from "@/data/aboutUsData";

export default function aboutUsPage() {
  return (
    <div>
      <HeroSection {...heroDetails} />
      <TimelinePage data={timelineData} content={introContent} />
      <OurJourney {...ourJourneyData} />
      <CaseStudyHighlight {...aboutUsCaseStudyData} />
      <OurFuture {...ourFutureData} />
      <TestimonialSection {...testimonialData} />
      <FaqSection faqData={aboutUsFaq} />
      <Insights />
    </div>
  );
}
