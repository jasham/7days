// prettier-ignore
'use client';
import { TestimonialCardProps } from "@/types/homeInterfaces";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  detail,
  author,
  company,
}) => {
  return (
    <Box color="white" sx={{ display: "flex", mb: 4 }}>
      <Box
        sx={{ display: "flex", alignItems: "start", mr: 2 }}
        width={100}
        height={40}
      >
        <Image src={"/comma.svg"} alt="Client Logo" width={40} height={40} />
      </Box>
      <Box>
        <Box display="flex" alignItems="center" mb={2}>
          <Typography variant="h2">{quote}</Typography>
        </Box>

        <Typography variant="h6"  mb={2}>
          {detail}
        </Typography>

        <Typography variant="h5" fontStyle="italic">
          {author}, <strong>{company}</strong>
        </Typography>
      </Box>
    </Box>
  );
};

export default TestimonialCard;
