//Taylor Zweigle, 2023
import React from "react";

const TableCell = ({ rowSpan, selected, children }) => {
  return (
    <td
      className={`h-full border-b border-slate-300 dark:border-slate-600 ${selected && "bg-slate-100 dark:bg-slate-800"}`}
      rowSpan={rowSpan}
    >
      {children}
    </td>
  );
};

export default TableCell;
