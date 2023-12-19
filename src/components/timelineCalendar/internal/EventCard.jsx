//Taylor Zweigle, 2023
import React from "react";

const EventCard = ({ event, startTime, endTime }) => {
  const formatTime = (time) => `${time % 12 === 0 ? 12 : time % 12}${time >= 12 ? "pm" : "am"} `;

  return (
    <div className="h-full bg-purple-500 p-2">
      <p className="text-white">{event}</p>
      <p className="text-white">{`${formatTime(startTime.getHours())} - ${formatTime(endTime.getHours())}`}</p>
    </div>
  );
};

export default EventCard;
