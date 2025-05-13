// src/theme.ts
import { createTheme } from '@mui/material/styles';
import { CSSProperties } from 'react';

declare module '@mui/material/styles' {
  interface TypographyVariants {
    button1: CSSProperties;
    button2: CSSProperties;
  }
  interface TypographyVariantsOptions {
    button1?: CSSProperties;
    button2?: CSSProperties;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    button1: true;
    button2: true;
  }
}

export const theme = createTheme({
  typography: {
    // HEADINGS
    h1: {
      fontFamily: 'Helvetica Neue',
      fontWeight: 700,
      fontSize: '96px',
      lineHeight: 1,
      letterSpacing: '-4%',
    },
    h2: {
      fontFamily: 'Helvetica Neue',
      fontWeight: 700,
      fontSize: '48px',
      lineHeight: 1,
      letterSpacing: '-4%',
    },
    h3: {
      fontFamily: 'Helvetica Neue',
      fontWeight: 700,
      fontSize: '40px',
      lineHeight: 1,
      letterSpacing: '-4%',
    },
    h4: {
      fontFamily: 'Helvetica Neue',
      fontWeight: 400,
      fontSize: '32px',
      lineHeight: 1,
      letterSpacing: '-4%',
    },
    h5: {
      fontFamily: 'Helvetica Neue',
      fontWeight: 400,
      fontSize: '24px',
      lineHeight: 1.1,
      letterSpacing: '-4%',
    },
    h6: {
      fontFamily: 'Helvetica Neue',
      fontWeight: 400,
      fontSize: '18px',
      lineHeight: 1.5,
      letterSpacing: '-4%',
      textTransform: 'uppercase',
    },

    // BODY
    body1: {
      fontFamily: 'Helvetica Neue',
      fontWeight: 400,
      fontSize: '16px',
      lineHeight: 1.2,
      letterSpacing: '-4%',
    },
    body2: {
      fontFamily: 'Helvetica Neue',
      fontWeight: 300,
      fontSize: '16px',
      lineHeight: 1,
      letterSpacing: '-4%',
    },

    // BUTTON‐specific
    button1: {
      fontFamily: 'Helvetica Neue',
      fontWeight: 400,
      fontSize: '16px',
      lineHeight: 1,
      letterSpacing: '-4%',
      textTransform: 'none',
    },
    button2: {
      fontFamily: 'Helvetica Neue',
      fontWeight: 400,
      fontSize: '13px',
      lineHeight: 1,
      letterSpacing: '-4%',
      textTransform: 'none',
    },
  },
});