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
    <div
      style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", padding: "16px" }}
    >
      <h5>{`${months[selectedDate.month]} ${selectedDate.year}`}</h5>
      <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "16px" }}>
        <button onClick={onTodayClick}>Today</button>
        <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "0px" }}>
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
