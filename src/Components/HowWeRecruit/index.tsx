import { Box, Grid, Typography } from "@mui/material";
import Heading from "../Heading/Heading";
import { HowWeRecruitProps } from "@/types/propertyRecruitmentInterface";
import Image from "next/image";
import { Button } from "../Button/Button";

const HowWeRecruit: React.FC<HowWeRecruitProps> = ({
  title,
  subTitle,
  description,
  description2,
  itemList,
  description3,
  heading,
}) => {
  return (
    <Box sx={{ backgroundColor: "#D4E1EF66" }}>
      <Box
        sx={{ color: "#132D46", px: { xs: 2, md: 10 }, py: { xs: 2, md: 8 } }}
      >
        <Heading text={heading} textColor="#132D46" dividerColor="#132D46" />
        <Box sx={{ p: { xs: 0, md: 4 } }}>
          <Grid container spacing={4}>
            {/* Left Side */}
            <Grid item xs={12} md={6}>
              <Typography variant="h2" color="#2E2C38">
                {title}
              </Typography>

              <Typography variant="h4" color="#2E2C38" sx={{ my: 3 }}>
                {subTitle}
              </Typography>

              <Typography variant="body1" color="#2E2C38" sx={{ mb: 3 }}>
                {description}
              </Typography>
              <Button
                variantStyle="main"
                buttonColor="#2E2C38"
                buttonBorderColor="#2E2C38"
                buttonBgColor="transparent"
                onClick={() => {
                  alert("begining");
                }}
                sx={{
                  display: { xs: "none", md: "flex" },
                  mt: 3,
                }}
              >
                Build your team
              </Button>
            </Grid>

            {/* Right Side */}
            <Grid item xs={12} md={6}>
              {itemList &&
                itemList.map((item, index) => (
                  <Box
                    key={index}
                    sx={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 2,
                      mb: 2,
                    }}
                  >
                    <Image
                      src={item.icon}
                      alt="Client Logo"
                      width={32}
                      height={32}
                      style={{ marginRight: 8 }}
                    />
                    <Typography
                      sx={{
                        fontFamily: '"Helvetica Neue", sans-serif',
                        fontWeight: 700,
                        fontSize: "24px",
                        lineHeight: "100%",
                        color: "#2E2C38",
                      }}
                    >
                      {item.text}
                    </Typography>
                  </Box>
                ))}
              <Typography variant="body1" color="#2E2C38" sx={{ mb: 3 }}>
                {description2}
              </Typography>
              {description3 && (
                <Typography variant="body1" color="#2E2C38" sx={{ mb: 3 }}>
                  {description3}
                </Typography>
              )}
            </Grid>
          </Grid>
        </Box>
        <Button
          variantStyle="main"
          buttonColor="#2E2C38"
          buttonBorderColor="#2E2C38"
          buttonBgColor="transparent"
          onClick={() => {
            alert("begining");
          }}
          sx={{ display: { xs: "flex", md: "none" }, mt: 3, width: "100%" }}
        >
          Build your team
        </Button>
      </Box>
    </Box>
  );
};

export default HowWeRecruit;
