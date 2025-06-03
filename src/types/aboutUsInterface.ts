import { Service } from "./homeInterfaces";

export interface OurJourneyProps {
    headingText: string;
    heading?: string;
    introText?: string;
    whoSubHeading?: string;
    whoHeading?: string;
    whoDescription?: string;
    services: Service[];
  }

  export interface OurFutureProps {
    title: string;
    description: string;
    heading: string;
    titleDescription?: string;
  }

  export interface TimelineItem {
    year: string;
    description: string;
  }
  
  export interface TimelineData {
    howard: TimelineItem[];
    guy: TimelineItem[];
  }
  
  export interface IntroContent {
    left: string;
    right: string;
  }

  export interface TimelinePageProps {
    data: TimelineData;
    content: IntroContent;
  }