'use client';
import { Box, Typography } from "@mui/material";
import Image from "next/image";

type Partner = {
  src: string;
  alt: string;
};

const partners: Partner[] = [
  { src: "/partners/partner1.jpg", alt: "Master Builders Australia" },
  { src: "/partners/partner2.jpg", alt: "Australian Constructors Association" },
  { src: "/partners/partner3.jpg", alt: "Housing Industry Association" },
  { src: "/partners/partner4.jpg", alt: "RCSA" },
  { src: "/partners/partner5.png", alt: "APSCo Australia" },
];

const StrategicPartnerships: React.FC = () => {
  return (
    <Box component="section" sx={{ px: { xs: 2, md: 10, background: "#ffffff" }, py: { xs: 4, md: 8 }, display: "flex", flexDirection: { xs: "column", md: "row" }, alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 4 }}>
      {/* Heading */}
      <Typography variant="h2" color="#132D46"
        sx={{
          width: { xs: "100%", md: "30%" },
          color: "#132D46",
        }}
      >
        Strategic Partnerships
      </Typography>

      {/* Partner Logos */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 12,
          justifyContent: "center",
          width: { xs: "100%", md: "65%" },
        }}
      >
        {partners.map((partner, index) => (
          <Box
            key={index}
            sx={{
              width: "100px",
              height: "60px",
              position: "relative",
              flexShrink: 0,
            }}
          >
            <Image
              src={partner.src}
              alt={partner.alt}
              fill
              style={{ objectFit: "contain" }}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default StrategicPartnerships;