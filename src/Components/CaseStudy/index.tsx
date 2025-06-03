"use client";

import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Heading from "../Heading/Heading";
import { Button } from "../Button/Button";
import { CaseStudyHighlightProps } from "@/types/homeInterfaces";

const CaseStudyHighlight: React.FC<CaseStudyHighlightProps> = ({
  imageSrc,
  imageAlt,
  title,
  description,
  ctaText,
  onClick,
  heading,
  isReverse = false,
  isBackground = false,
  titleDescription,
}) => {
  return (
    <Box
      sx={{
        py: 6,
        px: { xs: 2, md: 10 },
        backgroundColor: isBackground ? "#D4E1EF66" : "#ffffff",
      }}
    >
      {heading && (
        <Heading
          text={heading}
          textColor="#132D46"
          dividerColor="#132D46"
          dividerHeight="1px"
        />
      )}

      <Stack
        direction={{ xs: "column", md: isReverse ? "row-reverse" : "row" }}
        spacing={4}
        alignItems="center"
        justifyContent="space-between"
        sx={{ mt: 4 }}
      >
        {/* Image Section */}
        <Box
          component="img"
          src={imageSrc}
          alt={imageAlt}
          sx={{
            width: { xs: "100%", md: "50%" },
            borderRadius: 2,
            objectFit: "cover",
            maxHeight: { xs: 200, md: 400 },
          }}
        />

        {/* Text Section */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            justifyContent: "center",
            width: { xs: "100%", md: "45%" },
            textAlign: { xs: "center", md: "left" },
          }}
        >
          <Typography
            variant="h3"
            color="#132D46"
            sx={{ fontWeight: 700 }}
          >
            {title}
          </Typography>
          { titleDescription && (
            <Typography
            variant="h4"
            color="#132D46"
            sx={{ fontWeight: 400 }}
          >
            {titleDescription}
          </Typography>
          )}
          <Typography variant="body1" color="#132D46" sx={{whiteSpace: 'pre-line'}}>
            {description}
          </Typography>
          <Box sx={{ display: "flex", justifyContent: { xs: "center", md: "flex-start" } }}>
            <Button
              variantStyle="main"
              buttonColor="#132D46"
              buttonBgColor="transparent"
              buttonBorderColor="#132D46"
              onClick={onClick}
            >
              {ctaText}
            </Button>
          </Box>
        </Box>
      </Stack>
    </Box>
  );
};

export default CaseStudyHighlight;
