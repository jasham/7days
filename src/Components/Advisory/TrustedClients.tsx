"use client";
import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import Heading from "../Heading/Heading";
import { Button } from "../Button/Button";
import { TrustedClientsProps } from "@/types/advisoryInterfaces";

const TrustedClients: React.FC<TrustedClientsProps> = ({
  layoutVariant,
  sectionBg,
  bgImage,
  headingText,
  headingColor,
  headingDividerColor,
  dividerHeight,
  titleText,
  titleColor,
  imageSrc,
  imageAlt,
  imageBorderRadius,
  borderColor = "#132D46",
  descriptionText,
  listItems = [],
  closingText,
  ctaText,
  ctaColor,
  titleText2,
}) => {
  const hasContent = descriptionText || listItems.length > 0 || closingText;

  return (
    <Box
      sx={{
        px: { xs: 2, md: 10 },
        py: { xs: 4, md: 8 },
      }}
    >
      <Heading
        text={headingText}
        textColor={headingColor}
        dividerColor={headingDividerColor}
        dividerHeight={dividerHeight}
      />
      <Box
        component="section"
        sx={{
          background: sectionBg,
          backgroundImage: bgImage
            ? `linear-gradient(180deg, rgba(34, 139, 34, 0.4), rgba(34, 139, 34, 0.4)), url(${bgImage})`
            : undefined,
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: bgImage ? "#fff" : "inherit",
          padding: bgImage ? "25px" : undefined,
          width: "100%",
          margin: bgImage ? "0 auto" : undefined,
          borderRadius: bgImage ? "16px" : undefined,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: titleText2 ? "space-between" : "center",
            textAlign: titleText2 ? "left" : "center",
            width: "100%",
          }}
        >
          <Typography variant="h3" width={titleText2 ? "40%" : "100%"} color={titleColor} sx={{ mb: 4 }}>
            {titleText}
          </Typography>
          {titleText2 && <Typography variant="h5">{titleText2}</Typography>}
        </Box>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src={imageSrc}
              alt={imageAlt}
              sx={{ width: "100%", borderRadius: imageBorderRadius }}
            />
          </Grid>

          <Grid item xs={12} md={6} sx={{ display: "flex" }}>
            <Box
              sx={{
                width: "2px",
                height: "100%",
                bgcolor: borderColor,
                mb: 2,
              }}
            />
            <Box sx={{ ml: 2, display: "flex", flexDirection: "column" }}>
              {hasContent && (
                <>
                  {descriptionText && (
                    <Typography variant="h5" sx={{ mb: 2 }}>
                      {descriptionText}
                    </Typography>
                  )}

                  {listItems.length > 0 && (
                    <Box component="ul" sx={{ mb: 4 }}>
                      {listItems.map((item) => (
                        <Typography
                          component="li"
                          variant="h6"
                          
                          sx={{ mb: 1, listStyleType: "disc", ml: 2 }}
                          key={item}
                        >
                          {item}
                        </Typography>
                      ))}
                    </Box>
                  )}
                  {closingText && layoutVariant === "imageLeft" && (
                    <Typography
                      variant="h6"
                      
                      sx={{ mb: 4 }}
                    >
                      {closingText}
                    </Typography>
                  )}
                </>
              )}
            </Box>
          </Grid>
        </Grid>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            mt: 4,
            alignItems: "center",
          }}
        >
          {closingText && layoutVariant === "imageCenter" && (
            <Typography
              variant="h6"
              
              sx={{ mb: 4 }}
            >
              {closingText}
            </Typography>
          )}
          <Box mt="auto">
            <Button
              variantStyle="main"
              buttonColor={ctaColor}
              buttonBgColor="transparent"
              buttonBorderColor={ctaColor}
              onClick={() => {
                alert("begining");
              }}
            >
              {ctaText}
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default TrustedClients;
