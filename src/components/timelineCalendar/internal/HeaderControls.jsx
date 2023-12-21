//Taylor Zweigle, 2023
import React from "react";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import Button from "../../buttons/Button";
import IconButton from "../../buttons/IconButton";

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
      <p className="text-2xl text-slate-950 dark:text-white">{`${months[selectedDate.month]} ${selectedDate.year}`}</p>
      <div className="flex flex-row items-center gap-4">
        <Button onClick={onTodayClick}>Today</Button>
        <div className="flex flex-row items-center gap-0">
          <IconButton icon={<ChevronLeftIcon />} onClick={onPreviousWeekClick} />
          <IconButton icon={<ChevronRightIcon />} onClick={onNextWeekClick} />
        </div>
        <Button onClick={onAddEventClick}>Add Event</Button>
      </div>
    </div>
  );
};

export default HeaderControls;
