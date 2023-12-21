//Taylor Zweigle, 2023
import React from "react";

const IconButton = ({ icon, onClick }) => {
  return (
    <button
      className="w-12 h-12 rounded-full text-slate-950 dark:text-white hover:bg-pink-100 hover:dark:bg-pink-950"
      onClick={onClick}
    >
      {icon}
    </button>
  );
};

export default IconButton;
