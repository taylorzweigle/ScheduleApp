//Taylor Zweigle, 2023
import React from "react";

import { Stack, TableCell, Typography } from "@mui/material";

const ColumnHeader = ({ date, day, selected }) => {
  return (
    <TableCell sx={{ borderBottom: selected ? "2px  solid #90caf9" : null }}>
      <Stack direction="row" alignItems="flex-end" gap={1}>
        <Typography variant="h5" sx={{ color: selected ? "#90caf9" : "#ffffff" }}>
          {date}
        </Typography>
        <Typography variant="body2" sx={{ color: selected ? "#90caf9" : "#ffffff" }}>
          {day.slice(0, 3)}
        </Typography>
      </Stack>
    </TableCell>
  );
};

export default ColumnHeader;
