//Taylor Zweigle, 2023
import React from "react";

import { Paper, Typography } from "@mui/material";

const EventCard = ({ event, startTime, endTime }) => {
  const formatTime = (time) => `${time % 12 === 0 ? 12 : time % 12}${time >= 12 ? "pm" : "am"} `;

  return (
    <Paper sx={{ padding: "8px", backgroundColor: "#5b21b6", height: "100%" }}>
      <Typography variant="body2">{event}</Typography>
      <Typography variant="caption">{`${formatTime(startTime.getHours())} - ${formatTime(endTime.getHours())}`}</Typography>
    </Paper>
  );
};

export default EventCard;
