"use client";

import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import Heading from "../Heading/Heading";
import { Button } from "../Button/Button";
import { SolutionsSectionProps } from "@/types/advisoryInterfaces";

const SolutionsSection: React.FC<SolutionsSectionProps> = ({
  heading,
  headingColor,
  dividerColor,
  dividerHeight,
  title,
  subtitle,
  questions,
  description,
  buttonText,
  buttonColor,
  buttonBgColor,
  buttonBorderColor,
  imageUrl,
  imageOverlay,
  imageBorderRadius = 0,
}) => {
  return (
    <Box
      sx={{
        px: { xs: 2, md: 10 },
        py: { xs: 4, md: 8 },
        background: "#D4E1EF66",
      }}
    >
      <Heading
        text={heading}
        textColor={headingColor}
        dividerColor={dividerColor}
        dividerHeight={dividerHeight}
        marginBottom="16px"
      />

      <Grid container spacing={4} my={4}>
        {/* Left text column (full-width on mobile) */}
        <Grid item xs={12} md={6}>
          <Typography variant="h2" sx={{ mb: 4 }}>
            {title}
          </Typography>

          <Typography variant="h5" sx={{ mb: 4 }}>
            {subtitle}
          </Typography>

          {/* Mobile image below subtitle */}
          <Box
            sx={{
              display: { xs: 'block', md: 'none' },
              width: '100%',
              height: 200,
              backgroundImage: `${imageOverlay}, url('${imageUrl}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              borderRadius: imageBorderRadius,
              mb: 4,
            }}
          />

          <Box component="ul" sx={{ mb: 4, pl: 2 }}>
            {questions.map((q, idx) => (
              <Typography
                component="li"
                variant="h5"
                sx={{ fontWeight: 700, mb: 2 }}
                key={idx}
              >
                {q}
              </Typography>
            ))}
          </Box>

          <Typography variant="body1" sx={{ mb: 4 }}>
            {description}
          </Typography>

          <Button
            variantStyle="main"
            buttonColor={buttonColor}
            buttonBgColor={buttonBgColor}
            buttonBorderColor={buttonBorderColor}
            onClick={() => alert("beginning")}
          >
            {buttonText}
          </Button>
        </Grid>

        {/* Right image column (hidden on mobile) */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{ display: { xs: 'none', md: 'block' } }}
        >
          <Box
            sx={{
              width: '100%',
              height: '100%',
              backgroundImage: `${imageOverlay}, url('${imageUrl}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              borderRadius: imageBorderRadius,
              minHeight: 300,
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default SolutionsSection;
