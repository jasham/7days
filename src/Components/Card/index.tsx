'use client';

import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

interface PartnerCardProps {
  icon?: string;        // path to local SVG
  heading?: string;     // alternative to icon
  title: string;
  description: string;
  color: string;
  isInverted?: boolean; // optional prop to invert colors
  headingVariant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "subtitle1" | "subtitle2" | "body1" | "body2";
  titleVariant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "subtitle1" | "subtitle2" | "body1" | "body2";
  descriptionVariant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "subtitle1" | "subtitle2" | "body1" | "body2";
}

const PartnerCard: React.FC<PartnerCardProps> = ({
  icon,
  heading,
  title,
  description,
  color,
  isInverted = false,
  headingVariant = "h1",
  titleVariant = "h4",
  descriptionVariant = "h6",
}) => {
  return (
    <Box
      textAlign="center"
      px={2}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "justify-between",
      }}
    >
      {/* Local SVG icon or heading */}
      <Box
        sx={{
          width: 64,
          height: 64,
          mb: 2,
          mx: "auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 6,
        }}
      >
        {heading ? (
          <Typography variant={headingVariant} textTransform="capitalize">{heading}</Typography>
        ) : icon ? (
          <Image
            src={icon}
            alt={title}
            width={64}
            height={64}
            style={
              isInverted
                ? {
                    filter:
                      "invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg) brightness(103%) contrast(103%)",
                  }
                : {}
            }
          />
        ) : null}
      </Box>

      <Typography variant={titleVariant} fontWeight="bold" gutterBottom color={color} textTransform="capitalize">
        {title}
      </Typography>

      <Typography variant={descriptionVariant} textTransform="capitalize">
        {description}
      </Typography>
    </Box>
  );
};

export default PartnerCard;