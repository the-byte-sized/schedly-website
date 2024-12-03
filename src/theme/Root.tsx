import { CssBaseline, } from "@mui/material";
import InitColorSchemeScript from '@mui/material/InitColorSchemeScript';
import {
  ThemeProvider
} from "@mui/material/styles";
import theme from "@site/src/components/MuiTheme";

export default function Root({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <InitColorSchemeScript />
      {children}
    </ThemeProvider>
  );
}
