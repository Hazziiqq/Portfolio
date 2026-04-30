"use client";

import { createTheme } from "@mui/material/styles";
import c from "./colors";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: c.primary },
    background: { default: c.background, paper: c.surface },
    text: { primary: c.text, secondary: c.textDim },
    success: { main: c.green },
    error: { main: c.red },
    warning: { main: c.yellow },
    info: { main: c.cyan },
  },
  typography: {
    fontFamily: "'Hack', monospace",
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: { fontFamily: "'Hack', monospace" },
      },
    },
  },
});

export default theme;
