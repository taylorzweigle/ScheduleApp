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
  const [date, setDate] = useState("");
  const [startHours, setStartHours] = useState("");
  const [startMinutes, setStartMinutes] = useState("");
  const [startPeriod, setStartPeriod] = useState("");
  const [endHours, setEndHours] = useState("");
  const [endMinutes, setEndMinutes] = useState("");
  const [endPeriod, setEndPeriod] = useState("");

  useEffect(() => {
    if (data) {
      setTitle(data.title);
      setTag(data.tag);
      setDate(
        `${months[new Date(data.startTime).getMonth()]} ${new Date(data.startTime).getDate()}, ${new Date(
          data.startTime
        ).getFullYear()}`
      );
      setStartHours(
        new Date(data.startTime).getHours() % 12 === 0 ? "12" : (new Date(data.startTime).getHours() % 12).toString()
      );
      setStartMinutes(new Date(data.startTime).getMinutes() === 0 ? "00" : "30");
      setStartPeriod(new Date(data.startTime).getHours() >= 12 ? "PM" : "AM");
      setEndHours(new Date(data.endTime).getHours() % 12 === 0 ? "12" : (new Date(data.endTime).getHours() % 12).toString());
      setEndMinutes(new Date(data.endTime).getMinutes() === 0 ? "00" : "30");
      setEndPeriod(new Date(data.endTime).getHours() >= 12 ? "PM" : "AM");
    }
  }, [data]);

  const handleOnSave = async (e) => {
    e.preventDefault();

    const newEvent = {
      title: title,
      tag: tag,
      date: date,
      startTime: new Date(
        `${date} ${
          startPeriod === "PM" ? (startHours !== "12" ? (parseInt(startHours) + 12).toString() : startHours) : startHours
        }:${startMinutes}:00`
      ),
      endTime: new Date(
        `${date} ${
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
      date: date,
      startTime: new Date(
        `${date} ${
          startPeriod === "PM" ? (startHours !== "12" ? (parseInt(startHours) + 12).toString() : startHours) : startHours
        }:${startMinutes}:00`
      ),
      endTime: new Date(
        `${date} ${
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
    setDate("");
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
          <TextInput label="Event" value={title} onChange={(e) => setTitle(e.target.value)} />
          <TextInput label="Tag" value={tag} onChange={(e) => setTag(e.target.value)} />
          <DateInput label="Date" value={date} onChange={(e) => setDate(e.target.value)} />
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
