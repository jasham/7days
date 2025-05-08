// components/Job/JobList.tsx
import React from "react";
import JobCard, { Job } from "./JobCard";

export default function JobList({ jobs }: { jobs: Job[] }) {
  return (
    <>
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </>
  );
}
