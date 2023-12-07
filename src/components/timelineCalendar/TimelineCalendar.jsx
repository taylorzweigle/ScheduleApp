//Taylor Zweigle, 2023
import React from "react";

import { Box, Stack, Typography } from "@mui/material";

import DayHeader from "./internal/DayHeader";

const TimelineCalendar = () => {
  const days = [
    { date: "01", day: "Sun" },
    { date: "02", day: "Mon" },
    { date: "03", day: "Tue" },
    { date: "04", day: "Wed" },
    { date: "05", day: "Thu" },
    { date: "06", day: "Fri" },
    { date: "07", day: "Sat" },
  ];

  const hours = [
    "6am",
    "7am",
    "8am",
    "9am",
    "10am",
    "11am",
    "12pm",
    "1pm",
    "2pm",
    "3pm",
    "4pm",
    "5pm",
    "6pm",
    "7pm",
    "8pm",
    "9pm",
    "10pm",
  ];

  return (
    <Stack direction="row" gap={0}>
      <Box
        sx={{
          width: "48rem",
          padding: "8px",
        }}
      >
        <Box sx={{ padding: "8px", borderBottom: "1px", borderBottomStyle: "solid", borderBottomColor: "grey.300" }}>
          &nbsp;
        </Box>
        {hours.map((h) => (
          <Box
            key={h}
            sx={{
              padding: "8px",
              borderBottom: "1px",
              borderBottomStyle: "solid",
              borderBottomColor: "grey.300",
              borderRight: "1px",
              borderRightStyle: "solid",
              borderRightColor: "grey.300",
            }}
          >
            <Typography variant="body2">{h}</Typography>
          </Box>
        ))}
      </Box>
      {days.map((d) => (
        <Box key={d.date} sx={{ width: "100%" }}>
          <Box
            sx={{
              padding: "8px",
              borderBottom: "1px",
              borderBottomStyle: "solid",
              borderBottomColor: "grey.300",
            }}
          >
            <DayHeader date={d.date} day={d.day} />
          </Box>
          <Stack direction="column">
            {hours.map((h) => (
              <Box
                key={h}
                sx={{
                  borderBottom: "1px",
                  borderBottomStyle: "solid",
                  borderBottomColor: "grey.300",
                  borderRight: "1px",
                  borderRightStyle: "solid",
                  borderRightColor: "grey.300",
                }}
              >
                &nbsp;
              </Box>
            ))}
          </Stack>
        </Box>
      ))}
    </Stack>
  );
};

export default TimelineCalendar;
