import { OurJourneyProps, OurFutureProps, IntroContent, TimelineData } from "@/types/aboutUsInterface";
import { StrategicAdviceProps } from "@/types/advisoryInterfaces";
import { CaseStudyHighlightProps, HeroProps, TestimonialProps } from "@/types/homeInterfaces";
import { FAQ } from "@/types/recruitmentInterfaces";

export const heroDetails: HeroProps = {
  title: "About Us",
  description:
    "From trusted recruitment to strategic growth partner, this is Henton Consulting.",
  imageUrl: "/hero/hero23.jpg",
  buttonText: "Begin your success story",
};

export const strategicAdviceData: StrategicAdviceProps = {
  text: "Insight",
  heading: "Built on Reputation. Evolved for What’s Next.",
  paragraphs: [
    "Henton Consulting is a specialist recruitment and advisory firm built on 20 years of real-world industry knowledge. Originally founded in 2004 as Howard Recruitment by the late Paul Howard, the business was created to provide professional, honest recruitment services to Australia’s built environment sectors, and quickly became a trusted name in talent delivery.",
    "Today, under the leadership of Director Guy Ingleby, Henton Consulting brings that same ethos to a broader, more complex set of challenges; helping organisations not just hire, but grow, restructure, enter new markets and make confident commercial decisions.",
  ],
};

export const ourJourneyData: OurJourneyProps = {
  headingText: "Our Journey",
  heading: "Where We Are Now",
  introText:
    "Today we don’t just recruit, we advise, structure and support organisations through the moments that shape their future , growth, change, leadership transition and market entry.\n\n Across Australia, we partner with businesses that need clarity, capability and people who can perform. Our work spans six core sectors, each served by specialist consultants who understand the commercial pressures and delivery realities leaders face.",
  whoHeading: "We work with clients across nine core verticals:",
  whoSubHeading:
    "Construction \n Property & Development \n Facilities Management \n Engineering \n Renewables & Resources \n Corporate \n Government \n Not-for-Profit \n Aged Care",
  whoDescription:
    "Our services extend beyond recruitment, providing support across three interlinked areas:",
  services: [
    {
      title: "Recruitment",
      description:
        "We connect you with the industry’s best — permanent hires and executive leaders who aren’t just qualified, but capable of moving your business forward.",
      action: "Hire Talent",
      image: "/home/homeRec1.jpg",
    },
    {
      title: "Consulting & Advisory",
      description:
        "We design smarter organisations. From workforce planning and organisational structure to talent attraction strategies, we help you build a foundation for growth.",
      action: "Drive Performance",
      image: "/home/homeRec2.jpg",
    },
    {
      title: "Growth",
      description:
        "Beyond hiring and planning, we help you win. Our growth services open new markets, drive revenue opportunities, and strengthen your competitive position.",
      action: "Grow Your Business",
      image: "/home/homeRec3.jpg",
    },
  ],
};

export const aboutUsCaseStudyData: CaseStudyHighlightProps = {
  heading: "Our Difference",
  imageSrc: "/consulting.jpg",
  imageAlt: "Construction worker",
  title: "Where Strategy, Structure & Hiring Come Together",
  titleDescription:
    "Henton Consulting was built to solve the problems that matter most to ",
  description:
    "We don’t operate on a transactional model. We’re built for strategic moments - the point where hiring, structure and business direction collide. That’s where we do our best work. \n \n We’ve intentionally expanded beyond recruitment because most growth bottlenecks aren’t solved by one hire. They need sharper thinking, faster alignment and a partner who knows how businesses move, and stall, from the inside. That’s our edge. \n \n We’re not in your industry. We’re inside your business, when clarity counts.",
  ctaText: "Build Your Team",
  onClick: () => console.log("Clicked"),
  isReverse: true,
};

export const ourFutureData : OurFutureProps = {
  title: "Our Legacy, Our Future",
  description:"The values that defined Howard Recruitment still guide us today: professionalism, honesty, and a deep respect for the people and companies we work with. \n\n But our future is bigger. We’re a strategic partner for organisations that want to build better. Better teams, better structure better outcomes.",
  heading: "Our Future",
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
      heading: "What Our Clients Say",
      title: "Reviews",
      description:
        "Here’s what our clients have to say about working with us. Real experiences, real feedback.",
      quote:
        "I’ve had the pleasure of working with Guy Ingleby for 10 years.",
      detail:
        "I can confidently say they are one of the most effective and professional recruiters I’ve partnered with. Their deep understanding of our business, industry and commitment to finding the right cultural and technical fit have made a real impact on our team.",
      author: "Stephen Kerfoot, Director",
      company: "Kerfoot Electrics",
    };

    export const timelineData: TimelineData = {
      howard: [
        { year: "1998", description: "Deena starts in recruitment in Sydney with Recruitment Solutions" },
        { year: "2004", description: "Paul Howard establishes Howard Recruitment" },
        { year: "2004", description: "Deena joins Howard Recruitment" },
        { year: "2005", description: "Howard Recruitment secures first Blue Chip PSA" },
        { year: "2010", description: "Howard Recruitment reaches 7 staff, with a BD&M Resourcer structure" },
        { year: "2011", description: "Howard Recruitment establishes Temporary Recruitment Division" },
        { year: "2013", description: "Howard Recruitment establishes Temporary Recruitment Division" },
      ],
      guy: [
        { year: "2004", description: "Guy starts in recruitment in Sydney with Constructive" },
        { year: "2005", description: "Guy establishes National Resources Division" },
        { year: "2007", description: "Guy commences WA State Manager role with Constructive" },
        { year: "2008", description: "Outsourced contract with ASX listed company" },
        { year: "2009", description: "WA Office reaches 10 total staff" },
        { year: "2009", description: "Guy returns to Sydney as Principal Consultant with Constructive" },
        { year: "2014", description: "Guy moves into Client Director role" },
        { year: "2015", description: "Guy establishes Henton Consulting" },
      ],
    };
    
    export const introContent: IntroContent = {
      left: `Henton Consulting was born from two complementary journeys , both grounded in delivery, integrity and sector knowledge.
    
    Howard Recruitment was established in 2004 by the late Paul Howard, with Deena joining soon after. Under her leadership, the business grew into a trusted partner across construction, property, government and engineering , known for its professionalism and results-first approach.`,
    
      right: `In parallel, Guy Ingleby built his career in resources and infrastructure recruitment, leading national teams and complex delivery programs. In 2015, he founded Henton Consulting to offer clients more than recruitment , strategic support across leadership, growth and organisational structure.
    
    In 2017, the two businesses merged , combining Howard’s legacy in recruitment with Henton’s focus on advisory and growth. Today, Henton Consulting is built to help organisations hire better, scale smarter and lead with confidence.`
    };