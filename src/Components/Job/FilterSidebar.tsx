// components/Job/FilterSidebar.tsx
import React from "react";
import { Paper, Typography, Divider } from "@mui/material";
import FilterSection from "./FilterSection";
import { FilterOption } from "@/types/jobBoardInterfaces";

export default function FilterSidebar({
  categoryOptions,
  locationOptions,
  workTypeOptions,
}: {
  categoryOptions: FilterOption[];
  locationOptions: FilterOption[];
  workTypeOptions: FilterOption[];
}) {
  return (
    <Paper elevation={0} sx={{ p: 2, bgcolor: "white", borderRadius: 2 }}>
      <Typography variant="h5" gutterBottom>
        Refine Search
      </Typography>

      <FilterSection title="Category" options={categoryOptions} />
      <Divider sx={{ my: 1 }} />

      <FilterSection title="Location" options={locationOptions} />
      <Divider sx={{ my: 1 }} />

      <FilterSection title="Work Type" options={workTypeOptions} />
    </Paper>
  );
}
