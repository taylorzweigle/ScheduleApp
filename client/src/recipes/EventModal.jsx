//Taylor Zweigle, 2024
import React from "react";

import Modal from "../components/modal/Modal";
import TextInput from "../components/textInput/TextInput";

const EventModal = ({ type, data, open, onAction, onSecondaryAction, onClose }) => {
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
        <TextInput label="Event" value={data ? data.event : ""} />
        <TextInput label="Tag" value={data ? data.tag : ""} />
        <TextInput label="Date" value={data ? data.date : ""} />
        <div className="flex flex-row gap-8">
          <TextInput label="Start Time" value={data ? data.startTime : ""} />
          <TextInput label="End Time" value={data ? data.endTime : ""} />
        </div>
      </div>
    </Modal>
  );
};

export default EventModal;
