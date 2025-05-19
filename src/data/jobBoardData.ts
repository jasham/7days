import { JobBoardData } from "@/types/jobBoardInterfaces";

export const jobBoardData: JobBoardData = {
  hero: {
    imageUrl: "/hero/hero5.jpg",
    title: "Job Search",
    description: "Find roles that match your skills, values and career goals.",
  },
  jobs: [
    {
      id: 1,
      title: "Site Manager - Facades",
      clientDescription:
        "Our client is an established, renowned facade design and construct business that has worked on a number of landmark projects across Australia. With the head office based in Sydney.",
      location: "Sydney CBD, Sydney, Australia",
      salary: "$900 p/d",
      contractType: "Contract",
      date: "21/04/2025",
    },
    {
      id: 2,
      title: "Senior Contracts Administrator - Education",
      clientDescription:
        "Established over 35 years ago our client is an accredited, award winning building and development company who has delivered individual projects in excess of $200m.",
      location: "Sydney CBD, Sydney, Australia",
      salary: "$210k",
      contractType: "Permanent",
      date: "21/04/2025",
    },
    {
      id: 3,
      title: "Site Manager - Facades",
      clientDescription:
        "Our client is an established, renowned facade design and construct business that has worked on a number of landmark projects across Australia. With the head office based in Sydney.",
      location: "Sydney CBD, Sydney, Australia",
      salary: "$900 p/d",
      contractType: "Contract",
      date: "21/04/2025",
    },
  ],
  categoryOptions: [
    { name: "Government", count: 1 },
    { name: "Construction", count: 2 },
    { name: "Engineering", count: 2 },
    { name: "Renewable Energy", count: 1 },
    { name: "Corporate", count: 1 },
    { name: "Not-For-Profit", count: 3 },
  ],
  locationOptions: [
    { name: "Sydney CBD, Sydney, Australia", count: 2 },
    { name: "Adelaide CBD, Adelaide, Australia", count: 2 },
    { name: "Melbourne CBD, Melbourne, Australia", count: 2 },
    { name: "Brisbane CBD, Brisbane, Australia", count: 1 },
    { name: "Perth CBD, Perth, Australia", count: 1 },
  ],
  workTypeOptions: [
    { name: "Contract", count: 1 },
    { name: "Permanent", count: 1 },
    { name: "Temporary", count: 1 },
  ],
};
