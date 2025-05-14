import HeroSection from "@/Components/Hero/Hero";
import React from "react";
import GenericProcessSection, {
  Item,
  Step,
} from "@/Components/TailoredRequirement";
import TestimonialSection from "@/Components/TeastimonialSection";
import FaqSection from "@/Components/Faq";
import Insights from "@/Components/Insights";
import SolutionsSection from "@/Components/Advisory/SolutionSection";
import TrustedClients from "@/Components/Advisory/TrustedClients";
import StrategicAdvice from "@/Components/Advisory/StrategicAdvice";

const approachSteps: Step[] = [
  {
    icon: "/Precision.svg",
    title: "Discovery",
    description:
      "We immerse in your business context, growth plans and known risks.",
  },
  {
    icon: "/Network.svg",
    title: "Diagnosis",
    description:
      "We assess your structure, leadership layers, roles, accountability and workforce alignment.",
  },
  {
    icon: "/Speicific.svg",
    title: "Advisory",
    description:
      "We provide clear, commercial guidance that addresses gaps, not just symptoms.",
  },
  {
    icon: "/Speicific.svg",
    title: "Delivery",
    description:
      "We help you act, via instant teams or seamless handover to Henton.",
  },
];

const deliverables: Item[] = [
  {
    title: "Shortlists delivered with pace – never at the expense of quality",
    description: "",
    icon: "/sortlist.svg",
  },
  {
    title: "Market insights and real-time availability",
    description: "",
    icon: "/marketing.svg",
  },
  {
    title: "Confidence in every hire",
    description: "",
    icon: "/confidence.svg",
  },
];

const workPoints: Item[] = [
  {
    title: "Evidence-based",
    description:
      "Informed by data, diagnostics and what’s really happening in your business.",
  },
  {
    title: "Commercially grounded",
    description:
      "Anchored to your revenue, cost, investment or scale priorities.",
  },
  {
    title: "Actionable",
    description: "Designed to turn into clear steps, not theoretical slides.",
  },
];

interface FaqItem {
  question: string;
  answer: string;
}

const faqData: FaqItem[] = [
  {
    question: "What industries do you work with?",
    answer:
      "We work across sectors including infrastructure, services, for-purpose, and growth-stage companies.",
  },
  {
    question: "What makes your advisory different?",
    answer:
      "Every engagement is led by a senior advisor with real-world leadership experience, focusing on practical change.",
  },
  {
    question: "How fast can you begin?",
    answer:
      "We can typically begin within a few days depending on the engagement scope.",
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
      <GenericProcessSection
        backgroundImage="/advisory.jpg"
        heading="Our Approach"
        intro={[
          {
            description:
              "Every engagement is led by a senior advisor with real-world leadership experience — not just a toolkit. We move fast, ask sharper questions, and focus on practical change.",
          },
          {
            description:
              "We move fast, ask sharper questions, and focus on practical change. ",
          },
        ]}
        steps={approachSteps}
        itemsHeading="Our work is:"
        items={workPoints}
        isHeadingLeft={false}
        deliverables={deliverables}
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
