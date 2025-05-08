// prettier-ignore
'use client';
import { Box, Typography } from "@mui/material";
import React from "react";

interface PartnerCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

const PartnerCard: React.FC<PartnerCardProps> = ({
  icon,
  title,
  description,
  color,
}) => {
  return (
    <Box textAlign="center" px={2}>
      <Box mb={2} fontSize={40} color={color}>
        {icon}
      </Box>
      <Typography
        variant="h6"
        fontWeight="bold"
        gutterBottom
        sx={{ color: { color } }}
      >
        {title}
      </Typography>
      <Typography variant="body2" color={color}>
        {description}
      </Typography>
    </Box>
  );
};

export default PartnerCard;
