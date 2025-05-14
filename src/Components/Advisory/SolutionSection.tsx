"use client";
import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import Heading from "../Heading/Heading";
import { Button } from "../Button/Button";

const questions = [
  "Is our current team structure aligned to where we're going?",
  "Do we have the right leadership layers — or too many?",
  "Are roles defined by outcomes, or just inherited job titles?",
  "How do we navigate a restructure without losing momentum?",
  "Where are our capability gaps, and how do we close them fast?",
  "What's stopping our teams from delivering more with less?",
];

const SolutionsSection: React.FC = () => {
  return (
    <Box
      sx={{
        px: { xs: 2, md: 10 },
        py: { xs: 4, md: 8 },
        background: "#D4E1EF66",
      }}
    >
      <Heading
        text="Advisory & Consulting Services"
        textColor="#132D46"
        dividerColor="#132D46"
        dividerHeight="1px"
        marginBottom="16px"
      />
      <Grid container spacing={4} my={4}>
        <Grid item xs={12} md={6}>
          <Typography variant="h2" sx={{ mb: 4 }}>
            What We Solve
          </Typography>
          <Typography variant="h5" sx={{ mb: 4 }}>
            We work with businesses at critical points where structure,
            leadership and commercial direction must evolve to meet the next
            stage of growth. We help leaders answer questions like:
          </Typography>
          <Box component="ul" sx={{ mb: 4 }}>
            {questions.map((q) => (
              <Typography
                component="li"
                variant="h5"
                sx={{ fontWeight: 700, mb: 2 }}
                key={q}
              >
                {q}
              </Typography>
            ))}
          </Box>
          <Typography variant="body1" sx={{ mb: 4 }}>
            These are strategic problems — not HR issues. We help you unpack
            them, refocus your structure, and make decisions that hold up under
            investor scrutiny, board pressure and business complexity.
          </Typography>
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

export default SolutionsSection;
