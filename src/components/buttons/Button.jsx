//Taylor Zweigle, 2023
import React from "react";

const Button = ({ variant, children, onClick }) => {
  let buttonStyle = "";

  switch (variant) {
    case "contained":
      buttonStyle = "bg-pink-500 text-white hover:bg-pink-700";
      break;
    case "outlined":
      buttonStyle = "border border-pink-500 text-pink-500 hover:bg-pink-100 hover:dark:bg-slate-800";
      break;
    case "text":
      buttonStyle = "text-pink-500 hover:bg-pink-100 hover:dark:bg-slate-800";
      break;
    default:
      buttonStyle = "text-pink-500 hover:bg-pink-100 hover:dark:bg-slate-800";
      break;
  }

  return (
    <button className={`h-12 pl-6 pr-6 rounded-lg ${buttonStyle}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
