//Taylor Zweigle, 2023
import React from "react";

const TableCell = ({ children, rowSpan, selected, hover, onClick }) => {
  return (
    <td
      className={`h-full border-b border-slate-300 dark:border-slate-600 ${selected && "bg-slate-100 dark:bg-slate-800"} ${
        hover && "hover:border-2 hover:border-sky-500 hover:dark:border-sky-400"
      }`}
      rowSpan={rowSpan}
      onClick={onClick}
    >
      {children}
    </td>
  );
};

export default TableCell;
