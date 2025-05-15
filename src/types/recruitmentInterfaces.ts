// Hero
export interface HeroProps {
  title: string;
  description: string;
  action: string;
  imageUrl: string;
  buttonText: string;
}

// Results cards
export interface CardItem {
  score: string;
  title?: string;
  description?: string;
}
export interface CardProps {
  cardDetails: CardItem[];
}

// “Why partner” cards
export interface CardData {
  title: string;
  description: string;
  icon: string;
}

// Process steps
export interface Step {
  icon: string;
  title: string;
  description: string;
}

// Deliverables & work-points
export interface Item {
  icon?: string;
  title: string;
  description?: string;
}

// FAQ entries
export interface FAQ {
  question: string;
  answer: string;
}

// Services Section
export interface ServiceItem {
  title: string;
  description: string;
  action: string;
  image: string;
}

// GrowthService section
export interface GrowthServiceProps {
  heading1: string;
  heading: string;
  subheading: string;
  paragraph: string;
  imageSrc: string;
  imageAlt: string;
  leftButtonText: string;
  services: { title: string; description: string }[];
  ctaColor: string;
  isBackground: boolean;
  isButton: boolean;
}

/* ↓↓↓ New shared types for the four sections ↓↓↓ */

// WhyPartnerSection
export interface WhyPartnerSectionProps {
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

// GenericProcessSection
export interface GenericProcessSectionProps {
  backgroundImage: string;
  heading: string;
  intro: { description: string }[];
  steps: Step[];
  itemsHeading: string;
  items: Item[];
  isHeadingLeft: boolean;
  deliverables: Item[];
}

// ResultsSection
export interface ResultsSectionProps {
  backgroundColor?: string;
  headingText?: string;
  subheadingText?: string;
  footerText?: string;
  buttonText?: string;
  cardProps?: CardProps;
  onButtonClick?: () => void;
  bottomHeading?: string;
  topHeading?: string;
  background?: string;
}

// TestimonialSection
export interface TestimonialSectionProps {
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