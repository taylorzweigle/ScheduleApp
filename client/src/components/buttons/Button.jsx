//Taylor Zweigle, 2024
import React from "react";

const Button = ({ variant, children, onClick }) => {
  let buttonStyle = "text-sky-500 hover:bg-sky-100 hover:dark:bg-slate-800";

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
      throw Error(`Component does not support ${variant} style`);
  }

  return (
    <button className={`h-12 pl-6 pr-6 rounded-lg ${buttonStyle}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
