'use client';
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { StrategicPartnershipsProps } from "@/types/homeInterfaces";

export default function StrategicPartnerships({ title, partners }: StrategicPartnershipsProps) {
  return (
    <Box sx={{ px: { xs: 2, md: 10 }, py: { xs: 4, md: 8 }, display: "flex", flexDirection: { xs: "column", md: "row" }, gap: 4 }}>
      <Typography variant="h2" sx={{ width: { md: "30%" } }}>{title}</Typography>
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "center", width: { md: "65%" } }}>
        {partners.map((partner, idx) => (
          <Box key={idx} sx={{ width: 100, height: 60, position: "relative" }}>
            <Image src={partner.src} alt={partner.alt} fill style={{ objectFit: "contain" }} />
          </Box>
        ))}
      </Box>
    </Box>
  );
}
