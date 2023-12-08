//Taylor Zweigle, 2023
import React from "react";

import { Stack, Typography } from "@mui/material";

const ColumnHeader = ({ date, day }) => {
  return (
    <Stack direction="row" alignItems="flex-end" gap={1}>
      <Typography variant="h5">{date}</Typography>
      <Typography variant="body2">{day}</Typography>
    </Stack>
  );
};

export default ColumnHeader;
