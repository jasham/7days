// prettier-ignore
'use client';
import { Box, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import PartnerCard from "../Card/index";

import CustomButton from "../Button";

const ResultsSection: React.FC = () => {
  return (
    <Box px={4} py={8} maxWidth="lg" mx="auto" sx={{ color: "#132D46" }}>
      <Typography variant="overline" color="textSecondary" gutterBottom>
        Results
      </Typography>
      <Divider sx={{ mb: 4 }} />
      <Box
        sx={{
          // width: "80vw",
          height: "95vh",
          backgroundColor: " #132D46",
          color: "white",
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          borderRadius: "20px",
          marginLeft: "0",
          marginRight: "0",
        }}
      >
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          // width={"100vw"}
          spacing={0}
          // mb={4}
          mt={6}
        >
          <Grid item xs={12} md={8}>
            <Typography variant="h4">
              Measured by Results. Chosen for Impact.
            </Typography>
          </Grid>
        </Grid>

        <Grid container spacing={4} alignItems="stretch">
          {/* First Card */}
          <Grid item xs={12} md={4}>
            <PartnerCard
              icon={"20+"}
              title="Years of Industry Expertise"
              description="Backed by over two decades of recruitment and consulting experience across Property, Construction, Engineering, and Corporate sectors."
              color="#ffffff"
            />
          </Grid>

          {/* Second Card */}
          <Grid item xs={12} md={4}>
            <PartnerCard
              icon={"95%"}
              title="Client Retention Rate"
              description="Our clients trust us to deliver — and 95% return to partner with Henton again for future recruitment and strategic needs."
              color="#ffffff"
            />
          </Grid>

          {/* Third Card */}
          <Grid item xs={12} md={4}>
            <PartnerCard
              icon={"98%"}
              title="of Roles Filled Within 30 Days"
              description="Our efficient, targeted recruitment process ensures critical roles are placed faster — without compromising on quality."
              color="#ffffff"
            />
          </Grid>
        </Grid>

        <Grid
          container
          justifyContent="center"
          alignItems="center"
          // width={"100vw"}
          spacing={1}
          mb={4}
        >
          <Grid item xs={12} md={6}>
            <Typography variant="h6">
              When expertise, trust, and speed come together, <br></br>growth
              isn’t a goal — it’s the outcome.
            </Typography>
          </Grid>
        </Grid>

        <Box textAlign="center">
          <CustomButton
            text={"Read to Build What’s Next?"}
            onClick={() => alert("beginning")}
            variant="outlined"
            sx={{ color: "#FFFFFF", borderColor: "#ffffff" }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default ResultsSection;
