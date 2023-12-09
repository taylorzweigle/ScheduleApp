//Taylor Zweigle, 2023
import React from "react";

import { Stack, Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material";

import ColumnHeader from "./internal/ColumnHeader";
import EventCard from "./internal/EventCard";
import HeaderControls from "./internal/HeaderControls";

import { days, events, hours } from "../data/tempData";

const TimelineCalendar = () => {
  return (
    <Stack direction="column" gap={0}>
      <HeaderControls />
      <Table stickyHeader sx={{ tableLayout: "fixed" }}>
        <TableHead>
          <TableRow>
            <TableCell sx={{ width: "80px" }}>&nbsp;</TableCell>
            {days.map((day) => (
              <TableCell key={day.date}>
                <ColumnHeader date={day.date} day={day.day} />
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell align="right">
              <Typography variant="caption">All Day</Typography>
            </TableCell>
            {days.map((day) => (
              <TableCell key={day.date}></TableCell>
            ))}
          </TableRow>
          {hours.map((hour) => (
            <TableRow key={hour}>
              <TableCell align="right">
                <Typography variant="caption">{`${hour}am`}</Typography>
              </TableCell>
              {days.map((day) => (
                <TableCell key={day.date} sx={{ padding: "0px" }}>
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