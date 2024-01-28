//Taylor Zweigle, 2024
import React, { useState } from "react";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import Button from "../../core/buttons/Button";
import IconButton from "../../core/buttons/IconButton";
import Typography from "../../core/typography/Typography";

import EventModal from "../modals/EventModal";

const HeaderControls = ({ selectedDate, onTodayClick, onPreviousWeekClick, onNextWeekClick }) => {
  const [open, setOpen] = useState(false);

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
    <>
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
          <Button variant="contained" onClick={() => setOpen(true)}>
            Add Event
          </Button>
        </div>
      </div>
      <EventModal type="Add" open={open} onAction={() => setOpen(false)} onClose={() => setOpen(false)} />
    </>
  );
};

export default HeaderControls;
