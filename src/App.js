//Taylor Zweigle, 2023
import React from "react";
import { useSelector } from "react-redux";

import { ThemeProvider } from "@mui/material";

import CssBaseline from "@mui/material/CssBaseline";

import MainPage from "./pages/MainPage";

import { darkTheme } from "./themes/darkTheme";
import { lightTheme } from "./themes/lightTheme";

const App = () => {
  const theme = useSelector((state) => state.theme);

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <CssBaseline />
      <MainPage />
    </ThemeProvider>
  );
};

export default App;
