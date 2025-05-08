'use client';
import { Box, Grid } from '@mui/material';
import HeroSection from '@/Components/Hero/Hero';
import JobDetails from '@/Components/Job/JobDetails';
import ApplicationForm from '@/Components/Job/ApplicationForm';
import Footer from '@/Components/Footer/Footer';

const responsibilities = [
    'Tertiary/trade qualification',
    'Project experience $40m plus',
    'Subcontractor management',
    '5 years post grad experience',
    'Worked for main contractors in Australia',
    'Able to manage negotiations',
    'Managed variations and claims',
    'Procurement experience',
    'Creation of contracts and contract close out',
    'Cost reporting',
    'Mentor the commercial team',
    'Commercially astute',
    'Strong computer skills',
    'Above average communications skills both verbal and written',
    'Motivated and driven along with strong presentation skills',
];

export default function JobApplicationPage() {
  return (
    <>
      <HeroSection
        imageUrl='/Hero2.png'
        title='Job Search'
        description='Find and secure the right talent with recruitment services built around your business goals.'
      />

      <Box sx={{
        px: { xs: 2, md: 10 },
        py: { xs: 4, md: 8 },
        background: "linear-gradient(0deg, #EEEEF2 0%, #132D46 46.76%)",
        color: "white",
      }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={8}>
            <JobDetails
              title='Senior Contracts Administrator - Education to $210K'
              companyInfo='Established over 35 years ago our client is an accredited, award winning building and development company who has delivered individual projects in excess of $200m. Working across commercial, residential,industrial, and education they focus on building collaborative relationships with their clients, employees and sub contractors. This focus has seen them deliver projects successfully for their clients on time and within budget.'
              responsibilities={responsibilities}
              rewards='In return for your above skills and experience you will be rewarded with an excellent salary package, a
              career enhancing role and long term opportunities.'
              contactInfo='For more information or a confidential discussion regarding similar positions that may be available,
              please contact Guy Ingleby on 0451 331 241 or email your resume to guy@inwardrecruitment.com.au'
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <ApplicationForm />
          </Grid>
        </Grid>
      </Box>
      <Footer/>
    </>
  );
}