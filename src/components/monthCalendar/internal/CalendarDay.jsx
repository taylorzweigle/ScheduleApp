//Taylor Zweigle, 2023
import React from "react";

const CalendarDay = ({ date, selected, onClick }) => {
  return (
    <td
      className={`h-10 w-10 rounded-full text-center ${
        selected ? "bg-sky-500" : date ? "hover:bg-sky-100 hover:dark:bg-slate-800" : ""
      }`}
    >
      <div className="cursor-pointer" onClick={() => onClick(date)}>
        <p className={`${selected ? "text-white" : "text-slate-950 dark:text-white"}`}>{date}</p>
      </div>
    </td>
  );
};

export default CalendarDay;
