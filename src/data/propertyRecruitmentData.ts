import { CardData, HeroProps, ResultSectionProps, TestimonialProps, WhyPartnerProps } from "@/types/homeInterfaces";
import { OurNetworkSectionProps, Section, SpecialistExpertiseProps } from "@/types/permanentRecruitmentInterfaces";
import { HowWeRecruitProps } from "@/types/propertyRecruitmentInterface";
import { FAQ, WhatWeDoProps } from "@/types/recruitmentInterfaces";

export const heroDetails: HeroProps = {
    title: "Expert Property & Development Recruitment",
    description:
      "Specialist talent across the full property lifecycle",
    buttonText: "Begin your success story",
    imageUrl: "/hero/hero10.jpg",
};

export const testimonialData: TestimonialProps = {
    heading: "What Our Clients Say",
    title: "Reviews",
    description:
      "Here is what our clients have to say about working with us. Real experiences, real feedback.",
    quote:
      "“The calibre of candidates has always exceeded what others have put forward.”",
    detail:
      "Guy assesses the needs of the client and then carefully selects potential candidates that are the right fit. He is personally involved in every step of the process.",
    author: "Stephen Kerfoot, Director - ",
    company: "Kerfoot Electrics",
  }

    export const resultSectionData: ResultSectionProps = {
      cardProps: {
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
      },
      backgroundImage:"/results-bg.jpg",
      topHeading: "Measurable outcomes",
      bottomHeading:
        "When expertise, trust, and speed come together, growth isn’t a goal — it’s the outcome.",
    };


      export const whatWeDoData : WhatWeDoProps =   {
        heading: "Great developments don’t deliver themselves — it starts with who you hire.",
        introText:
          "We recruit high-performing professionals across the entire property development spectrum — from acquisitions and feasibility to delivery, leasing, and asset performance   \n\n" +
          "Whether you're scaling a national development pipeline or unlocking new investment potential, we deliver the right people at the right time.",
        whoSubHeading: "We recruit for:",
        whoHeading: "The right partnership brings your project to life — and the right team keeps it moving. We partner with:",
        listItems: [
            "Property developers (residential, commercial, mixed-use)",
            "Funds and institutional asset owners",
            "Real estate advisory and consultancy groups",
            "Government and private urban development bodies",
        ],
        buttonText: "Start the conversation",
      }


      // 3️⃣ SpecialistExpertise
      export const specialistExpertiseData: SpecialistExpertiseProps = {
        title: "Property-Focused Recruitment. Built for Delivery.",
        description:
          "Precision hiring across every phase of the development lifecycle — from vision to completion.",
        sectors: [
          "Property & Development",
          "Construction",
          "Engineering",
          "Facilities Management",
          "Resources",
          "Renewables",
          "Not For Profit",
          "Corporate",
          "Government",
        ],
      };

      // 4️⃣ OurNetworkSection
      export const propertyRecruitmentSections: Section[] = [
        {
          complexItems:[
            {
              title: "Acquisitions & Development Management",
              body: "Commercially minded talent who unlock value, shape feasibility, and align with investor goals.",
            },
            {
              title: "Project & Construction Management",
              body: "Proven operators who keep delivery on track — managing timeline pressure and contractor risk.",
            },
            {
              title: "Asset Management",
              body: "Specialists focused on NOI, tenant performance, and asset yield.",
            },
            {
              title: "Town Planning & Urban Design",
              body: "Strategic thinkers who balance community needs with commercial realities.",
            },
            {
              title: "Leasing, Property & Facilities Management",
              body: "From leasing leads to FM experts, we place those who protect asset value and drive retention.",
            },
            {
              title: "Real Estate Investment & Funds Management",
              body: "Analysts, asset managers, and fund executives aligned to IRR targets and investor mandates.",
            },
          ],
        },
      ];
      
      export const networkData: OurNetworkSectionProps = {
        header:"WORK WITH THE EXPERTS",
        heading: "Deep expertise. Precise delivery.",
        description:
          "We don’t pull from static databases — we headhunt for impact. Our sector insight spans the entire property lifecycle:",
        bottomText:
          "",
        image: "/Network3.jpg",
        mt: -5,
        mb: 5,
        sections: propertyRecruitmentSections,
      };

// 7️⃣ FAQ
export const faqData: FAQ[] = [
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

    // Why partner data
    export const partnerCards: CardData[] = [
        {
          title:
            "We don’t send options, we send the one candidate who can do the job.",
          description: "",
          icon: "/Focus.svg",
        },
        {
          title: "We understand what’s commercially at stake in every hire.",
          description: "",
          icon: "/DollarSuitCase.svg",
        },
        {
          title: "We show up with honesty, urgency, and results.",
          description: "",
          icon: "/Thunder.svg",
        },
      ];
      
      // Why Partner Section props
      export const whyPartnerSectionData: WhyPartnerProps = {
        headingText: "WORK WITH THE EXPERTS",
        headingColor: "#132D46",
        dividerColor: "#132D46",
        dividerHeight: "1px",
        title: "Why employers trust us.",
        cards: partnerCards,
        buttonText: "Ready to Build What’s Next?",
        buttonColor: "#132D46",
        isCentered: true,
      };

      export const howWeDeliverRecruitmentData: HowWeRecruitProps = {
        heading: "WORK WITH THE EXPERTS",
        title:"How we recruit and why it works.",
        subTitle:"We take your brief and turn it into action. Fast. Our model combines proactive search with deep sector insight.",
        description:"We don’t wait for candidates to apply, we identify hidden performers already delivering across major property portfolios, many of whom are quietly open to change. Every search includes:",
        description2:"Because we understand risk, yield, feasibility, ROI, and timeline pressure, we ask sharper questions. That means we filter faster — and you interview only the right people.",
        description3:"The difference between a project that delivers and one that stalls often comes down to a single hire. And in this market, average hires cost more than vacancies.",
        itemList: [
            {
              icon: "/WebNetwork.svg",
              text: "Dedicated research & market mapping",
            },
            {
              icon: "/Voice.svg",
              text: "Direct outreach to passive talent",
            },
            {
              icon: "/todoList.svg",
              text: "Structured assessments focused on cultural and technical alignment",
            },
            {
                icon: "/checkPeople.svg",
                text: "No shortlists. Just the right person, first time.",
              },
          ]
    }