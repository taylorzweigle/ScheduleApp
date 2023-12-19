//Taylor Zweigle, 2023
import React from "react";

const CalendarDay = ({ date, selected, onClick }) => {
  return (
    <td className={`rounded-full text-center ${selected ? "bg-blue-500" : null}`}>
      <div className="cursor-pointer" onClick={() => onClick(date)}>
        <p className={`${selected ? "text-white" : "text-slate-950"}`}>{date}</p>
      </div>
    </td>
  );
};

export default CalendarDay;
