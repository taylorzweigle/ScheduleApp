//Taylor Zweigle, 2024
import React, { useState, useEffect, cloneElement } from "react";

import TableCell from "./internal/TableCell";
import TableHeaderCell from "./internal/TableHeaderCell";
import TableRow from "./internal/TableRow";

import Typography from "../../core/typography/Typography";

import EventModal from "../modals/EventModal";

const TimelineCalendar = ({ events, selectedDate, cardTemplate }) => {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState(null);
  const [eventsArray, setEventsArray] = useState([]);
  const [selectedWeek, setSelectedWeek] = useState([]);

  const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  const hours = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21];

  const formatTime = (time) => `${time % 12 === 0 ? 12 : time % 12}${time >= 12 ? "pm" : "am"} `;

  const handleEventClick = (event) => {
    setData({
      _id: event._id,
      title: event.title,
      tag: event.tag,
      date: event.startTime,
      startTime: event.startTime,
      endTime: event.endTime,
    });

    setOpen(true);
  };

  const handleAction = () => {
    setOpen(false);
  };

  const handleSecondaryAction = () => {
    setOpen(false);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const renderCardTemplate = (event) => {
    const clonedElement = cloneElement(cardTemplate, {
      key: event.id,
      title: event.title,
      tag: event.tag,
      startTime: new Date(event.startTime),
      endTime: new Date(event.endTime),
      onClick: () => handleEventClick(event),
    });

    return clonedElement;
  };

  useEffect(() => {
    let week = [];

    if (events) {
      for (let i = 0; i < 7; i++) {
        const filteredEvents = events.filter((event) => new Date(event.startTime).getDay() === i);

        week.push(filteredEvents);
      }

      setEventsArray(week);
    }
  }, [events]);

  useEffect(() => {
    let week = [];

    for (let i = 0; i < 7; i++) {
      let month = selectedDate.month;

      let date = selectedDate.date - selectedDate.weekday + i;

      let year = selectedDate.year;

      if (date < 1) {
        month = selectedDate.month === 0 ? 11 : selectedDate.month - 1;
        date = date + (32 - new Date(selectedDate.year, selectedDate.month - 1, 32).getDate());
        year = selectedDate.month === 0 ? selectedDate.year - 1 : selectedDate.year;
      } else if (date > 31) {
        month = (selectedDate.month + 1) % 12;
        date = date - (32 - new Date(selectedDate.year, selectedDate.month, 32).getDate());
        year = selectedDate.month === 11 ? selectedDate.year + 1 : selectedDate.year;
      }

      week.push({ month: month, date: date, year: year });
    }

    setSelectedWeek(week);
  }, [selectedDate]);

  const renderTableCell = (day, hour, events) => {
    let tableCell = null;

    const isEventInDay = (event, selectedDate) => {
      return (
        new Date(event.startTime).getMonth() === selectedDate.month &&
        new Date(event.startTime).getDate() === selectedDate.date &&
        new Date(event.startTime).getFullYear() === selectedDate.year
      );
    };

    const isCellSelected = (day) => (selectedWeek.length > 0 ? selectedWeek[day].date === selectedDate.date : false);

    const calculateRowSpan = (event) => new Date(event.endTime).getHours() - new Date(event.startTime).getHours();

    if (events.length > 0 && selectedWeek.length > 0) {
      for (let i = 0; i < events.length; i++) {
        if (isEventInDay(events[i], selectedWeek[day]) && hour === new Date(events[i].startTime).getHours()) {
          tableCell = (
            <TableCell selected={isCellSelected(day)} rowSpan={calculateRowSpan(events[i])}>
              {renderCardTemplate(events[i])}
            </TableCell>
          );
          break;
        } else if (
          isEventInDay(events[i], selectedWeek[day]) &&
          hour > new Date(events[i].startTime).getHours() &&
          hour < new Date(events[i].endTime).getHours()
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
    <>
      <div className="flex flex-row gap-0">
        <div className="flex flex-col w-24 pt-12 pb-4 pr-4 items-end">
          <div className="h-full">
            <Typography variant="body" color="textPrimary">
              All Day
            </Typography>
          </div>
          {hours.map((hour) => (
            <div key={hour} className="h-full">
              <Typography variant="body" color="textPrimary">
                {formatTime(hour)}
              </Typography>
            </div>
          ))}
        </div>
        <table className="h-full w-full table-fixed">
          <thead>
            <TableRow>
              {populateDateArray().map((day) => (
                <TableHeaderCell
                  key={day.day}
                  date={day.date}
                  day={day.day}
                  today={day.date === new Date().getDate()}
                  selected={day.date === selectedDate.date}
                />
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
                {eventsArray.length > 0 &&
                  eventsArray.map((dayArray) => (
                    <React.Fragment key={eventsArray.indexOf(dayArray)}>
                      {renderTableCell(eventsArray.indexOf(dayArray), hour, eventsArray[eventsArray.indexOf(dayArray)])}
                    </React.Fragment>
                  ))}
              </TableRow>
            ))}
          </tbody>
        </table>
      </div>
      <EventModal
        type="Edit"
        data={data}
        open={open}
        onAction={handleAction}
        onSecondaryAction={handleSecondaryAction}
        onClose={handleClose}
      />
    </>
  );
};

export default TimelineCalendar;
