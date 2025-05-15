"use client";
import FaqSection from "@/Components/Faq";
import HeroSection from "@/Components/Hero/Hero";
import HowWeDeliverRecruitment from "@/Components/HowWeDeliver/Index";
import Insights from "@/Components/Insights/index";
import OurNetworkSection from "@/Components/Network";
import SpecialistExpertise from "@/Components/SpecialExpertise";
import TestimonialSection from "@/Components/TeastimonialSection";
import WhatWeDo from "@/Components/WhatWeDo/index2";
// herosection interface
interface HeroProps {
  title: string;
  description: string;
  buttonText: string;
  imageUrl: string;
}

//hero section data
const heroDetails: HeroProps = {
  title: "International Recruitment That Meets Workforce Demand",
  description:
    "We help Australian organisations find skilled talent where local supply can’t keep up.",
  buttonText: "Begin your success story",
  imageUrl: "/internationalHero.jpg",
};
const faqData = [
  {
    question: "Do you only recruit in specific countries?",
    answer:
      "We work across multiple source countries depending on your sector, visa requirements and candidate availability. All campaigns are tailored to your needs and eligibility.",
  },
  {
    question: "Do you support visa and relocation logistics?",
    answer:
      "Yes. We manage or coordinate visa pathways, relocation logistics and arrival planning — including compliance, onboarding and cultural fit.",
  },
  {
    question: "Can you run a high-volume or phased recruitment campaign?",
    answer:
      "Absolutely. We deliver both single-hire and high-volume international sourcing projects, aligned to your budget, delivery window and role requirements.",
  },
  {
    question: "Do you screen for cultural alignment and long-term retention?",
    answer:
      "We Design Every Brief To Focus On Fit, Expectations And Growth Alignment — And Support Post-Placement Success Through Regular Check-Ins. We Can Also Help Through Our Consulting And Advisory Services To Work Out Where The Retention Issues Are.",
  },
  {
    question: "Are these candidates ready to start quickly?",
    answer:
      "We Design Every Brief To Focus On Fit, Expectations And Growth Alignment — And Support Post-Placement Success Through Regular Check-Ins. We Can Also Help Through Our Consulting And Advisory Services To Work Out Where The Retention Issues Are.",
  },
];

const internationalFeatures = [
  {
    title: "Market mapping across eligible source countries",
    description:
      "We identify where talent exists, which visa pathways apply, and which markets offer the best supply for your roles.",
  },
  {
    title: "Advertising, headhunting and pre-screening",
    description:
      "We combine targeted outreach and strategic advertising with sector-specific screening to identify the right candidates early.",
  },
  {
    title: "Visa pathway planning and relocation coordination",
    description:
      "We support eligible visa stream selection and coordinate logistics including documentation, timelines and onboarding prep.",
  },
  {
    title: "Cultural alignment and role-readiness assessment",
    description:
      "Candidates are screened for adaptability, values alignment and delivery mindset, not just qualifications.",
  },
];

const listItems = [
  "Employers facing local workforce shortages",
  "National and regional businesses seeking skilled international talent",
  "Organisations expanding into new markets or locations",
  "Recruitment teams needing campaign support or relocation guidance",
  "Project-based or volume hiring initiatives requiring overseas search",
];

export default function permanentRecruitmentPage() {
  return (
    <div>
      <HeroSection {...heroDetails} />
      <WhatWeDo
        title="When talent is global, your recruitment needs to be smarter."
        description1="Accessing top talent shouldn’t stop at the border. At Henton Consulting, we help organisations in Australia connect with exceptional international professionals, individuals who bring rare capabilities, global outlooks, and proven impact."
        description2="We deliver hard-to-source candidates from key global markets, with a focus on leadership, transformation, technical, and specialist roles across sectors."
        description3=""
        subHeading="Who we work with:"
        subDescription="The world’s best don’t always live next door. We work with:"
        buttonText="Start the conversation"
        listItems={listItems}
      />
      <SpecialistExpertise
        title="Global Reach. Local Results. Specialist Expertise."
        description="Targeted international recruitment aligned to workforce shortages, sector needs and long-term success in the Australian market."
      />
      <OurNetworkSection
        mt={-4}
        mb={2}
        internationalRecruitment={true}
        heading="Our Global Network. Your Advantage."
        bottomText="Our ability to activate trusted networks gives you an edge, bringing candidates to the table who would never respond to traditional ads."
        description="Unlike generalist recruiters, Henton operates inside industry ecosystems. We maintain deep sector connections across:"
        image="/InternationalNetwork.svg"
      />
      <HowWeDeliverRecruitment
        headingText="Permanent Recruitment Services"
        mainTitle="Borderless talent. Sharp results."
        subTitle="We build every campaign to match your workforce needs, project timelines and regulatory obligations, from candidate sourcing to onboarding. Every international search includes:"
        image="/womenPresenting.jpg"
        buttonText="Build Your Team"
        features={internationalFeatures}
      />
      <TestimonialSection
        heading="What our clients say"
        title="Reviews"
        description="Here’s what our clients have to say about working with us. Real experiences, real feedback."
        quote="“Henton Consulting always provide quality candidates”"
        detail="They are extremely efficient with communication. I would highly recommend their services."
        author="Alicia Lawrence, HR Business Partner"
        company="Pomeroy Pacific"
      />
      <FaqSection faqData={faqData} />
      <Insights />
    </div>
  );
}
