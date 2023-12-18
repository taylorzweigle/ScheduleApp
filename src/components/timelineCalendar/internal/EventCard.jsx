//Taylor Zweigle, 2023
import React from "react";

const EventCard = ({ event, startTime, endTime }) => {
  const formatTime = (time) => `${time % 12 === 0 ? 12 : time % 12}${time >= 12 ? "pm" : "am"} `;

  return (
    <div style={{ padding: "8px", backgroundColor: "#5b21b6", height: "100%" }}>
      <p>{event}</p>
      <p>{`${formatTime(startTime.getHours())} - ${formatTime(endTime.getHours())}`}</p>
    </div>
  );
};

export default EventCard;
