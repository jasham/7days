"use client";

import React from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "@/theme";
import type { ReactNode } from "react";
import Footer from "@/Components/Footer/Footer";
import "./globals.css";

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        {/* meta tags, fonts, etc. */}
        {/* Inject the Vercel Toolbar only in preview/production */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var s=document.createElement("script");s.src="https://vercel.com/toolbar/script.js";s.defer=true;document.head.appendChild(s);})();`,
          }}
        />
      </head>
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
          <Footer /> {/* ✅ Now safely inside <body> */}
        </ThemeProvider>
      </body>
    </html>
  );
}
