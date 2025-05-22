// src/components/Footer/Footer.tsx
'use client';

import React from 'react';
import {
  Box,
  Grid,
  Typography,
  Link,
  IconButton,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Image from 'next/image';
import Heading from '../Heading/Heading';

type FooterLink = { label: string; href: string };

const footerColumns: { title: string; links: FooterLink[] }[] = [
  {
    title: 'Recruitment',
    links: [
      { label: 'Contract Recruitment', href: '/contract-recruitment' },
      { label: 'Permanent Recruitment', href: '/permanent-recruitment' },
      { label: 'Executive Search', href: '/executive-search' },
    ],
  },
  {
    title: 'Services',
    links: [
      { label: 'Consulting & Advisory', href: '/advisory' },
      { label: 'Growth', href: '/growth-service' },
    ],
  },
  {
    title: 'Expertise',
    links: [
      { label: 'Construction', href: '/construction-recruitment' },
      { label: 'Property & Development', href: '/property-recruitment' },
      { label: 'Engineering', href: '/engineering-recruitment' },
      { label: 'Resources', href: '/resources-recruitment' },
      { label: 'Corporate & Government', href: '/corporate-recruitment' },
      { label: 'Not-For-Profit', href: '/not-for-profit-recruitment' },
    ],
  },
  {
    title: 'Who We Are',
    links: [
      { label: 'About Us', href: '/about-us' },
      { label: 'Our Team', href: '/our-team' },
    ],
  },
  {
    title: 'Insights',
    links: [
      { label: 'Articles', href: '/articles' },
      { label: 'Resources', href: '/resources-recruitment' },
    ],
  },
  {
    title: 'Info',
    links: [{ label: 'Contact', href: '/contact' }],
  },
];

export default function Footer() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{ px: { xs: 2, md: 10 }, py: { xs: 4, md: 8 } }}>
      {/* Top links section */}
      <Heading
        text="CONTACT"
        textColor="#132D46"
        dividerColor="#132D46"
        dividerHeight="1px"
      />

      <Box sx={{ mt: 2, textAlign: 'center' }}>
        <Image src="/ColorLogo.svg" alt="Client Logo" width={169} height={60} />
      </Box>

      {/* Columns */}
      <Grid
        container
        spacing={2}
        sx={{ mt: 4, mb: 6 }}
        justifyContent={isMobile ? 'center' : 'space-between'}
      >
        {footerColumns.map((col) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={2}
            key={col.title}
            sx={{ textAlign: isMobile ? 'center' : 'left' }}
          >
            <Typography
              variant="h6"
              fontWeight={600}
              color="#132D46"
              sx={{ mb: 1 }}
            >
              {col.title}
            </Typography>
            {col.links.map((link) => (
              <Link
                href={link.href}
                key={link.label}
                underline="none"
                sx={{
                  display: 'block',
                  mb: 0.5,
                  color: 'text.secondary',
                  typography: 'body2',
                }}
              >
                {link.label}
              </Link>
            ))}
          </Grid>
        ))}
      </Grid>

      {/* Bottom info section */}
      <Grid
        container
        spacing={2}
        alignItems="center"
        justifyContent={isMobile ? 'center' : 'space-between'}
      >
        <Grid item>
          <Typography variant="caption" color="text.secondary">
            ©2025 All Rights Reserved
          </Typography>
        </Grid>
        <Grid
          item
          sx={{ display: 'flex', alignItems: 'center', flexDirection: isMobile ? 'column' : 'row' }}
        >
          <IconButton
            href="#"
            color="primary"
            sx={{ p: 0, mb: isMobile ? 1 : 0, color: '#0c4277' }}
            aria-label="LinkedIn"
          >
            <LinkedInIcon />
          </IconButton>
          <Box sx={{ display: 'flex', flexDirection: 'column', textAlign: isMobile ? 'center' : 'left' }}>
            <Typography variant="caption" color="text.secondary">
              PO Box 22
            </Typography>
            <Typography variant="caption" color="text.secondary">
              Sylvania Southgate, NSW, 2224
            </Typography>
          </Box>
        </Grid>
        <Grid item>
          <Typography variant="caption" color="text.secondary">
            0451 231 241
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
