//Taylor Zweigle, 2023
import React from "react";

const EventCard = ({ event, startTime, endTime }) => {
  const formatTime = (time) => `${time % 12 === 0 ? 12 : time % 12}${time >= 12 ? "pm" : "am"} `;

  return (
    <div className="h-full rounded-md border bg-pink-100 dark:bg-pink-500 border-pink-500 p-2">
      <p className="text-base text-pink-800 dark:text-white">{event}</p>
      <p className="text-sm text-pink-600 dark:text-pink-100">{`${formatTime(startTime.getHours())} - ${formatTime(
        endTime.getHours()
      )}`}</p>
    </div>
  );
};

export default EventCard;
