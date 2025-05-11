import FaqSection from "@/Components/Faq";
import HeroSection from "@/Components/Hero/Hero";
import HowWeRecruit from "@/Components/HowWeRecruit";
import Insights from "@/Components/Insights/index";
import OurNetworkSection from "@/Components/Network";
import ResultsSection from "@/Components/Results";
import SpecialistExpertise from "@/Components/SpecialExpertise";
import TestimonialSection from "@/Components/TeastimonialSection";
import WhatWeDo from "@/Components/WhatWeDo/Index";
import WhyPartnerSection from "@/Components/WhyPartnerSection";
// herosection interface
interface HeroProps {
  title: string;
  description: string;
  buttonText: string;
  imageUrl: string;
}
//result section interface
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
}
interface CardList {
  myCards: CardData[];
}

//hero section data
const heroDetails: HeroProps = {
  title: "Facilities Management Recruitment That Delivers",
  description:
    "From single assets to national portfolios, we place the professionals who keep buildings safe, compliant and running smoothly.",
  buttonText: "Begin your success story",
  imageUrl: "/management-hero.jpg",
};
//result section data
const resultDetails: CardProps = {
  cardDetails: [
    {
      score: "98%",
      title: "",
      description: "of hires are still with the business after 18 months",
    },
    {
      score: "100%",
      title: "",
      description: "of retained searches have been completed successfully",
    },
    {
      score: "85%",
      title: "",
      description: "of roles are filled from the first candidate presented",
    },
  ],
};
//why expert data
// const ExpertList: CardList = {
//   myCards: [
//     {
//       title: "Precision Systems",
//       description:
//         "Every recruitment campaign follows a structured, proven methodology. From role briefing to shortlist delivery, we align talent acquisition tightly to your business outcomes, timelines and team dynamics.",
//     },
//     {
//       title: "Deep Market Networks",
//       description:
//         "We actively maintain relationships across technical, operational and executive talent pools — not just databases. Our networks give you access to passive candidates and industry leaders who aren’t available on the open market.",
//     },
//     {
//       title: "Precision Systems",
//       description:
//         "Every assignment is led by a senior advisor who understands your industry and growth stage. We don’t just fill vacancies — we build capability aligned to your future plans.",
//     },
//   ],
// };
const ExpertList: CardList = {
  myCards: [
    {
      title:
        "We don’t send options, we send the one candidate who can do the job.",
      description: "",
    },
    {
      title: "We understand what’s commercially at stake in every hire.",
      description: "",
    },
    {
      title: "We show up with honesty, urgency, and results.",
      description: "",
    },
  ],
};
// faq data
const faqData = [
  {
    question: "Do You Recruit For Both Hard And Soft FM Roles?",
    answer:
      "Yes — we cover operations, essential services, compliance, contractor management and tenant-facing roles.",
  },
  {
    question: "Can You Help With Multi-Site Or Regional FM Needs?",
    answer:
      "Absolutely. We’ve placed FM talent in national portfolios, precinct developments and remote infrastructure sites.",
  },
  {
    question:
      "We’ve Been Burnt By Generalist Recruiters Who Didn’t Understand Our Sites. How Is Henton Different?",
    answer:
      "Our team includes FM recruitment specialists who understand the difference between managing a retail centre versus a healthcare facility. We tailor our approach based on your environment, compliance needs and service expectations, and we only put forward candidates who are ready to step in and deliver.",
  },
  {
    question: "Do You Recruit In Highly Regulated Environments?",
    answer:
      "Yes. We work extensively across healthcare, aged care, public sector and critical infrastructure.",
  },
  {
    question:
      "How Do You Assess Stakeholder Skills Alongside Compliance Capability?",
    answer:
      "We assess based on real-world delivery, tenant outcomes and operational complexity — not just job history.",
  },
];

export default function constructionRecruitmentPage() {
  return (
    <div>
      <HeroSection {...heroDetails} />
      <WhatWeDo
        cards={false}
        managementPage={true}
        heading="Well-run facilities don’t manage themselves, it starts with who you hire."
        description="We recruit across every layer of Facilities Management, from essential services compliance through to multi-site operational leadership./ Whether you need a hands-on Facilities Manager, a compliance lead, or a national portfolio head, we find people who protect your asset value, reduce risk and improve tenant experience./ Our candidates don’t just manage buildings. They manage pressure."
        subHeading="Trusted by Facility Owners, Operators and Advisors"
        description2="We work with organisations where facilities performance directly affects reputation, cost and continuity. We recruit FM professionals for: Whether you're managing a flagship site, a compliance-heavy portfolio or a network of ageing assets, we’ll find the right fit, fast."
        description3="Whether you're managing a flagship site, a compliance-heavy portfolio or a network of ageing assets, we’ll find the right fit, fast."
      />
      <SpecialistExpertise
        title="Engineered for Results. Backed by Performance."
        description="Specialist recruitment across civil, structural, and services roles, aligned to project scope, stakeholder pressure, and delivery outcomes."
      />
      <OurNetworkSection
        image="/facilities-management.jpg"
        managementPage={true}
        heading="Operational control./ Compliance built in."
        description="We don’t source from job boards. We chase performance across real buildings, budgets and audit frameworks. We recruit across:"
      />
      <HowWeRecruit
        managementPage={true}
        title="How we recruit and/ why it works."
        subTitle="Great Facilities Management hires don’t just maintain standards, they hold everything together."
        description="We go beyond titles and tenure. We track performance in live environments, where every system fault, tenant complaint or failed audit matters. Every search includes:"
        description2="When tenant satisfaction, cost control and contractor risk are all in play, you don’t have time to onboard the wrong person."
      />
      <WhyPartnerSection
        CardList={ExpertList}
        title="Why employers trust us."
        subTitle=""
        color="rgba(1, 66, 37, 0.8)"
      />
      <ResultsSection
        CardProps={resultDetails}
        background="linear-gradient(rgba(1, 66, 37, 0.8), rgba(1, 66, 37, 0.8)), /* Overlay color */url('/management-result.jpg')"
        topHeading="Measurable outcomes"
        bottomHeading="Facilities don’t fall apart overnight, but they do without the right people holding it all together."
      />
      <TestimonialSection />
      <FaqSection faqData={faqData} />
      <Insights />
    </div>
  );
}
