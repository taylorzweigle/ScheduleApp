//Taylor Zweigle, 2024
import React from "react";

import SelectInput from "../selectInput/SelectInput";
import TextInput from "../textInput/TextInput";
import Typography from "../typography/Typography";

const TimeInput = ({ label, hour, minutes, period, onHourChange, onMinutesChange, onPeriodChange }) => {
  return (
    <div className="flex flex-col gap-2">
      <Typography variant="body" color="textPrimary">
        {label}
      </Typography>
      <div className="flex flex-row items-center gap-4">
        <TextInput label="hour" value={hour} onChange={onHourChange} />
        <span>:</span>
        <TextInput label="minutes" value={minutes} onChange={onMinutesChange} />
        <SelectInput label="period" value={period} items={["", "AM", "PM"]} onChange={onPeriodChange} />
      </div>
    </div>
  );
};

export default TimeInput;
