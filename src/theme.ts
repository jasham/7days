// src/theme.ts
import { createTheme, responsiveFontSizes } from '@mui/material/styles';
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

let theme = createTheme({
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

// This will apply sensible scaling at each breakpoint
theme = responsiveFontSizes(theme, {
  // optionally control which breakpoints to apply and the scaling factor:
  breakpoints: ['xs', 'sm', 'md', 'lg'],
  factor: 2,  // tweak to taste
});

theme.typography.h1 = {
  ...theme.typography.h1,
  // on desktop (lg+), keep the original 96px
  [theme.breakpoints.up('lg')]: {
    fontSize: '96px',
  },
  // on md: drop to 72px instead of whatever responsiveFontSizes would have done
  [theme.breakpoints.between('md', 'lg')]: {
    fontSize: '72px',
  },
  // on sm: 48px
  [theme.breakpoints.down('md')]: {
    fontSize: '48px',
  },
};


export default theme;