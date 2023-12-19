//Taylor Zweigle, 2023
import React from "react";

const ColumnHeader = ({ date, day, selected }) => {
  return (
    <th className={`${selected ? "border-b-4 border-blue-500" : null}`}>
      <div className="flex flex-row items-end gap-2">
        <p className={`${selected ? "text-blue-500" : "text-slate-950"}`}>{date}</p>
        <p className={`${selected ? "text-blue-500" : "text-slate-950"}`}>{day.slice(0, 3)}</p>
      </div>
    </th>
  );
};

export default ColumnHeader;
