"use client";

import React from "react";
import { ThemeProvider as MuiThemeProvider } from "@emotion/react";
import { CssBaseline, StyledEngineProvider } from "@mui/material";
import theme from "./theme";

interface IThemeProviderProps {
  children: React.ReactNode;
}

function ThemeProvider({ children }: IThemeProviderProps) {
  return (
    <StyledEngineProvider injectFirst>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </StyledEngineProvider>
  );
}

export default ThemeProvider;
