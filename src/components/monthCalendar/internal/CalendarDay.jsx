//Taylor Zweigle, 2023
import React from "react";

import { Box, TableCell, Typography } from "@mui/material";

const CalendarDay = ({ date, onClick }) => {
  return (
    <TableCell sx={{ border: "none" }}>
      <Box onClick={() => onClick(date)}>
        <Typography variant="body2" color="textPrimary">
          {date}
        </Typography>
      </Box>
    </TableCell>
  );
};

export default CalendarDay;
