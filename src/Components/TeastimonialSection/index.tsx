import { Box, Divider, Grid, Typography } from "@mui/material";
import TestimonialCard from "../TestimonialCard/index";

const TestimonialSection: React.FC = () => {
  return (
    <Box
      sx={{
        // py: 10,
        // px: 4,
        background: "linear-gradient(180deg, #FFFFFF 33.59%, #132D46 73.18%)",

        // width: "1515px",
        height: "95vh",
        gap: "8px",
        paddingTop: "200px",
        paddingRight: "128px",
        // paddingBottom: "9px",
        paddingLeft: "128px",
        marginTop: "-200px",
        // color: "black",
      }}
    >
      <Typography variant="overline" color="#ffffff">
        What our clients say
      </Typography>
      <Divider
        sx={{
          mb: 4,
          backgroundColor: "white",
          height: "1px",
        }}
      />
      <Grid
        container
        spacing={4}
        alignItems="flex-start"
        maxWidth="lg"
        mx="auto"
      >
        <Grid item xs={12} md={5}>
          <Typography
            variant="h5"
            fontWeight="bold"
            gutterBottom
            sx={{
              fontFamily: "Helvetica Neue",
              fontWeight: "500",
              fontSize: "48px",
              lineHeight: "100%",
              letteSrpacing: "0%",
              color: "#fff",
            }}
          >
            Reviews
          </Typography>
          <Typography variant="body2" color="grey.200">
            Here is what our clients have to say about working with us. Real
            experiences, real feedback.
          </Typography>
        </Grid>

        <Grid item xs={12} md={7}>
          <TestimonialCard
            quote="The calibre of candidates has always exceeded what others have put forward."
            detail="Guy assesses the needs of the client and then carefully selects potential candidates that are the right fit. He is also personally involved in every step of the process."
            author="Stephen Kerfoot, Director"
            company="Kerfoot Electrics"
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default TestimonialSection;
