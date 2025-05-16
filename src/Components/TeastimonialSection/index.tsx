import { Box, Typography } from "@mui/material";
import TestimonialCard from "../TestimonialCard/index";
import Heading from "../Heading/Heading";
import { TestimonialProps } from "@/types/homeInterfaces";

export default function TestimonialSection({ heading, title, description, quote, detail, author, company }: TestimonialProps) {
  return (
    <Box
      sx={{
        background: "linear-gradient(180deg, #EEEEF2 0%, #132D46 50.76%)",
        // background: "linear-gradient(0deg, #132D46 0%, rgba(19, 45, 70, 0.9) 50%, rgba(19, 45, 70, 0.6) 50%, rgba(255, 255, 255, 0.2) 60%, #ffffff 100%)",
        gap: "8px",
        position: "relative",
        px: { xs: 2, md: 10 },
        py: { xs: 4, md: 8 },
      }}
    >
      <Heading
        text={heading}
        dividerColor="#ffffff"
        dividerHeight="1px"
        marginBottom="16px"
      />
      <Box
        sx={{ display: "flex", justifyContent: "space-between", width: "100%" }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 4,
            width: "40%",
          }}
        >
          <Typography variant="h2" color="#ffffff">
            {title}
          </Typography>
          <Typography variant="h5" color="#ffffff">
            {description}
          </Typography>
        </Box>

        <Box sx={{ width: "60%" }}>
          <TestimonialCard
            quote={quote}
            detail={detail}
            author={author}
            company={company}
          />
        </Box>
      </Box>
    </Box>
  );
};