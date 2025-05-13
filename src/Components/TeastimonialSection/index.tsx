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
        px: { xs: 2, md: 10 }, 
        py: { xs: 4, md: 8 }
      }}
    >
      <Heading
        text="What Our Clients Say"
        dividerColor="#ffffff"
        dividerHeight="1px"
        marginBottom="16px"
      />
      <Box sx={{ display: "flex", justifyContent: "space-between" , width: "100%" }}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 4 , width: "40%"}}>
          <Typography variant="h2" color="#ffffff">
            Reviews
          </Typography>
          <Typography variant="h5" color="#ffffff">
            Here is what our clients have to say about working with us. Real
            experiences, real feedback.
          </Typography>
        </Box>

        <Box sx={{width: "60%"}}>
          <TestimonialCard
            quote="The calibre of candidates has always exceeded what others have put forward."
            detail="Guy assesses the needs of the client and then carefully selects potential candidates that are the right fit. He is also personally involved in every step of the process."
            author="Stephen Kerfoot, Director"
            company="Kerfoot Electrics"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default TestimonialSection;
