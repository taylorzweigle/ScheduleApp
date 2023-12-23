//Taylor Zweigle, 2023
import React from "react";

const ColumnHeader = ({ date, day, selected }) => {
  return (
    <th className={`${selected ? "border-b-4 border-sky-500" : "border-b border-slate-300 dark:border-slate-600"}`}>
      <div className="flex flex-row items-end gap-2">
        <p className={`${selected ? "text-sky-500" : "text-slate-950 dark:text-white"}`}>{date}</p>
        <p className={`${selected ? "text-sky-500" : "text-slate-950 dark:text-white"}`}>{day.slice(0, 3)}</p>
      </div>
    </th>
  );
};

export default ColumnHeader;
