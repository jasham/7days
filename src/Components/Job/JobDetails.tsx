import React from "react";
import { Paper, Typography, Box } from "@mui/material";

export interface JobDetailsProps {
  title: string;
  companyInfo: string;
  responsibilities: string[];
  rewards: string;
  contactInfo: string;
}

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
      <Typography variant="h5" fontWeight="semibold" gutterBottom>
        {title}
      </Typography>

      <Typography
        variant="subtitle1"
        fontWeight="semibold"
        gutterBottom
        sx={{ mt: 3 }}
      >
        The Company
      </Typography>
      <Typography variant="body2" paragraph>
        {companyInfo}
      </Typography>

      <Typography variant="subtitle1" fontWeight="semibold" gutterBottom>
        The Role
      </Typography>
      <Box component="ul" sx={{ pl: 4 }}>
        {responsibilities.map((resp, i) => (
          <Typography
            key={i}
            component="li"
            variant="body2"
            sx={{ listStyleType: "disc", pl: 1 }}
          >
            {resp}
          </Typography>
        ))}
      </Box>

      <Typography
        variant="subtitle1"
        fontWeight="semibold"
        gutterBottom
        sx={{ mt: 3 }}
      >
        The Rewards
      </Typography>
      <Typography variant="body2" paragraph>
        {rewards}
      </Typography>

      <Typography variant="subtitle1" fontWeight="semibold" gutterBottom>
        The Application
      </Typography>
      <Typography variant="body2" paragraph>
        {contactInfo}
      </Typography>

      <Typography variant="body2" paragraph>
        All applications are treated in the strictest of confidence
      </Typography>
    </Paper>
  );
}
