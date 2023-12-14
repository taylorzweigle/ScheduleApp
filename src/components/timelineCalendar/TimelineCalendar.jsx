//Taylor Zweigle, 2023
import React, { useState, useEffect } from "react";

import { Stack, Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material";

import CalendarHeaderDay from "./internal/CalendarHeaderDay";
import EventCard from "./internal/EventCard";
import HeaderControls from "./internal/HeaderControls";

import { events } from "../../db/tempData";

const TimelineCalendar = ({ selectedDate, onTodayClick, onPreviousWeekClick, onNextWeekClick, onAddEventClick }) => {
  const [selectedWeek, setSelectedWeek] = useState([]);

  const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  const hours = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];

  const sundayEvents = events.filter((event) => event.startTime.getDay() === 0);
  const mondayEvents = events.filter((event) => event.startTime.getDay() === 1);
  const tuesdayEvents = events.filter((event) => event.startTime.getDay() === 2);
  const wednesdayEvents = events.filter((event) => event.startTime.getDay() === 3);
  const thursdayEvents = events.filter((event) => event.startTime.getDay() === 4);
  const fridayEvents = events.filter((event) => event.startTime.getDay() === 5);
  const saturdayEvents = events.filter((event) => event.startTime.getDay() === 6);

  const formatTime = (time) => `${time % 12 === 0 ? 12 : time % 12}${time >= 12 ? "pm" : "am"} `;

  useEffect(() => {
    let week = [];

    for (let i = 0; i < 7; i++) {
      week.push(selectedDate.date - selectedDate.weekday + i);
    }

    setSelectedWeek(week);
  }, [selectedDate]);

  const formatTableCell = (day, hour, events) => {
    let tableCell = null;

    if (events.length > 0) {
      for (let i = 0; i < events.length; i++) {
        if (events[i].startTime.getDate() === selectedWeek[day] && hour === events[i].startTime.getHours()) {
          tableCell = (
            <TableCell
              rowSpan={events[i].endTime.getHours() - events[i].startTime.getHours()}
              sx={{ height: "100%", padding: "0px 4px" }}
            >
              <EventCard
                key={events[i].id}
                event={events[i].event}
                startTime={events[i].startTime}
                endTime={events[i].endTime}
              />
            </TableCell>
          );
          break;
        } else if (
          events[i].startTime.getDate() === selectedWeek[day] &&
          hour > events[i].startTime.getHours() &&
          hour < events[i].endTime.getHours()
        ) {
          tableCell = null;
          break;
        } else {
          tableCell = <TableCell>&nbsp;</TableCell>;
        }
      }
    } else {
      tableCell = <TableCell>&nbsp;</TableCell>;
    }

    return tableCell;
  };

  const populateDateArray = () => {
    let dateArray = [];

    for (let i = 0; i < 7; i++) {
      dateArray.push({ day: weekdays[i], date: selectedWeek[i] });
    }

    return dateArray;
  };

  return (
    <Stack direction="column" gap={0}>
      <HeaderControls
        selectedDate={selectedDate}
        onTodayClick={onTodayClick}
        onPreviousWeekClick={onPreviousWeekClick}
        onNextWeekClick={onNextWeekClick}
        onAddEventClick={onAddEventClick}
      />
      <Table stickyHeader sx={{ height: "100%", tableLayout: "fixed" }}>
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
                <Typography variant="caption">{formatTime(hour)}</Typography>
              </TableCell>
              {formatTableCell(0, hour, sundayEvents)}
              {formatTableCell(1, hour, mondayEvents)}
              {formatTableCell(2, hour, tuesdayEvents)}
              {formatTableCell(3, hour, wednesdayEvents)}
              {formatTableCell(4, hour, thursdayEvents)}
              {formatTableCell(5, hour, fridayEvents)}
              {formatTableCell(6, hour, saturdayEvents)}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Stack>
  );
};

export default TimelineCalendar;
