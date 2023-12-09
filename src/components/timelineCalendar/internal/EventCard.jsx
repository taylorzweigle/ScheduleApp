//Taylor Zweigle, 2023
import React from "react";

import { Card, Typography } from "@mui/material";

const EventCard = ({ event, date }) => {
  return (
    <Card sx={{ padding: "8px" }}>
      <Typography variant="body2">{event}</Typography>
      <Typography variant="caption">{`${date.getHours()}:00am - ${date.getHours() + 1}:00am`}</Typography>
    </Card>
  );
};

export default EventCard;
