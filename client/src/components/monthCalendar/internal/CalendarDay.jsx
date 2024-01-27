//Taylor Zweigle, 2024
import React from "react";

import Typography from "../../../core/typography/Typography";

const CalendarDay = ({ date, selected, onClick }) => {
  return (
    <td
      className={`h-10 w-10 rounded-full text-center ${
        selected ? "bg-sky-500" : date ? "hover:bg-sky-100 hover:dark:bg-slate-800" : ""
      }`}
    >
      <div className="cursor-pointer" onClick={() => onClick(date)}>
        <Typography variant="body" color={selected ? "white" : "textPrimary"}>
          {date}
        </Typography>
      </div>
    </td>
  );
};

export default CalendarDay;
