import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import Heading from "../Heading/Heading";
import CustomButton from "../Button";

export interface TrustedClientsProps {
  layoutVariant: "imageLeft" | "imageCenter"; // determines layout
  sectionBg: string;
  bgImage?: string; // for background image if any
  headingText: string;
  titleText2?: string;
  headingColor: string;
  headingDividerColor: string;
  dividerHeight: string;
  titleText: string;
  titleColor: string;
  imageSrc: string;
  imageAlt: string;
  imageBorderRadius: number | string;
  borderColor?: string;
  descriptionText?: string;
  listItems?: string[];
  closingText?: string;
  ctaText: string;
  ctaColor: string;
}

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
    <Box sx={{ background: sectionBg, py: { xs: 6, md: 8 } }}>
      <Box sx={{ mx: 18 }}>
        <Heading
          text={headingText}
          textColor={headingColor}
          dividerColor={headingDividerColor}
          dividerHeight={dividerHeight}
        />
      </Box>
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
          width: bgImage ? "75%" : "100%",
          margin: bgImage ? "0 auto" : undefined,
          borderRadius: bgImage ? "16px" : undefined,
        }}
      >
        <Box sx={{ maxWidth: 1200, mx: "auto", px: 2 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontWeight: "bold",
                color: titleColor,
                mb: 4,
                textAlign: layoutVariant === "imageCenter" ? "center" : "left",
                width: "50%",
              }}
            >
              {titleText}
            </Typography>
            {titleText2 && (
              <Typography
                variant="body1"
                sx={{
                  color: titleColor,
                  mb: 4,
                  textAlign:
                    layoutVariant === "imageCenter" ? "center" : "left",
                  width: "50%",
                }}
              >
                {titleText2}
              </Typography>
            )}
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
                      <Typography variant="body1" sx={{ mb: 2 }}>
                        {descriptionText}
                      </Typography>
                    )}

                    {listItems.length > 0 && (
                      <Box component="ul" sx={{ mb: 4 }}>
                        {listItems.map((item) => (
                          <Typography
                            component="li"
                            variant="body2"
                            sx={{ mb: 1, listStyleType: "disc", ml: 2 }}
                            key={item}
                          >
                            {item}
                          </Typography>
                        ))}
                      </Box>
                    )}
                    {closingText && layoutVariant === "imageLeft" && (
                      <Typography variant="body1" sx={{ mb: 4 }}>
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
              <Typography variant="body1" sx={{ mb: 4 }}>
                {closingText}
              </Typography>
            )}
            <Box mt="auto">
              <CustomButton
                text={ctaText}
                variant="outlined"
                color={ctaColor}
                sx={{
                  width: "fit-content",
                  height: "fit-content",
                }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default TrustedClients;
