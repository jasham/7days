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
        {text}
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
