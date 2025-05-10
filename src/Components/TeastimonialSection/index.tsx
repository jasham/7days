import { Box, Grid, Typography } from "@mui/material";
import TestimonialCard from "../TestimonialCard/index";
import Heading from "../Heading/Heading";

const TestimonialSection: React.FC = () => {
  return (
    <Box
      sx={{
        background: "linear-gradient(180deg, #132d4668 0%, #132D46 73.18%)",
        gap: "8px",
        position: "relative",
        paddingRight: "128px",
        paddingLeft: "128px",
        paddingTop: "64px",
        paddingBottom: "64px",
      }}
    >
      <Heading
        text="What Our Clients Say"
        dividerColor="#ffffff"
        dividerHeight="1px"
        marginBottom="16px"
      />
      <Grid
        container
        spacing={4}
        alignItems="flex-start"
        maxWidth="lg"
        mx="auto"
      >
        <Grid xs={12} md={5} sx={{ paddingTop: 4 }}>
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
