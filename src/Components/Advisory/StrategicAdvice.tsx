"use client";
import React from "react";
import { Box, Typography } from "@mui/material";
import Heading from "../Heading/Heading";
import { Button } from "../Button/Button";
import { StrategicAdviceProps } from "@/types/advisoryInterfaces";

const StrategicAdvice: React.FC<StrategicAdviceProps> = ({
  text,
  heading,
  paragraphs,
  buttonText,
  buttonColor,
  buttonBgColor,
  buttonBorderColor,
}) => {
  return (
    <Box
      component="section"
      sx={{
        px: { xs: 2, md: 10 },
        py: { xs: 4, md: 8 },
        background: "linear-gradient(0deg, #FFFFFF 0%, #132D46 46.76%)",
        color: "white",
      }}
    >
      <Heading
        text={text}
        textColor="#FFFFFF"
        dividerColor="#FFFFFF"
        dividerHeight="1px"
        marginBottom="16px"
      />

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          mb: 4,
          flexWrap: "wrap",
        }}
      >
        <Box sx={{ width: { xs: "100%", md: "45%" }, mb: { xs: 2, md: 0 } }}>
          <Typography variant="h2">{heading}</Typography>
        </Box>

        <Box
          sx={{
            width: { xs: "100%", md: "50%" },
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          {paragraphs.map((p, idx) => (
            <Typography key={idx} variant="h6" >
              {p}
            </Typography>
          ))}
        </Box>
      </Box>

      {buttonText && (
        <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
          <Button
            variantStyle="main"
            buttonColor={buttonColor}
            buttonBgColor={buttonBgColor}
            buttonBorderColor={buttonBorderColor}
            onClick={() => alert("beginning")}
          >
            {buttonText}
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default StrategicAdvice;