import { StrategicAdviceProps } from "@/types/advisoryInterfaces";
import { ImpactSectionProps } from "@/types/caseStudiesInterface";
import { HeroProps, TestimonialProps } from "@/types/homeInterfaces";
import { FAQ } from "@/types/recruitmentInterfaces";

export const heroDetails: HeroProps = {
  title: "Recruitment and Advisory in Action",
  description:
    "Real outcomes from strategic recruitment and workforce consulting, delivered across Australia’s most complex sectors.",
  imageUrl: "/hero/hero20.jpg",
  buttonText: "Begin your success story",
};

export const strategicAdviceData: StrategicAdviceProps = {
  text: "What we do",
  heading: "Real outcomes. Trusted partnerships. Sector-specific impact.",
  paragraphs: [
    "At Henton Consulting, we don’t just talk about results, we deliver them.",
    "Our case studies showcase the work we do with leaders across Property, Construction, Engineering, Resources, Government and Not-for-Profit. Each project is different, but every outcome is built on capability, alignment, and follow-through.",
    "Whether it’s solving workforce gaps, building high-performing teams, or delivering strategic advice during critical periods of growth or change — this is how we help our clients move forward."
  ],
  buttonText: "Start the conversation",
  buttonColor: "#132D46",
  buttonBgColor: "transparent",
  buttonBorderColor: "#132D46",
};

  export const testimonialData: TestimonialProps = {
    heading: "What Our Clients Say",
    title: "Reviews",
    description:
      "Here’s what our clients have to say about working with us. Real experiences, real feedback.",
    quote: "I’ve had the pleasure of working with Guy Ingleby for 10 years.",
    detail:
      "I can confidently say they are one of the most effective and professional recruiters I’ve partnered with. Their deep understanding of our business, industry and commitment to finding the right cultural and technical fit have made a real impact on our team.",
    author: "Chris Elliott, Director - ",
    company: "Kerfoot Electrics",
  };

    export const caseStudyFaq: FAQ[] = [
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

    export const impactSectionData: ImpactSectionProps = {
      headingText: "PROVEN IMPACT",
      headingDividerColor: "#ffffff",
      headingDividerHeight: "1px",
      headingMarginBottom: "16px",
      sectionTitle: "How We Deliver Results",
      caseStudies: [
        {
          title: "Powering Project Delivery At KBR Group",
          description:
            "How Henton Consulting Delivered Senior Operational Hires To Support Large-Scale Infrastructure Projects.",
        },
        {
          title: "Powering Project Delivery At KBR Group",
          description:
            "How Henton Consulting Delivered Senior Operational Hires To Support Large-Scale Infrastructure Projects.",
        },
      ],
      buttonLabel: "Ready to Build What’s Next?",
      onButtonClick: () => alert("beginning"),
      buttonStyles: {
        variantStyle: "main",
        buttonColor: "#132D46",
        buttonBgColor: "transparent",
        buttonBorderColor: "#132D46",
      },
    };