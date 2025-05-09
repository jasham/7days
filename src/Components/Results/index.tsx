// prettier-ignore
'use client';
import { Box, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import PartnerCard from "../Card/index";

import CustomButton from "../Button";
interface CardItem {
  score: string;
  title: string;
  description?: string;
}
interface CardProps {
  cardDetails: CardItem[];
}

interface ResultProps {
  background: string;
  CardProps: CardProps;
}
const ResultsSection: React.FC<ResultProps> = ({
  background,
  CardProps,
}: ResultProps) => {
  console.log(CardProps);
  return (
    <Box px={4} py={8} maxWidth="lg" mx="auto" sx={{ color: "#132D46" }}>
      <Typography variant="overline" color="textSecondary" gutterBottom>
        Results
      </Typography>
      <Divider sx={{ mb: 4 }} />
      <Box
        sx={{
          // width: "80vw",
          height: "95vh",
          backgroundColor: { background },
          color: "white",
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          borderRadius: "20px",
          marginLeft: "0",
          marginRight: "0",
        }}
      >
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          // width={"100vw"}
          spacing={0}
          // mb={4}
          mt={6}
        >
          <Grid item xs={12} md={8}>
            <Typography variant="h4">
              Measured by Results. Chosen for Impact.
            </Typography>
          </Grid>
        </Grid>

        <Grid container spacing={4} alignItems="stretch">
          {/* First Card */}
          <Grid item xs={12} md={4}>
            <PartnerCard
              icon={CardProps.cardDetails[0].score}
              title={CardProps.cardDetails[0].title}
              description={CardProps.cardDetails[0].description ?? ""}
              color="#ffffff"
            />
          </Grid>

          {/* Second Card */}
          <Grid item xs={12} md={4}>
            <PartnerCard
              icon={CardProps.cardDetails[1].score}
              title={CardProps.cardDetails[1].title}
              description={CardProps.cardDetails[1].description ?? ""}
              color="#ffffff"
            />
          </Grid>

          {/* Third Card */}
          <Grid item xs={12} md={4}>
            <PartnerCard
              icon={CardProps.cardDetails[2].score}
              title={CardProps.cardDetails[2].title}
              description={CardProps.cardDetails[2].description ?? ""}
              color="#ffffff"
            />
          </Grid>
        </Grid>

        <Grid
          container
          justifyContent="center"
          alignItems="center"
          // width={"100vw"}
          spacing={1}
          mb={4}
        >
          <Grid item xs={12} md={6}>
            <Typography variant="h6">
              When expertise, trust, and speed come together, <br></br>growth
              isn’t a goal — it’s the outcome.
            </Typography>
          </Grid>
        </Grid>

        <Box textAlign="center">
          <CustomButton
            text={"Read to Build What’s Next?"}
            onClick={() => alert("beginning")}
            variant="outlined"
            sx={{ color: "#FFFFFF", borderColor: "#ffffff" }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default ResultsSection;
