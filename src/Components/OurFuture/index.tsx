import React from "react";
import Heading from "../Heading/Heading";
import { Box, Typography } from "@mui/material";
import { OurFutureProps } from "@/types/aboutUsInterface";

const OurFuture: React.FC<OurFutureProps> = ({
    title,
    description,
    heading,
    titleDescription,
  }) => {
  return (
    <Box  sx={{ px: { xs: 2, md: 10 }, py: { xs: 4, md: 8 } }}>
      <Heading
        text={heading}
        textColor="#132D46"
        dividerColor="#132D46"
        dividerHeight="1px"
      />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 4,
            justifyContent: "center",
            width: "70%",
            mx:"auto",
            textAlign: "center",
            alignItem:"center"
          }}
        >
          <Typography
            variant="h3"
            color="#132D46"
            sx={{ fontWeight: 700 }}
          >
            {title}
          </Typography>
          <Typography variant="body1" color="#132D46" sx={{whiteSpace: 'pre-line'}}>
            {description}
          </Typography>
          { titleDescription && (
            <Typography
            variant="h4"
            color="#132D46"
            sx={{ fontWeight: 400 }}
          >
            {titleDescription}
          </Typography>
          )}
        </Box>
    </Box>
  );
};

export default OurFuture;
