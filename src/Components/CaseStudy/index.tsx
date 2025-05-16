"use client";

import { Box, Typography } from "@mui/material";
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
}) => {
  return (
    <Box
      sx={{
        py: 6,
        px: { xs: 2, md: 10 },
        backgroundColor: isBackground ? "#D4E1EF66" : "#ffffff",
      }}
    >
      <Box>

        {heading && (
          <Heading
            text={heading}
            textColor="#132D46"
            dividerColor="#132D46"
            dividerHeight="1px"
          />
        )}

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: isReverse ? "row-reverse" : "row",
            alignItems: "center",
            gap: 2,
          }}
        >
          {/* Image Section */}

          <Box
            component="img"
            src={imageSrc}
            alt={imageAlt}
            sx={{
              width: "50%",
              borderRadius: 2,
              objectFit: "cover",
              maxHeight: "400px",
            }}
          />
          {/* Text Section */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              justifyContent: "center",
              width: "45%",
            }}
          >
            <Typography variant="h3" color="#132D46" sx={{ fontWeight: 700 }}>
              {title}
            </Typography>
            <Typography variant="body1" color="#132D46">
              {description}
            </Typography>
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
      </Box>
    </Box>
  );
};

export default CaseStudyHighlight;
