// prettier-ignore
'use client';
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Button } from "@mui/material";
import { ButtonPropsVariantOverrides } from "@mui/material/Button";
import { OverridableStringUnion } from "@mui/types";

type CustomButtonProps = {
  text?: string;
  onClick?: () => void; // <- make it optional
  icon?: boolean;
  sx?: object;
  variant?: OverridableStringUnion<
    "text" | "outlined" | "contained",
    ButtonPropsVariantOverrides
  >;
  [x: string]: any;
};

export default function CustomButton({
  text = "Click Me",
  onClick,
  icon = true,
  sx = {},
  variant = "outlined",
  color = "white",
  fontSize = "1rem",
  ...props
}: CustomButtonProps) {
  return (
    <Button
      variant={variant}
      endIcon={icon && <ArrowForwardIcon />}
      onClick={onClick}
      sx={{
        color: { color },
        borderColor: { color },
        borderRadius: "4px",
        textTransform: "none",
        fontWeight: 400,
        fontSize: {fontSize},
        ...sx,
        width: "fit-content",
        height: "fit-content",
        "&:hover": {
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          borderColor: "white",
        },
      }}
      {...props}
    >
      {text}
    </Button>
  );
}
