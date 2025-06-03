// components/Job/JobCard.tsx
import React from "react";
import { Paper, Typography, Divider, Grid, Button, Box } from "@mui/material";
import { ArrowRightAlt } from "@mui/icons-material";
import Image from "next/image";
import { Job } from "@/types/jobBoardInterfaces";

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
      <Typography variant="h5" mb={4} color="#3E3D3D">
        {job.title}
      </Typography>

      <Typography
        variant="h6"
        
        mb={4}
        color="#6F7A81"
      >
        About the Client:
      </Typography>
      <Typography
        variant="h6"
        
        mb={4}
        color="#3E3D3D"
      >
        {job.clientDescription}
      </Typography>

      <Divider sx={{ my: 2 }} />

      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} sm={4} display="flex" alignItems="center">
          <Image
            src={"/MapPin.svg"}
            alt="Client Logo"
            width={32}
            height={32}
            style={{ borderRadius: "50%", marginRight: 8 }}
          />
          <Typography variant="h6"  color="#3E3D3D">
            {job.location}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={2} display="flex" alignItems="center">
          <Image
            src={"/Coins.svg"}
            alt="Client Logo"
            width={32}
            height={32}
            style={{ borderRadius: "50%", marginRight: 8 }}
          />
          <Typography variant="h6"  color="#3E3D3D">
            {job.salary}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={3} display="flex" alignItems="center">
          <Image
            src={"/Bag.svg"}
            alt="Client Logo"
            width={32}
            height={32}
            style={{ borderRadius: "50%", marginRight: 8 }}
          />
          <Typography variant="h6"  color="#3E3D3D">
            {job.contractType}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={3} display="flex" alignItems="center">
          <Image
            src={"/Calendar.svg"}
            alt="Client Logo"
            width={32}
            height={32}
            style={{ borderRadius: "50%", marginRight: 8 }}
          />
          <Typography variant="h6"  color="#3E3D3D">
            {job.date}
          </Typography>
        </Grid>
      </Grid>

      <Box sx={{ mt: 2, textAlign: "left" }}>
        <Button
          endIcon={<ArrowRightAlt />}
          sx={{ textTransform: "none", fontWeight: "normal", color: "#014225" }}
        >
          See Job Description
        </Button>
      </Box>
    </Paper>
  );
}
