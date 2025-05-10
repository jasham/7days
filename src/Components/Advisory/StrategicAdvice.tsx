import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import CustomButton from '../Button';
import Heading from '../Heading/Heading';

const StrategicAdvice: React.FC = () => {
  return (
    <Box
      component="section"
      sx={{
        px: { xs: 2, md: 10 },
        py: { xs: 4, md: 8 },
        background: "linear-gradient(0deg, #FFFFFF 0%, #132D46 46.76%)",
        color: "white",
      }}
    >
      <Box sx={{ maxWidth: 1200, mx: 'auto', px: 2 }}>
        <Heading
          text="What we do"
          textColor="#FFFFFF"
          dividerColor="#FFFFFF"
          dividerHeight="1px"
          marginBottom="16px"
        />
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '2rem', md: '3rem' },
                fontWeight: 'bold',
                color: '#FFFFFF',
                mb: 2,
              }}
            >
              We Deliver Strategic Advice That Unlocks Business Performance
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            container
            direction="column"
          >
            <Typography variant="body1" sx={{ mb: 2 }}>
              We help organisations solve complex business problems — not with theory,
              but with sharp, commercially grounded advice. Our consulting work is
              built for businesses facing moments of pressure or transformation:
              scaling fast, entering new markets, restructuring, or preparing for
              investment.
            </Typography>
            <Typography variant="body1" sx={{ mb: 4 }}>
              We don&apos;t talk in frameworks. We get to the point — quickly — and help
              you move forward with confidence.
            </Typography>
          </Grid>
        </Grid>
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
              <CustomButton
              text="Start the conversation"
              variant="outlined"
              color="#132D46"
              sx={{
                width: "50%",
                height: "fit-content",
              }}
            />
            </Box>
      </Box>
    </Box>
  );
};

export default StrategicAdvice;