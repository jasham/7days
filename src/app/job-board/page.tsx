// app/job-board/page.tsx
"use client";

import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import HeroSection from "@/Components/Hero/Hero";
import SearchBar from "@/Components/SearchBar";
import FilterSidebar from "@/Components/Job/FilterSidebar";
import JobList from "@/Components/Job/JobList";
import { FilterOption } from "@/Components/Job/FilterSection";
import { Job } from "@/Components/Job/JobCard";

// Sample data (you can lift these into a separate `/data` file or fetch from an API)
const jobData: Job[] = [
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
];

const categoryOptions: FilterOption[] = [
  { name: "Government", count: 1 },
  { name: "Construction", count: 2 },
  { name: "Engineering", count: 2 },
  { name: "Renewable Energy", count: 1 },
  { name: "Corporate", count: 1 },
  { name: "Not-For-Profit", count: 3 },
];

const locationOptions: FilterOption[] = [
  { name: "Sydney CBD, Sydney, Australia", count: 2 },
  { name: "Adelaide CBD, Adelaide, Australia", count: 2 },
  { name: "Melbourne CBD, Melbourne, Australia", count: 2 },
  { name: "Brisbane CBD, Brisbane, Australia", count: 1 },
  { name: "Perth CBD, Perth, Australia", count: 1 },
];

const workTypeOptions: FilterOption[] = [
  { name: "Contract", count: 1 },
  { name: "Permanent", count: 1 },
  { name: "Temporary", count: 1 },
];

export default function JobBoardPage() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <HeroSection
        imageUrl="/Hero2.png"
        title="Job Search"
        description="Find roles that match your skills, values and career goals."
      />

      <Box
        sx={{
          px: { xs: 2, md: 10 },
          py: { xs: 4, md: 8 },
          background: "linear-gradient(0deg, #EEEEF2 0%, #132D46 46.76%)",
          color: "white",
        }}
      >
        {/* header + search */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            mb: 4,
          }}
        >
          <Typography
            variant="h5"
            fontWeight="bold"
            gutterBottom
            flexBasis="30%"
          >
            Search Jobs.
            <br />
            Build Your Future.
          </Typography>
          <Box flexBasis="100%">
            <SearchBar />
          </Box>
        </Box>

        {/* filters + listings */}
        <Grid container spacing={3}>
          {!isMobile && (
            <Grid item xs={12} md={3}>
              <FilterSidebar
                categoryOptions={categoryOptions}
                locationOptions={locationOptions}
                workTypeOptions={workTypeOptions}
              />
            </Grid>
          )}

          <Grid item xs={12} md={9}>
            <JobList jobs={jobData} />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
