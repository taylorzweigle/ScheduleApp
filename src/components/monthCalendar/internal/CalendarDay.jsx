//Taylor Zweigle, 2023
import React from "react";

import { Box, TableCell, Typography } from "@mui/material";

const CalendarDay = ({ date, selected, onClick }) => {
  return (
    <TableCell
      sx={{
        border: "none",
        borderRadius: "100%",
        backgroundColor: selected ? "#90caf9" : null,
        textAlign: "center",
      }}
    >
      <Box onClick={() => onClick(date)} sx={{ cursor: "pointer" }}>
        <Typography variant="body2" color={selected ? "#000000" : "textPrimary"}>
          {date}
        </Typography>
      </Box>
    </TableCell>
  );
};

export default CalendarDay;
