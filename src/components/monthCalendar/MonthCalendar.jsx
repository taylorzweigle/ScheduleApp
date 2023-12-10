//Taylor Zweigle, 2023
import React from "react";

import { IconButton, Stack, Table, TableBody, TableHead, TableRow, Typography } from "@mui/material";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import CalendarDay from "./internal/CalendarDay";
import CalendarHeaderDay from "./internal/CalendarHeaderDay";

const MonthCalendar = ({ selectedDate, onPreviousMonthClick, onNextMonthClick, onCalendarDayClick }) => {
  const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

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

  const getMonthLength = (year, month) => 32 - new Date(year, month, 32).getDate();

  const getDayOfWeekOfMonthStart = (year, month) => new Date(year, month).getDay();

  const populateCalendar = (year, month) => {
    let calendarDays = [];
    let calendarDaysByWeek = [];

    let remainingDays = 0;

    const monthLength = getMonthLength(year, month);

    const prevMonthLength = getMonthLength(month === 0 ? year - 1 : year, month === 0 ? 11 : month - 1);

    const dayOfWeekOfMonthStart = getDayOfWeekOfMonthStart(year, month);

    for (let i = dayOfWeekOfMonthStart - 1; i >= 0; i--) {
      calendarDays.push({ key: `${month - 1 < 10 ? "0" : ""}${month === 0 ? 11 : month - 1}${prevMonthLength - i}`, date: "" });
    }

    for (let i = 1; i <= monthLength; i++) {
      calendarDays.push({ key: `${month < 10 ? "0" : ""}${month}${i}`, date: i });
    }

    remainingDays = 7 - (calendarDays.length % 7);

    if (remainingDays < 7) {
      for (let i = 0; i < remainingDays; i++) {
        calendarDays.push({ key: `${month + 1 < 10 ? "0" : ""}${month + 1}${i}`, date: "" });
      }
    }

    for (let i = 0; i < calendarDays.length; i += 7) {
      let temp = calendarDays.slice(i, i + 7);

      calendarDaysByWeek.push({ week: i / 7, days: temp });
    }

    return calendarDaysByWeek;
  };

  return (
    <Stack direction="column" gap={2}>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography variant="body1">{`${months[selectedDate.month]} ${selectedDate.year}`}</Typography>
        <Stack direction="row" gap={0}>
          <IconButton onClick={onPreviousMonthClick}>
            <ChevronLeftIcon />
          </IconButton>
          <IconButton onClick={onNextMonthClick}>
            <ChevronRightIcon />
          </IconButton>
        </Stack>
      </Stack>
      <Table>
        <TableHead>
          <TableRow>
            {weekdays.map((weekday) => (
              <CalendarHeaderDay key={weekday} day={weekday.slice(0, 1)} />
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {populateCalendar(selectedDate.year, selectedDate.month).map((week) => (
            <TableRow key={week.week}>
              {week.days.map((date) => (
                <CalendarDay key={date.key} date={date.date} onClick={(date) => onCalendarDayClick(date)} />
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Stack>
  );
};

export default MonthCalendar;
