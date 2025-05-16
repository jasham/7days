import React from "react";
import { Stack, Typography, useTheme } from "@mui/material";
import Image from "next/image";
import { InfoItemProps } from "@/types/jobBoardInterfaces";

export const InfoItem: React.FC<InfoItemProps> = React.memo(
  ({ icon, text }) => {
    const theme = useTheme();
    return (
      <Stack direction="row" alignItems="center" spacing={1}>
        <Image
          src={icon}
          alt={text}
          width={24}
          height={24}
          style={{ borderRadius: theme.shape.borderRadius }}
        />
        <Typography variant="body2" noWrap>
          {text}
        </Typography>
      </Stack>
    );
  }
);

InfoItem.displayName = "InfoItem";
