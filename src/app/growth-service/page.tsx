"use client";
import HeroSection from "@/Components/Hero/Hero";
import React from "react";
import TestimonialSection from "@/Components/TeastimonialSection";
import FaqSection from "@/Components/Faq";
import Insights from "@/Components/Insights";
import SolutionsSection from "@/Components/Advisory/SolutionSection";
import TrustedClients from "@/Components/Advisory/TrustedClients";
import StrategicAdvice from "@/Components/Advisory/StrategicAdvice";
import GrowthService from "@/Components/Advisory/GrowthService";

const faqData = [
  {
    question:
      "What Makes Your Permanent Recruitment Different From Other Agencies?",
    answer:
      "We don’t rely just on job ads. We use direct search, tap into passive candidate networks, and focus on long-term value — not just short-term placement. We use a 360 approach to sourcing.",
  },
  {
    question: "How Do You Ensure The Candidate Is The Right Long-Term Fit?",
    answer:
      "We take time to understand your team, culture, goals, and leadership style. Our shortlist only includes candidates who match on values, capability, and growth potential.",
  },
  {
    question: "Can You Help Us With Confidential Or Sensitive Roles?",
    answer:
      "Absolutely. We’ve managed hundreds of off-market searches for middle and senior leadership, restructure scenarios, and board-level hires.",
  },
  {
    question: "We’ve Had Problems With Retention. How Can You Help?",
    answer:
      "We design every brief to focus on fit, expectations, and growth alignment — and support post-placement success through regular check-ins. We can also help through our consulting and advisory services to work out where the retention issues are.",
  },
];

export default function HomePage() {
  return (
    <>
      <HeroSection
        imageUrl="/Hero2.png"
        title="Business Advisory for Growth, Change and Clarity"
        description="Commercial, action-oriented consulting when the next move matters most."
        buttonText="Begin your success story"
      />
      <StrategicAdvice />
      <TrustedClients
        layoutVariant="imageLeft"
        sectionBg="#ffffff"
        headingText="Work with the experts"
        headingColor="#132D46"
        headingDividerColor="#132D46"
        dividerHeight="1px"
        titleText="Trusted by Australia’s Mid‑Market Leaders"
        titleColor="#132D46"
        imageSrc="/explaningProjectPoint.jpg"
        imageAlt="Business meeting"
        imageBorderRadius={8}
        borderColor="#132D46"
        descriptionText="We advise executive teams, Boards, operational heads and people leaders across:"
        listItems={[
          "High‑growth, founder‑led and PE‑backed companies",
          "National and multi‑site service organisations",
          "Built environment, infrastructure and industrial businesses",
          "For‑purpose and government‑adjacent organisations",
          "Firms preparing for scale, transition or acquisition",
        ]}
        closingText="Our clients come to us when clarity matters — and theory isn’t enough."
        ctaText="Ready to Build What’s Next?"
        ctaColor="#132D46"
      />

      <SolutionsSection />
      <GrowthService
        heading1="GROWTH SERVICES"
        heading="Strategic Growth. Commercial Focus."
        subheading="Specialist services tailored to your sector, size and stage — with execution built in."
        paragraph="We deliver:"
        imageSrc="/womenPresenting.jpg"
        imageAlt="Planning Meeting"
        leftButtonText="Build Your Team"
        services={[
          {
            title: "Market Entry & Expansion Planning",
            description:
              "Support for entering new geographies, sectors or buyer segments with detailed market intelligence and structured go-to-market plans.",
          },
          {
            title: "Customer Segmentation & Targeting",
            description:
              "Analysis of your current client base and market opportunity to focus your resources on segments that convert and scale.",
          },
          {
            title: "Sales & Distribution Optimisation",
            description:
              "Assessment and improvement of your sales structure, channel strategy and partner relationships to improve margins and conversion.",
          },
          {
            title: "Strategic Partnerships & Alliances",
            description:
              "Identification and negotiation of external partnerships that extend your reach, unlock capability, or accelerate distribution.",
          },
          {
            title: "Product & Service Positioning",
            description:
              "Refinement of your offer, value proposition and brand messaging to ensure cut-through and customer fit in competitive markets.",
          },
        ]}
        ctaColor="#132D46"
      />
      <TrustedClients
        layoutVariant="imageCenter"
        sectionBg="#D4E1EF66"
        bgImage="/strategy.jpg"
        headingText="Where Strategy Demands Action"
        headingColor="#132D46"
        headingDividerColor="#132D46"
        dividerHeight="1px"
        titleText="We’re typically engaged when:"
        titleColor="#ffffff"
        imageSrc="/explaningProjectPoint.jpg"
        imageAlt="Business Discussion"
        imageBorderRadius={8}
        descriptionText="We’re typically engaged when:"
        listItems={[
          "A business is growing fast but structure hasn’t kept pace",
          "A founder or executive is stepping back, and a new leadership model is needed",
          "Headcount has grown without clarity on role definition or accountability",
          "M&A or investment activity is on the horizon and capability gaps must be addressed",
          "A restructure or realignment is necessary, but internal teams are too close to see clearly",
          "A project is failing — and no one is sure whether it’s a people, process or leadership issue",
        ]}
        closingText="Our clients come to us when clarity matters — and theory isn’t enough."
        ctaText="Ready to Build What’s Next?"
        ctaColor="#ffffff"
      />
      <TestimonialSection />
      <FaqSection faqData={faqData} />
      <Insights />
    </>
  );
}
