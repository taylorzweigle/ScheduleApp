//Taylor Zweigle, 2024
import React from "react";

import Typography from "../typography/Typography";

const EventCard = ({ title, startTime, endTime, onClick }) => {
  const formatTime = (time) => `${time % 12 === 0 ? 12 : time % 12}${time >= 12 ? "pm" : "am"} `;

  return (
    <div
      className="h-full rounded-md border bg-slate-100 dark:bg-slate-500 hover:bg-slate-200 dark:hover:bg-slate-600 border-slate-500 p-2 cursor-pointer"
      onClick={onClick}
    >
      <Typography variant="body" color="textPrimary">
        {title}
      </Typography>
      <Typography variant="caption" color="textPrimary">
        {`${formatTime(startTime.getHours())} - ${formatTime(endTime.getHours())}`}
      </Typography>
    </div>
  );
};

export default EventCard;
