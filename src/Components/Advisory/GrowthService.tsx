import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import CustomButton from "../Button";
import Heading from "../Heading/Heading";

export interface GrowthServiceProps {
  heading1: string;
  heading: string;
  subheading: string;
  paragraph: string;
  imageSrc: string;
  imageAlt: string;
  leftButtonText: string;
  services: { title: string; description: string }[];
  ctaColor: string;
  isBackground?: boolean;
  isButton?: boolean;
}

const GrowthService: React.FC<GrowthServiceProps> = ({
  heading,
  subheading,
  paragraph,
  imageSrc,
  imageAlt,
  leftButtonText,
  services,
  ctaColor,
  heading1,
  isBackground = false,
  isButton = false,
}) => {
  return (
    <Box sx={{ background: isBackground ? "#D4E1EF66" : "#fff" }}>
      <Box
        component="section"
        sx={{ py: { xs: 6, md: 10 }, px: { xs: 2, md: 6 }, mx: 12 }}
      >
        <Heading
          text={heading1}
          textColor="#132D46"
          dividerColor="#132D46"
          dividerHeight="1px"
          marginBottom="16px"
        />
        <Grid container spacing={8} mx="auto" mt={1}>
          {/* Left Side */}
          <Grid xs={12} md={5} sx={{ paddingTop: 8 }}>
            <Typography variant="h4" fontWeight={700} gutterBottom>
              {heading}
            </Typography>

            <Typography variant="body1" sx={{ mb: 2 }}>
              {subheading}
            </Typography>

            <Typography variant="body1" sx={{ mb: 4 }}>
              {paragraph}
            </Typography>

            <Box
              component="img"
              src={imageSrc}
              alt={imageAlt}
              sx={{ width: "100%", borderRadius: 2, mb: 4 }}
            />

            <CustomButton
              text={leftButtonText}
              variant="outlined"
              color={ctaColor}
            />
          </Grid>

          {/* Right Side */}
          <Grid item xs={12} md={7}>
            <Box
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                width: "80%",
              }}
            >
              {services.map((service, index) => (
                <Box key={index} sx={{ mb: 5 }}>
                  <Typography variant="h5" fontWeight={600} gutterBottom>
                    {service.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {service.description}
                  </Typography>
                  {isButton && (
                    <CustomButton
                    text={leftButtonText}
                    variant="outlined"
                    color={ctaColor}
                    isBorder={false}
                    sx={{ fontSize: "12px", marginTop: "8px" }}
                  />
                  )}
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default GrowthService;
