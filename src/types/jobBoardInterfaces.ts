export interface InfoItemProps {
  icon: string;
  text: string;
}

export interface FilterOption {
  name: string;
  count: number;
}

export interface JobBoardHero {
  imageUrl: string;
  title: string;
  description: string;
}

export interface Job {
  id: number;
  title: string;
  clientDescription: string;
  location: string;
  salary: string;
  contractType: string;
  date: string; // dd/MM/yyyy
}

export interface JobBoardData {
  hero: JobBoardHero;
  jobs: Job[];
  categoryOptions: FilterOption[];
  locationOptions: FilterOption[];
  workTypeOptions: FilterOption[];
}

export interface JobListProps {
  jobs: Job[];
}
