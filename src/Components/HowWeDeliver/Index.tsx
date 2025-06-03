import { Box, Grid, Typography } from "@mui/material";
import Heading from "../Heading/Heading";
import { HowWeDeliverRecruitmentProps } from "@/types/permanentRecruitmentInterfaces";
import { Button } from "../Button/Button";

// ✅ Use the interface in your component
const HowWeDeliverRecruitment = ({
  headingText,
  mainTitle,
  subTitle,
  subTitle2,
  image,
  buttonText,
  features,
}: HowWeDeliverRecruitmentProps) => {
  return (
    <Box sx={{ background: "#D4E1EF66" }}>
      <Box sx={{ px: { xs: 2, md: 10 }, py: { xs: 4, md: 8 } }}>
        <Heading
          text={headingText}
          textColor="#132D46"
          dividerColor="#132D46"
          dividerHeight="1px"
          marginBottom="16px"
        />
        <Grid container spacing={4} justifyContent="space-between">
          <Grid item xs={12} md={5}>
            <Typography variant="h2" sx={{ mb: 2 }}>
              {mainTitle}
            </Typography>

            <Typography
              variant="h6"
              
              sx={{ mb: 2 }}
            >
              {subTitle}
            </Typography>
            <Typography variant="h6" >
              {subTitle2}
            </Typography>

            <Box
              sx={{
                width: "100%",
                height: "300px",
                borderRadius: "10px",
                mb: 3,
                backgroundImage: `linear-gradient(180deg, rgba(19, 45, 70, 0.48) 0%, rgba(19, 45, 70, 0.6) 100%), url(${image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                mt: 3,
              }}
            />

            <Button
              variantStyle="main"
              buttonColor="#2E2C38"
              buttonBorderColor="#2E2C38"
              buttonBgColor="transparent"
              onClick={() => {
                alert("begining");
              }}
              sx={{ display: { xs: "none", md: "flex" } }}
            >
              {buttonText}
            </Button>
          </Grid>

          <Grid item xs={12} md={6}>
            <Grid container spacing={3}>
              {features.map((item, index) => (
                <Grid item xs={12} key={index}>
                  <Typography variant="h2" color="#2E2C38">
                    {item.title}
                  </Typography>
                  <Typography variant="body1" color="#2E2C38" mt={2}>
                    {item.description}
                  </Typography>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
        <Button
        variantStyle="main"
        buttonColor="#2E2C38"
        buttonBorderColor="#2E2C38"
        buttonBgColor="transparent"
        onClick={() => {
          alert("begining");
        }}
        sx={{ display: { xs: "flex", md: "none" } , mt:3 , width:"100%"}}
      >
        {buttonText}
      </Button>
      </Box>
    </Box>
  );
};

export default HowWeDeliverRecruitment;
