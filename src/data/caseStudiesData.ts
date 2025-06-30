import { StrategicAdviceProps } from "@/types/advisoryInterfaces";
import { ImpactSectionProps } from "@/types/caseStudiesInterface";
import { HeroProps, TestimonialProps } from "@/types/homeInterfaces";
import { FAQ } from "@/types/recruitmentInterfaces";

export const heroDetails: HeroProps = {
  title: "Recruitment and advisory in action",
  description: "Real outcomes from strategic recruitment and workforce consulting, delivered across australia’s most complex sectors.",
  imageUrl: "/hero/hero20.jpg",
  buttonText: "Begin your success story",
};

export const strategicAdviceData: StrategicAdviceProps = {
  text: "What we do",
  heading: "Real outcomes. trusted partnerships. sector-specific impact.",
  paragraphs: [
    "At Henton Consulting, we don’t just talk about results, we deliver them.",
    "Our case studies showcase the work we do with leaders across property, construction, engineering, resources, government and not-for-profit. each project is different, but every outcome is built on capability, alignment, and follow-through.",
    "Whether it’s solving workforce gaps, building high-performing teams, or delivering strategic advice during critical periods of growth or change , this is how we help our clients move forward."
  ],
  buttonText: "Start the conversation",
  buttonColor: "#132D46",
  buttonBgColor: "transparent",
  buttonBorderColor: "#132D46",
};

export const testimonialData: TestimonialProps = {
  heading: "What our clients say",
  title: "Reviews",
  description: "Here’s what our clients have to say about working with us. real experiences, real feedback.",
  quote: "I’ve had the pleasure of working with guy ingleby for 10 years.",
  detail: "I can confidently say they are one of the most effective and professional recruiters i’ve partnered with. their deep understanding of our business, industry and commitment to finding the right cultural and technical fit have made a real impact on our team.",
  author: "Chris elliott, director - ",
  company: "Kerfoot electrics",
};

export const caseStudyFaq: FAQ[] = [
  {
    question: "What industries do you work with?",
    answer: "We work across sectors including infrastructure, services, for-purpose, and growth-stage companies.",
  },
  {
    question: "What makes your advisory different?",
    answer: "Every engagement is led by a senior advisor with real-world leadership experience, focusing on practical change.",
  },
  {
    question: "How fast can you begin?",
    answer: "We can typically begin within a few days depending on the engagement scope.",
  },
];

export const impactSectionData: ImpactSectionProps = {
  headingText: "Proven impact",
  headingDividerColor: "#ffffff",
  headingDividerHeight: "1px",
  headingMarginBottom: "16px",
  sectionTitle: "How we deliver results",
  caseStudies: [
    {
      title: "Powering project delivery at kbr group",
      description: "How Henton Consulting delivered senior operational hires to support large-scale infrastructure projects.",
    },
    {
      title: "Powering project delivery at kbr group",
      description: "How Henton Consultingg delivered senior operational hires to support large-scale infrastructure projects.",
    },
  ],
  buttonLabel: "Ready to build what’s next?",
  onButtonClick: () => alert("beginning"),
  buttonStyles: {
    variantStyle: "main",
    buttonColor: "#132D46",
    buttonBgColor: "transparent",
    buttonBorderColor: "#132D46",
  },
};
