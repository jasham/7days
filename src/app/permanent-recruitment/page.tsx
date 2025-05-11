"use client";
import GrowthService from "@/Components/Advisory/GrowthService";
import TrustedClients from "@/Components/Advisory/TrustedClients";
import FaqSection from "@/Components/Faq";
import HeroSection from "@/Components/Hero/Hero";
import Insights from "@/Components/Insights";
import ResultsSection from "@/Components/Results";
import SpecialistExpertise from "@/Components/SpecialistExpertise";
import TestimonialSection from "@/Components/TeastimonialSection";
import WhatWeDo from "@/Components/WhatWeDo/index2";
import React from "react";

interface CardItem {
  score: string;
  title: string;
  description?: string;
}
interface CardProps {
  cardDetails: CardItem[];
}

const resultDetails: CardProps = {
  cardDetails: [
    {
      score: "98%",
      title: "",
      description: "Consistent outcomes on retained roles",
    },
    {
      score: "500+",
      title: "",
      description: "Client Retention Rate",
    },
    {
      score: "98%",
      title: "",
      description:
        "Trusted by CEOs, COOs, GMs and operational leaders across Australia",
    },
  ],
};

const PermanentRecruitmentPage: React.FC = () => {
  return (
    <>
      <HeroSection
        imageUrl="/Hero3.png"
        title="Permanent Recruitment Built for Long-Term Success"
        description="Hire talent who strengthen your team, align to your strategy, and stay the course."
        buttonText="Begin your success story"
      />
      <WhatWeDo />
      <SpecialistExpertise />
      <TrustedClients
        layoutVariant="imageLeft"
        sectionBg="#ffffff"
        headingText="Work with the experts"
        headingColor="#132D46"
        headingDividerColor="#132D46"
        dividerHeight="1px"
        titleText="Our Network Advantage"
        titleColor="#132D46"
        imageSrc="/map.png"
        imageAlt="Business meeting"
        imageBorderRadius={8}
        borderColor="#132D46"
        titleText2="Unlike generalist recruiters, Henton operates inside industry ecosystems. We maintain deep sector connections across:"
        descriptionText=""
        listItems={[
          "Construction Project Directors and Managers",
          "Property Development Executives",
          "Engineering Specialists (Civil, Mechanical, Electrical)",
          "Facilities and Asset Managers",
          "Resources Industry Leadership",
          "Renewable Energy Project Teams",
          "NFP and Public Sector Operations Executives",
        ]}
        closingText="Our ability to activate trusted networks gives you an edge, bringing candidates to the table who would never respond to traditional ads."
        ctaText="Ready to Build What’s Next?"
        ctaColor="#132D46"
      />
      <GrowthService
        heading1="PERMANENT RECRUITMENT SERVICES"
        heading="How we deliver permanent recruitment"
        subheading="Permanent hiring demands precision and our system delivers it."
        paragraph="Every search includes:"
        imageSrc="/womenPresenting.jpg"
        imageAlt="Planning Meeting"
        leftButtonText="Build Your Team"
        services={[
          {
            title: "Strategic Role Alignment",
            description:
              "We lead detailed calibration sessions with hiring managers and operational leaders to align the role to your growth strategy, not just a position description.",
          },
          {
            title: "Market Mapping and Talent Intelligence",
            description:
              "We map the active and passive market, leveraging proprietary databases, headhunting techniques, and industry networks across Australia’s major and regional markets.",
          },
          {
            title: "Direct Search and Talent Activation",
            description:
              "We target high-performing passive candidates and present opportunities that align to their personal growth and professional goals.",
          },
          {
            title: "Values-Based Assessment",
            description:
              "We assess candidates against behavioural, cultural and leadership alignment metrics — not just skills and experience.",
          },
          {
            title: "Focused Delivery",
            description:
              "We don’t create shortlists, we present only the best candidate in 7–10 business days, complete with summary profile, capability analysis and leadership fit scoring.",
          },
        ]}
        ctaColor="#132D46"
        isBackground={true}
        isButton={false}
      />
      <ResultsSection
        backgroundImage="/resultDiscussion.jpg"
        backgroundColor="#014225" // fallback if image fails
        headingText="Our Track Record"
        subheadingText="Data That Demonstrates Impact"
        footerText="Behind every number is a team, a mission, and meaningful change."
        buttonText="See Case Studies"
        cardProps={resultDetails}
        onButtonClick={() => console.log("Redirect to case studies")}
      />
      <TestimonialSection />
      <FaqSection />
      <Insights />
    </>
  );
};

export default PermanentRecruitmentPage;
