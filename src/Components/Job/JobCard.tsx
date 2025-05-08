// components/Job/JobCard.tsx
import React from "react";
import {
  Paper,
  Typography,
  Divider,
  Grid,
  Button,
  Box,
} from "@mui/material";
import {
  ArrowRightAlt,
} from "@mui/icons-material";
import Image from "next/image";

export interface Job {
  id: number;
  title: string;
  clientDescription: string;
  location: string;
  salary: string;
  contractType: string;
  date: string;
}

export default function JobCard({ job }: { job: Job }) {
  return (
    <Paper
      elevation={0}
      sx={{
        p: 3,
        mb: 2,
        border: "1px solid",
        borderColor: "divider",
        borderRadius: 2,
      }}
    >
      <Typography variant="h6" gutterBottom>
        {job.title}
      </Typography>

      <Typography variant="subtitle2" color="text.secondary" gutterBottom>
        About the Client:
      </Typography>
      <Typography variant="body2" paragraph>
        {job.clientDescription}
      </Typography>

      <Divider sx={{ my: 2 }} />

      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} sm={4} display="flex" alignItems="center">
          <Image src={"/MapPin.svg"} alt="Client Logo" width={32} height={32} style={{ borderRadius: "50%", marginRight: 8 }} />
          <Typography variant="body1">{job.location}</Typography>
        </Grid>
        <Grid item xs={12} sm={2} display="flex" alignItems="center">
        <Image src={"/Coins.svg"} alt="Client Logo" width={32} height={32} style={{ borderRadius: "50%", marginRight: 8 }} />
          <Typography variant="body1">{job.salary}</Typography>
        </Grid>
        <Grid item xs={12} sm={3} display="flex" alignItems="center">
        <Image src={"/Bag.svg"} alt="Client Logo" width={32} height={32} style={{ borderRadius: "50%", marginRight: 8 }} />
          <Typography variant="body1">{job.contractType}</Typography>
        </Grid>
        <Grid item xs={12} sm={3} display="flex" alignItems="center">
        <Image src={"/Calendar.svg"} alt="Client Logo" width={32} height={32} style={{ borderRadius: "50%", marginRight: 8 }} />
          <Typography variant="body1">{job.date}</Typography>
        </Grid>
      </Grid>

      <Box sx={{ mt: 2, textAlign: "left" }}>
        <Button
          endIcon={<ArrowRightAlt />}
          sx={{ textTransform: "none", fontWeight: "normal" , color: "#014225" }}
        >
          See Job Description
        </Button>
      </Box>
    </Paper>
  );
}
