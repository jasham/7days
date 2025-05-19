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
        sx={{ color: "#132D46", px: { xs: 2, md: 10 }, py: { xs: 4, md: 8 } }}
      >
        <Heading
          text={heading}
          textColor="#132D46"
          dividerColor="#132D46"
        />
        <Box sx={{ p: 4 }}>
          <Grid container spacing={4}>
            {/* Left Side */}
            <Grid item xs={12} md={6}>
              <Typography
                sx={{
                  fontFamily: '"Helvetica Neue", sans-serif',
                  fontWeight: 700,
                  fontSize: "48px",
                  lineHeight: "100%",
                  letterSpacing: "0%",
                  color: "#2E2C38",
                  mb: 2,
                }}
              >
                {title}
              </Typography>

              <Typography
                sx={{
                  fontFamily: '"Helvetica Neue", sans-serif',
                  fontWeight: 500,
                  fontSize: "24px",
                  lineHeight: "100%",
                  color: "#2E2C38",
                  mb: 2,
                }}
              >
                {subTitle}
              </Typography>

              <Typography
                sx={{
                  fontFamily: '"Helvetica Neue", sans-serif',
                  fontWeight: 500,
                  fontSize: "16px",
                  lineHeight: "140%",
                  color: "#2E2C38",
                  mb: 3,
                  whiteSpace: "pre-line",
                }}
              >
                {description}
              </Typography>
              <Button
                variantStyle="main"
                buttonColor={"#2E2C38"}
                buttonBgColor="transparent"
                buttonBorderColor={"#2E2C38"}
                onClick={() => {
                  alert("Starting");
                }}
              >
                Build Your Team
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
              <Typography
                sx={{
                  fontFamily: '"Helvetica Neue", sans-serif',
                  fontWeight: 500,
                  fontSize: "16px",
                  color: "#2E2C38",
                  mt: 2,
                }}
              >
                {description2}
              </Typography>
              {description3 && (
              <Typography
                sx={{
                  fontFamily: '"Helvetica Neue", sans-serif',
                  fontWeight: 500,
                  fontSize: "16px",
                  color: "#2E2C38",
                  mt: 2,
                }}
              >
                {description3}
              </Typography>)
              }
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default HowWeRecruit;
