//Taylor Zweigle, 2024
import React, { useState, useEffect } from "react";

import * as Actions from "../../actions";

import { useEventsContext } from "../../hooks/useEventsContext";

import DateInput from "../../core/dateInput/DateInput";
import Modal from "../../core/modal/Modal";
import TextInput from "../../core/textInput/TextInput";
import TimeInput from "../../core/timeInput/TimeInput";

import { months } from "../monthCalendar/MonthCalendar";

import { getEvents, createEvent, deleteEvent, updateEvent } from "../../api/events";

const EventModal = ({ type, data, open, onAction, onSecondaryAction, onClose }) => {
  const { dispatch } = useEventsContext();

  const [title, setTitle] = useState("");
  const [tag, setTag] = useState("");
  const [month, setMonth] = useState("");
  const [date, setDate] = useState("");
  const [year, setYear] = useState("");
  const [startHours, setStartHours] = useState("");
  const [startMinutes, setStartMinutes] = useState("");
  const [startPeriod, setStartPeriod] = useState("");
  const [endHours, setEndHours] = useState("");
  const [endMinutes, setEndMinutes] = useState("");
  const [endPeriod, setEndPeriod] = useState("");

  useEffect(() => {
    if (data) {
      data.title && setTitle(data.title);
      data.tag && setTag(data.tag);
      data.date && setMonth(months[new Date(data.date).getMonth()]);
      data.date && setDate(new Date(data.date).getDate());
      data.date && setYear(new Date(data.date).getFullYear());
      data.startTime &&
        setStartHours(
          new Date(data.startTime).getHours() % 12 === 0 ? "12" : (new Date(data.startTime).getHours() % 12).toString()
        );
      data.startTime && setStartMinutes(new Date(data.startTime).getMinutes() === 0 ? "00" : "30");
      data.startTime && setStartPeriod(new Date(data.startTime).getHours() >= 12 ? "PM" : "AM");
      data.endTime &&
        setEndHours(new Date(data.endTime).getHours() % 12 === 0 ? "12" : (new Date(data.endTime).getHours() % 12).toString());
      data.endTime && setEndMinutes(new Date(data.endTime).getMinutes() === 0 ? "00" : "30");
      data.endTime && setEndPeriod(new Date(data.endTime).getHours() >= 12 ? "PM" : "AM");
    }
  }, [data]);

  const handleOnSave = async (e) => {
    e.preventDefault();

    const newEvent = {
      title: title,
      tag: tag,
      date: new Date(`${month} ${date}, ${year}`),
      startTime: new Date(
        `${`${month} ${date}, ${year}`} ${
          startPeriod === "PM" ? (startHours !== "12" ? (parseInt(startHours) + 12).toString() : startHours) : startHours
        }:${startMinutes}:00`
      ),
      endTime: new Date(
        `${`${month} ${date}, ${year}`} ${
          endPeriod === "PM" ? (endHours !== "12" ? (parseInt(endHours) + 12).toString() : endHours) : endHours
        }:${endMinutes}:00`
      ),
    };

    const json = await createEvent(newEvent);

    if (json.json) {
      dispatch({ type: Actions.CREATE_EVENT, payload: json.json });

      clearForm();

      onAction();
    }
  };

  const handleOnUpdate = async (e) => {
    e.preventDefault();

    const newEvent = {
      event: title,
      tag: tag,
      date: new Date(`${month} ${date}, ${year}`),
      startTime: new Date(
        `${`${month} ${date}, ${year}`} ${
          startPeriod === "PM" ? (startHours !== "12" ? (parseInt(startHours) + 12).toString() : startHours) : startHours
        }:${startMinutes}:00`
      ),
      endTime: new Date(
        `${`${month} ${date}, ${year}`} ${
          endPeriod === "PM" ? (endHours !== "12" ? (parseInt(endHours) + 12).toString() : endHours) : endHours
        }:${endMinutes}:00`
      ),
    };

    const json = await updateEvent(data, newEvent);

    if (json.json) {
      const events = await getEvents();

      if (events.json) {
        dispatch({ type: Actions.GET_EVENTS, payload: events.json });
      }

      clearForm();

      onAction();
    }
  };

  const handleOnDelete = async () => {
    const json = await deleteEvent(data);

    if (json.json) {
      dispatch({ type: Actions.DELETE_EVENT, payload: json.json });

      onSecondaryAction();
    }
  };

  const handleOnCancel = () => {
    clearForm();

    onClose();
  };

  const clearForm = () => {
    setTitle("");
    setTag("");
    setMonth("");
    setDate("");
    setYear("");
    setStartHours("");
    setStartMinutes("");
    setStartPeriod("");
    setEndHours("");
    setEndMinutes("");
    setEndPeriod("");
  };

  return (
    <Modal
      open={open}
      hasSecondary={type === "Edit" ? true : false}
      title={`${type} Event`}
      action="Save"
      secondaryAction="Delete"
      onAction={type === "Edit" ? handleOnUpdate : handleOnSave}
      onSecondaryAction={handleOnDelete}
      onClose={handleOnCancel}
    >
      <form onSubmit={type === "Edit" ? handleOnUpdate : handleOnSave}>
        <div className="flex flex-col gap-8">
          <TextInput label="Title" showLabel value={title} onChange={(e) => setTitle(e.target.value)} />
          <TextInput label="Tag" showLabel value={tag} onChange={(e) => setTag(e.target.value)} />
          <DateInput
            label="Date"
            month={month}
            date={date}
            year={year}
            onMonthChange={(e) => setMonth(e.target.value)}
            onDateChange={(e) => setDate(e.target.value)}
            onYearChange={(e) => setYear(e.target.value)}
          />
          <TimeInput
            label="Start Time"
            hour={startHours}
            minutes={startMinutes}
            period={startPeriod}
            onHourChange={(e) => setStartHours(e.target.value)}
            onMinutesChange={(e) => setStartMinutes(e.target.value)}
            onPeriodChange={(e) => setStartPeriod(e.target.value)}
          />
          <TimeInput
            label="End Time"
            hour={endHours}
            minutes={endMinutes}
            period={endPeriod}
            onHourChange={(e) => setEndHours(e.target.value)}
            onMinutesChange={(e) => setEndMinutes(e.target.value)}
            onPeriodChange={(e) => setEndPeriod(e.target.value)}
          />
        </div>
      </form>
    </Modal>
  );
};

export default EventModal;
