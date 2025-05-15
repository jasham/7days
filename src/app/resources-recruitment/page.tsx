"use client";
import FaqSection from "@/Components/Faq";
import HeroSection from "@/Components/Hero/Hero";
import HowWeRecruit from "@/Components/HowWeRecruit";
import Insights from "@/Components/Insights/index";
import OurNetworkSection from "@/Components/Network";
import ResultsSection from "@/Components/Results";
import SpecialistExpertise from "@/Components/SpecialExpertise";
import TestimonialSection from "@/Components/TeastimonialSection";
import WhatWeDo from "@/Components/WhatWeDo/index2";
import WhyPartnerSection from "@/Components/WhyPartnerSection";
// herosection interface
interface HeroProps {
  title: string;
  description: string;
  buttonText: string;
  imageUrl: string;
}

//hero section data
const heroDetails: HeroProps = {
  title: "Resources Recruitment That Powers Futures",
  description:
    "We place infrastructure professionals who turn remote sites into high-performance assets.",
  buttonText: "Begin your success story",
  imageUrl: "/resourcesHero.jpg",
};

interface CardData {
  title: string;
  description: string;
  icon: string;
}
interface CardList {
  myCards: CardData[];
}

interface CardItem {
  score: string;
  title: string;
  description?: string;
}
interface CardProps {
  cardDetails: CardItem[];
}

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

const faqData = [
  {
    question: "Do you recruit for infrastructure delivery or site operations?",
    answer:
      "We specialise in recruitment for the design, construction and commissioning of resources infrastructure — not operational staffing. That includes greenfield mine sites, processing facilities, compression plants, pipelines and other upstream/downstream assets. Our candidates are delivery-proven and project-aligned.",
  },
  {
    question:
      "Can you help with FIFO and remote site hires?",
    answer:
      "Yes. We recruit across remote, high-risk and logistically complex project locations. We understand the demands of rosters, mobilisation, site readiness, IR conditions and workforce retention in FIFO and DIDO environments.",
  },
  {
    question: "Do you work across both contract and permanent appointments?",
    answer:
      "Absolutely. We tailor each search to your contracting model and project timeline — whether you're delivering a short-term shutdown, a multi-year program, or building up capability for a major package handover.",
  },
  {
    question: "Can you support multiple hires across different scopes or locations?",
    answer:
      "Yes. We prioritise candidates with proven experience managing interface risk, constrained access, compressed timelines and staged commissioning, not just those with generic ‘project’ experience.",
  },
];

const listItems = [
  "EPCM contractors delivering large-scale mining and oil and gas infrastructure",
  "Mid-tier builders and civil contractors supporting remote and high-risk projects",
  "Engineering and project management consultancies aligned to delivery scopes",
  "SMP, electrical and mechanical subcontractors",
  "Workforce and camp services providers supporting remote delivery",
];

const ExpertList: CardList = {
  myCards: [
    {
      title:
        "We don’t send options, we send the one candidate who can do the job.",
      description: "",
      icon: "/sortlist1.png",
    },
    {
      title: "We understand what’s commercially at stake in every hire.",
      description: "",
      icon: "/marketing1.png",
    },
    {
      title: "We show up with honesty, urgency, and results.",
      description: "",
      icon: "/confidence1.png",
    },
  ],
};

export default function propertyRecruitmentPage() {
  return (
    <div>
      <HeroSection {...heroDetails} />
      <WhatWeDo
        title="Well-run facilities don’t manage themselves, it starts with who you hire."
        description1="We recruit construction and project delivery talent for the resources sector, with a focus on building, not operating."
        description2="From greenfield mine sites to major processing facilities, pipelines and oil and gas installations, we help EPCM contractors deliver the people who get critical infrastructure built safely and to spec."
        description3=""
        subHeading="We work with EPCM contractors and delivery partners"
        subDescription="We support the contractors, consultancies and project partners who turn resource investments into built outcomes. We recruit for:"
        buttonText="Start the conversation"
        listItems={listItems}
        subListBottom="Whether you're managing a flagship site, a compliance-heavy portfolio or a network of ageing assets, we’ll find the right fit, fast."
      />
      <SpecialistExpertise
        title="Built for Resources. Proven on Site."
        description="Specialist recruitment across mining and oil and gas project roles, aligned to delivery scope, contractor interface and remote execution risk."
      />
      <OurNetworkSection
        resourcesRecruitmentPage={true}
        mt={0}
        mb={5}
        heading="Built for site. Proven in delivery."
        bottomText=""
        description="We don’t source from databases. We recruit from real projects, providing infrastructure professionals who understand what it takes to build mine and gas assets,  from pre-start to handover. We recruit across:"
        image="/resourcesNetwork.jpg"
      />
      <HowWeRecruit
        resources={true}
        heading="resources recruitment"
        title="How we recruit and/ why it works."
        subTitle="Every major resources project hinges on one thing - who’s on the ground when it counts."
        description="Every search starts with the site, the scope and the risk. We align our approach to your workfront pressure, contractor mix, and compliance environmen, not just the job title."
        description2="We act quickly and with purpose. Because the wrong hire on a live site costs more than time."
        description3=""
      />
      <WhyPartnerSection
        cards={ExpertList.myCards}
        title="Why employers trust us."
        subTitle=""
        color="rgba(1, 66, 37, 0.8)"
        buttonText="Ready to Build What’s Next?"
      />
      <ResultsSection
        cardProps={resultDetails}
        backgroundImage="/resourcesResult.jpg"
        background="linear-gradient(rgba(1, 66, 37, 0.8), rgba(1, 66, 37, 0.8)), /* Overlay color */url('/results-bg.jpg')"
        topHeading="Measurable outcomes"
        bottomHeading="Blueprints don’t build infrastructure. People do. We help you find the ones who get it done."
      />
      <TestimonialSection
        heading="What our clients say"
        title="Reviews"
        description="Here’s what our clients have to say about working with us. Real experiences, real feedback."
        quote="“I have worked with Guy since 2008, across infrastructure & resource-based enterprises.”"
        detail="Guy is without question, one of the finest talent acquisition professionals I have had the pleasure of engaging with and I have no hesitation in recommending him to any party."
        author="Matt Ingoe - HR Manager"
        company=""
      />
      <FaqSection faqData={faqData} />
      <Insights />
    </div>
  );
}
