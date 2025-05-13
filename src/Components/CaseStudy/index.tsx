'use client';

import { Box, Grid, Typography } from "@mui/material";
import CustomButton from "../Button";
import Heading from "../Heading/Heading";

interface CaseStudyProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  ctaText: string;
  onClick?: () => void;
  heading?: string;
  isReverse?: boolean;
  isBackground?: boolean;
}

const CaseStudyHighlight: React.FC<CaseStudyProps> = ({
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
    <Box sx={{ py: 6, px: 2, backgroundColor: isBackground ? "#D4E1EF66" : "#ffffff" }}>
      <Box mx={8}>
        {heading && (
          <Heading
            text={heading}
            textColor="#132D46"
            dividerColor="#132D46"
            dividerHeight="1px"
          />
        )}

        <Grid
          container
          spacing={4}
          alignItems="center"
          justifyContent="center"
          direction={isReverse ? "row-reverse" : "row"}
        >
          {/* Image Section */}
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src={imageSrc}
              alt={imageAlt}
              sx={{
                width: "100%",
                borderRadius: 2,
                objectFit: "cover",
                height: "25rem",
              }}
            />
          </Grid>

          {/* Text Section */}
          <Grid item xs={12} md={6}>
            <Typography
              variant="h4"
              fontWeight="bold"
              gutterBottom
              sx={{
                fontFamily: "Helvetica Neue",
                fontWeight: 700,
                width: "100%",
                color: "#132D46",
              }}
            >
              {title}
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              paragraph
              sx={{
                fontFamily: "Helvetica Neue",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: 1.4,
                width: "100%",
                color: "#132D46",
                letterSpacing: 0,
              }}
            >
              {description}
            </Typography>
            <CustomButton
              text={ctaText}
              onClick={onClick}
              variant="outlined"
              color="#132D46"
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default CaseStudyHighlight;