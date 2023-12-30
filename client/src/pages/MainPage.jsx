//Taylor Zweigle, 2023
import React, { useState } from "react";

import Avatar from "../components/avatar/Avatar";
import EventCard from "../components/cards/EventCard";
import MonthCalendar from "../components/monthCalendar/MonthCalendar";
import TimelineCalendar from "../components/timelineCalendar/TimelineCalendar";
import ToggleThemeButton from "../components/buttons/ToggleThemeButton";

const MainPage = () => {
  const today = new Date(2023, 11, 11);

  const [selectedDate, setSelectedDate] = useState({
    month: today.getMonth(),
    date: today.getDate(),
    year: today.getFullYear(),
    weekday: today.getDay(),
  });

  const getMonthLength = (year, month) => 32 - new Date(year, month, 32).getDate();

  const handleTodayClick = () => {
    let month = today.getMonth();
    let date = today.getDate();
    let year = today.getFullYear();
    let weekday = today.getDay();

    setSelectedDate({ month: month, date: date, year: year, weekday: weekday });
  };

  const handlePreviousWeekClick = () => {
    let month = selectedDate.date < 8 ? (selectedDate.month - 1 === -1 ? 11 : selectedDate.month - 1) : selectedDate.month;

    let date =
      selectedDate.date < 8
        ? getMonthLength(selectedDate.year, selectedDate.month - 1) + selectedDate.date - 7
        : selectedDate.date - 7;

    let year = selectedDate.date < 8 && selectedDate.month === 0 ? selectedDate.year - 1 : selectedDate.year;

    setSelectedDate({
      month: month,
      date: date,
      year: year,
      weekday: new Date(year, month, date).getDay(),
    });
  };

  const handleNextWeekClick = () => {
    let month =
      selectedDate.date > getMonthLength(selectedDate.year, selectedDate.month) - 7
        ? selectedDate.month + 1 === 12
          ? 0
          : selectedDate.month + 1
        : selectedDate.month;

    let date =
      selectedDate.date > getMonthLength(selectedDate.year, selectedDate.month) - 7
        ? 7 - (getMonthLength(selectedDate.year, selectedDate.month) - selectedDate.date)
        : selectedDate.date + 7;

    let year =
      selectedDate.date > getMonthLength(selectedDate.year, selectedDate.month) - 7 && selectedDate.month === 11
        ? selectedDate.year + 1
        : selectedDate.year;

    setSelectedDate({
      month: month,
      date: date,
      year: year,
      weekday: new Date(year, month, date).getDay(),
    });
  };

  const handlePreviousMonthClick = () => {
    let month = selectedDate.month === 0 ? 11 : selectedDate.month - 1;
    let date = 1;
    let year = selectedDate.month === 0 ? selectedDate.year - 1 : selectedDate.year;

    setSelectedDate({
      month: month,
      date: date,
      year: year,
      weekday: new Date(year, month, date).getDay(),
    });
  };

  const handleNextMonthClick = () => {
    let month = (selectedDate.month + 1) % 12;
    let date = 1;
    let year = selectedDate.month === 11 ? selectedDate.year + 1 : selectedDate.year;

    setSelectedDate({
      month: month,
      date: date,
      year: year,
      weekday: new Date(year, month, date).getDay(),
    });
  };

  const handleCalendarDayClick = (date) => {
    let month = selectedDate.month;
    let year = selectedDate.year;

    setSelectedDate({
      month: month,
      date: date,
      year: year,
      weekday: new Date(year, month, date).getDay(),
    });
  };

  const handleAddEventClick = () => {
    console.log("ADD EVENT");
  };

  return (
    <div className="flex flex-row">
      <div className="w-80 h-screen">&nbsp;</div>
      <div className="fixed w-80 h-screen bg-white dark:bg-slate-900 border-r border-slate-300 dark:border-slate-600">
        <div className="flex flex-col">
          <div className="flex flex-row justify-between items-center p-4">
            <div className="flex flex-row justify-start items-center gap-2">
              <Avatar>TZ</Avatar>
              <p className="text-slate-950 dark:text-white">Taylor Zweigle</p>
            </div>
            <ToggleThemeButton />
          </div>
          <div className="p-4">
            <MonthCalendar
              selectedDate={selectedDate}
              onPreviousMonthClick={handlePreviousMonthClick}
              onNextMonthClick={handleNextMonthClick}
              onCalendarDayClick={handleCalendarDayClick}
            />
          </div>
        </div>
      </div>
      <div className="flex-1 bg-white dark:bg-slate-900">
        <TimelineCalendar
          selectedDate={selectedDate}
          cardTemplate={<EventCard />}
          onTodayClick={handleTodayClick}
          onPreviousWeekClick={handlePreviousWeekClick}
          onNextWeekClick={handleNextWeekClick}
          onAddEventClick={handleAddEventClick}
        />
      </div>
    </div>
  );
};

export default MainPage;
