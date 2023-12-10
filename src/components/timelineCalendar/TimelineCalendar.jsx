//Taylor Zweigle, 2023
import React from "react";

import { Stack, Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material";

import CalendarHeaderDay from "./internal/CalendarHeaderDay";
import EventCard from "./internal/EventCard";
import HeaderControls from "./internal/HeaderControls";

import { events } from "../data/tempData";

const TimelineCalendar = ({ selectedDate, onTodayClick, onPreviousWeekClick, onNextWeekClick, onAddEventClick }) => {
  const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  const hours = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];

  const populateDateArray = () => {
    let dateArray = [];

    for (let i = 0; i < weekdays.length; i++) {
      dateArray.push({ day: weekdays[i], date: selectedDate.date + i });
    }

    return dateArray;
  };

  return (
    <Stack direction="column" gap={0}>
      <HeaderControls
        onTodayClick={onTodayClick}
        onPreviousWeekClick={onPreviousWeekClick}
        onNextWeekClick={onNextWeekClick}
        onAddEventClick={onAddEventClick}
      />
      <Table stickyHeader sx={{ tableLayout: "fixed" }}>
        <TableHead>
          <TableRow>
            <TableCell sx={{ width: "80px" }}>&nbsp;</TableCell>
            {populateDateArray().map((day) => (
              <TableCell key={day.day}>
                <CalendarHeaderDay date={day.date} day={day.day} />
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell align="right">
              <Typography variant="caption">All Day</Typography>
            </TableCell>
            {weekdays.map((day) => (
              <TableCell key={day}>&nbsp;</TableCell>
            ))}
          </TableRow>
          {hours.map((hour) => (
            <TableRow key={hour}>
              <TableCell align="right">
                <Typography variant="caption">{`${hour % 12 === 0 ? 12 : hour % 12}${hour < 12 ? "am" : "pm"}`}</Typography>
              </TableCell>
              {populateDateArray().map((day) => (
                <TableCell key={day.day} sx={{ padding: "0px" }}>
                  {events
                    .filter((event) => event.date.getHours() === hour && event.date.getDate() === day.date)
                    .map((event) => (
                      <EventCard key={event.id} event={event.event} date={event.date} />
                    ))}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Stack>
  );
};

export default TimelineCalendar;
