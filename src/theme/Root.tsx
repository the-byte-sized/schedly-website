import { CssBaseline } from "@mui/material";
import {
    Experimental_CssVarsProvider as CssVarsProvider,
    getInitColorSchemeScript,
} from "@mui/material/styles";
import theme from "@site/src/components/MuiTheme";

export default function Root({ children }) {
  return (
    <>
      <CssBaseline />
      {getInitColorSchemeScript()}
      <CssVarsProvider theme={theme}>{children}</CssVarsProvider>
    </>
  );
}
