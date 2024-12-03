import { extendTheme, ThemeOptions } from "@mui/material/styles";

const extTheme: ThemeOptions = extendTheme({
  typography: {
    h1: {
      fontSize: "3.9rem",
    },
    h2: {
      fontSize: "3.2rem",
    },
    h3: {
      fontSize: "2.7rem",
    },
    h4: {
      fontSize: "2.2rem",
    },
    h5: {
      fontSize: "1.9rem",
    },
    h6: {
      fontSize: "1.5rem",
    },
    body1: {
      fontSize: "1rem",
    },
    body2: {
      fontSize: "1rem",
    },
    subtitle1: {
      fontSize: "1rem",
    },
    subtitle2: {
      fontSize: "0.7rem",
    },
    button: {
      fontSize: "1rem",
      textTransform: "none",
    },
    caption: {
      fontSize: "0.7rem",
    },
    overline: {
      fontSize: "0.6rem",
      textTransform: "uppercase",
    },
  },
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: "hsl(209, 39%, 17%)",
        },
        text: {
          primary: "hsl(209, 39%, 17%)",
        },
        background: {
          default: "hsl(260, 60%, 99%)",
        },
      },
    },
    dark: {
      palette: {
        primary: {
          main: "hsl(209, 39%, 17%)",
        },
        text: {
          primary: "hsl(209, 39%, 17%)",
        },
        background: {
          default: "hsl(260, 60%, 99%)",
        },
      },
    },
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: "10px",
          "& fieldset": {
            borderColor: "hsl(209, 39%, 17%)",
          },
          "&:hover fieldset": {
            borderColor: "hsl(209, 39%, 50%)",
          },
          "&.Mui-focused fieldset": {
            borderColor: "hsl(209, 39%, 30%)",
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: "hsl(0, 0%, 50%)", // Colore dell'etichetta
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          "&.Mui-disabled": {
            backgroundColor: "hsl(209, 39%, 17%)",
            cursor: "not-allowed",
            pointerEvents: "initial",
          },
          "&:not(.Mui-disabled):hover": {
            color: "hsl(260, 60%, 99%)",
          },
        },
      },
    },
  },
});

export default extTheme;
