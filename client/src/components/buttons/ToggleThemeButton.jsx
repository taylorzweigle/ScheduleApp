//Taylor Zweigle, 2023
import React, { useState } from "react";

import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

import IconButton from "../../core/buttons/IconButton";

const ToggleThemeButton = () => {
  const [darkTheme, setDarkTheme] = useState(false);

  const handleThemeButtonClick = () => {
    setDarkTheme(!darkTheme);

    document.documentElement.classList.toggle("dark");
  };

  return (
    <IconButton
      icon={darkTheme ? <DarkModeIcon className="dark:text-white" /> : <LightModeIcon className=" text-slate-900" />}
      onClick={handleThemeButtonClick}
    />
  );
};

export default ToggleThemeButton;
