//Taylor Zweigle, 2024
import React, { useState } from "react";

import { useSelectedDateContext } from "../../hooks/useSelectedDateContext";

import Typography from "../typography/Typography";

import MonthCalendar, { months } from "../../components/monthCalendar/MonthCalendar";

const DateInput = ({ label, value, onChange }) => {
  const { selectedDate } = useSelectedDateContext();

  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="flex flex-col gap-2 w-full">
        <Typography variant="body" color="textPrimary">
          {label}
        </Typography>
        <input
          id={label}
          value={value ? value : `${months[selectedDate.month]} ${selectedDate.date}, ${selectedDate.year}`}
          onChange={onChange}
          onClick={() => setOpen(!open)}
          className="h-12 w-full pl-4 pr-4 rounded-lg border bg-white dark:bg-slate-950 border-slate-800 dark:border-slate-600"
        ></input>
      </div>
      <div className={`${open ? "block" : "hidden"}`}>
        <MonthCalendar selectedDate={selectedDate} />
      </div>
    </>
  );
};

export default DateInput;
