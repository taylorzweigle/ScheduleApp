//Taylor Zweigle, 2024
import React, { useState } from "react";

import Modal from "../modal/Modal";
import TextInput from "../textInput/TextInput";
import Typography from "../typography/Typography";

const EventCard = ({ title, startTime, endTime }) => {
  const [open, setOpen] = useState(false);

  const formatTime = (time) => `${time % 12 === 0 ? 12 : time % 12}${time >= 12 ? "pm" : "am"} `;

  const handleAction = () => {
    setOpen(false);
  };

  const handleSecondaryAction = () => {
    setOpen(false);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div
        className="h-full rounded-md border bg-slate-100 dark:bg-slate-500 hover:bg-slate-200 dark:hover:bg-slate-600 border-slate-500 p-2 cursor-pointer"
        onClick={() => setOpen(true)}
      >
        <Typography variant="body" color="textPrimary">
          {title}
        </Typography>
        <Typography variant="caption" color="textPrimary">
          {`${formatTime(startTime.getHours())} - ${formatTime(endTime.getHours())}`}
        </Typography>
      </div>
      <Modal
        open={open}
        title="Edit Event"
        action="Save"
        secondaryAction="Delete"
        onAction={handleAction}
        onSecondaryAction={handleSecondaryAction}
        onClose={handleClose}
      >
        <div className="flex flex-col gap-8">
          <TextInput label="Event" />
          <TextInput label="Tag" />
          <TextInput label="Date" />
          <div className="flex flex-row gap-8">
            <TextInput label="Start Time" />
            <TextInput label="End Time" />
          </div>
        </div>
      </Modal>
    </>
  );
};

export default EventCard;
