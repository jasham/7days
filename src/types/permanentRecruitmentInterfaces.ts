export interface SpecialistExpertiseProps {
  title: string;
  description: string;
  sectors: string[];
}

export interface PermanentResultsSectionProps {
  cardProps: {
    cardDetails: { score: string; title?: string; description?: string }[];
  };
  background: string;
  topHeading: string;
  bottomHeading: string;
}

export interface FeatureItem {
  title: string;
  description: string;
}

export interface HowWeDeliverRecruitmentProps {
  headingText: string;
  mainTitle: string;
  subTitle: string;
  subTitle2?: string;
  image: string;
  buttonText: string;
  features: FeatureItem[];
}

export interface SectionBaseItem {
  title?: string;
  body?: string;
  subItems?: string[];
}

export interface Section {
  header?: string;
  items?: string[];
  complexItems?: SectionBaseItem[];
}

export interface OurNetworkSectionProps {
  header: string;
  heading: string;
  description?: string;
  bottomText?: string;
  image?: string;
  mt?: number;
  mb?: number;
  sections: Section[];
}