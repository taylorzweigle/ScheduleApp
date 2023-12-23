//Taylor Zweigle, 2023
import React from "react";

const Button = ({ variant, children, onClick }) => {
  let buttonStyle = "";

  switch (variant) {
    case "contained":
      buttonStyle = "bg-sky-500 text-white hover:bg-sky-700";
      break;
    case "outlined":
      buttonStyle = "border border-sky-500 text-sky-500 hover:bg-sky-100 hover:dark:bg-slate-800";
      break;
    case "text":
      buttonStyle = "text-sky-500 hover:bg-sky-100 hover:dark:bg-slate-800";
      break;
    default:
      buttonStyle = "text-sky-500 hover:bg-sky-100 hover:dark:bg-slate-800";
      break;
  }

  return (
    <button className={`h-12 pl-6 pr-6 rounded-lg ${buttonStyle}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
