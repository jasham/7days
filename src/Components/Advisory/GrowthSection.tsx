"use client";
import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import Heading from "../Heading/Heading";
import { Button } from "../Button/Button";

const questions = [
  {
    title: "Market Mapping & Competitive Insight",
    body: "We analyse sector dynamics, customer segments and competitor positioning to identify viable paths to growth.",
  },
  {
    title: "Opportunity Prioritisation",
    body: "We identify what’s worth pursuing now, what can wait, and where you’re wasting time or energy.",
  },
  {
    title: "Go-to-Market Strategy",
    body: "We define channels, messaging, targeting and actions to launch or expand with purpose.",
  },
  {
    title: "Execution Support",
    body: "We partner with internal teams or bring in the right resources to activate change — across marketing, sales or operational delivery.",
  },
];

const GrowthSection: React.FC = () => {
  return (
    <Box
      sx={{
        px: { xs: 2, md: 10 },
        py: { xs: 4, md: 8 },
        background: "#D4E1EF66",
      }}
    >
      <Heading
        text="How We Work"
        textColor="#132D46"
        dividerColor="#132D46"
        dividerHeight="1px"
        marginBottom="16px"
      />
      <Grid container spacing={4} my={4}>
        <Grid item xs={12} md={6}>
          <Typography variant="h2" sx={{ mb: 4 }}>
            How We Grow Businesses
          </Typography>
          <Typography variant="h5" fontWeight={700} sx={{ mb: 4 }}>
            Growth isn’t a plan. It’s a series of decisions.
          </Typography>
          <Typography variant="h5" fontWeight={500} sx={{ mb: 4 }}>
            We bring structure, speed and market intelligence to every
            engagement — with support from planning to execution. Every growth
            strategy engagement includes:
          </Typography>
          <Box component="ul" sx={{ mb: 4 }}>
            {questions.map((item) => (
              <Typography
                component="li"
                variant="h5"
                sx={{ fontWeight: 700, mb: 2 }}
                key={item.title}
              >
                {item.title} -
                <Typography
                  variant="h5"
                  sx={{ fontWeight: 500 }}
                  component="span"
                >
                  {item.body}
                </Typography>
              </Typography>
            ))}
          </Box>
          <Button
            variantStyle="main"
            buttonColor={"#132D46"}
            buttonBgColor="transparent"
            buttonBorderColor={"#132D46"}
            onClick={() => {
              alert("begining");
            }}
          >
            {"Build your Team"}
          </Button>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              width: "100%",
              height: "100%",
              backgroundImage: `linear-gradient(to right, #132D46CC, #132D46CC), url('/whatwesolve.jpg')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              borderRadius: "8px",
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default GrowthSection;
