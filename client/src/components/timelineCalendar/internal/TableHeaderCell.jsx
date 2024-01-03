//Taylor Zweigle, 2024
import React from "react";

import Typography from "../../typography/Typography";

const TableHeaderCell = ({ date, day, today, selected }) => {
  return (
    <td
      className={`pl-4 ${today ? "border-b-4 border-sky-500" : "border-b border-slate-300 dark:border-slate-600"} ${
        selected ? "bg-slate-100 dark:bg-slate-800" : ""
      }`}
    >
      <div className="flex flex-row items-end gap-2">
        <Typography variant="title" color={today ? "textAccent" : "textPrimary"}>
          {date}
        </Typography>
        <Typography variant="body" color={today ? "textAccent" : "textPrimary"}>
          {day.slice(0, 3)}
        </Typography>
      </div>
    </td>
  );
};

export default TableHeaderCell;
