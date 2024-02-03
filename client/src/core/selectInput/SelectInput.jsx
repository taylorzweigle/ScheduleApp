//Taylor Zweigle, 2024
import React from "react";

import Typography from "../typography/Typography";

const SelectInput = ({ label, value, items, showLabel, onChange }) => {
  const select = () => {
    return (
      <select
        id={label}
        value={value}
        onChange={onChange}
        className="h-12 w-full pl-4 pr-4 rounded-lg border bg-white dark:bg-slate-950 border-slate-800 dark:border-slate-600"
      >
        {items.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    );
  };

  return showLabel ? (
    <div className="flex flex-col gap-2 w-full">
      <Typography variant="body" color="textPrimary">
        {label}
      </Typography>
      {select()}
    </div>
  ) : (
    select()
  );
};

export default SelectInput;
