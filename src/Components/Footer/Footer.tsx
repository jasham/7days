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

type FooterLink = { label: string; href: string };

const footerColumns: {
  title: string;
  links: FooterLink[];
}[] = [
  {
    title: "Recruitment",
    links: [
      { label: "Contract Recruitment", href: "/contract-recruitment" },
      { label: "Permanent Recruitment", href: "/permanent-recruitment" },
      { label: "Executive Search",     href: "/executive-search" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Consulting & Advisory", href: "/advisory" },
      { label: "Growth",                href: "/growth-service" },
    ],
  },
  {
    title: "Expertise",
    links: [
      { label: "Construction",            href: "/construction-recruitment" },
      { label: "Property & Development",  href: "/property-recruitment" },
      { label: "Engineering",             href: "/engineering-recruitment" },
      { label: "Resources",               href: "/resources-recruitment" },
      { label: "Corporate & Government",  href: "/corporate-recruitment" },
      { label: "Not-For-Profit",          href: "/not-for-profit-recruitment" },
    ],
  },
  {
    title: "Who We Are",
    links: [
      { label: "About Us",  href: "/about-us" },
      { label: "Our Team", href: "/our-team" },
    ],
  },
  {
    title: "Insights",
    links: [
      { label: "Articles",  href: "/articles" },
      { label: "Resources", href: "/resources-recruitment" },
    ],
  },
  {
    title: "Info",
    links: [
      { label: "Contact", href: "/contact" },
    ],
  },
];

export default function Footer() {
  return (
    <Box sx={{ px: { xs: 2, md: 10 }, py: { xs: 4, md: 8 } }}>
      {/* Top links section */}
      <Heading
        text="CONTACT"
        textColor="#132D46"
        dividerColor="#132D46"
        dividerHeight="1px"
      />

      <Box sx={{ mt: 2 }}>
        <Image
          src="/ColorLogo.svg"
          alt="Client Logo"
          width={169}
          height={60}
        />

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
              <Typography
                variant="h5"
                fontWeight={600}
                color="#132D46"
                sx={{ mb: 2 }}
              >
                {col.title}
              </Typography>

              {col.links.map((link) => (
                <Link
                  href={link.href}
                  key={link.label}
                  typography="body1"
                  display="block"
                  color="text.secondary"
                  underline="none"
                  sx={{ mb: 1.5 }}
                >
                  {link.label}
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
            <Typography variant="caption" color="text.secondary" component="span">
              PO Box 22
            </Typography>
            <Typography variant="caption" color="text.secondary" component="span">
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
