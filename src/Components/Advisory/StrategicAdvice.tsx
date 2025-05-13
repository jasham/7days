"use client"
import React from "react";
import { Box, Typography } from "@mui/material";
import Heading from "../Heading/Heading";
import { Button } from "../Button/Button";

const StrategicAdvice: React.FC = () => {
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
        text="What we do"
        textColor="#FFFFFF"
        dividerColor="#FFFFFF"
        dividerHeight="1px"
        marginBottom="16px"
      />
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 4 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "45%",
          }}
        >
          <Typography variant="h2">
            We Deliver Strategic Advice That Unlocks Business Performance
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            width: "50%",
          }}
        >
          <Typography variant="h6" textTransform={"capitalize"} sx={{ mb: 2 }}>
            We help organisations solve complex business problems — not with
            theory, but with sharp, commercially grounded advice. Our consulting
            work is built for businesses facing moments of pressure or
            transformation: scaling fast, entering new markets, restructuring,
            or preparing for investment.
          </Typography>
          <Typography variant="h6" textTransform={"capitalize"} sx={{ mb: 4 }}>
            We don&apos;t talk in frameworks. We get to the point — quickly —
            and help you move forward with confidence.
          </Typography>
        </Box>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
        <Button
          variantStyle="main"
          buttonColor={"#132D46"}
          buttonBgColor="transparent"
          buttonBorderColor={"#132D46"}
          onClick={() => {
            alert("begining");
          }}
        >
          {"Start the conversation"}
        </Button>
      </Box>
    </Box>
  );
};

export default StrategicAdvice;