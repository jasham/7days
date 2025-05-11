// prettier-ignore
'use client';
import { Box, Typography } from "@mui/material";

const companyLogos = [
  { alt: "BMD", src: "/bmd.jpg" },
  { alt: "Mirvac", src: "/mirvac.png" },
  { alt: "Torodev", src: "/transdev.png" },
  { alt: "KBR", src: "/kbr.png" },
  { alt: "Norderock", src: "/norderock.png" },
  { alt: "KGroup", src: "/kgroup.png" },
  { alt: "FKG Group", src: "/fkg.png" },
  { alt: "ADCO", src: "/adco.png" },
  { alt: "Grocon", src: "/grocon.jpg" },
];

export default function TrustedBySection() {
  return (
    <Box textAlign="center" py={5} px={2} bgcolor="#fff">
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Trusted by industry leaders
      </Typography>
      <Typography
        variant="body2"
        maxWidth="600px"
        mx="auto"
        color="text.secondary"
        mb={4}
      >
        Henton Consulting is the preferred partner for companies seeking
        unparalleled expertise in the Property, Construction, Engineering, and
        Resources sectors.
      </Typography>

      <Box
        sx={{
          overflowX: "auto",
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 3,
            px: 2,
            py: 1,
          }}
        >
          {companyLogos.map((logo, index) => (
            <Box
              key={index}
              sx={{ flexShrink: 0, width: 100, textAlign: "center" }}
            >
              <Box
                component="img"
                src={logo.src}
                alt={logo.alt}
                sx={{
                  width: "100%",
                  height: 50,
                  objectFit: "contain",
                  mx: "auto",
                }}
              />
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
