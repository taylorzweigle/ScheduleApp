//Taylor Zweigle, 2023
import React from "react";

import { Button, ButtonGroup, Stack, Typography } from "@mui/material";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const HeaderControls = ({ selectedDate, onTodayClick, onPreviousWeekClick, onNextWeekClick, onAddEventClick }) => {
  const months = [
    "January",
    "Feburary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ padding: "16px" }}>
      <Typography variant="h5">{`${months[selectedDate.month]} ${selectedDate.year}`}</Typography>
      <Stack direction="row" alignItems="center" gap={2}>
        <Button variant="outlined" onClick={onTodayClick}>
          Today
        </Button>
        <Stack direction="row" alignItems="center" gap={0}>
          <ButtonGroup size="md">
            <Button onClick={onPreviousWeekClick}>
              <ChevronLeftIcon />
            </Button>
            <Button onClick={onNextWeekClick}>
              <ChevronRightIcon />
            </Button>
          </ButtonGroup>
        </Stack>
        <Button variant="contained" onClick={onAddEventClick}>
          Add Event
        </Button>
      </Stack>
    </Stack>
  );
};

export default HeaderControls;
