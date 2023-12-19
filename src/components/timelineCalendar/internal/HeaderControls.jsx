//Taylor Zweigle, 2023
import React from "react";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const HeaderControls = ({ selectedDate, onTodayClick, onPreviousWeekClick, onNextWeekClick, onAddEventClick }) => {
  const months = [
    "January",
    "Feburary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <div className="flex flex-row justify-between items-center p-4">
      <p className="text-slate-950">{`${months[selectedDate.month]} ${selectedDate.year}`}</p>
      <div className="flex flex-row items-center g-4">
        <button onClick={onTodayClick}>Today</button>
        <div className="flex flex-row items-center gap-0">
          <button onClick={onPreviousWeekClick}>
            <ChevronLeftIcon />
          </button>
          <button onClick={onNextWeekClick}>
            <ChevronRightIcon />
          </button>
        </div>
        <button onClick={onAddEventClick}>Add Event</button>
      </div>
    </div>
  );
};

export default HeaderControls;
