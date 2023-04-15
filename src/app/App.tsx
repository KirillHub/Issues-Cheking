import { Box, CssBaseline, IconButton, Theme, ThemeProvider } from "@mui/material";
import { Fragment } from "react";
import { RouterProvider } from "react-router-dom";
import router, { routes } from "../router";
import { ColorModeContext, tokens, useMode } from "../styles/theme";
import { CustomThemeOptions } from "../types/theme";
import { CustomGlobalStyles } from "./CustomGlobalStyles";
import SpinnerWrapper from "../shared/component/Spinner";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <Fragment>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CustomGlobalStyles theme={theme as Theme & CustomThemeOptions}>
            <CssBaseline />
            <RouterProvider router={router} fallbackElement={<SpinnerWrapper />} />
          </CustomGlobalStyles>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </Fragment>
  );
}

export default App;
