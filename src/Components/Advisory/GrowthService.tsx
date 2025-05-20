import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import Heading from "../Heading/Heading";
import { Button } from "../Button/Button";
import { GrowthServiceProps } from "@/types/recruitmentInterfaces";

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
    <Box
      sx={{
        background: isBackground ? "#D4E1EF66" : "#fff",
        px: { xs: 2, md: 10 },
        py: { xs: 4, md: 8 },
      }}
    >
      <Heading
        text={heading1}
        textColor="#132D46"
        dividerColor="#132D46"
        dividerHeight="1px"
        marginBottom="16px"
      />
      <Grid container spacing={8} mx="auto" mt={1} width="100%">
        {/* Left Side */}
        <Grid xs={12} md={5} sx={{ pt: { xs: 2, md: 8 } }}>
          <Typography variant="h2" fontWeight={700} gutterBottom>
            {heading}
          </Typography>

          <Typography variant="h5" sx={{ mb: 2 }}>
            {subheading}
          </Typography>

          <Typography variant="h5" sx={{ mb: 4 }}>
            {paragraph}
          </Typography>

          <Box
            component="img"
            src={imageSrc}
            alt={imageAlt}
            sx={{ width: "100%", borderRadius: 2, mb: 4 }}
          />
          <Button
            variantStyle="main"
            buttonColor={ctaColor}
            buttonBorderColor={ctaColor}
            buttonBgColor="transparent"
            onClick={() => {
              alert("begining");
            }}
            sx={{ display: { xs: "none", md: "flex" } }}
          >
            {leftButtonText}
          </Button>
        </Grid>

        {/* Right Side */}
        <Grid
          sx={{
            pt: { xs: 2, md: 8 }, // theme.spacing(2)=16px on xs, spacing(8)=64px on md+
            pl: { xs: 2, md: 8 },
          }}
          xs={12}
          md={7}
        >
          <Box
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              width: { xs: "100%", md: "80%" },
            }}
          >
            {services.map((service, index) => (
              <Box
                key={index}
                sx={{ display: "flex", flexDirection: "column", mb: 4, gap: 2 }}
              >
                <Typography variant="h3" fontWeight={600}>
                  {service.title}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {service.description}
                </Typography>
                {isButton && (
                  <Button
                    variantStyle="text"
                    buttonColor={ctaColor}
                    buttonBgColor="transparent"
                    onClick={() => {
                      alert("begining");
                    }}
                  >
                    {leftButtonText}
                  </Button>
                )}
              </Box>
            ))}
          </Box>
        </Grid>
      </Grid>
      <Button
        variantStyle="main"
        buttonColor={ctaColor}
        buttonBorderColor={ctaColor}
        buttonBgColor="transparent"
        onClick={() => {
          alert("begining");
        }}
        sx={{ display: { xs: "flex", md: "none" } , width: "100%" } }
      >
        {leftButtonText}
      </Button>
    </Box>
  );
};

export default GrowthService;
