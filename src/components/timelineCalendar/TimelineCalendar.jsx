//Taylor Zweigle, 2023
import React, { useState, useEffect, cloneElement } from "react";

import HeaderControls from "./internal/HeaderControls";
import TableCell from "./internal/TableCell";
import TableHeaderCell from "./internal/TableHeaderCell";
import TableRow from "./internal/TableRow";

import { events } from "../../_db/db";

const TimelineCalendar = ({
  selectedDate,
  cardTemplate,
  onTodayClick,
  onPreviousWeekClick,
  onNextWeekClick,
  onAddEventClick,
}) => {
  const [selectedWeek, setSelectedWeek] = useState([]);

  const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  const hours = [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21];

  const sundayEvents = events.filter((event) => event.startTime.getDay() === 0);
  const mondayEvents = events.filter((event) => event.startTime.getDay() === 1);
  const tuesdayEvents = events.filter((event) => event.startTime.getDay() === 2);
  const wednesdayEvents = events.filter((event) => event.startTime.getDay() === 3);
  const thursdayEvents = events.filter((event) => event.startTime.getDay() === 4);
  const fridayEvents = events.filter((event) => event.startTime.getDay() === 5);
  const saturdayEvents = events.filter((event) => event.startTime.getDay() === 6);

  const formatTime = (time) => `${time % 12 === 0 ? 12 : time % 12}${time >= 12 ? "pm" : "am"} `;

  const renderCardTemplate = (event) => {
    const clonedElement = cloneElement(cardTemplate, {
      key: event.id,
      event: event.event,
      startTime: event.startTime,
      endTime: event.endTime,
    });

    return clonedElement;
  };

  useEffect(() => {
    let week = [];

    for (let i = 0; i < 7; i++) {
      let month = selectedDate.month;

      let date = selectedDate.date - selectedDate.weekday + i;

      let year = selectedDate.year;

      if (date < 1) {
        month = selectedDate.month - 1;
        date = date + (32 - new Date(selectedDate.year, selectedDate.month - 1, 32).getDate());
        year = selectedDate.month < 0 ? selectedDate.year - 1 : selectedDate.year;
      } else if (date > 31) {
        month = selectedDate.month + 1;
        date = date - (32 - new Date(selectedDate.year, selectedDate.month, 32).getDate());
        year = selectedDate.month > 11 ? selectedDate.year + 1 : selectedDate.year;
      }

      week.push({ month: month, date: date, year: year });
    }

    setSelectedWeek(week);
  }, [selectedDate]);

  const renderTableCell = (day, hour, events) => {
    let tableCell = null;

    const isEventInDay = (event, selectedDate) => {
      return (
        event.startTime.getMonth() === selectedDate.month &&
        event.startTime.getDate() === selectedDate.date &&
        event.startTime.getFullYear() === selectedDate.year
      );
    };

    const isCellSelected = (day) => (selectedWeek.length > 0 ? selectedWeek[day].date === selectedDate.date : false);

    const calculateRowSpan = (event) => event.endTime.getHours() - event.startTime.getHours();

    if (events.length > 0 && selectedWeek.length > 0) {
      for (let i = 0; i < events.length; i++) {
        if (isEventInDay(events[i], selectedWeek[day]) && hour === events[i].startTime.getHours()) {
          tableCell = (
            <TableCell selected={isCellSelected(day)} rowSpan={calculateRowSpan(events[i])}>
              {renderCardTemplate(events[i])}
            </TableCell>
          );
          break;
        } else if (
          isEventInDay(events[i], selectedWeek[day]) &&
          hour > events[i].startTime.getHours() &&
          hour < events[i].endTime.getHours()
        ) {
          tableCell = null;
          break;
        } else {
          tableCell = <TableCell selected={isCellSelected(day)}>&nbsp;</TableCell>;
        }
      }
    } else {
      tableCell = <TableCell selected={isCellSelected(day)}>&nbsp;</TableCell>;
    }

    return tableCell;
  };

  const populateDateArray = () => {
    let dateArray = [];

    if (selectedWeek.length > 0) {
      for (let i = 0; i < 7; i++) {
        dateArray.push({ day: weekdays[i], date: selectedWeek[i].date });
      }
    }

    return dateArray;
  };

  return (
    <div className="flex flex-col g-0">
      <HeaderControls
        selectedDate={selectedDate}
        onTodayClick={onTodayClick}
        onPreviousWeekClick={onPreviousWeekClick}
        onNextWeekClick={onNextWeekClick}
        onAddEventClick={onAddEventClick}
      />
      <div className="flex flex-row gap-0">
        <div className="flex flex-col w-24 pt-12 pb-4 pr-4 items-end">
          <div className="h-full text-slate-950 dark:text-white">All Day</div>
          {hours.map((hour) => (
            <div key={hour} className="h-full text-slate-950 dark:text-white">
              {formatTime(hour)}
            </div>
          ))}
        </div>
        <table className="h-full w-full table-fixed">
          <thead>
            <TableRow>
              {populateDateArray().map((day) => (
                <TableHeaderCell key={day.day} date={day.date} day={day.day} selected={day.date === selectedDate.date} />
              ))}
            </TableRow>
          </thead>
          <tbody>
            <TableRow>
              {weekdays.map((day) => (
                <TableCell
                  selected={selectedWeek.length > 0 ? selectedWeek[weekdays.indexOf(day)].date === selectedDate.date : false}
                  key={day}
                >
                  &nbsp;
                </TableCell>
              ))}
            </TableRow>
            {hours.map((hour) => (
              <TableRow key={hour}>
                {renderTableCell(0, hour, sundayEvents)}
                {renderTableCell(1, hour, mondayEvents)}
                {renderTableCell(2, hour, tuesdayEvents)}
                {renderTableCell(3, hour, wednesdayEvents)}
                {renderTableCell(4, hour, thursdayEvents)}
                {renderTableCell(5, hour, fridayEvents)}
                {renderTableCell(6, hour, saturdayEvents)}
              </TableRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TimelineCalendar;
