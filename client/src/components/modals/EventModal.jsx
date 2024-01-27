//Taylor Zweigle, 2024
import React, { useState } from "react";

import Modal from "../../core/modal/Modal";
import TextInput from "../../core/textInput/TextInput";

const EventModal = ({ type, data, open, onAction, onSecondaryAction, onClose }) => {
  const [title, setTitle] = useState("");
  const [tag, setTag] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  return (
    <Modal
      open={open}
      hasSecondary={type === "Edit" ? true : false}
      title={`${type} Event`}
      action="Save"
      secondaryAction="Delete"
      onAction={onAction}
      onSecondaryAction={onSecondaryAction}
      onClose={onClose}
    >
      <div className="flex flex-col gap-8">
        <TextInput label="Event" value={title} onChange={(e) => setTitle(e.target.value)} />
        <TextInput label="Tag" value={tag} onChange={(e) => setTag(e.target.value)} />
        <TextInput label="Date" value={startTime} onChange={(e) => setStartTime(e.target.value)} />
        <div className="flex flex-row gap-8">
          <TextInput label="Start Time" value={startTime} onChange={(e) => setStartTime(e.target.value)} />
          <TextInput label="End Time" value={endTime} onChange={(e) => setEndTime(e.target.value)} />
        </div>
      </div>
    </Modal>
  );
};

export default EventModal;
