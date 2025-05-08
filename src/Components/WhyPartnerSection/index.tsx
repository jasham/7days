// prettier-ignore
'use client';
import { Box, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import PartnerCard from "../Card/index";

import ChangeCircleOutlinedIcon from "@mui/icons-material/ChangeCircleOutlined";
import HandshakeOutlinedIcon from "@mui/icons-material/HandshakeOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import CustomButton from "../Button";

const WhyPartnerSection: React.FC = () => {
  return (
    <Box px={4} py={8} maxWidth="lg" mx="auto" sx={{ color: "#132D46" }}>
      <Typography variant="overline" color="textSecondary" gutterBottom>
        Work With The Experts
      </Typography>
      <Divider sx={{ mb: 4 }} />
      <Grid
        container
        justifyContent="space-between"
        alignItems="center"
        spacing={2}
        mb={4}
      >
        <Grid item xs={12} md={6}>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Why Partner With Henton Consulting?
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="body1" color="textSecondary">
            Expertise. Strategy. Results. Helping you build stronger teams and
            lasting success.
          </Typography>
        </Grid>
      </Grid>

      <Grid container spacing={4} alignItems="stretch">
        {/* First Card */}
        <Grid item xs={12} md={4}>
          <PartnerCard
            icon={<ChangeCircleOutlinedIcon fontSize="inherit" />}
            title="Expertise That Anticipates Change"
            description="Decades of real-industry experience helping you stay ahead of evolving markets."
            color="#132D46"
          />
        </Grid>

        {/* Second Card */}
        <Grid item xs={12} md={4}>
          <PartnerCard
            icon={<TimelineOutlinedIcon fontSize="inherit" />}
            title="Strategy That Drives Results"
            description="Bespoke solutions that turn challenges into growth opportunities."
            color="#132D46"
          />
        </Grid>

        {/* Third Card */}
        <Grid item xs={12} md={4}>
          <PartnerCard
            icon={<HandshakeOutlinedIcon fontSize="inherit" />}
            title="Partnerships That Deliver"
            description="95% of clients trust us again — because we deliver on outcomes, not promises."
            color="#132D46"
          />
        </Grid>
      </Grid>

      <Box textAlign="center" mt={6}>
        <CustomButton
          text={"Read to Build What’s Next?"}
          onClick={() => alert("beginning")}
          variant="outlined"
          sx={{ color: "#132D46", borderColor: "#132D46" }}
        />
      </Box>
    </Box>
  );
};

export default WhyPartnerSection;
