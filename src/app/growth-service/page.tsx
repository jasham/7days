"use client";
import HeroSection from "@/Components/Hero/Hero";
import React from "react";
import TestimonialSection from "@/Components/TeastimonialSection";
import FaqSection from "@/Components/Faq";
import Insights from "@/Components/Insights";;
import TrustedClients from "@/Components/Advisory/TrustedClients";
import StrategicAdvice from "@/Components/Advisory/StrategicAdvice";
import GrowthService from "@/Components/Advisory/GrowthService";
import GrowthSection from "@/Components/Advisory/GrowthSection";

const faqData = [
  {
    question:
      "How does Henton identify growth markets or segments?",
    answer:
      "We conduct detailed market analysis, customer segmentation and competitive mapping to uncover viable and high-impact opportunities.",
  },
  {
    question: "Can you support our team through execution?",
    answer:
      "Yes. We support delivery through hands-on engagement, internal team enablement or by bringing in trusted partners across marketing, sales or operations.",
  },
  {
    question: "How do you ensure strategies are commercially viable?",
    answer:
      "We build growth plans around your operational reality, capacity and ROI thresholds — not generic benchmarks.",
  },
  {
    question: "Is this a one-off service or ongoing support?",
    answer:
      "We offer both. Some clients engage us for project-specific strategy, others retain us across key growth phases for ongoing momentum.",
  },
];

export default function HomePage() {
  return (
    <>
      <HeroSection
        imageUrl="/growthServiceHero.jpg"
        title="Growth Strategy Services That Drive Results"
        description="We help businesses move from opportunity to execution, with strategies built for market traction, not whiteboards."
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
        titleText="Trusted by Businesses Ready to Expand"
        titleColor="#132D46"
        imageSrc="/explaningProjectPoint.jpg"
        imageAlt="Business meeting"
        imageBorderRadius={8}
        borderColor="#132D46"
        descriptionText="We work with organisations that need growth strategies grounded in commercial reality, not generic playbooks.:"
        listItems={[
          "Civil, engineering and infrastructure firms scaling into new geographies or delivery models",
          "National and multi‑site service organisations",
          "Construction and property businesses preparing for growth, M&A or market repositioning",
          "Resources and renewables companies entering new project phases or transitioning to direct delivery",
          "Government-aligned and service organisations expanding into new regions or funded programs",
          "Corporate services and operational businesses needing tighter sales and market alignment",
        ]}
        closingText="From targeted expansion to full commercial repositioning — we help sector-specific businesses grow with strategy, structure and speed."
        ctaText="Ready to Build What’s Next?"
        ctaColor="#132D46"
      />

      <GrowthSection />
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
        headingText="RESULTS"
        headingColor="#132D46"
        headingDividerColor="#132D46"
        dividerHeight="1px"
        titleText="Why Businesses Choose Henton"
        titleColor="#ffffff"
        imageSrc="/explaningProjectPoint.jpg"
        imageAlt="Business Discussion"
        imageBorderRadius={8}
        descriptionText=""
        listItems={[
          "We combine strategic thinking with real-world commercial execution",
          "We align market potential with internal capability and operational pressure",
          "We work fast, stay focused, and get results that move the needle",
          "We integrate with recruitment and advisory to turn strategy into delivery",
        ]}
        closingText="Growth shouldn’t be abstract. It should be measurable, sustainable and commercially justified."
        ctaText="Ready to Build What’s Next?"
        ctaColor="#ffffff"
      />
      <TestimonialSection
        heading="What our clients say"
        title="Reviews"
        description="Here’s what our clients have to say about working with us. Real experiences, real feedback."
        quote="I’ve had the pleasure of working with Guy Ingleby for 10 years."
        detail="I can confidently say they are one of the most effective and professional recruiters I’ve partnered with. Their deep understanding of our business, industry and commitment to finding the right cultural and technical fit have made a real impact on our team."
        author="Chris Elliott, Director"
        company="Kerfoot Electrics"
      />
      <FaqSection faqData={faqData} />
      <Insights />
    </>
  );
}
