//Taylor Zweigle, 2024
import React from "react";

import Typography from "../typography/Typography";

const TextInput = ({ label, value, onChange }) => {
  return (
    <div className="flex flex-col gap-2 w-full">
      <label htmlFor="textInput">
        <Typography variant="body" color="textPrimary">
          {label}
        </Typography>
      </label>
      <input
        type="text"
        name="textInput"
        value={value}
        onChange={onChange}
        className="h-12 w-full pl-4 pr-4 rounded-lg border bg-white dark:bg-slate-950 border-slate-800 dark:border-slate-600"
      />
    </div>
  );
};

export default TextInput;
