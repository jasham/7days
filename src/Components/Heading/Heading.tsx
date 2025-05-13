import React from "react";
import { Typography, Divider } from "@mui/material";

interface HeadingProps {
  text: string;
  textColor?: string;
  dividerColor?: string;
  dividerHeight?: string | number;
  marginBottom?: string | number;
}

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
