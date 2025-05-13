// src/Components/Button/index.tsx
import React from "react";
import { Button as MuiButton, ButtonProps } from "@mui/material";
import { styled } from "@mui/material/styles";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import SearchIcon from "@mui/icons-material/Search";

export type VariantStyle = "main" | "search" | "blog" | "text";

export interface CustomButtonProps extends ButtonProps {
  /** which preset style to use */
  variantStyle?: VariantStyle;
  /** overrides the “primary” color used for text (or border if outlined) */
  buttonColor?: string;
  /** overrides the fill/background color when “filled” */
  buttonBgColor?: string;
  /** overrides the border color when outlined */
  buttonBorderColor?: string;
}

const StyledButton = styled(MuiButton, {
  shouldForwardProp: (prop) =>
    ![
      "variantStyle",
      "buttonColor",
      "buttonBgColor",
      "buttonBorderColor",
    ].includes(prop),
})<CustomButtonProps>(
  ({
    theme,
    variantStyle = "main",
    buttonColor,
    buttonBgColor,
    buttonBorderColor,
  }) => {
    const primary = buttonColor ?? "#028ccb";
    const bg =
      buttonBgColor ?? (variantStyle === "search" ? "#025a2d" : "transparent");
    const border = buttonBorderColor ?? primary;
    const radius = 4;

    switch (variantStyle) {
      case "search":
        return {
          ...theme.typography.button1,
          width: "fit-content",
          backgroundColor: bg,
          color: "#fff",
          borderRadius: radius,
          padding: "8px 16px",
          minWidth: "auto",
        };

      case "blog":
        return {
          ...theme.typography.button2,
          width: "fit-content",
          backgroundColor: bg,
          color: primary,
          border: `1px solid ${border}`,
          borderRadius: radius,
          padding: "6px 12px",
        };

      case "text":
        return {
          ...theme.typography.button2,
          width: "fit-content",
          backgroundColor: "transparent",
          color: primary,
          padding: 0,
          minWidth: "auto",
        };

      case "main":
      default:
        return {
          ...theme.typography.button1,
          width: "fit-content",
          backgroundColor: bg,
          color: primary,
          border: `1px solid ${border}`,
          borderRadius: radius,
          padding: "10px 20px",
        };
    }
  }
);

export const Button: React.FC<CustomButtonProps> = ({
  variantStyle = "main",
  buttonColor,
  buttonBgColor,
  buttonBorderColor,
  children,
  startIcon,
  endIcon,
  ...props
}) => {
  // defaults for icons
  const iconProps = { startIcon, endIcon };
  if (variantStyle === "search") {
    iconProps.startIcon = startIcon ?? <SearchIcon />;
  } else {
    iconProps.endIcon = endIcon ?? <ArrowForwardIcon style={{ fontSize: 16 }} />;
  }

  return (
    <StyledButton
      variantStyle={variantStyle}
      buttonColor={buttonColor}
      buttonBgColor={buttonBgColor}
      buttonBorderColor={buttonBorderColor}
      {...iconProps}
      {...props}
    >
      {children}
    </StyledButton>
  );
};
