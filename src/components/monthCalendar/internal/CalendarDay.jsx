//Taylor Zweigle, 2023
import React from "react";

const CalendarDay = ({ date, selected, onClick }) => {
  return (
    <td
      className={`h-12 w-12 rounded-full text-center ${selected ? "bg-pink-500" : "hover:bg-pink-100 hover:dark:bg-pink-950"}`}
    >
      <div className="cursor-pointer" onClick={() => onClick(date)}>
        <p className={`${selected ? "text-white" : "text-slate-950 dark:text-white"}`}>{date}</p>
      </div>
    </td>
  );
};

export default CalendarDay;
