//Taylor Zweigle, 2023
import React from "react";
import { useDispatch, useSelector } from "react-redux";

import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

import { theme } from "../../actions";

import IconButton from "./IconButton";

const ToggleThemeButton = () => {
  const dispatch = useDispatch();

  const selectedTheme = useSelector((state) => state.theme);

  const handleThemeButtonClick = () => {
    document.documentElement.classList.toggle("dark");

    dispatch(theme());
  };

  return (
    <IconButton
      icon={
        selectedTheme === "light" ? <LightModeIcon className="text-slate-900" /> : <DarkModeIcon className="dark:text-white" />
      }
      onClick={handleThemeButtonClick}
    />
  );
};

export default ToggleThemeButton;
