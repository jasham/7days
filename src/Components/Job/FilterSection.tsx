// components/Job/FilterSection.tsx
import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import { FilterOption } from "@/types/jobBoardInterfaces";

export default function FilterSection({
  title,
  options,
}: {
  title: string;
  options: FilterOption[];
}) {
  return (
    <Accordion
      defaultExpanded
      elevation={0}
      sx={{ mb: 2, "&:before": { display: "none" } }}
    >
      <AccordionSummary
        expandIcon={<ExpandMore />}
        sx={{ px: 0, minHeight: 48 }}
      >
        <Typography variant="body1">{title}</Typography>
      </AccordionSummary>
      <AccordionDetails sx={{ p: 0 }}>
        {options.map((opt, i) => (
          <Box
            key={i}
            sx={{ display: "flex", justifyContent: "start", gap: 0.5, py: 0.5 }}
          >
            <Typography variant="body1">{opt.name}</Typography>
            <Typography variant="body1" color="text.secondary">
              ({opt.count})
            </Typography>
          </Box>
        ))}
      </AccordionDetails>
    </Accordion>
  );
}
