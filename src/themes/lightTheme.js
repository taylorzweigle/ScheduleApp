//Taylor Zweigle, 2023
import { createTheme } from "@mui/material";

import { defaultTheme } from "./defaultTheme";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
  },
  ...defaultTheme,
});
