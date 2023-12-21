//Taylor Zweigle, 2023
import React from "react";

const Button = ({ children, onClick }) => {
  return (
    <button
      className="h-12 pl-8 pr-8 rounded-lg text-slate-950 dark:text-white hover:bg-pink-100 hover:dark:bg-pink-950"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
