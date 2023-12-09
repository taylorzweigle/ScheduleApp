//Taylor Zweigle, 2023
import React from "react";

import { TableCell, Typography } from "@mui/material";

const CalendarDay = ({ day }) => {
  return (
    <TableCell sx={{ border: "none" }}>
      <Typography variant="body2" color="textPrimary">
        {day}
      </Typography>
    </TableCell>
  );
};

export default CalendarDay;
