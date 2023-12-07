//Taylor Zweigle, 2023
import React from "react";

import { Button, IconButton, Stack, Typography } from "@mui/material";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const TimelineCalendarControls = () => {
  return (
    <Stack direction="row" justifyContent="space-between" alignItems="center">
      <Typography variant="h5">Janurary 2023</Typography>
      <Stack direction="row" alignItems="center" gap={2}>
        <Button>Today</Button>
        <IconButton>
          <ChevronLeftIcon />
        </IconButton>
        <IconButton>
          <ChevronRightIcon />
        </IconButton>
      </Stack>
    </Stack>
  );
};

export default TimelineCalendarControls;
