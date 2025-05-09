"use client";
import { CheckCircleOutline } from "@mui/icons-material";
import ChangeCircleOutlinedIcon from "@mui/icons-material/ChangeCircleOutlined";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import PartnerCard from "../Card";

const processSteps = [
  {
    title: "Strategic Alignment",
    description:
      "Define role outcomes, leadership traits and team fit before search begins.",
  },
  {
    title: "Direct Sourcing",
    description:
      "Activate passive candidates through targeted outreach and industry networks.",
  },
  {
    title: "Rigorous Assessment",
    description:
      "Evaluate behavioural, leadership and technical capability through structured screening.",
  },
  {
    title: "Cultural fit screening",
    description:
      "Align values, communication style and team dynamics via stakeholder-led referencing.",
  },
];

const deliverables = [
  "Shortlists delivered with pace – never at the expense of quality",
  "Market insights and real-time availability",
  "Confidence in every hire",
];

export default function TailoredRecruitment() {
  return (
    <Box
      sx={{
        borderRadius: "20px",
        overflow: "hidden",
        position: "relative",
        color: "#fff",
        mx: "auto",
        width: "100%",
        maxWidth: "lg",
        my: 6,
      }}
    >
      {/* Background image with overlay */}
      <Box
        sx={{
          backgroundImage:
            "linear-gradient(180deg, rgba(170, 187, 225, 0.7) 0%, rgba(19, 45, 70, 0.7) 56.73%), url('/tailoredImage.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          px: { xs: 4, md: 8 },
          py: { xs: 6, md: 10 },
        }}
      >
        {/* Heading & Intro */}
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h4" fontWeight={700} gutterBottom>
            Tailored Recruitment Processes
          </Typography>
          <Typography variant="body1" sx={{ mb: 4, maxWidth: 700 }}>
            We combine search precision with business fluency. <br />
            Our process includes:
          </Typography>
        </Box>

        {/* 4 Column Process Grid */}
        <Grid container spacing={4}>
          {processSteps.map((item, index) => (
            <Grid item xs={12} md={3} key={index}>
              <PartnerCard
                icon={<ChangeCircleOutlinedIcon fontSize="inherit" />}
                title={item.title}
                description={item.description}
                color="#ffffff"
              />
            </Grid>
          ))}
        </Grid>

        {/* Deliverables */}
        <Box mt={6} sx={{ display: "flex", justifyContent: "space-between" }}>
          <Stack>
            <Typography variant="h6" fontWeight={600} gutterBottom>
              We deliver:
            </Typography>
            <Typography>
              We deliver fast, focused recruitment through precision <br />
              search, real-time market intelligence and deep industry <br />
              alignment.
            </Typography>
          </Stack>
          <Stack spacing={1}>
            {deliverables.map((point, index) => (
              <Stack
                direction="row"
                spacing={1}
                alignItems="center"
                key={index}
              >
                <CheckCircleOutline sx={{ fontSize: 20, color: "#00FFB2" }} />
                <Typography variant="body2">{point}</Typography>
              </Stack>
            ))}
          </Stack>
        </Box>

        {/* CTA Button */}
        <Box mt={4}>
          <Button
            variant="outlined"
            sx={{
              borderColor: "#fff",
              color: "#fff",
              "&:hover": {
                backgroundColor: "#ffffff22",
                borderColor: "#fff",
              },
            }}
          >
            Ready to Build What’s Next?
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
