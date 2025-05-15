// prettier-ignore
'use client';
import { Box, Typography } from "@mui/material";
import CustomButton from "../Button/index";
import SearchBar from "../SearchBar";
import { JobSearchProps } from "@/types/homeInterfaces";

export default function JobSearch({
  title,
  headline,
  description,
  buttonText,
}: JobSearchProps) {
  return (
    <Box sx={{ px: { xs: 2, md: 10 }, py: { xs: 4, md: 8 }, background: "linear-gradient(0deg, #FFFFFF 0%, #132D46 46.76%)", color: "white" }}>
      <Box sx={{ display: "flex", justifyContent: "space-between", gap: 8 }}>
        <Typography variant="h4" fontWeight={700} width={"25%"}>{title}</Typography>
        <Box width={"75%"}>
          <SearchBar />
        </Box>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-between", mt: 6 }}>
        <Box sx={{ width: "30%" }}>
          <Typography variant="h3" fontWeight={700}>{headline}</Typography>
        </Box>
        <Box sx={{ width: "45%" }}>
          {description.map((desc, idx) => (
            <Typography key={idx} variant={idx === 0 ? "h5" : "body1"} mb={2}>{desc}</Typography>
          ))}
          <CustomButton text={buttonText} onClick={() => alert("Starting...")} />
        </Box>
      </Box>
    </Box>
  );
}

