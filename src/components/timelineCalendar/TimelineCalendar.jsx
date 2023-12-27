//Taylor Zweigle, 2023
import React, { useState, useEffect } from "react";

import CalendarHeaderDay from "./internal/CalendarHeaderDay";
import EventCard from "./internal/EventCard";
import HeaderControls from "./internal/HeaderControls";

import { events } from "../../db/_db";

const TimelineCalendar = ({ selectedDate, onTodayClick, onPreviousWeekClick, onNextWeekClick, onAddEventClick }) => {
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

  const formatTableCell = (day, hour, events) => {
    let tableCell = null;

    if (events.length > 0 && selectedWeek.length > 0) {
      for (let i = 0; i < events.length; i++) {
        if (
          events[i].startTime.getMonth() === selectedWeek[day].month &&
          events[i].startTime.getDate() === selectedWeek[day].date &&
          events[i].startTime.getFullYear() === selectedWeek[day].year &&
          hour === events[i].startTime.getHours()
        ) {
          tableCell = (
            <td
              className="h-full pl-1 pr-1 border-b border-slate-300 dark:border-slate-600"
              rowSpan={events[i].endTime.getHours() - events[i].startTime.getHours()}
            >
              <EventCard
                key={events[i].id}
                event={events[i].event}
                startTime={events[i].startTime}
                endTime={events[i].endTime}
              />
            </td>
          );
          break;
        } else if (
          events[i].startTime.getMonth() === selectedWeek[day].month &&
          events[i].startTime.getDate() === selectedWeek[day].date &&
          events[i].startTime.getFullYear() === selectedWeek[day].year &&
          hour > events[i].startTime.getHours() &&
          hour < events[i].endTime.getHours()
        ) {
          tableCell = null;
          break;
        } else {
          tableCell = <td className="h-16 border-b border-slate-300 dark:border-slate-600">&nbsp;</td>;
        }
      }
    } else {
      tableCell = <td className="h-16 border-b border-slate-300 dark:border-slate-600">&nbsp;</td>;
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
            <tr className="h-16">
              {populateDateArray().map((day) => (
                <CalendarHeaderDay key={day.day} date={day.date} day={day.day} selected={day.date === selectedDate.date} />
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              {weekdays.map((day) => (
                <td key={day} className="h-16 pr-4 border-b border-slate-300 dark:border-slate-600">
                  &nbsp;
                </td>
              ))}
            </tr>
            {hours.map((hour) => (
              <tr key={hour}>
                {formatTableCell(0, hour, sundayEvents)}
                {formatTableCell(1, hour, mondayEvents)}
                {formatTableCell(2, hour, tuesdayEvents)}
                {formatTableCell(3, hour, wednesdayEvents)}
                {formatTableCell(4, hour, thursdayEvents)}
                {formatTableCell(5, hour, fridayEvents)}
                {formatTableCell(6, hour, saturdayEvents)}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TimelineCalendar;
