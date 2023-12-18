//Taylor Zweigle, 2023
import React from "react";

const ColumnHeader = ({ date, day, selected }) => {
  return (
    <th style={{ borderBottom: selected ? "2px solid #90caf9" : null }}>
      <div style={{ display: "flex", flexDirection: "row", alignItems: "flex-end", gap: "8px" }}>
        <h5 style={{ color: selected ? "#90caf9" : "#ffffff" }}>{date}</h5>
        <p style={{ color: selected ? "#90caf9" : "#ffffff" }}>{day.slice(0, 3)}</p>
      </div>
    </th>
  );
};

export default ColumnHeader;
