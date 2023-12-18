//Taylor Zweigle, 2023
import React from "react";

const CalendarDay = ({ date, selected, onClick }) => {
  return (
    <td
      style={{
        border: "none",
        borderRadius: "100%",
        backgroundColor: selected ? "#90caf9" : null,
        textAlign: "center",
      }}
    >
      <div onClick={() => onClick(date)} style={{ cursor: "pointer" }}>
        <p style={{ color: selected ? "#000000" : "#ffffff" }}>{date}</p>
      </div>
    </td>
  );
};

export default CalendarDay;
