export interface HowWeRecruitItem {
  icon: string;
  text: string;
}

export interface HowWeRecruitProps {
  heading: string;
  title?: string;
  subTitle?: string;
  description?: string;
  description2?: string;
  description3?: string;
  itemList?: HowWeRecruitItem[];
}
