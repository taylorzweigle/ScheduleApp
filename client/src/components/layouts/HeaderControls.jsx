//Taylor Zweigle, 2024
import React from "react";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import Button from "../buttons/Button";
import IconButton from "../buttons/IconButton";
import Typography from "../typography/Typography";

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
    <div className="flex flex-row justify-between items-center p-4 bg-white dark:bg-slate-900 border-b border-slate-300 dark:border-slate-600">
      <Typography variant="title" color="textPrimary">{`${months[selectedDate.month]} ${selectedDate.year}`}</Typography>
      <div className="flex flex-row items-center gap-4">
        <div className="flex flex-row items-center gap-0">
          <IconButton color="primary" icon={<ChevronLeftIcon />} onClick={onPreviousWeekClick} />
          <IconButton color="primary" icon={<ChevronRightIcon />} onClick={onNextWeekClick} />
        </div>
        <Button variant="outlined" onClick={onTodayClick}>
          Today
        </Button>
        <Button variant="contained" onClick={onAddEventClick}>
          Add Event
        </Button>
      </div>
    </div>
  );
};

export default HeaderControls;
