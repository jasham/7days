// prettier-ignore
'use client';
import { Box, Grid, Typography } from "@mui/material";
import CustomButton from "../Button";

export default function CaseStudyHighlight() {
  return (
    <Box sx={{ py: 6, px: 2, backgroundColor: "white" }}>
      <Grid
        container
        spacing={4}
        alignItems="center"
        justifyContent="center"
        maxWidth="lg"
        margin="auto"
      >
        {/* Image Section */}
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src="/caseStudy.jpg" // replace with correct path
            alt="Construction worker"
            sx={{
              width: "100%",
              borderRadius: 2,
              objectFit: "cover",
            }}
          />
        </Grid>

        {/* Text Section */}
        <Grid item xs={12} md={6}>
          <Typography
            variant="h5"
            fontWeight="bold"
            gutterBottom
            sx={{
              fontFamily: "Helvetica Neue",
              fontWeight: "700",
              fontSize: "40px",
              lineHeight: "100%",
              letterSpacing: "0%",
              color: "#132D46",
            }}
          >
            How Strategic Recruitment & Consulting for a Sydney Head Contractor
            led to 34% Growth in 6 months.
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            paragraph
            sx={{
              fontFamily: "Helvetica Neue",
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: 1,
              color: "#132D46",
              letterSpacing: 0,
            }}
          >
            Our comprehensive approach that improved operational efficiency by
            30% for a leading head contractor.
          </Typography>
          <CustomButton
            text="See how we deliver results"
            onClick={() => console.log("Clicked")}
            variant="outlined"
            color="#132D46"
          />
        </Grid>
      </Grid>
    </Box>
  );
}
