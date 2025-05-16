import React from "react";
import JobCard from "./JobCard";
import { Stack } from "@mui/material";
import { JobListProps } from "@/types/jobBoardInterfaces";

export const JobList: React.FC<JobListProps> = React.memo(({ jobs }) => (
  <Stack spacing={2}>
    {jobs.map((job) => (
      <JobCard key={job.id} job={job} />
    ))}
  </Stack>
));

JobList.displayName = "JobList";
