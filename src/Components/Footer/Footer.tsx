// components/Footer/Footer.tsx
"use client";
import React from "react";
import {
  Box,
  Grid,
  Typography,
  Link,
  IconButton,
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Image from "next/image";
import Heading from "../Heading/Heading";

const footerColumns = [
  {
    title: "Recruitment",
    links: [
      "Contract Recruitment",
      "Permanent Recruitment",
      "Executive Search",
    ],
  },
  {
    title: "Services",
    links: ["Consulting & Advisory", "Growth"],
  },
  {
    title: "Expertise",
    links: [
      "Construction",
      "Property & Development",
      "Engineering",
      "Resources",
      "Corporate & Government",
      "Not‑For‑Profit",
    ],
  },
  {
    title: "Who We Are",
    links: ["About Us", "Our Team"],
  },
  {
    title: "Insights",
    links: ["Articles", "Resources"],
  },
  {
    title: "Info",
    links: ["Contact"],
  },
];

export default function Footer() {
  return (
    <Box sx={{px: { xs: 2, md: 10 }, py: { xs: 4, md: 8 }}}>
      {/* Top links section */}
      <Heading
        text="CONTACT"
        textColor="#132D46"
        dividerColor="#132D46"
        dividerHeight="1px"
      />
      <Box>
        <Box sx={{ paddingTop: "10px" }}>
          <Image
            src={"/ColorLogo.svg"}
            alt="Client Logo"
            width={169}
            height={60}
          />
        </Box>
        <Box
          sx={{
            mt: 8,
            mb: 4,
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          {footerColumns.map((col) => (
            <Grid item xs={6} sm={4} md={1} key={col.title}>
              <Typography variant="h5" fontWeight={600} color="#132D46" sx={{ mb: 2 }}>
                {col.title}
              </Typography>
              {col.links.map((link) => (
                <Link
                  href="#"
                  key={link}
                  typography="body2"
                  display="block"
                  color="text.secondary"
                  underline="none"
                  sx={{ mb: 1.5 }}
                >
                  {link}
                </Link>
              ))}
            </Grid>
          ))}
        </Box>
      </Box>

      {/* Bottom info section */}
      <Grid container alignItems="center" gap={8} sx={{ mb: 4 }}>
        <Grid item>
          <Typography variant="caption" color="text.secondary">
            ©2025 All Rights Reserved
          </Typography>
        </Grid>

        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton
            href="#"
            color="primary"
            sx={{ p: 0, mr: 1, color: "#0c4277" }}
            aria-label="LinkedIn"
          >
            <LinkedInIcon />
          </IconButton>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography
              variant="caption"
              color="text.secondary"
              component="span"
            >
              PO Box 22
            </Typography>
            <Typography
              variant="caption"
              color="text.secondary"
              component="span"
            >
              Sylvania Southgate, NSW, 2224
            </Typography>
          </Box>
        </Box>

        <Grid item>
          <Typography variant="caption" color="text.secondary">
            0451 231 241
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
