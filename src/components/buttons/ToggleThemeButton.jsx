//Taylor Zweigle, 2023
import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { theme } from "../../actions";

import IconButton from "@mui/material/IconButton";

import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

const ToggleThemeButton = () => {
  const dispatch = useDispatch();

  const selectedTheme = useSelector((state) => state.theme);

  return (
    <IconButton variant="text" color="default" onClick={() => dispatch(theme())}>
      {selectedTheme === "light" ? <LightModeIcon /> : null}
      {selectedTheme === "dark" ? <DarkModeIcon /> : null}
    </IconButton>
  );
};

export default ToggleThemeButton;
