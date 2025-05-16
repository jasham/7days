export interface HeroProps {
  imageUrl: string;
  title: string;
  description: string;
  buttonText?: string;
  buttonLink?: string;
  onButtonClick?: () => void;
  }
  
  export interface CardItem {
    score?: string;
    title?: string;
    description?: string;
  }
  
  export interface CardProps {
    cardDetails?: CardItem[];
  }
  
  export interface CardData {
    title: string;
    description: string;
    icon: string;
  }
  
  export interface CaseStudyHighlightProps {
    heading?: string;
    imageSrc: string;
    imageAlt: string;
    title: string;
    description: string;
    ctaText: string;
    onClick: () => void;
    isReverse: boolean;
    isBackground?: boolean;
  }
  
  export interface WhyPartnerProps {
    headingText: string;
    headingColor: string;
    dividerColor: string;
    dividerHeight: string;
    title: string;
    subTitle: string;
    cards: CardData[];
    buttonText: string;
    buttonColor: string;
  }
  
// ResultsSection
export interface ResultSectionProps {
  backgroundColor?: string;
  backgroundImage?: string;
  headingText?: string;
  subheadingText?: string;
  footerText?: string;
  buttonText?: string;
  cardProps?: CardProps;
  onButtonClick?: () => void;
  topHeading?: string;
  bottomHeading?: string;
}
  
  // Job Search
export interface JobSearchProps {
  title: string;
  headline: string;
  description: string[];
  buttonText: string;
}

// Trusted By Section
export interface CompanyLogo {
  alt: string;
  src: string;
}

export interface TrustedByProps {
  title: string;
  description: string;
  companyLogos: CompanyLogo[];
}

// Services Section
export interface ServiceItem {
  title: string;
  description: string;
  action: string;
  image: string;
}

export interface ServicesSectionProps {
  headingText: string;
  title: string;
  subtitle: string;
  services: ServiceItem[];
  footerTitle: string;
  footerSubtitle: string;
  buttonText: string;
}

// Strategic Partnerships
export interface Partner {
  src: string;
  alt: string;
}

export interface StrategicPartnershipsProps {
  title: string;
  partners: Partner[];
}

// Testimonial Section
export interface TestimonialProps {
  heading: string;
  title: string;
  description: string;
  quote: string;
  detail: string;
  author: string;
  company: string;
}

// Expertise Section & Insights (reusable)
export interface ExpertiseSectionProps {
  headingText: string;
  title: string;
  description: string;
  expertiseList: ServiceItem[];
}
