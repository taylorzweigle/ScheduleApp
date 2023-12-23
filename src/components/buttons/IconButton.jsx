//Taylor Zweigle, 2023
import React from "react";

const IconButton = ({ color, icon, onClick }) => {
  let buttonStyle = "";

  switch (color) {
    case "primary":
      buttonStyle = "text-sky-500 hover:bg-sky-100 hover:dark:bg-slate-800";
      break;
    case "secondary":
      buttonStyle = "text-slate-950 dark:text-white hover:bg-sky-100 hover:dark:bg-slate-800";
      break;
    default:
      buttonStyle = "text-slate-950 dark:text-white hover:bg-sky-100 hover:dark:bg-slate-800";
      break;
  }

  return (
    <button className={`w-12 h-12 rounded-full ${buttonStyle}`} onClick={onClick}>
      {icon}
    </button>
  );
};

export default IconButton;
