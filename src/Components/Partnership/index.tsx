// prettier-ignore
'use client';
import { Box, Typography } from "@mui/material";
import Image from "next/image";

type Partner = {
  src: string;
  alt: string;
};

const partners: Partner[] = [
  { src: "/partners/partner1.jpg", alt: "Master Builders Australia" },
  { src: "/partners/partner2.jpg", alt: "Australian Constructors Association" },
  { src: "/partners/partner3.jpg", alt: "Housing Industry Association" },
  { src: "/partners/partner4.jpg", alt: "RCSA" },
  { src: "/partners/partner5.png", alt: "APSCo Australia" },
];

const StrategicPartnerships: React.FC = () => {
  return (
    <section className="flex justify-evenly py-8 text-center">
      <Typography
        sx={{
          fontFamily: "Helvetica Neue",
          fontWeight: "700",
          fontSize: "48px",
          lineHeight: "100%",
          letteSrpacing: "0%",
        }}
      >
        Strategic <br></br> Partnerships
      </Typography>
      <div className="flex flex-wrap justify-between gap-8">
        {partners.map((partner, index) => (
          <Box
            key={index}
            className="w-32 md:w-40 lg:w-48"
            sx={{ width: "59px", height: "59px" }}
          >
            <Image
              src={partner.src}
              alt={partner.alt}
              style={{ width: "100%", height: "100%" }}
              width={59}
              height={60}
              className="object-contain w-full h-auto"
            />
          </Box>
        ))}
      </div>
    </section>
  );
};

export default StrategicPartnerships;
