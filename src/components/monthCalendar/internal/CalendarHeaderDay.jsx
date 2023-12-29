//Taylor Zweigle, 2023
import React from "react";

const CalendarHeaderDay = ({ day }) => {
  return (
    <th className="h-10 w-10">
      <p className="text-slate-950 dark:text-slate-300">{day}</p>
    </th>
  );
};

export default CalendarHeaderDay;
