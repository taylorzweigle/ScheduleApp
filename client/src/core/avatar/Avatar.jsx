//Taylor Zweigle, 2024
import React from "react";

import Typography from "../typography/Typography";

const Avatar = ({ children }) => {
  return (
    <div className="flex justify-center items-center w-12 h-12 rounded-full text-lg bg-slate-300 dark:bg-slate-600">
      <Typography variant="body" color="textPrimary">
        {children}
      </Typography>
    </div>
  );
};

export default Avatar;
