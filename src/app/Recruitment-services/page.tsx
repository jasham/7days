"use client";
import ExpertiseSection from "@/Components/Expertise/Index";
import FaqSection from "@/Components/Faq";
import HeroSection from "@/Components/Hero/Hero";
import ResultsSection from "@/Components/Results";
import GenericProcessSection, {
  Item,
  Step,
} from "@/Components/TailoredRequirement";
import TestimonialSection from "@/Components/TeastimonialSection";
import WhatWeDo from "@/Components/WhatWeDo/Index";
import WhyPartnerSection from "@/Components/WhyPartnerSection";
import Insights from "../../Components/Insights";
import GrowthService from "@/Components/Advisory/GrowthService";

interface HeroProps {
  title: string;
  description: string;
  action: string;
  imageUrl: string;
  buttonText: string;
}
interface CardItem {
  score: string;
  title: string;
  description?: string;
}
interface CardProps {
  cardDetails: CardItem[];
}
//why experts interface
interface CardData {
  title: string;
  description: string;
  icon: string;
}

const heroDetails: HeroProps = {
  title: "Recruitment Services Built for Impact",
  description:
    "Find and secure the right talent with recruitment services built around your business goals.",
  action: "Begin your success story",
  imageUrl: "/Hero.jpg",
  buttonText: "Begin your success story",
};

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

const partnerCards: CardData[] = [
  {
    icon: "/Precision.svg",
    title: "Precision Systems",
    description:
      "Every recruitment campaign follows a structured, proven methodology. From role briefing to shortlist delivery, we align talent acquisition tightly to your business outcomes, timelines and team dynamics.",
  },
  {
    icon: "/Network.svg",
    title: "Deep Market Networks",
    description:
      "We actively maintain relationships across technical, operational and executive talent pools — not just databases. Our networks give you access to passive candidates and industry leaders who aren’t available on the open market.",
  },
  {
    icon: "/Speicific.svg",
    title: "Strategic Process",
    description:
      "Every assignment is led by a senior advisor who understands your industry and growth stage. We don’t just fill vacancies — we build capability aligned to your future plans.",
  },
];

const approachSteps: Step[] = [
  {
    icon: "/Precision.svg",
    title: "Strategic Alignment",
    description:
      "Define role outcomes, leadership traits and team fit before search begins.",
  },
  {
    icon: "/Network.svg",
    title: "Direct Sourcing",
    description:
      "Activate passive candidates through targeted outreach and industry networks.",
  },
  {
    icon: "/Speicific.svg",
    title: "Rigorous Assessment",
    description:
      "Evaluate behavioural, leadership and technical capability through structured screening.",
  },
  {
    icon: "/Speicific.svg",
    title: "Cultural fit screening",
    description:
      "Align values, communication style and team dynamics via stakeholder-led referencing.",
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
    title: "Shortlists delivered with pace -",
    description: "never at the expense of quality",
  },
  {
    title: "Market insights and real-time availability",
    description: "",
  },
  {
    title: "Confidence in every hire",
    description: "",
  },
];
const faqData = [
  {
    question:
      "What Makes Your Permanent Recruitment Different From Other Agencies?",
    answer:
      "We Don’t Rely Just On Job Ads. We Use Direct Search, Tap Into Passive Candidate Networks, And Focus On Long-Term Value — Not Just Short-Term Placement. We Use A 360 Approach To Sourcing.",
  },
  {
    question: "How Do You Ensure The Candidate Is The Right Long-Term Fit?",
    answer:
      "We Take Time To Understand Your Team, Culture, Goals And Leadership Style. Our Shortlist Only Includes Candidates Who Match On Values, Capability And Growth Potential.",
  },
  {
    question: "Can You Help Us With Confidential Or Sensitive Roles?",
    answer:
      "Absolutely. We’ve Managed Hundreds Of Off-Market Searches For Middle And Senior Leadership, Restructure Scenarios And Board-Level Hires.",
  },
  {
    question: "We’ve Had Problems With Retention. How Can You Help?",
    answer:
      "We Design Every Brief To Focus On Fit, Expectations And Growth Alignment — And Support Post-Placement Success Through Regular Check-Ins. We Can Also Help Through Our Consulting And Advisory Services To Work Out Where The Retention Issues Are.",
  },
];
export default function Home() {
  return (
    <div>
      <HeroSection {...heroDetails} />
      <WhatWeDo />
      <ExpertiseSection />
      <GrowthService
        heading1="Recruitment Services"
        heading="Tailored Recruitment Processes"
        subheading="At Henton, we deliver three core recruitment solutions — each aligned to your operational needs, timelines and long-term growth."
        paragraph="We deliver:"
        imageSrc="/womenPresenting.jpg"
        imageAlt="Planning Meeting"
        leftButtonText="Build Your Team"
        services={[
          {
            title: "Permanent Recruitment",
            description:
              "Secure long-term employees who integrate into your culture, build capability, and drive business performance over time. We focus on hiring professionals who don’t just fill a role — they strengthen your team.",
          },
          {
            title: "Contract Recruitment",
            description:
              "Access flexible, project-ready talent to manage fluctuations, support critical projects or cover peak periods. Our contract recruitment process ensures fast mobilisation without compromising quality.",
          },
          {
            title: "Executive Search",
            description:
              "Identify and secure the leaders who will define your organisation’s future. Our executive search process is discreet, data-led and aligned with your strategic direction.",
          },
        ]}
        ctaColor="#132D46"
        isBackground={true}
        isButton={true}
      />
      <WhyPartnerSection
        headingText="WORK WITH THE EXPERTS"
        headingColor="#132D46"
        dividerColor="#132D46"
        dividerHeight="1px"
        title="How Henton Consulting Delivers Results"
        subTitle="At Henton, our recruitment success is built on three core foundations:"
        cards={partnerCards}
        buttonText="Ready to Build What’s Next?"
        buttonColor="#132D46"
      />
      <GenericProcessSection
        backgroundImage="/advisory.jpg"
        heading="Tailored Recruitment Processes"
        intro={[
          {
            description: "We combine search precision with business fluency.",
          },
          {
            description: "Our process includes:",
          },
        ]}
        steps={approachSteps}
        itemsHeading="Our work is:"
        items={workPoints}
        isHeadingLeft={true}
        deliverables={deliverables}
      />
      <ResultsSection
        backgroundColor="#014225" // fallback if image fails
        headingText="Result"
        subheadingText="Measured by Results. Chosen for Impact."
        footerText="When expertise, trust, and speed come together, growth isn’t a goal — it’s the outcome."
        buttonText="Read to Build What’s Next?"
        cardProps={resultDetails}
        onButtonClick={() =>
          console.log("Redirect to Read to Build What’s Next?")
        }
        bottomHeading=""
        topHeading=""
        background=""
      />
      {/* <ResultsSection CardProps={resultDetails} background=" #014225" /> */}
      <TestimonialSection />
      <FaqSection faqData={faqData} />
      <Insights />
    </div>
  );
}
