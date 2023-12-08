//Taylor Zweigle, 2023
import { createTheme } from "@mui/material";

import { defaultTheme } from "./defaultTheme";

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
  ...defaultTheme,
});
