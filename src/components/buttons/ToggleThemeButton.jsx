//Taylor Zweigle, 2023
import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { theme } from "../../actions";

import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

const ToggleThemeButton = () => {
  const dispatch = useDispatch();

  const selectedTheme = useSelector((state) => state.theme);

  return (
    <button onClick={() => dispatch(theme())}>
      {selectedTheme === "light" ? <LightModeIcon /> : null}
      {selectedTheme === "dark" ? <DarkModeIcon /> : null}
    </button>
  );
};

export default ToggleThemeButton;
