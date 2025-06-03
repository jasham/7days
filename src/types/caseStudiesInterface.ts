export interface CaseStudy {
  title: string;
  description: string;
}

export interface ImpactSectionProps {
  headingText: string;
  headingDividerColor?: string;
  headingDividerHeight?: string;
  headingMarginBottom?: string;
  sectionTitle: string;
  caseStudies: CaseStudy[];
  buttonLabel: string;
  onButtonClick: () => void;
  buttonStyles?: {
    variantStyle?: string;
    buttonColor?: string;
    buttonBgColor?: string;
    buttonBorderColor?: string;
  };
}
