//Taylor Zweigle, 2023
import React from "react";

import { TableCell, Typography } from "@mui/material";

const CalendarHeaderDay = ({ day }) => {
  return (
    <TableCell sx={{ border: "none" }}>
      <Typography variant="body2" color="textSecondary">
        {day}
      </Typography>
    </TableCell>
  );
};

export default CalendarHeaderDay;
