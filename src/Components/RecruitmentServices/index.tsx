"use client";
import {
  Box,
  Button,
  CardMedia,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import CustomButton from "../Button";
const services = [
  {
    title: "Permanent Recruitment",
    description:
      "Secure long-term employees who integrate into your culture, build capability, and drive business performance over time.\nWe focus on hiring professionals who don’t just fill a role — they strengthen your team.",
  },
  {
    title: "Contract Recruitment",
    description:
      "Access flexible, project-ready talent to manage fluctuations, support critical projects or cover peak periods.\nOur contract recruitment process ensures fast mobilisation without compromising quality.",
  },
  {
    title: "Executive Search",
    description:
      "Identify and secure the leaders who will define your organisation’s future.\nOur executive search process is discreet, data-led and aligned with your strategic direction.",
  },
];

const RecruitmentServices: React.FC = () => {
  return (
    <Box sx={{ py: 10, backgroundColor: "#D4E1EF66" }}>
      <Container maxWidth="lg">
        <Typography variant="overline" gutterBottom>
          RECRUITMENT SERVICES
        </Typography>
        <Divider sx={{ mb: 4 }} />
        <Grid
          container
          spacing={6}
          alignItems="center"
          sx={{ color: " #132D46" }}
        >
          {/* Left Column */}
          <Grid item xs={12} md={6}>
            <Typography
              variant="h4"
              fontWeight="bold"
              gutterBottom
              sx={{ color: " #132D46" }}
            >
              Tailored <br />
              Recruitment <br />
              Processes
            </Typography>

            <Typography
              variant="body1"
              sx={{ mb: 3, maxWidth: 500, color: " #132D46" }}
            >
              At Henton, we deliver three core recruitment solutions — each
              aligned to your operational needs, timelines and long-term growth.
            </Typography>

            <CardMedia
              component="img"
              image="/growth.jpg" // Replace with your actual image path
              alt="Recruitment meeting"
              sx={{
                borderRadius: 2,
                mb: 3,
                maxWidth: 500,
                color: " #132D46",
                background:
                  "linear-gradient(180deg, rgba(19, 45, 70, 0.48) 0%, rgba(19, 45, 70, 0.6) 100%)",
              }}
            />
            <CustomButton
              text="Build Your Team"
              onClick={() => alert("beginning")}
              variant="outlined"
              sx={{ color: " #132D46", borderColor: " #132D46" }}
            />
          </Grid>

          {/* Right Column */}
          <Grid item xs={12} md={6}>
            <Stack spacing={4}>
              {services.map((item, index) => (
                <Box key={index}>
                  <Typography
                    variant="h6"
                    fontWeight="bold"
                    gutterBottom
                    sx={{ color: " #132D46" }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    whiteSpace="pre-line"
                    sx={{ color: " #132D46" }}
                  >
                    {item.description}
                  </Typography>
                  <Button
                    size="small"
                    sx={{ mt: 1, color: " #132D46" }}
                    endIcon={<span>&rarr;</span>}
                  >
                    Hire Talent
                  </Button>
                </Box>
              ))}
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default RecruitmentServices;
