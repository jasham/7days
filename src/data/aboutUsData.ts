import { OurJourneyProps, OurFutureProps, IntroContent, TimelineData } from "@/types/aboutUsInterface";
import { StrategicAdviceProps } from "@/types/advisoryInterfaces";
import { CaseStudyHighlightProps, HeroProps, TestimonialProps } from "@/types/homeInterfaces";
import { FAQ } from "@/types/recruitmentInterfaces";

export const heroDetails: HeroProps = {
  title: "About us",
  description: "From trusted recruitment to strategic growth partner, this is henton consulting.",
  imageUrl: "/hero/hero23.jpg",
  buttonText: "Begin your success story",
};

export const strategicAdviceData: StrategicAdviceProps = {
  text: "Insight",
  heading: "Built on reputation. evolved for what’s next.",
  paragraphs: [
    "Henton consulting is a specialist recruitment and advisory firm built on 20 years of real-world industry knowledge. originally founded in 2004 as howard recruitment by the late paul howard, the business was created to provide professional, honest recruitment services to australia’s built environment sectors, and quickly became a trusted name in talent delivery.",
    "Today, under the leadership of director guy ingleby, henton consulting brings that same ethos to a broader, more complex set of challenges; helping organisations not just hire, but grow, restructure, enter new markets and make confident commercial decisions.",
  ],
};

export const ourJourneyData: OurJourneyProps = {
  headingText: "Our journey",
  heading: "Where we are now",
  introText:
    "Today we don’t just recruit, we advise, structure and support organisations through the moments that shape their future , growth, change, leadership transition and market entry.\n\n across australia, we partner with businesses that need clarity, capability and people who can perform. our work spans six core sectors, each served by specialist consultants who understand the commercial pressures and delivery realities leaders face.",
  whoHeading: "We work with clients across nine core verticals:",
  whoSubHeading:
    "Construction \n property & development \n facilities management \n engineering \n renewables & resources \n corporate \n government \n not-for-profit \n aged care",
  whoDescription:
    "Our services extend beyond recruitment, providing support across three interlinked areas:",
  services: [
    {
      title: "Recruitment",
      description:
        "We connect you with the industry’s best , permanent hires and executive leaders who aren’t just qualified, but capable of moving your business forward.",
      action: "Hire talent",
      image: "/home/homeRec1.jpg",
    },
    {
      title: "Consulting & advisory",
      description:
        "We design smarter organisations. from workforce planning and organisational structure to talent attraction strategies, we help you build a foundation for growth.",
      action: "Drive performance",
      image: "/home/homeRec2.jpg",
    },
    {
      title: "Growth",
      description:
        "Beyond hiring and planning, we help you win. our growth services open new markets, drive revenue opportunities, and strengthen your competitive position.",
      action: "Grow your business",
      image: "/home/homeRec3.jpg",
    },
  ],
};

export const aboutUsCaseStudyData: CaseStudyHighlightProps = {
  heading: "Our difference",
  imageSrc: "/consulting.jpg",
  imageAlt: "Construction worker",
  title: "Where strategy, structure & hiring come together",
  titleDescription: "Henton consulting was built to solve the problems that matter most to ",
  description:
    "We don’t operate on a transactional model. we’re built for strategic moments - the point where hiring, structure and business direction collide. that’s where we do our best work. \n \n we’ve intentionally expanded beyond recruitment because most growth bottlenecks aren’t solved by one hire. they need sharper thinking, faster alignment and a partner who knows how businesses move, and stall, from the inside. that’s our edge. \n \n we’re not in your industry. we’re inside your business, when clarity counts.",
  ctaText: "Build your team",
  onClick: () => console.log("Clicked"),
  isReverse: true,
};

export const ourFutureData: OurFutureProps = {
  title: "Our legacy, our future",
  description: "The values that defined howard recruitment still guide us today: professionalism, honesty, and a deep respect for the people and companies we work with. \n\n but our future is bigger. we’re a strategic partner for organisations that want to build better. better teams, better structure better outcomes.",
  heading: "Our future",
  titleDescription: "Let’s build what’s next - together.",
};

export const aboutUsFaq: FAQ[] = [
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

export const testimonialData: TestimonialProps = {
  heading: "What our clients say",
  title: "Reviews",
  description:
    "Here’s what our clients have to say about working with us. real experiences, real feedback.",
  quote:
    "I’ve had the pleasure of working with guy ingleby for 10 years.",
  detail:
    "I can confidently say they are one of the most effective and professional recruiters i’ve partnered with. their deep understanding of our business, industry and commitment to finding the right cultural and technical fit have made a real impact on our team.",
  author: "Stephen kerfoot, director",
  company: "Kerfoot electrics",
};

export const timelineData: TimelineData = {
  howard: [
    { year: "1998", description: "Deena starts in recruitment in sydney with recruitment solutions" },
    { year: "2004", description: "Paul howard establishes howard recruitment" },
    { year: "2004", description: "Deena joins howard recruitment" },
    { year: "2005", description: "Howard recruitment secures first blue chip PSA" },
    { year: "2010", description: "Howard recruitment reaches 7 staff, with a BD&M resourcer structure" },
    { year: "2011", description: "Howard recruitment establishes temporary recruitment division" },
    { year: "2013", description: "Howard recruitment establishes temporary recruitment division" },
  ],
  guy: [
    { year: "2004", description: "Guy starts in recruitment in sydney with constructive" },
    { year: "2005", description: "Guy establishes national resources division" },
    { year: "2007", description: "Guy commences WA state manager role with constructive" },
    { year: "2008", description: "Outsourced contract with ASX listed company" },
    { year: "2009", description: "WA office reaches 10 total staff" },
    { year: "2009", description: "Guy returns to sydney as principal consultant with constructive" },
    { year: "2014", description: "Guy moves into client director role" },
    { year: "2015", description: "Guy establishes henton consulting" },
  ],
};

export const introContent: IntroContent = {
  left: `Henton consulting was born from two complementary journeys , both grounded in delivery, integrity and sector knowledge.

howard recruitment was established in 2004 by the late paul howard, with deena joining soon after. under her leadership, the business grew into a trusted partner across construction, property, government and engineering , known for its professionalism and results-first approach.`,

  right: `In parallel, guy ingleby built his career in resources and infrastructure recruitment, leading national teams and complex delivery programs. in 2015, he founded henton consulting to offer clients more than recruitment , strategic support across leadership, growth and organisational structure.

in 2017, the two businesses merged , combining howard’s legacy in recruitment with henton’s focus on advisory and growth. today, henton consulting is built to help organisations hire better, scale smarter and lead with confidence.`
};