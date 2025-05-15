import React from "react";
import { Paper, Typography, Box } from "@mui/material";
import { JobDetailsProps } from "@/types/jobApplicationInterfaces";

export default function JobDetails({
  title,
  companyInfo,
  responsibilities,
  rewards,
  contactInfo,
}: JobDetailsProps) {
  return (
    <Paper
      elevation={0}
      sx={{
        p: 4,
        height: "100%",
        borderRadius: 2,
      }}
    >
      <Typography variant="h5" gutterBottom>
        {title}
      </Typography>

      <Typography variant="body1" fontWeight={600} gutterBottom sx={{ mt: 3 }}>
        The Company
      </Typography>
      <Typography variant="body1" fontWeight={500}>
        {companyInfo}
      </Typography>

      <Typography variant="body1" fontWeight={600} gutterBottom>
        The Role
      </Typography>
      <Box component="ul" sx={{ pl: 4 }}>
        {responsibilities.map((resp, i) => (
          <Typography
            key={i}
            component="li"
            variant="body1"
            fontWeight={500}
            sx={{ listStyleType: "disc", pl: 1 }}
          >
            {resp}
          </Typography>
        ))}
      </Box>
      <Typography variant="body1" fontWeight={600} gutterBottom sx={{ mt: 3 }}>
        The Rewards
      </Typography>
      <Typography variant="body1" fontWeight={500} gutterBottom>
        {rewards}
      </Typography>

      <Typography variant="body1" fontWeight={600} gutterBottom>
        The Application
      </Typography>
      <Typography variant="body1" fontWeight={500} gutterBottom>
        {contactInfo}
      </Typography>
      <Typography variant="body2" fontWeight={500}>
        All applications are treated in the strictest of confidence
      </Typography>
    </Paper>
  );
}
