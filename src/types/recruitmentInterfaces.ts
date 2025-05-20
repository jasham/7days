
// Process steps
export interface Step {
  icon: string;
  title: string;
  description: string;
  isHeadingLeft?: boolean;
  deliverables?: Item[];
}

// Deliverables & work-points
export interface Item {
  icon?: string;
  title?: string;
  description?: string;
}

// FAQ entries
export interface FAQ {
  question: string;
  answer: string;
}

export interface FaqSectionProps {
  faqData: FAQ[];
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

// GenericProcessSection
export interface GenericProcessSectionProps {
  mainHeading?: string;
  backgroundImage: string;
  heading: string;
  intro: Item[];
  steps: Step[];
  itemsHeading: string;
  items: Item[];
  ctaText?: string;
  isHeadingLeft?: boolean;
  deliverables?: Item[];
  subHeading?: string;
}

export interface RoleCard {
  title: string;
  description: string;
}

export interface WhatWeDoProps {
    heading: string;
    introText?: string;
    whoSubHeading?: string;
    whoHeading?: string;
    whoDescription?: string;
    listItems?: string[];
    roleCards?: RoleCard[];
    buttonText: string;
  }