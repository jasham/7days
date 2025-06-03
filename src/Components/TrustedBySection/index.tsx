'use client';
import { Box, Typography } from "@mui/material";
import { TrustedByProps } from "@/types/homeInterfaces";

export default function TrustedBySection({ title, description, companyLogos }: TrustedByProps) {
  return (
    <Box textAlign="center" sx={{px: { xs: 2, md: 10 }, py: { xs: 4, md: 8 },}}>
      <Typography variant="h2" color="#132D46">{title}</Typography>
      <Typography variant="h6"  sx={{ width: "60%", mx: "auto", my: 2 }}>{description}</Typography>
      <Box sx={{ overflowX: "auto", display: "flex", gap: 7, justifyContent: "center", px: 2, py: 1 }}>
        {companyLogos.map((logo, idx) => (
          <Box key={idx} component="img" src={logo.src} alt={logo.alt} sx={{ width: 100, height: 50, objectFit: "contain" }} />
        ))}
      </Box>
    </Box>
  );
}
