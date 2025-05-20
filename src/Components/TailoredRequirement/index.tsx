"use client";

import React from "react";
import { Box, Stack, Typography, Divider } from "@mui/material";
import PartnerCard from "../Card";
import Image from "next/image";
import { Button } from "../Button/Button";
import { GenericProcessSectionProps } from "@/types/recruitmentInterfaces";
import Heading from "../Heading/Heading";

export default function GenericProcessSection({
  backgroundImage,
  mainHeading,
  heading,
  intro,
  steps,
  itemsHeading,
  items,
  ctaText = "Ready to Build What’s Next?",
  isHeadingLeft,
  deliverables = [],
  subHeading,
}: GenericProcessSectionProps) {
  return (
    <Box
      sx={{
        overflow: "hidden",
        color: "#fff",
        width: "100%",
        px: { xs: 2, md: 10 },
        py: { xs: 4, md: 8 },
      }}
    >
      {mainHeading && (
        <Heading
          text={mainHeading}
          textColor="#132D46"
          dividerColor="#132D46"
          dividerHeight="1px"
        />
      )}
      <Box
        sx={{
          backgroundImage: `linear-gradient(180deg, rgba(170,187,225,0.7) 0%, rgba(19,45,70,0.7) 56.73%), url('${backgroundImage}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: 4,
          px: { xs: 2, md: 8 },
          py: { xs: 6, md: 10 },
        }}
      >
        {/* Heading & Intro */}
        <Stack
          direction={{ xs: "column", md: isHeadingLeft ? "row" : "column" }}
          spacing={{ xs: 2, md: 12 }}
          mb={4}
          width="100%"
        >
          <Typography variant="h2">
            {heading}
          </Typography>
          <Box
            sx={{
              width: { xs: "100%", md: "60%" },
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            {Array.isArray(intro) &&
              intro.map((line, index) => (
                <Typography
                  key={index}
                  variant="h5"
                  sx={{ maxWidth: 700, mb: 1 }}
                >
                  {line?.description || ""}
                </Typography>
              ))}
          </Box>
        </Stack>

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
            sx={{ width: { xs: "100%", md: "40%" } }}
          >
            {subHeading}
          </Typography>
        </Box>

        {/* Steps */}
        <Stack
          direction={{ xs: "column", md: "row" }}
          divider={
            <Divider
              flexItem
              sx={{
                backgroundColor: "#FFFFFF",
                borderWidth: "1px",
                width: { xs: "100%", md: "2px" },
                height: { xs: "1px", md: "auto" },
              }}
            />
          }
          spacing={2}
          mb={6}
          justifyContent="space-between"
          alignItems="stretch"
        >
          {steps.map((step, i) => (
            <Box key={i} sx={{ display: "flex", alignItems: "stretch" }}>
              <PartnerCard
                icon={step.icon}
                title={step.title}
                description={step.description}
                color="#ffffff"
                isInverted={true}
              />
            </Box>
          ))}
        </Stack>

        {/* Deliverables */}
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={4}
          mt={6}
          mb={4}
        >
          <Stack sx={{ width: { xs: "100%", md: "40%" } }}>
            <Typography variant="h2" gutterBottom>
              {itemsHeading}
            </Typography>
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
          </Stack>
          <Stack
            spacing={3}
            sx={{ width: { xs: "100%", md: "40%" } }}
          >
            {deliverables.map((point, index) => (
              <Stack
                direction="row"
                spacing={1}
                alignItems="center"
                key={index}
              >
                <Image
                  src={point?.icon || ""}
                  alt={""}
                  width={36}
                  height={36}
                  style={{ objectFit: "contain" }}
                />
                <Typography variant="body1">{point?.title}</Typography>
              </Stack>
            ))}
          </Stack>
        </Stack>

        {/* CTA */}
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Button
            variantStyle="main"
            buttonColor="#ffffff"
            buttonBgColor="transparent"
            buttonBorderColor="#ffffff"
            onClick={() =>
              console.log("Redirect to Read to Build What’s Next?")
            }
          >
            {ctaText}
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
