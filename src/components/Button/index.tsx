import { Button as MuiButton, ButtonProps, useTheme } from "@mui/material";
import React from "react";

type Props = ButtonProps;

function Button({ variant = "outlined", sx, ...props }: Props) {
  const { palette } = useTheme();

  return (
    <MuiButton
      variant={variant}
      disableElevation
      disableFocusRipple
      disableRipple
      disableTouchRipple
      sx={{
        color: palette.text.primary,

        ...(variant === "outlined" && {
          padding: "1rem 2.5rem",
          borderColor: palette.text.primary,
          borderRadius: 0,

          "&:hover": {
            color: palette.primary.light,
            backgroundColor: palette.text.primary,
          },
        }),

        ...(variant === "text" && {
          "&:hover": {
            backgroundColor: "transparent",
          },
        }),

        ...sx,
      }}
      {...props}
    >
      {props.children}
    </MuiButton>
  );
}

export default Button;
