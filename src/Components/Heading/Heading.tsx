import React from "react";
import { Typography, Divider } from "@mui/material";
import { HeadingProps } from "@/types/homeInterfaces";

const Heading: React.FC<HeadingProps> = ({
  text,
  textColor = "#ffffff",
  dividerColor = "#ffffff",
  dividerHeight = "1px",
  marginBottom = 4,
}) => {
  return (
    <div>
      <Typography variant="h6" color={textColor}>
        {text.charAt(0).toUpperCase() + text.slice(1).toLowerCase()}
      </Typography>
      <Divider
        sx={{
          mb: marginBottom,
          backgroundColor: dividerColor,
          height: dividerHeight,
        }}
      />
    </div>
  );
};

export default Heading;
