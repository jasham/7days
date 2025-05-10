// src/Components/TailoredRequirement.tsx
"use client";

import React, { ReactNode } from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import { CheckCircleOutline } from "@mui/icons-material";
import PartnerCard from "../Card";

export interface Step {
  icon: ReactNode;
  title: string;
  description: string;
  isHeadingLeft?: boolean;
  deliverables?: string[];
}

export interface Item {
  title?: string;
  description: string;
}

interface SectionProps {
  backgroundImage: string;
  heading: string;
  intro: Item[];
  steps: Step[];
  itemsHeading: string;
  items: Item[];
  ctaText?: string;
  isHeadingLeft?: boolean;
  deliverables?: string[];
}

export default function GenericProcessSection({
  backgroundImage,
  heading,
  intro,
  steps,
  itemsHeading,
  items,
  ctaText = "Ready to Build What’s Next?",
  isHeadingLeft,
  deliverables = [],
}: SectionProps) {
  return (
    <Box
      sx={{
        borderRadius: "20px",
        overflow: "hidden",
        color: "#fff",
        mx: "auto",
        width: "100%",
        maxWidth: "lg",
        my: 6,
      }}
    >
      <Box
        sx={{
          backgroundImage: `linear-gradient(180deg, rgba(170,187,225,0.7) 0%, rgba(19,45,70,0.7) 56.73%), url('${backgroundImage}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          px: { xs: 4, md: 8 },
          py: { xs: 6, md: 10 },
        }}
      >
        {/* Heading & Intro */}
        <Box
          sx={{
            mb: 4,
            display: isHeadingLeft ? "flex" : "block",
            width: "100%",
            gap: 12,
          }}
        >
          <Typography
            variant="h4"
            fontWeight={700}
            gutterBottom
            sx={{ width: "40%" }}
          >
            {heading}
          </Typography>
          <Box
            sx={{
              width: "60%",
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            {Array.isArray(intro) &&
              intro.map((line, index) => (
                <Typography
                  key={index}
                  variant="body1"
                  sx={{ maxWidth: 700, mb: 1 }}
                >
                  {line?.description || ""}
                </Typography>
              ))}
          </Box>
        </Box>

        {/* Work Points */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 2,
            mb: 4,
            width: "100%",
            textAlign: "center",
          }}
        >
          <Typography
            variant="h4"
            fontWeight={700}
            gutterBottom
            sx={{ width: "40%" }}
          >
            Our Process
          </Typography>
        </Box>

        {/* Steps */}
        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 6 }}>
          {steps.map((step, i) => (
            <Box key={i} sx={{ display: "flex", alignItems: "stretch" }}>
              <PartnerCard
                icon={step.icon}
                title={step.title}
                description={step.description}
                color="#ffffff"
              />
              {i < steps.length - 1 && (
                <Box
                  sx={{
                    width: "2px",
                    height: "100%",
                    backgroundColor: "#FFFFFF",
                    mx: 2,
                  }}
                />
              )}
            </Box>
          ))}
        </Box>

        {/* Deliverables */}
        <Box mt={6} mb={4} sx={{ display: "flex", gap: 16 }}>
          <Stack>
            <Typography variant="h4" fontWeight={600} gutterBottom>
              {itemsHeading}
            </Typography>
            <Typography variant="body2" fontWeight={400} gutterBottom>
              {Array.isArray(items) &&
                items.map((line, index) => (
                  <Typography
                    key={index}
                    variant="body1"
                    sx={{ maxWidth: 700, mb: 1 }}
                  >
                    {line?.description || ""}
                  </Typography>
                ))}
            </Typography>
          </Stack>
          <Stack spacing={3}>
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

        {/* CTA */}
        <Box sx={{ display: "flex", justifyContent: "center" }}>
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
            {ctaText}
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
