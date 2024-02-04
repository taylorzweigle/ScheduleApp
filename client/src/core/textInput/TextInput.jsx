//Taylor Zweigle, 2024
import React from "react";

import Typography from "../typography/Typography";

const TextInput = ({ label, value, showLabel, onChange }) => {
  const input = () => {
    return (
      <input
        type="text"
        id={label}
        value={value}
        onChange={onChange}
        className="h-12 w-full pl-4 pr-4 rounded-lg border bg-white dark:bg-slate-950 border-slate-800 dark:border-slate-600 text-slate-950 dark:text-white"
      />
    );
  };

  return showLabel ? (
    <div className="flex flex-col gap-2 w-full">
      <Typography variant="body" color="textPrimary">
        {label}
      </Typography>
      {input()}
    </div>
  ) : (
    input()
  );
};

export default TextInput;
