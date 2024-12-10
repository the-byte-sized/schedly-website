import { Button as MuiButton, ButtonProps, useTheme } from "@mui/material";
import React from "react";

type Props = ButtonProps;

function Button(props: Props) {
  const { palette } = useTheme();

  return (
    <MuiButton
      variant="outlined"
      sx={{
        padding: "1rem 2.5rem",
        color: palette.text.primary,
        borderColor: palette.text.primary,
        borderRadius: 0,

        "&:hover": {
          color: palette.primary.light,
          backgroundColor: palette.text.primary,
        },

        ...props.sx,
      }}
      {...props}
    >
      {props.children}
    </MuiButton>
  );
}

export default Button;
