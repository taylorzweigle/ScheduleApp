//Taylor Zweigle, 2023
import React, { useState } from "react";

import { Avatar, Box, Grid, Stack, Typography } from "@mui/material";

import MonthCalendar from "../components/monthCalendar/MonthCalendar";
import TimelineCalendar from "../components/timelineCalendar/TimelineCalendar";
import ToggleThemeButton from "../components/buttons/ToggleThemeButton";

const MainPage = () => {
  const today = new Date();

  const [selectedDate, setSelectedDate] = useState({
    month: today.getMonth(),
    date: today.getDate(),
    year: today.getFullYear(),
    weekday: today.getDay(),
  });

  const handleTodayClick = () => {
    setSelectedDate({ month: today.getMonth(), date: today.getDate(), year: today.getFullYear(), weekday: today.getDay() });
  };

  const handlePreviousWeekClick = () => {
    console.log("PREVIOUS WEEK");
  };

  const handleNextWeekClick = () => {
    console.log("NEXT WEEK");
  };

  const handlePreviousMonthClick = () => {
    setSelectedDate({
      month: selectedDate.month === 0 ? 11 : selectedDate.month - 1,
      date: 1,
      year: selectedDate.month === 0 ? selectedDate.year - 1 : selectedDate.year,
      weekday: new Date(selectedDate.year, selectedDate.month - 1, 1).getDay(),
    });
  };

  const handleNextMonthClick = () => {
    setSelectedDate({
      month: (selectedDate.month + 1) % 12,
      date: 1,
      year: selectedDate.month === 11 ? selectedDate.year + 1 : selectedDate.year,
      weekday: new Date(selectedDate.year, selectedDate.month + 1, 1).getDay(),
    });
  };

  const handleCalendarDayClick = (date) => {
    setSelectedDate({
      month: selectedDate.month,
      date: date,
      year: selectedDate.year,
      weekday: new Date(selectedDate.year, selectedDate.month, date).getDay(),
    });
  };

  const handleAddEventClick = () => {
    console.log("ADD EVENT");
  };

  return (
    <Grid container>
      <Grid item xs={12} md={3}>
        <Box
          sx={{
            padding: "8px",
            borderRight: "1px",
            borderRightStyle: "solid",
            borderRightColor: "grey.300",
            height: "100vh",
          }}
        >
          <Stack direction="column" justifyContent="space-between" sx={{ height: "100%" }}>
            <Stack direction="row" justifyContent="space-between" alignItems="center">
              <Stack direction="row" alignItems="center" gap={2}>
                <Avatar>TZ</Avatar>
                <Typography>Taylor Zweigle</Typography>
              </Stack>
              <ToggleThemeButton />
            </Stack>
            <MonthCalendar
              selectedDate={selectedDate}
              onPreviousMonthClick={handlePreviousMonthClick}
              onNextMonthClick={handleNextMonthClick}
              onCalendarDayClick={handleCalendarDayClick}
            />
          </Stack>
        </Box>
      </Grid>
      <Grid item xs={12} md={9}>
        <TimelineCalendar
          selectedDate={selectedDate}
          onTodayClick={handleTodayClick}
          onPreviousWeekClick={handlePreviousWeekClick}
          onNextWeekClick={handleNextWeekClick}
          onAddEventClick={handleAddEventClick}
        />
      </Grid>
    </Grid>
  );
};

export default MainPage;
