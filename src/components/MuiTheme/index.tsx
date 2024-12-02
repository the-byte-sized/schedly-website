import { extendTheme, ThemeOptions } from "@mui/material/styles";

const extTheme: ThemeOptions = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: "hsl(270, 49.99999999999999%, 40%)",
        },
        background: {
          default: "hsl(270, 49.99999999999999%, 90%)",
          paper: "hsl(270, 49.99999999999999%, 90%)",
        },
      },
    },
    dark: {
      palette: {
        primary: {
          main: "hsl(240, 90%, 70%)",
        },
        background: {
          paper: "hsl(210, 3%, 15%)",
        },
      },
    },
  },
});

export default extTheme;
