//Taylor Zweigle, 2023
import React from "react";

const Avatar = ({ children }) => {
  return (
    <div className="flex justify-center items-center w-12 h-12 rounded-full text-lg bg-slate-300 dark:bg-slate-600 text-slate-950 dark:text-white">
      {children}
    </div>
  );
};

export default Avatar;
