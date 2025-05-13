'use client';

import React from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { theme } from '@/theme';
import type { ReactNode } from 'react';
import Footer from "@/Components/Footer/Footer";
import "./globals.css";

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        {/* you can throw in <meta> tags, fonts, etc. here */}
      </head>
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </body>
      <Footer/>
    </html>
  );
}
