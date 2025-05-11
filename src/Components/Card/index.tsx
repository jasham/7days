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
}

const PartnerCard: React.FC<PartnerCardProps> = ({
  icon,
  heading,
  title,
  description,
  color,
  isInverted = false,
}) => {
  return (
    <Box textAlign="center" px={2} sx={{ display: "flex", flexDirection: "column", alignItems: "center" , justifyContent: "justify-between" }}>
      {/* Local SVG icon */}
      <Box sx={{ width: 64, height: 64, mb: 2, mx: "auto", display: "flex", alignItems: "center", justifyContent: "center" }}>
        {heading ? (
          <Typography
            component="h2"
            variant="h2"
            fontWeight="bold"
            sx={{ color }}
          >
            {heading}
          </Typography>
        ) : icon ? (
          <Image
            src={icon}
            alt={title}
            width={64}
            height={64}
            style={isInverted ? { filter: "invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg) brightness(103%) contrast(103%)" } : {}}
          />
        ) : null}
      </Box>

      <Typography variant="h4" fontWeight="bold" gutterBottom sx={{ color }}>
        {title}
      </Typography>

      <Typography variant="body2">
        {description}
      </Typography>
    </Box>
  );
};

export default PartnerCard;
