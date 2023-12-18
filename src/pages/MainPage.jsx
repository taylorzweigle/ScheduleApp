//Taylor Zweigle, 2023
import React, { useState } from "react";

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
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div
        style={{
          width: "384px",
          height: "100vh",
          borderRight: "1px",
          borderRightStyle: "solid",
          borderRightColor: "grey.700",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "16px",
            }}
          >
            <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "16px" }}>
              <div>TZ</div>
              <p>Taylor Zweigle</p>
            </div>
            <ToggleThemeButton />
          </div>
          <div style={{ height: "1px", backgroundColor: "grey.700" }}>&nbsp;</div>
          <div style={{ padding: "16px" }}>
            <MonthCalendar
              selectedDate={selectedDate}
              onPreviousMonthClick={handlePreviousMonthClick}
              onNextMonthClick={handleNextMonthClick}
              onCalendarDayClick={handleCalendarDayClick}
            />
          </div>
          <div style={{ height: "1px", backgroundColor: "grey.700" }}>&nbsp;</div>{" "}
        </div>
      </div>
      <div style={{ flex: 1 }}>
        <TimelineCalendar
          selectedDate={selectedDate}
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
