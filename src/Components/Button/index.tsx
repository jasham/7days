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
        px: 3,
        py: 1.5,
        textTransform: "none",
        fontWeight: 400,
        fontSize: "1rem",
        ...sx,
        width: "fit-content",
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
