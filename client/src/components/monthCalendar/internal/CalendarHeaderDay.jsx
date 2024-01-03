//Taylor Zweigle, 2024
import React from "react";

import Typography from "../../typography/Typography";

const CalendarHeaderDay = ({ day }) => {
  return (
    <th className="h-10 w-10">
      <Typography variant="body" color="textPrimary">
        {day}
      </Typography>
    </th>
  );
};

export default CalendarHeaderDay;
