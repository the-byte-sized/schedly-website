import { ButtonProps, Button as MuiButton, useTheme } from "@mui/material";

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

        ...(variant === "contained" && {
          padding: "1rem 2.5rem",
          borderColor: palette.primary.main,
          borderRadius: 0,
          color: 'white',

          "&:hover": {
            borderColor: palette.primary.main,
            color: palette.primary.light,
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
