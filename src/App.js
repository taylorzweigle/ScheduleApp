//Taylor Zweigle, 2023
import React from "react";

import { ThemeProvider } from "@mui/material";

import CssBaseline from "@mui/material/CssBaseline";

import MainPage from "./pages/MainPage";

//import { darkTheme } from "./themes/darkTheme";
import { lightTheme } from "./themes/lightTheme";

const App = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      <MainPage />
    </ThemeProvider>
  );
};

export default App;
