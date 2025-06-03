  export interface TrustedClientsProps {
    layoutVariant: "imageLeft" | "imageCenter"; // determines layout
    sectionBg: string;
    bgImage?: string; // for background image if any
    headingText: string;
    titleText2?: string;
    headingColor: string;
    headingDividerColor: string;
    dividerHeight: string;
    titleText: string;
    titleColor: string;
    imageSrc: string;
    imageAlt: string;
    imageBorderRadius: number | string;
    borderColor?: string;
    descriptionText?: string;
    listItems?: string[];
    closingText?: string;
    ctaText: string;
    ctaColor: string;
  }

  export interface StrategicAdviceProps {
    text: string;
    heading: string;
    paragraphs: string[];
    buttonText?: string;
    buttonColor?: string;
    buttonBgColor?: string;
    buttonBorderColor?: string;
  }  

  // Advisory / SolutionsSection props
export interface SolutionsSectionProps {
    heading: string;
    headingColor: string;
    dividerColor: string;
    dividerHeight: string;
    title: string;
    subtitle: string;
    questions: string[];
    description: string;
    buttonText: string;
    buttonColor: string;
    buttonBgColor: string;
    buttonBorderColor: string;
    imageUrl: string;
    imageOverlay: string;
    imageBorderRadius?: number;
  }
  